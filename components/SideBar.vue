// components/Sidebar.vue
<template>
  <aside
    :class="open ? 'w-64' : 'w-16'"
    class="fixed top-0 left-0 z-40 h-screen transition-all duration-300 bg-[#272B68] flex flex-col items-start overflow-auto"
    aria-label="Sidebar"
  >
    <!-- Header with Logo and Title -->
    <div class="w-full px-6 py-4 flex flex-col items-center">
      <!-- Logo section -->
      <div class="w-full flex items-center justify-between mb-4">
        <div class="flex items-center gap-2 text-white">
          <!-- G Logo -->
          <svg
            width="26"
            height="36"
            viewBox="0 0 26 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.3658 13.4101V22.9591C25.3658 29.7775 19.8186 35.3246 13.0003 35.3246C6.1819 35.3246 0.634766 29.7775 0.634766 22.9591V9.63831C0.634766 7.25504 1.55949 5.01143 3.23874 3.32078C4.9188 1.63095 7.1563 0.690748 9.53835 0.675682C11.944 0.662245 14.2084 1.58412 15.9145 3.27965C17.6206 4.97519 18.5608 7.23305 18.5608 9.63872V11.1596H14.059V9.63872C14.059 8.44118 13.5915 7.31652 12.7417 6.47324C11.9001 5.63687 10.7844 5.17675 9.59862 5.17675H9.56808C7.12454 5.19303 5.13664 7.19437 5.13664 9.63872V22.9595C5.13664 27.2956 8.66412 30.8231 13.0003 30.8231C17.3364 30.8231 20.8639 27.2956 20.8639 22.9595V17.912H11.7567V21.2432C11.7567 21.8772 12.2718 22.3931 12.9054 22.3947H12.9083C13.3224 22.3947 13.5952 22.1842 13.7214 22.058C13.8476 21.9318 14.059 21.6589 14.059 21.2432V20.1572H18.5608V21.2432C18.5608 22.7559 17.9712 24.1766 16.9007 25.245C15.8302 26.3127 14.4067 26.9007 12.8952 26.8962C9.78552 26.8889 7.25525 24.3529 7.25525 21.2428V13.4097H14.0594V13.4044H18.5613V13.4097H25.3662L25.3658 13.4101Z"
              fill="white"
            />
          </svg>

          <!-- Title -->
          <span v-if="open" class="text-3xl font-semibold">Grymoires</span>
        </div>

        <!-- Toggle Button on same line when expanded -->
        <button
          v-if="open"
          @click="toggleSidebar(!open)"
          class="text-white hover:bg-[#353b82] p-1 rounded-lg"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            :class="{ 'rotate-180': !open }"
          >
            <path
              d="M18 20H20V0H18V9H3.83L9.33 3.5L7.92 2.08L0 10L7.92 17.92L9.33 16.5L3.83 11H18V20Z"
              fill="#ffffff"
            />
          </svg>
        </button>
      </div>

      <!-- Toggle Button stacked when collapsed -->
      <button
        v-if="!open"
        @click="toggleSidebar(!open)"
        class="text-white hover:bg-[#353b82] p-1 rounded-lg my-4"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          :class="{ 'rotate-180': !open }"
        >
          <path
            d="M18 20H20V0H18V9H3.83L9.33 3.5L7.92 2.08L0 10L7.92 17.92L9.33 16.5L3.83 11H18V20Z"
            fill="#ffffff"
          />
        </svg>
      </button>

      <!-- User Role -->
      <div v-if="open" class="w-full text-white mt-1">
        <p class="text-sm">
          {{ isAuthorMode ? "Auteur.trice" : "Bêta-lecteur.trice" }}
        </p>
      </div>

      <!-- Mode Toggle with Label Above -->
      <div v-if="open" class="w-full mt-6">
        <p class="text-white text-sm mb-2">
          Mode
          {{ isAuthorMode ? "Auteur.trice" : "Bêta-lecteur.trice" }}
        </p>
        <label class="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            :checked="isAuthorMode"
            @change="toggleMode"
            class="sr-only peer"
          />
          <div
            class="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-emerald-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"
          ></div>
        </label>
      </div>

      <!-- Just the switch visible when collapsed -->
      <div v-else class="mt-4">
        <label class="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            :checked="isAuthorMode"
            @change="toggleMode"
            class="sr-only peer"
          />
          <div
            class="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-emerald-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"
          ></div>
        </label>
      </div>

      <!-- Divider -->
      <div class="w-full mt-6 mb-2 border-t border-gray-600"></div>
    </div>

    <!-- Navigation Content -->
    <div class="w-full px-4 py-4">
      <!-- Global Section -->
      <div class="mb-8">
        <h3 v-if="open" class="text-gray-400 text-sm px-2 mb-4">GLOBAL</h3>
        <ul class="space-y-2">
          <li>
            <NuxtLink
              to="/dashboard"
              class="flex items-center gap-3 text-white p-2 rounded-lg hover:bg-[#353b82]"
              :class="{ 'justify-center': !open }"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 2H2L2 20H8V2ZM2 0C0.895431 0 0 0.89543 0 2V20C0 21.1046 0.89543 22 2 22H8C9.10457 22 10 21.1046 10 20V2C10 0.895431 9.10457 0 8 0H2ZM20 2H14V9H20V2ZM14 0C12.8954 0 12 0.895431 12 2V9C12 10.1046 12.8954 11 14 11H20C21.1046 11 22 10.1046 22 9V2C22 0.895431 21.1046 0 20 0H14ZM14 15H20V20H14V15ZM12 15C12 13.8954 12.8954 13 14 13H20C21.1046 13 22 13.8954 22 15V20C22 21.1046 21.1046 22 20 22H14C12.8954 22 12 21.1046 12 20V15Z"
                  fill="#ffffff"
                />
              </svg>

              <span v-if="open">Dashboard</span>
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Projects Section -->
      <div class="mb-8">
        <h3 v-if="open" class="text-gray-400 text-sm px-2 mb-4">PROJETS</h3>
        <ul class="space-y-2">
          <li>
            <NuxtLink
              to="/search"
              class="flex items-center gap-3 text-white p-2 rounded-lg hover:bg-[#353b82]"
              :class="{ 'justify-center': !open }"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 0C8.22391 0 9.87721 0.684819 11.0962 1.90381C12.3152 3.12279 13 4.77609 13 6.5C13 8.11 12.41 9.59 11.44 10.73L11.71 11H12.5L17.5 16L16 17.5L11 12.5V11.71L10.73 11.44C9.59 12.41 8.11 13 6.5 13C4.77609 13 3.12279 12.3152 1.90381 11.0962C0.684819 9.87721 0 8.22391 0 6.5C0 4.77609 0.684819 3.12279 1.90381 1.90381C3.12279 0.684819 4.77609 0 6.5 0ZM6.5 2C4 2 2 4 2 6.5C2 9 4 11 6.5 11C9 11 11 9 11 6.5C11 4 9 2 6.5 2Z"
                  fill="#ffffff"
                />
              </svg>

              <span v-if="open">Recherche</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/Projects"
              class="flex items-center gap-3 text-white p-2 rounded-lg hover:bg-[#353b82]"
              :class="{ 'justify-center': !open }"
            >
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 0C14.5304 0 15.0391 0.210714 15.4142 0.585786C15.7893 0.960859 16 1.46957 16 2V18C16 18.5304 15.7893 19.0391 15.4142 19.4142C15.0391 19.7893 14.5304 20 14 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H14ZM14 2H9V10L6.5 7.75L4 10V2H2V18H14V2Z"
                  fill="#ffffff"
                />
              </svg>

              <span v-if="open">Mes projets</span>
            </NuxtLink>
          </li>
          <!-- Conditional rendering based on mode -->
          <li v-if="isAuthorMode">
            <NuxtLink
              to="/NewProject"
              class="flex items-center gap-3 text-white p-2 rounded-lg hover:bg-[#353b82]"
              :class="{ 'justify-center': !open }"
            >
              <svg
                width="19"
                height="21"
                viewBox="0 0 19 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.09 18C9.21 18.72 9.46 19.39 9.81 20H2C0.89 20 0 19.11 0 18V2C0 0.9 0.89 0 2 0H14C15.11 0 16 0.9 16 2V11.09C15.67 11.04 15.34 11 15 11C14.66 11 14.33 11.04 14 11.09V2H9V10L6.5 7.75L4 10V2H2V18H9.09ZM16 16V13H14V16H11V18H14V21H16V18H19V16H16Z"
                  fill="#ffffff"
                />
              </svg>

              <span v-if="open">Créer un projet</span>
            </NuxtLink>
          </li>
          <li v-if="!isAuthorMode">
            <NuxtLink
              to="/applications"
              class="flex items-center gap-3 text-white p-2 rounded-lg hover:bg-[#353b82]"
              :class="{ 'justify-center': !open }"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z"
                  fill="#ffffff"
                />
              </svg>
              <span v-if="open">Mes candidatures</span>
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Account Section -->
      <div>
        <h3 v-if="open" class="text-gray-400 text-sm px-2 mb-4">COMPTE</h3>
        <ul class="space-y-2">
          <li>
            <NuxtLink
              to="/profile"
              class="flex items-center gap-3 text-white p-2 rounded-lg hover:bg-[#353b82]"
              :class="{ 'justify-center': !open }"
            >
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.16455 5.00742C5.16455 3.42902 6.4441 2.14948 8.02249 2.14948C9.60089 2.14948 10.8804 3.42902 10.8804 5.00742C10.8804 6.58582 9.60089 7.86536 8.02249 7.86536C6.44409 7.86536 5.16455 6.58582 5.16455 5.00742ZM8.02249 0.149475C5.33952 0.149475 3.16455 2.32445 3.16455 5.00742C3.16455 7.69039 5.33952 9.86536 8.02249 9.86536C10.7055 9.86536 12.8804 7.69039 12.8804 5.00742C12.8804 2.32445 10.7055 0.149475 8.02249 0.149475ZM2.33838 18.9589C2.33838 15.8327 4.87384 13.2972 8.00006 13.2972C11.1285 13.2972 13.6636 15.8133 13.6842 18.9397V18.9589C13.6842 19.5112 14.1319 19.9589 14.6842 19.9589C15.2365 19.9589 15.6842 19.5112 15.6842 18.9589L15.6842 18.9365L15.6842 18.9304C15.6584 14.7011 12.2276 11.2972 8.00006 11.2972C3.76927 11.2972 0.338379 14.7281 0.338379 18.9589C0.338379 19.5112 0.786094 19.9589 1.33838 19.9589C1.89066 19.9589 2.33838 19.5112 2.33838 18.9589Z"
                  fill="#ffffff"
                />
              </svg>

              <span v-if="open">Mon profil</span>
            </NuxtLink>
          </li>
          <li v-if="!isAuthorMode">
            <NuxtLink
              to="/saved"
              class="flex items-center gap-3 text-white p-2 rounded-lg hover:bg-[#353b82]"
              :class="{ 'justify-center': !open }"
            >
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.55 17.03L10 18.35L11.45 17.03C16.6 12.36 20 9.27 20 5.5C20 2.41 17.58 0 14.5 0C13.3743 0 12.2779 0.33904 11.3488 0.922339C10.8419 1.24063 10.3848 1.63165 10 2.08C9.6152 1.63165 9.1581 1.24063 8.65117 0.922339C7.72215 0.33904 6.62572 0 5.5 0C2.42 0 0 2.41 0 5.5C0 9.27 3.4 12.36 8.55 17.03ZM10 15.6454L10.1065 15.5484C12.7208 13.1778 14.7294 11.3481 16.1077 9.66177C17.4641 8.00237 18 6.72749 18 5.5C18 3.51695 16.4778 2 14.5 2C13.3646 2 12.2417 2.53892 11.5177 3.38257L10 5.15086L8.48233 3.38257C7.75825 2.53892 6.63539 2 5.5 2C3.52219 2 2 3.51695 2 5.5C2 6.72749 2.53592 8.00237 3.89228 9.66177C5.27062 11.3481 7.27916 13.1778 9.89348 15.5484L9.89636 15.551L10 15.6454Z"
                  fill="#ffffff"
                />
              </svg>

              <span v-if="open">Sauvegardés</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/bank"
              class="flex items-center gap-3 text-white p-2 rounded-lg hover:bg-[#353b82]"
              :class="{ 'justify-center': !open }"
            >
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 8C13 7.45 13.45 7 14 7C14.55 7 15 7.45 15 8C15 8.55 14.55 9 14 9C13.45 9 13 8.55 13 8ZM6 7H11V5H6V7ZM20 5.5V12.47L17.18 13.41L15.5 19H10V17H8V19H2.5C2.5 19 0 10.54 0 7.5C0 4.46 2.46 2 5.5 2H10.5C11.41 0.79 12.86 0 14.5 0C15.33 0 16 0.67 16 1.5C16 1.71 15.96 1.9 15.88 2.08C15.74 2.42 15.62 2.81 15.56 3.23L17.83 5.5H20ZM18 7.5H17L13.5 4C13.5 3.35 13.59 2.71 13.76 2.09C12.79 2.34 12 3.06 11.67 4H5.5C3.57 4 2 5.57 2 7.5C2 9.38 3.22 14.15 4 17H6V15H12V17H14L15.56 11.85L18 11.03V7.5Z"
                  fill="#ffffff"
                />
              </svg>

              <span v-if="open">Ma banque</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="messages/chat"
              class="flex items-center gap-3 text-white p-2 rounded-lg hover:bg-[#353b82]"
              :class="{ 'justify-center': !open }"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.17157 14H18V2H2V15.1716L3.17157 14ZM0 20V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H18C19.1 0 20 0.89 20 2V14C20 14.5304 19.7893 15.0391 19.4142 15.4142C19.0391 15.7893 18.5304 16 18 16H4L0 20Z"
                  fill="#ffffff"
                />
              </svg>

              <span v-if="open">Mes messages</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/messages"
              class="flex items-center gap-3 text-white p-2 rounded-lg hover:bg-[#353b82]"
              :class="{ 'justify-center': !open }"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.1748 10.7219L15.0346 11.8432L17.007 13.3949L16.3097 14.6013L13.9787 13.6557L13.0699 14.3548C12.6655 14.6658 12.2772 14.8993 11.8364 15.0813L10.777 15.5184L10.4305 18H9.02813L8.67913 15.5004L7.59702 15.071C7.18823 14.9088 6.80995 14.6787 6.38875 14.3548L5.48001 13.6557L3.14893 14.6013L2.45163 13.3949L4.42404 11.8432L4.28389 10.7219C4.24853 10.439 4.22933 10.2114 4.22933 10C4.22933 9.78595 4.24889 9.54603 4.28563 9.23368L4.41791 8.10935L2.4575 6.59492L3.15122 5.39478L5.46869 6.32548L6.36933 5.65C6.80325 5.32456 7.1862 5.09201 7.59702 4.92898L8.67913 4.49957L9.02813 2H10.4305L10.7795 4.49957L11.8616 4.92898C12.2725 5.09201 12.6554 5.32456 13.0893 5.65L13.99 6.32548L16.3074 5.39478L17.0012 6.59492L15.0408 8.10936L15.173 9.23369C15.2098 9.54602 15.2293 9.78595 15.2293 10C15.2293 10.2114 15.2101 10.4391 15.1748 10.7219ZM17.3893 16.73L19.3893 13.27C19.5093 13.05 19.4593 12.78 19.2693 12.63L17.1593 10.97C17.1993 10.65 17.2293 10.33 17.2293 10C17.2293 9.67 17.1993 9.34 17.1593 9L19.2693 7.37C19.4593 7.22 19.5093 6.95 19.3893 6.73L17.3893 3.27C17.2693 3.05 16.9993 2.96 16.7793 3.05L14.2893 4.05C13.7693 3.66 13.2293 3.32 12.5993 3.07L12.2293 0.42C12.1893 0.18 11.9793 0 11.7293 0H7.72933C7.47933 0 7.26933 0.18 7.22933 0.42L6.85933 3.07C6.22933 3.32 5.68933 3.66 5.16933 4.05L2.67933 3.05C2.45933 2.96 2.18933 3.05 2.06933 3.27L0.0693316 6.73C-0.0606684 6.95 -0.000668304 7.22 0.189332 7.37L2.29933 9C2.25933 9.34 2.22933 9.67 2.22933 10C2.22933 10.33 2.25933 10.65 2.29933 10.97L0.189332 12.63C-0.000668304 12.78 -0.0606684 13.05 0.0693316 13.27L2.06933 16.73C2.18933 16.95 2.45933 17.03 2.67933 16.95L5.16933 15.94C5.68933 16.34 6.22933 16.68 6.85933 16.93L7.22933 19.58C7.26933 19.82 7.47933 20 7.72933 20H11.7293C11.9793 20 12.1893 19.82 12.2293 19.58L12.5993 16.93C13.2293 16.67 13.7693 16.34 14.2893 15.94L16.7793 16.95C16.9993 17.03 17.2693 16.95 17.3893 16.73ZM9.72925 11.5C9.33142 11.5 8.94989 11.342 8.66859 11.0607C8.38728 10.7794 8.22925 10.3978 8.22925 10C8.22925 9.60218 8.38728 9.22064 8.66859 8.93934C8.94989 8.65804 9.33142 8.5 9.72925 8.5C10.1271 8.5 10.5086 8.65804 10.7899 8.93934C11.0712 9.22064 11.2292 9.60218 11.2292 10C11.2292 10.3978 11.0712 10.7794 10.7899 11.0607C10.5086 11.342 10.1271 11.5 9.72925 11.5ZM9.72925 13.5C8.80099 13.5 7.91075 13.1313 7.25437 12.4749C6.598 11.8185 6.22925 10.9283 6.22925 10C6.22925 9.07174 6.598 8.1815 7.25437 7.52513C7.91075 6.86875 8.80099 6.5 9.72925 6.5C10.6575 6.5 11.5477 6.86875 12.2041 7.52513C12.8605 8.1815 13.2292 9.07174 13.2292 10C13.2292 10.9283 12.8605 11.8185 12.2041 12.4749C11.5477 13.1313 10.6575 13.5 9.72925 13.5Z"
                  fill="#ffffff"
                />
              </svg>

              <span v-if="open">Paramètres</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  mode: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue", "update:mode"]);

// Computed property for v-model binding
const open = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

// Computed property for mode toggle
const isAuthorMode = computed(() => props.mode);

const toggleSidebar = (value) => {
  emit("update:modelValue", value);
};

const toggleMode = () => {
  emit("update:mode", !props.mode);
};
</script>

<style scoped>
#title {
  font-size: inherit;
}
</style>
