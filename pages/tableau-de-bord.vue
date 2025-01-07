<template>
  <!---<button
    data-drawer-target="logo-sidebar"
    data-drawer-toggle="logo-sidebar"
    aria-controls="logo-sidebar"
    type="button"
    class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  >
    <span class="sr-only">Open sidebar</span>
    <svg
      class="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        fill-rule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
      ></path>
    </svg>
  </button>

  <aside
    id="logo-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <a href="#" class="flex items-center ps-2.5 mb-5">
        <span
          class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >Grymoires</span
        >
      </a>

      <label class="items-center cursor-pointer">
        <span
          class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
          >{{ toggle ? "Mode auteur" : "Mode lecteur" }}</span
        >
        <input
          type="checkbox"
          value=""
          class="sr-only peer"
          @click="toggle = !toggle"
        />
        <div
          class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
        ></div>
      </label>
      <ul
        class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700"
      ></ul>
      <ul class="space-y-2 font-medium">
        <li>
          <h4>Global</h4>
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 21"
            >
              <path
                d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"
              />
              <path
                d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"
              />
            </svg>
            <span class="ms-3">Dashboard</span>
          </a>
        </li>
        <li>
          <h4>Projets</h4>
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 18"
            >
              <path
                d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"
              />
            </svg>
            <span class="flex-1 ms-3 whitespace-nowrap">Recherche</span>
            <span
              class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"
              >Pro</span
            >
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"
              />
            </svg>
            <span class="flex-1 ms-3 whitespace-nowrap">Mes projets</span>
            <span
              class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300"
              >3</span
            >
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path
                d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"
              />
            </svg>
            <span class="flex-1 ms-3 whitespace-nowrap">Créer un projet</span>
          </a>
        </li>
        <h4>Compte</h4>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path
                d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"
              />
            </svg>
            <span class="flex-1 ms-3 whitespace-nowrap">Mon profil</span>
          </a>
        </li>
        <li v-if="!toggle">
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path
                d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"
              />
            </svg>
            <span class="flex-1 ms-3 whitespace-nowrap">Sauvegardés</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
              />
            </svg>
            <span class="flex-1 ms-3 whitespace-nowrap">Ma banque</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"
              />
              <path
                d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"
              />
              <path
                d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"
              />
            </svg>
            <span class="flex-1 ms-3 whitespace-nowrap">Mes messages</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"
              />
              <path
                d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"
              />
              <path
                d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"
              />
            </svg>
            <span class="flex-1 ms-3 whitespace-nowrap">Paramètres</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>

  

  <div class="p-4 sm:ml-64">
    <div
      class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700"
    >
      <div class="grid grid-cols-3 gap-4 mb-4">
        <div
          class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"
        >
          <p class="text-2xl text-gray-400 dark:text-gray-500">
            <svg
              class="w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </p>
        </div>
        <div
          class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"
        >
          <p class="text-2xl text-gray-400 dark:text-gray-500">
            <svg
              class="w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </p>
        </div>
        <div
          class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"
        >
          <p class="text-2xl text-gray-400 dark:text-gray-500">
            <svg
              class="w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </p>
        </div>
      </div>
      <div
        class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800"
      >
        <p class="text-2xl text-gray-400 dark:text-gray-500">
          <svg
            class="w-3.5 h-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </p>
      </div>
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div>
          <h1>Mes Projets</h1>

          <div v-if="isLoading">Chargement des projets...</div>

          <div v-if="errorMessage" class="error">
            <p>{{ errorMessage }}</p>
          </div>

          <div v-if="!isLoading && projets.length === 0">
            <p>Vous n'avez aucun projet.</p>
          </div>

          <div v-if="!isLoading && projets.length > 0">
            <ul>
              <li v-for="projet in projets" :key="projet.id">
                <h3>{{ projet.title }}</h3>
                <p>{{ projet.sumery }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"
        >
          <p class="text-2xl text-gray-400 dark:text-gray-500">
            <svg
              class="w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </p>
        </div>
        <div
          class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"
        >
          <p class="text-2xl text-gray-400 dark:text-gray-500">
            <svg
              class="w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </p>
        </div>
        <div
          class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"
        >
          <p class="text-2xl text-gray-400 dark:text-gray-500">
            <svg
              class="w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </p>
        </div>
      </div>
      <div
        class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800"
      >
        <p class="text-2xl text-gray-400 dark:text-gray-500">
          <svg
            class="w-3.5 h-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </p>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div
          class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"
        >
          <p class="text-2xl text-gray-400 dark:text-gray-500">
            <svg
              class="w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </p>
        </div>
        <div
          class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"
        >
          <p class="text-2xl text-gray-400 dark:text-gray-500">
            <svg
              class="w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </p>
        </div>
        <div
          class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"
        >
          <p class="text-2xl text-gray-400 dark:text-gray-500">
            <svg
              class="w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </p>
        </div>
        <div
          class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"
        >
          <p class="text-2xl text-gray-400 dark:text-gray-500">
            <svg
              class="w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  </div>--->
  <!-- Sidebar -->
  <aside
    :class="isSidebarOpen ? 'w-64' : 'w-16'"
    class="fixed top-0 left-0 z-40 h-screen transition-all duration-300 bg-[#272B68] dark:bg-gray-800 flex flex-col items-start overflow-hidden"
    aria-label="Sidebar"
  >
    <!-- Header -->
    <div
      :class="isSidebarOpen ? 'flex' : 'flex-col-reverse'"
      class="flex items-center justify-between w-full px-4 py-4 border-b border-gray-200 dark:border-gray-700"
    >
      <!-- Title -->
      <div class="flex items-center">
        <span
          v-if="isSidebarOpen"
          class="text-xl font-semibold whitespace-nowrap text-white"
        >
          Grymoires
        </span>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 text-gray-700 dark:text-gray-200"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 12h-15"
          />
        </svg>
      </div>

      <!-- Close Button -->
      <button
        v-if="isSidebarOpen"
        @click="isSidebarOpen = false"
        class="p-2 text-gray-500 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 20H20V0H18V9H3.83L9.33 3.5L7.92 2.08L0 10L7.92 17.92L9.33 16.5L3.83 11H18V20Z"
            fill="#ffffff"
          />
        </svg>
      </button>
      <button
        v-if="!isSidebarOpen"
        @click="isSidebarOpen = true"
        class="p-2 text-gray-500 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 20H20V0H18V9H3.83L9.33 3.5L7.92 2.08L0 10L7.92 17.92L9.33 16.5L3.83 11H18V20Z"
            fill="#ffffff"
          />
        </svg>
      </button>
    </div>

    <div>
      <label class="items-center cursor-pointer">
        <span
          v-if="isSidebarOpen"
          class="text-sm font-medium text-gray-900 text-white dark:text-gray-300"
          >{{ toggle ? "Mode auteur" : "Mode lecteur" }}</span
        >
        <input
          type="checkbox"
          value=""
          class="sr-only peer"
          @click="toggle = !toggle"
        />
        <div
          class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
        ></div>
      </label>
    </div>

    <!-- Sidebar Content -->
    <div class="w-full px-3 py-4 overflow-y-auto">
      <ul
        class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700"
      ></ul>
      <ul class="space-y-2 font-medium">
        <li>
          <h4 class="text-white" v-if="isSidebarOpen">Global</h4>
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              width="22"
              height="22"
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

            <span class="ms-3" v-if="isSidebarOpen">Dashboard</span>
          </a>
        </li>
        <li>
          <h4 class="text-white" v-if="isSidebarOpen">Projets</h4>
          <a
            href="/pages/AnnotableText.vue"
            class="flex items-center p-2 text-gray-900 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
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

            <span class="flex-1 ms-3 whitespace-nowrap" v-if="isSidebarOpen"
              >Recherche</span
            >
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
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

            <span class="flex-1 ms-3 whitespace-nowrap" v-if="isSidebarOpen"
              >Mes projets</span
            >
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
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

            <span class="flex-1 ms-3 whitespace-nowrap" v-if="isSidebarOpen"
              >Créer un projet</span
            >
          </a>
        </li>
        <h4 class="text-white" v-if="isSidebarOpen">Compte</h4>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
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

            <span class="flex-1 ms-3 whitespace-nowrap" v-if="isSidebarOpen"
              >Mon profil</span
            >
          </a>
        </li>
        <li v-if="!toggle">
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
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

            <span class="flex-1 ms-3 whitespace-nowrap" v-if="isSidebarOpen"
              >Sauvegardés</span
            >
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
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

            <span class="flex-1 ms-3 whitespace-nowrap" v-if="isSidebarOpen"
              >Ma banque</span
            >
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
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

            <span class="flex-1 ms-3 whitespace-nowrap" v-if="isSidebarOpen"
              >Mes messages</span
            >
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
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

            <span class="flex-1 ms-3 whitespace-nowrap" v-if="isSidebarOpen"
              >Paramètres</span
            >
          </a>
        </li>
      </ul>
    </div>
  </aside>

  <!-- Main Content -->
  <main
    class="flex-grow transition-all duration-300 bg-gray-100"
    :class="isSidebarOpen ? 'ml-64' : 'ml-16'"
  >
    <div v-if="toggle">
      <h2>Mode Auteur</h2>
      <authorComment />
    </div>

    <div v-if="!toggle">
      <h2>Mode Beta Lecteur</h2>
      <ReaderComment :sidebar-open="isSidebarOpen" />
    </div>
  </main>
</template>

<script setup>
import { useProjet } from "@/composables/UseProjet";
import { onMounted } from "vue";
import authorComment from "./author/author-comment.vue";
import readerComment from "./beta/reader-comment.vue";
import ReaderComment from "./beta/reader-comment.vue";

const { projets, isLoading, errorMessage, getProjetsByAuteur } = useProjet();
const isSidebarOpen = ref(false);
const toggle = ref(false);
// Appel de la fonction lors du montage de la page
onMounted(() => {
  getProjetsByAuteur();
});
</script>

<style scoped>
.error {
  color: red;
}
</style>
