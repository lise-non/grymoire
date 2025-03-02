<!-- components/ChatBox.vue -->
<template>
  <div
    class="bg-white rounded-lg shadow-sm w-7xl flex flex-col h-screen"
    :class="[
      props.isSidebarOpen ? 'ml-64' : 'ml-16',
      props.isNotificationSidebarOpen ? 'mr-72' : 'mr-16',
    ]"
  >
    <!-- Project header -->
    <div class="flex items-center justify-between p-8 border-b">
      <div class="flex items-baseline">
        <h1 class="text-3xl font-bold text-indigo-900">Projet G</h1>
        <span class="ml-2 text-sm text-red-400">(2 en ligne)</span>
      </div>
      <button class="text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </button>
    </div>

    <!-- Tabs -->
    <div class="flex border-b">
      <button
        class="px-6 py-3 font-medium"
        :class="
          activeTab === 'discussion'
            ? 'border-b-2 border-teal-600 text-teal-600'
            : 'border-transparent text-gray-500'
        "
        @click="activeTab = 'discussion'"
      >
        Discussion
      </button>
      <button
        class="px-6 py-3 font-medium text-gray-500"
        :class="
          activeTab === 'annonces'
            ? 'border-b-2 border-teal-600 text-teal-600'
            : 'border-transparent text-gray-500'
        "
        @click="activeTab = 'annonces'"
      >
        Annonces
      </button>
    </div>

    <!-- Debug info - remove in production -->
    <div v-if="debug" class="bg-gray-100 p-2 text-xs">
      <p>Messages count: {{ messages.length }}</p>
      <button
        @click="loadMessages"
        class="bg-blue-500 text-white px-2 py-1 rounded mr-2"
      >
        Reload Messages
      </button>
      <button
        @click="initializeDummyData"
        class="bg-green-500 text-white px-2 py-1 rounded"
      >
        Load Dummy Data
      </button>
    </div>

    <!-- Chat Messages - flex-grow allows it to expand and fill available space -->
    <div class="p-4 space-y-4 overflow-y-auto flex-grow" ref="messageContainer">
      <!-- Message groups -->
      <div
        v-for="(group, index) in messageGroups"
        :key="index"
        class="space-y-4"
      >
        <!-- Date separator if needed -->
        <div
          v-if="group.showDateSeparator"
          class="flex items-center justify-center my-6"
        >
          <div class="border-t border-gray-300 flex-grow"></div>
          <div class="mx-4 text-sm text-gray-500">
            {{ formatDate(group.date) }}
          </div>
          <div class="border-t border-gray-300 flex-grow"></div>
        </div>

        <!-- Messages in group -->
        <div
          v-for="message in group.messages"
          :key="message.id"
          class="space-y-4"
        >
          <!-- Other user message (received) -->
          <div
            v-if="!isCurrentUserMessage(message)"
            class="flex items-start space-x-3"
          >
            <div
              class="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center text-gray-500"
            >
              <img src="/public/images/pp-1.jpg" alt="" class="rounded-full" />
            </div>
            <div class="space-y-1">
              <div class="flex items-baseline">
                <span class="font-medium">{{ receiverName }}</span>
                <span class="ml-2 text-xs text-gray-500">{{
                  formatTime(message.timestamp || message.created_at)
                }}</span>
              </div>
              <div class="bg-gray-100 rounded-full py-2 px-4 text-gray-800">
                {{ message.content }}
              </div>
            </div>
          </div>

          <!-- Current user message (sent) -->
          <div v-else class="flex justify-end">
            <div class="max-w-[80%]">
              <div class="text-right">
                <span class="text-xs text-gray-500">{{
                  formatTime(message.timestamp || message.created_at)
                }}</span>
              </div>
              <div class="bg-teal-200 rounded-full py-2 px-4 text-gray-800">
                {{ message.content }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Message Input - fixed at bottom with flex-shrink-0 -->
    <div class="p-4 border-t flex-shrink-0 bg-white">
      <div class="flex items-center bg-gray-100 rounded-lg p-1">
        <input
          v-model="newMessage"
          type="text"
          :placeholder="`Envoyer un message à ${receiverName}`"
          class="flex-1 bg-transparent p-2 focus:outline-none"
          @keyup.enter="sendMessage"
        />
        <button class="text-gray-400 mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <button
          @click="sendMessage"
          class="bg-teal-700 text-white px-4 py-2 rounded-md hover:bg-teal-800 transition-colors"
        >
          Envoyer
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, computed, watch } from "vue";
import { useNuxtApp } from "#app";

const { $supabase } = useNuxtApp();

const messages = ref([]);
const newMessage = ref("");
const messageContainer = ref(null);
const debug = ref(false); // Set to true for debugging
const currentUser = "Nom"; // Replace with actual user info
const receiverName = "Melvin P"; // Replace with actual receiver name

// ⚠️ These IDs are crucial - make sure they're correct for your app
const userId = "52042518-ae3a-483f-836f-8e0b4d752bb5"; // Your user ID
const receiverId = "034121ae-c44f-44fd-ad93-219b368406aa"; // Receiver ID
const activeTab = ref("discussion");

const props = defineProps({
  isSidebarOpen: Boolean,
  isAuthorMode: Boolean,
  isNotificationSidebarOpen: Boolean,
});

// Helper function to determine if a message was sent by the current user
const isCurrentUserMessage = (message) => {
  return message.sender_id === userId;
};

// Group messages by date for date separators
const messageGroups = computed(() => {
  const groups = [];
  let currentDate = null;
  let currentGroup = null;

  messages.value.forEach((message) => {
    const messageDate = new Date(message.timestamp || message.created_at);
    const dateString = messageDate.toISOString().split("T")[0]; // YYYY-MM-DD

    if (dateString !== currentDate) {
      currentDate = dateString;
      currentGroup = {
        date: messageDate,
        showDateSeparator: groups.length > 0, // Don't show for the first group
        messages: [],
      };
      groups.push(currentGroup);
    }

    currentGroup.messages.push(message);
  });

  return groups;
});

// Format timestamp for display next to messages
const formatTime = (timestamp) => {
  if (!timestamp) return "";
  const date = new Date(timestamp);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

// Format date for the date separator
const formatDate = (date) => {
  const options = { day: "numeric", month: "long", year: "numeric" };
  return date.toLocaleDateString("fr-FR", options);
};

// Scroll to bottom of messages
const scrollToBottom = async () => {
  await nextTick();
  if (messageContainer.value) {
    messageContainer.value.scrollTop = messageContainer.value.scrollHeight;

    // Add a slight delay and scroll again to ensure it works
    // (sometimes needed when images or dynamic content is loading)
    setTimeout(() => {
      if (messageContainer.value) {
        messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
      }
    }, 100);
  }
};

// Send message
const sendMessage = async () => {
  if (!newMessage.value.trim()) return;

  // Create a new message object
  const timestamp = new Date().toISOString();
  const newMessageObj = {
    id: `temp-${Date.now()}`, // Temporary ID
    content: newMessage.value,
    sender_id: userId,
    receiver_id: receiverId, // Note: this is spelled correctly
    reciever_id: receiverId, // Include both spellings to be safe
    created_at: timestamp,
    timestamp: timestamp,
  };

  try {
    console.log("Sending message:", newMessageObj);

    // Add message to local array first for immediate display
    messages.value.push(newMessageObj);
    await scrollToBottom();

    // Then send to Supabase
    const { data, error } = await $supabase
      .from("DirectMessage")
      .insert({
        content: newMessage.value,
        sender_id: userId,
        created_at: timestamp,
        reciever_id: receiverId, // Note: check if this spelling is correct in your schema
      })
      .select();

    if (error) throw error;

    console.log("Message sent successfully:", data);

    // Clear input field
    newMessage.value = "";
  } catch (error) {
    console.error("Error sending message:", error);
    // Remove the message from local array if sending failed
    messages.value = messages.value.filter((m) => m.id !== newMessageObj.id);
  }
};

// Load messages
const loadMessages = async () => {
  try {
    console.log("Loading messages between", userId, "and", receiverId);

    // Get messages that are part of the conversation between these two users
    const { data, error } = await $supabase
      .from("DirectMessage")
      .select("*")
      .or(
        `and(sender_id.eq.${userId},reciever_id.eq.${receiverId}),and(sender_id.eq.${receiverId},reciever_id.eq.${userId})`
      )
      .order("created_at", { ascending: true });

    if (error) throw error;

    console.log("Messages loaded:", data.length, data);

    // Update the messages array
    messages.value = data;

    await scrollToBottom();
  } catch (error) {
    console.error("Error loading messages:", error);
  }
};

// Subscribe to new messages (both sent and received)
const subscribeToMessages = () => {
  console.log("Setting up message subscriptions");

  // Subscribe to all changes on the DirectMessage table related to this conversation
  const subscription = $supabase
    .channel("any-channel-name")
    .on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "DirectMessage",
        filter: `or(and(sender_id.eq.${userId},reciever_id.eq.${receiverId}),and(sender_id.eq.${receiverId},reciever_id.eq.${userId}))`,
      },
      async (payload) => {
        console.log("New message received via subscription:", payload);

        // Add the new message to our array if it's not already there
        const exists = messages.value.some((m) => m.id === payload.new.id);
        if (!exists) {
          messages.value.push(payload.new);
          await scrollToBottom();
        }
      }
    )
    .subscribe((status) => {
      console.log("Subscription status:", status);
    });

  return () => {
    console.log("Unsubscribing from messages");
    subscription.unsubscribe();
  };
};

// Initialize with dummy data to match the screenshot design
const initializeDummyData = () => {
  console.log("Initializing dummy data");

  const baseDate = new Date("2024-06-16T16:30:00");

  // Empty the messages array first
  messages.value = [];

  // Add dummy messages
  messages.value = [
    {
      id: "1",
      content:
        "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      sender_id: receiverId,
      reciever_id: userId,
      created_at: baseDate.toISOString(),
    },
    {
      id: "2",
      content:
        "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      sender_id: userId,
      reciever_id: receiverId,
      created_at: baseDate.toISOString(),
    },
    {
      id: "3",
      content:
        "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      sender_id: userId,
      reciever_id: receiverId,
      created_at: baseDate.toISOString(),
    },
    {
      id: "4",
      content:
        "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      sender_id: receiverId,
      reciever_id: userId,
      created_at: baseDate.toISOString(),
    },
    {
      id: "5",
      content:
        "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      sender_id: userId,
      reciever_id: receiverId,
      created_at: baseDate.toISOString(),
    },
    {
      id: "6",
      content:
        "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      sender_id: userId,
      reciever_id: receiverId,
      created_at: baseDate.toISOString(),
    },
    {
      id: "7",
      content:
        "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      sender_id: receiverId,
      reciever_id: userId,
      created_at: baseDate.toISOString(),
    },
    {
      id: "8",
      content:
        "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      sender_id: receiverId,
      reciever_id: userId,
      created_at: baseDate.toISOString(),
    },
    {
      id: "9",
      content:
        "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      sender_id: userId,
      reciever_id: receiverId,
      created_at: baseDate.toISOString(),
    },
    {
      id: "10",
      content:
        "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      sender_id: receiverId,
      reciever_id: userId,
      created_at: baseDate.toISOString(),
    },
  ];

  scrollToBottom();
};

// Watch for changes to the messages array
watch(
  messages,
  () => {
    console.log(
      "Messages updated, now have",
      messages.value.length,
      "messages"
    );
  },
  { deep: true }
);

onMounted(() => {
  console.log("Chat component mounted");

  // For testing purposes, load dummy data first to ensure UI works
  initializeDummyData();

  // Then try to load real data
  loadMessages().then(() => {
    if (messages.value.length === 0) {
      console.log("No real messages found, keeping dummy data");
    }
  });

  // Set up subscription
  const unsubscribe = subscribeToMessages();

  // Cleanup subscription on component unmount
  return () => {
    unsubscribe();
  };
});
</script>
