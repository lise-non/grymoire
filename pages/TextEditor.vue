<!-- TextEditor.vue -->
<template>
  <div class="editor-container">
    <!-- Toolbar -->
    <div class="editor-toolbar bg-white border-b p-2 flex gap-2">
      <button
        @click="editor?.chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor?.isActive('bold') }"
        class="p-2 rounded hover:bg-gray-100"
      >
        <strong>B</strong>
      </button>
      <button
        @click="editor?.chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor?.isActive('italic') }"
        class="p-2 rounded hover:bg-gray-100"
      >
        <em>I</em>
      </button>
      <div class="h-6 w-px bg-gray-300 mx-2"></div>
      <button
        @click="editor?.chain().focus().setParagraph().run()"
        :class="{ 'is-active': editor?.isActive('paragraph') }"
        class="p-2 rounded hover:bg-gray-100"
      >
        P
      </button>
      <button
        @click="editor?.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{ 'is-active': editor?.isActive('heading', { level: 1 }) }"
        class="p-2 rounded hover:bg-gray-100"
      >
        H1
      </button>
      <button
        @click="editor?.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{ 'is-active': editor?.isActive('heading', { level: 2 }) }"
        class="p-2 rounded hover:bg-gray-100"
      >
        H2
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
import { watch, defineExpose, onBeforeUnmount } from "vue";

const props = defineProps({
  initialContent: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:content"]);

const editor = useEditor({
  extensions: [
    StarterKit,
    Highlight.configure({
      multicolor: true,
    }),
  ],
  content: props.initialContent,
  editable: true,
  onUpdate: ({ editor }) => {
    emit("update:content", editor.getHTML());
  },
});

const highlight = (start, end) => {
  if (!editor.value) return;

  const doc = editor.value.state.doc;
  const originalText = doc.textBetween(parseInt(start), parseInt(end) + 1);

  // Find the first non-whitespace character
  let startOffset = 0;
  for (let i = 0; i < originalText.length; i++) {
    if (originalText[i].trim() !== "") {
      startOffset = i;
      break;
    }
  }

  // Find the last non-whitespace character
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

  editor.value.commands.setTextSelection({
    from: adjustedStart,
    to: adjustedEnd,
  });
  editor.value.commands.setHighlight({ color: "#fef08a" });
};

const clearHighlight = () => {
  if (!editor.value) return;
  editor.value.commands.unsetHighlight();
};

watch(
  () => props.initialContent,
  (newContent) => {
    if (editor.value && newContent !== editor.value.getHTML()) {
      editor.value.commands.setContent(newContent);
    }
  }
);

const getContent = () => editor.value?.getHTML() || "";

onBeforeUnmount(() => {
  editor.value?.destroy();
});

defineExpose({
  highlight,
  clearHighlight,
  getContent,
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
  background-color: #fef08a;
  transition: background-color 0.2s ease;
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
