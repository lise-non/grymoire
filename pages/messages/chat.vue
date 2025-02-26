<!-- components/ChatBox.vue -->
<template>
  <div class="chat-container bg-white shadow-lg rounded-lg">
    <!-- Chat Header -->
    <div class="chat-header p-4 border-b">
      <h2 class="font-bold text-lg">Chat</h2>
    </div>

    <!-- Chat Messages -->
    <div
      class="chat-messages p-4 space-y-4 h-96 overflow-y-auto"
      ref="messageContainer"
    >
      <div
        v-for="message in messages"
        :key="message.id"
        :class="[
          'max-w-[80%] rounded-lg p-3',
          message.sender === currentUser
            ? 'ml-auto bg-[#0E7265] text-white'
            : 'bg-gray-100 text-gray-800',
        ]"
      >
        <div class="font-semibold text-sm mb-1">{{ message.sender }}</div>
        <div>{{ message.content }}</div>
        <div class="text-xs opacity-70 mt-1">
          {{ formatTime(message.timestamp) }}
        </div>
      </div>
    </div>

    <!-- Chat Input -->
    <div class="chat-input p-4 border-t">
      <form @submit.prevent="sendMessage" class="flex gap-2">
        <input
          v-model="newMessage"
          type="text"
          placeholder="Type your message..."
          class="flex-1 p-2 border rounded-lg focus:outline-none focus:border-[#0E7265]"
        />
        <button
          type="submit"
          class="bg-[#0E7265] text-white px-4 py-2 rounded-lg hover:bg-[#0b5b50] transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, watchEffect } from "vue";
import { useNuxtApp } from "#app";

const { $supabase } = useNuxtApp();

const messages = ref([]);
const newMessage = ref("");
const messageContainer = ref(null);
const currentUser = "User"; // Replace with actual user info

// Format timestamp
const formatTime = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

// Scroll to bottom of messages
const scrollToBottom = async () => {
  await nextTick();
  if (messageContainer.value) {
    messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
  }
};

// Send message
const sendMessage = async () => {
  if (!newMessage.value.trim()) return;

  try {
    const { error } = await $supabase.from("messages").insert({
      content: newMessage.value,
      sender: currentUser,
      timestamp: new Date().toISOString(),
      manuscript_id: 1, // Replace with actual manuscript ID
    });

    if (error) throw error;

    newMessage.value = "";
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

// Load messages
const loadMessages = async () => {
  try {
    const { data, error } = await $supabase
      .from("DirectMessage")
      .select("*")
      .eq("manuscript_id", 1) // Replace with actual manuscript ID
      .order("timestamp", { ascending: true });

    if (error) throw error;

    messages.value = data;
    await scrollToBottom();
  } catch (error) {
    console.error("Error loading messages:", error);
  }
};

// Subscribe to new messages
const subscribeToMessages = () => {
  const subscription = $supabase
    .channel("DirectMessage")
    .on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "messages",
      },
      async (payload) => {
        messages.value.push(payload.new);
        await scrollToBottom();
      }
    )
    .subscribe();

  return () => {
    subscription.unsubscribe();
  };
};

onMounted(() => {
  loadMessages();
  const unsubscribe = subscribeToMessages();

  // Cleanup subscription on component unmount
  return () => {
    unsubscribe();
  };
});
</script>

<style scoped>
.chat-container {
  height: 600px;
  display: flex;
  flex-direction: column;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
}

/* Custom scrollbar */
.chat-messages::-webkit-scrollbar {
  width: 6px;
}

.chat-messages::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.chat-messages::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 3px;
}

.chat-messages::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
