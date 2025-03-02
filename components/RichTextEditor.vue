<template>
  <div class="rich-text-editor">
    <editor-content :editor="editor" class="prose max-w-none" />
  </div>
</template>

<script setup>
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import {
  watch,
  defineProps,
  defineEmits,
  defineExpose,
  onBeforeUnmount,
} from "vue";

const props = defineProps({
  initialContent: {
    type: String,
    default: "<p>Commencez à écrire ici...</p>",
  },
});

const emit = defineEmits(["update:content", "textReplaced"]);

const editor = useEditor({
  extensions: [
    StarterKit,
    Highlight.configure({
      multicolor: true,
      HTMLAttributes: {
        class: "highlight",
      },
    }),
    Underline,
    TextAlign.configure({
      types: ["paragraph", "heading"],
    }),
  ],
  content: props.initialContent,
  editable: true,
  onUpdate: ({ editor }) => {
    emit("update:content", editor.getHTML());
  },
});

// Watch for changes in initialContent prop
watch(
  () => props.initialContent,
  (newContent) => {
    // Only update if editor exists and content is different
    if (editor.value && newContent !== editor.value.getHTML()) {
      editor.value.commands.setContent(newContent, false);
    }
  }
);

// Highlight function to highlight text with a specific type/color
const highlight = (start, end, type) => {
  if (!editor.value) return;

  const doc = editor.value.state.doc;
  const originalText = doc.textBetween(parseInt(start), parseInt(end) + 1);

  let startOffset = 0;
  for (let i = 0; i < originalText.length; i++) {
    if (originalText[i].trim() !== "") {
      startOffset = i;
      break;
    }
  }

  let endOffset = originalText.length - 1;
  for (let i = originalText.length - 1; i >= 0; i--) {
    if (originalText[i].trim() !== "") {
      endOffset = i + 1;
      break;
    }
  }

  const adjustedStart = Math.max(0, parseInt(start) + startOffset + 1);
  const adjustedEnd = Math.min(
    doc.content.size,
    parseInt(start) + endOffset + 1
  );

  const highlightColor = getTypeColor(type);

  editor.value.commands.setTextSelection({
    from: adjustedStart,
    to: adjustedEnd,
  });

  // Remove existing highlight first
  editor.value.commands.unsetHighlight();

  // Apply new highlight with custom color
  editor.value.commands.setHighlight({ color: highlightColor });
};

// Get color based on highlight type
const getTypeColor = (type) => {
  switch (type) {
    case "Orthographe":
      return "#FDC4CB";
    case "Scenario":
      return "#FFE484";
    case "Coherence":
      return "#F8B67A";
    case "Commentaire":
      return "#0E7265";
    default:
      return "#fef08a";
  }
};

// Clear all highlights
const clearHighlight = () => {
  if (!editor.value) return;
  editor.value.commands.unsetHighlight();
};

// Replace text at specific positions
const replaceText = (start, end, newText) => {
  if (!editor.value) return;

  const doc = editor.value.state.doc;
  const adjustedStart = Math.max(0, parseInt(start) + 1);
  const adjustedEnd = Math.min(doc.content.size, parseInt(end) + 1);

  // Calculate length difference
  const oldLength = adjustedEnd - adjustedStart;
  const newLength = newText.length;
  const difference = newLength - oldLength;

  editor.value
    .chain()
    .focus()
    .deleteRange({ from: adjustedStart, to: adjustedEnd })
    .insertContent(newText)
    .run();

  // Emit the change information
  emit("textReplaced", {
    start: adjustedStart,
    end: adjustedEnd,
    difference,
  });
};

// Get current content
const getContent = () => editor.value?.getHTML() || "";

// Clean up editor on unmount
onBeforeUnmount(() => {
  editor.value?.destroy();
});

// Expose methods for parent component
defineExpose({
  editor,
  highlight,
  clearHighlight,
  getContent,
  replaceText,
});
</script>

<style>
.rich-text-editor .ProseMirror {
  min-height: 300px;
  outline: none;
}

.rich-text-editor .ProseMirror p {
  margin: 1em 0;
  line-height: 1.6;
}

.rich-text-editor .ProseMirror [data-highlight] {
  transition: background-color 0.2s ease;
}

/* Highlight color styles */
.rich-text-editor
  .ProseMirror
  [data-highlight][style*="background-color: #FDC4CB"] {
  background-color: #fdc4cb !important;
}

.rich-text-editor
  .ProseMirror
  [data-highlight][style*="background-color: #FFE484"] {
  background-color: #ffe484 !important;
}

.rich-text-editor
  .ProseMirror
  [data-highlight][style*="background-color: #F8B67A"] {
  background-color: #f8b67a !important;
}

.rich-text-editor
  .ProseMirror
  [data-highlight][style*="background-color: #0E7265"] {
  background-color: #0e7265 !important;
  color: white;
}

.rich-text-editor .ProseMirror:focus {
  outline: none;
}

.rich-text-editor .ProseMirror h1 {
  font-size: 2em;
  font-weight: bold;
  margin-top: 1em;
  margin-bottom: 0.5em;
}

.rich-text-editor .ProseMirror h2 {
  font-size: 1.5em;
  font-weight: bold;
  margin-top: 1em;
  margin-bottom: 0.5em;
}
</style>
