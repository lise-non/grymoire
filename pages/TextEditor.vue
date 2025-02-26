<template>
  <div class="editor-container">
    <!-- Toolbar -->
    <div class="editor-toolbar bg-white border-b p-2 flex gap-2 items-center">
      <!-- History -->
      <button
        @click="editor?.chain().focus().undo().run()"
        class="p-2 rounded hover:bg-gray-100"
        title="Undo"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M3 7v6h6" />
          <path d="M21 17a9 9 0 00-9-9 9 9 0 00-6 2.3L3 13" />
        </svg>
      </button>
      <button
        @click="editor?.chain().focus().redo().run()"
        class="p-2 rounded hover:bg-gray-100"
        title="Redo"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 7v6h-6" />
          <path d="M3 17a9 9 0 019-9 9 9 0 016 2.3l3 2.7" />
        </svg>
      </button>

      <div class="h-6 w-px bg-gray-300 mx-2"></div>

      <!-- Text formatting -->
      <button
        @click="editor?.chain().focus().toggleBold().run()"
        :class="{ 'bg-gray-200': editor?.isActive('bold') }"
        class="p-2 rounded hover:bg-gray-100"
        title="Bold"
      >
        <strong>B</strong>
      </button>
      <button
        @click="editor?.chain().focus().toggleItalic().run()"
        :class="{ 'bg-gray-200': editor?.isActive('italic') }"
        class="p-2 rounded hover:bg-gray-100"
        title="Italic"
      >
        <em>I</em>
      </button>
      <button
        @click="editor?.chain().focus().toggleUnderline().run()"
        :class="{ 'bg-gray-200': editor?.isActive('underline') }"
        class="p-2 rounded hover:bg-gray-100"
        title="Underline"
      >
        <u>U</u>
      </button>
      <button
        @click="editor?.chain().focus().toggleStrike().run()"
        :class="{ 'bg-gray-200': editor?.isActive('strike') }"
        class="p-2 rounded hover:bg-gray-100"
        title="Strike"
      >
        <s>S</s>
      </button>

      <div class="h-6 w-px bg-gray-300 mx-2"></div>

      <!-- Alignment -->
      <button
        @click="editor?.chain().focus().setTextAlign('left').run()"
        :class="{ 'bg-gray-200': editor?.isActive({ textAlign: 'left' }) }"
        class="p-2 rounded hover:bg-gray-100"
        title="Align left"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="21" y1="6" x2="3" y2="6" />
          <line x1="15" y1="12" x2="3" y2="12" />
          <line x1="17" y1="18" x2="3" y2="18" />
        </svg>
      </button>
      <button
        @click="editor?.chain().focus().setTextAlign('center').run()"
        :class="{ 'bg-gray-200': editor?.isActive({ textAlign: 'center' }) }"
        class="p-2 rounded hover:bg-gray-100"
        title="Align center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="21" y1="6" x2="3" y2="6" />
          <line x1="18" y1="12" x2="6" y2="12" />
          <line x1="21" y1="18" x2="3" y2="18" />
        </svg>
      </button>
      <button
        @click="editor?.chain().focus().setTextAlign('right').run()"
        :class="{ 'bg-gray-200': editor?.isActive({ textAlign: 'right' }) }"
        class="p-2 rounded hover:bg-gray-100"
        title="Align right"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="21" y1="6" x2="3" y2="6" />
          <line x1="21" y1="12" x2="9" y2="12" />
          <line x1="21" y1="18" x2="3" y2="18" />
        </svg>
      </button>
      <button
        @click="editor?.chain().focus().setTextAlign('justify').run()"
        :class="{ 'bg-gray-200': editor?.isActive({ textAlign: 'justify' }) }"
        class="p-2 rounded hover:bg-gray-100"
        title="Justify"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="21" y1="6" x2="3" y2="6" />
          <line x1="21" y1="12" x2="3" y2="12" />
          <line x1="21" y1="18" x2="3" y2="18" />
        </svg>
      </button>

      <div class="h-6 w-px bg-gray-300 mx-2"></div>

      <!-- Lists -->
      <button
        @click="editor?.chain().focus().toggleBulletList().run()"
        :class="{ 'bg-gray-200': editor?.isActive('bulletList') }"
        class="p-2 rounded hover:bg-gray-100"
        title="Bullet list"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="8" y1="6" x2="21" y2="6" />
          <line x1="8" y1="12" x2="21" y2="12" />
          <line x1="8" y1="18" x2="21" y2="18" />
          <line x1="3" y1="6" x2="3.01" y2="6" />
          <line x1="3" y1="12" x2="3.01" y2="12" />
          <line x1="3" y1="18" x2="3.01" y2="18" />
        </svg>
      </button>

      <button
        @click="editor?.chain().focus().toggleOrderedList().run()"
        :class="{ 'bg-gray-200': editor?.isActive('orderedList') }"
        class="p-2 rounded hover:bg-gray-100"
        title="Numbered list"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="10" y1="6" x2="21" y2="6" />
          <line x1="10" y1="12" x2="21" y2="12" />
          <line x1="10" y1="18" x2="21" y2="18" />
          <path d="M4 6h1v4" />
          <path d="M4 10h2" />
          <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
        </svg>
      </button>
    </div>

    <!-- Editor Content -->
    <editor-content :editor="editor" class="prose max-w-none" />
  </div>
</template>
<script setup>
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { watch, defineExpose, onBeforeUnmount } from "vue";

const props = defineProps({
  initialContent: {
    type: String,
    required: true,
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

// Update the highlight function
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
// Add the getTypeColor function
const getTypeColor = (type) => {
  console.log(type);
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

const clearHighlight = () => {
  if (!editor.value) return;
  editor.value.commands.unsetHighlight();
};

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

const getContent = () => editor.value?.getHTML() || "";

onBeforeUnmount(() => {
  editor.value?.destroy();
});

defineExpose({
  highlight,
  clearHighlight,
  getContent,
  replaceText,
});
</script>

<style>
.editor-container {
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  overflow: hidden;
}

.editor-toolbar button.is-active {
  background-color: #e2e8f0;
}

.ProseMirror {
  min-height: 300px;
  padding: 1rem;
  outline: none;
}

.ProseMirror p {
  margin: 1em 0;
  line-height: 1.6;
}

.ProseMirror [data-highlight] {
  transition: background-color 0.2s ease;
}

/* Add specific styles for each type */
.ProseMirror [data-highlight][style*="background-color: #FDC4CB"] {
  background-color: #fdc4cb !important;
}

.ProseMirror [data-highlight][style*="background-color: #FFE484"] {
  background-color: #ffe484 !important;
}

.ProseMirror [data-highlight][style*="background-color: #F8B67A"] {
  background-color: #f8b67a !important;
}

.ProseMirror [data-highlight][style*="background-color: #0E7265"] {
  background-color: #0e7265 !important;
  color: white;
}

.ProseMirror:focus {
  outline: none;
}

.ProseMirror h1 {
  font-size: 2em;
  font-weight: bold;
  margin-top: 1em;
  margin-bottom: 0.5em;
}

.ProseMirror h2 {
  font-size: 1.5em;
  font-weight: bold;
  margin-top: 1em;
  margin-bottom: 0.5em;
}
</style>
