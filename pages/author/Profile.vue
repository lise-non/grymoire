<script setup>
import { ref } from "vue";

const activeBadges = ref([
  { name: "Parfait !" },
  { name: "Illéré.e" },
  { name: "Chic type" },
  { name: "Premiers pas" },
  { name: "Vérifié.e" },
  { name: "Bilingue" },
  { name: "Multi-projets" },
  { name: "Contre-stonks" },
]);

const inactiveBadges = ref([{ name: "Stonks" }, { name: "Vacances" }]);

// On n'a plus besoin d'une référence reactive pour les commentaires
// car ils sont maintenant codés en dur dans le template pour
// correspondre exactement à l'image partagée
</script>

<template>
  <div class="max-w-full mx-auto p-6 bg-gray-50">
    <!-- Profile Header -->
    <div class="flex items-center gap-4 mb-8">
      <img
        src="/public/images/profil-picture-1.png"
        alt="Profile"
        class="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <h1 class="text-2xl font-bold text-navy-900">Marie On 💝</h1>
        <p class="text-gray-600">Auteur.trice</p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Description Section -->
      <div class="bg-white rounded-lg p-6 shadow-sm">
        <h2 class="text-xl font-bold text-navy-900 mb-4">Description</h2>
        <p class="text-gray-700 mb-4">
          Je suis Marie On, autrice passionnée par les mondes fantastiques et
          les aventures extraordinaires. À travers mes romans, j'aime créer des
          univers enchanteurs où la magie est omniprésente et où les héros et
          héroïnes vivent des quêtes inoubliables.
        </p>
        <p class="text-gray-700 mb-4">
          Influencée par les œuvres de J.R.R. Tolkien, C.S. Lewis et Ursula K.
          Le Guin, je tisse des histoires qui invitent les lecteurs à s'évader
          et à rêver. Mon objectif est de transporter chacun de vous dans des
          royaumes imaginaires où tout est possible et où chaque page tourne
          avec émerveillement. Plongez dans mes récits et laissez-vous emporter
          par la magie de l'imaginaire.
        </p>
        <div class="flex items-center gap-4 text-gray-600 text-sm">
          <div class="flex items-center">
            <i class="fas fa-globe mr-2"></i>
            Français & Anglais
          </div>
          <div class="flex items-center">
            <i class="far fa-calendar mr-2"></i>
            a rejoint Grymoires en Avril 2024
          </div>
        </div>
      </div>

      <!-- Badges Section -->
      <div class="bg-white rounded-lg p-6 shadow-sm">
        <h2 class="text-xl font-bold text-navy-900 mb-4">Badges (8)</h2>
        <div class="grid grid-cols-3 gap-4">
          <!-- Active Badges -->
          <div
            v-for="badge in activeBadges"
            :key="badge.name"
            class="flex flex-col items-center p-2"
          >
            <div class="w-12 h-12 bg-navy-900 rounded-lg mb-2"></div>
            <span class="text-sm text-center text-gray-700">{{
              badge.name
            }}</span>
          </div>
          <!-- Inactive Badges -->
          <div
            v-for="badge in inactiveBadges"
            :key="badge.name"
            class="flex flex-col items-center p-2"
          >
            <div class="w-12 h-12 bg-gray-300 rounded-lg mb-2"></div>
            <span class="text-sm text-center text-gray-500">{{
              badge.name
            }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Comments Section -->
    <div class="mt-8 bg-white rounded-lg p-6 shadow-sm">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-3xl font-bold text-navy-900">Commentaires</h2>
        <div class="flex items-center">
          <div class="flex">
            <i class="text-green-600 fas fa-star text-xl"></i>
            <i class="text-green-600 fas fa-star text-xl"></i>
            <i class="text-green-600 fas fa-star text-xl"></i>
            <i class="text-gray-400 fas fa-star-half-alt text-xl"></i>
            <i class="text-gray-300 far fa-star text-xl"></i>
          </div>
          <span class="ml-2 text-pink-500">(sur 24 avis)</span>
        </div>
      </div>

      <div class="flex justify-between items-center mb-4">
        <div></div>
        <div class="flex space-x-2">
          <button class="p-2 text-gray-500 hover:text-gray-800">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="p-2 text-gray-500 hover:text-gray-800">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <!-- Comments List -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Comment 1 -->
        <div class="bg-gray-50 rounded-lg p-4 relative">
          <div class="flex justify-between items-start mb-3">
            <div class="flex items-center gap-3">
              <img
                src="/public/images/avatar-1.png"
                alt="Marion R"
                class="w-10 h-10 rounded-full"
              />
              <h3 class="font-semibold text-navy-900">Marion R</h3>
            </div>
            <button class="text-gray-400">
              <i class="fas fa-ellipsis-v"></i>
            </button>
          </div>

          <div class="flex items-center mb-3">
            <div class="flex mr-2">
              <!-- Étoile pleine -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#16a34a"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"
                />
              </svg>
              <!-- Étoile pleine -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#16a34a"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"
                />
              </svg>
              <!-- Étoile pleine -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#16a34a"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"
                />
              </svg>
              <!-- Étoile pleine -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#16a34a"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"
                />
              </svg>
              <!-- Demi étoile -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="w-5 h-5"
              >
                <defs>
                  <linearGradient
                    id="half-star-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="50%" stop-color="#16a34a" />
                    <stop offset="50%" stop-color="#d1d5db" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#half-star-gradient)"
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <span class="text-sm font-medium text-gray-700">4.5/5</span>
          </div>

          <p class="text-gray-700 mb-4">
            Un grand merci pour ton œil affûté ! Tes remarques sur la cohérence
            et le rythme m'ont aidé à affiner mon texte. J'ai particulièrement
            apprécié ton sens du détail et ta capacité à pointer les passages à
            retravailler sans dénaturer mon style.
          </p>

          <p class="text-sm text-gray-500 mt-2">Laissé en octobre 2024</p>
        </div>

        <!-- Comment 2 -->
        <div class="bg-gray-50 rounded-lg p-4 relative">
          <div class="flex justify-between items-start mb-3">
            <div class="flex items-center gap-3">
              <img
                src="/public/images/avatar-1.png"
                alt="Luila Quiaicri"
                class="w-10 h-10 rounded-full"
              />
              <h3 class="font-semibold text-navy-900">Luila Quiaicri</h3>
            </div>
            <button class="text-gray-400">
              <i class="fas fa-ellipsis-v"></i>
            </button>
          </div>

          <div class="flex items-center mb-3">
            <div class="flex mr-2">
              <!-- Étoile pleine -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#16a34a"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"
                />
              </svg>
              <!-- Étoile pleine -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#16a34a"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"
                />
              </svg>
              <!-- Étoile pleine -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#16a34a"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"
                />
              </svg>
              <!-- Étoile pleine -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#16a34a"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"
                />
              </svg>
              <!-- Demi étoile -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="w-5 h-5"
              >
                <defs>
                  <linearGradient
                    id="half-star-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="50%" stop-color="#16a34a" />
                    <stop offset="50%" stop-color="#d1d5db" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#half-star-gradient)"
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <span class="text-sm font-medium text-gray-700">3.5/5</span>
          </div>

          <p class="text-gray-700 mb-4">
            Tes retours ont été précieux, surtout sur l'impact émotionnel des
            scènes. Grâce à toi, j'ai pu mieux nuancer certaines interactions et
            renforcer les moments-clés. Ta sensibilité et ton enthousiasme ont
            vraiment boosté ma motivation !
          </p>

          <p class="text-sm text-gray-500 mt-2">Laissé en juin 2024</p>
        </div>

        <!-- Comment 3 -->
        <div class="bg-gray-50 rounded-lg p-4 relative">
          <div class="flex justify-between items-start mb-3">
            <div class="flex items-center gap-3">
              <img
                src="/public/images/avatar-1.png"
                alt="Loteuria"
                class="w-10 h-10 rounded-full"
              />
              <h3 class="font-semibold text-navy-900">Loteuria</h3>
            </div>
            <button class="text-gray-400">
              <i class="fas fa-ellipsis-v"></i>
            </button>
          </div>

          <div class="flex items-center mb-3">
            <div class="flex mr-2">
              <!-- Étoile pleine -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#16a34a"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"
                />
              </svg>
              <!-- Étoile pleine -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#16a34a"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"
                />
              </svg>
              <!-- Étoile pleine -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#16a34a"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"
                />
              </svg>
              <!-- Étoile pleine -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#16a34a"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"
                />
              </svg>
              <!-- Demi étoile -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="w-5 h-5"
              >
                <defs>
                  <linearGradient
                    id="half-star-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="50%" stop-color="#16a34a" />
                    <stop offset="50%" stop-color="#d1d5db" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#half-star-gradient)"
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <span class="text-sm font-medium text-gray-700">3.5/5</span>
          </div>

          <p class="text-gray-700 mb-4">
            Tes suggestions pertinentes ! Tu as su me proposer des ajustements
            judicieux pour ta patience précieuse.
          </p>

          <p class="text-sm text-gray-500 mt-2">Laissé en juin 2024</p>
        </div>
      </div>
    </div>

    <!-- Projets Section -->
    <div class="mt-8 bg-white rounded-lg p-6 shadow-sm">
      <div class="flex items-center mb-6">
        <h2 class="text-3xl font-bold text-navy-900">Projets</h2>
        <span class="ml-2 text-pink-500">(3)</span>
      </div>

      <!-- Filtres -->
      <div class="flex gap-2 mb-6">
        <button
          class="px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium"
        >
          En cours (1)
        </button>
        <button
          class="px-4 py-2 rounded-full bg-teal-100 text-teal-800 text-sm font-medium"
        >
          Terminés (2)
        </button>
      </div>

      <!-- Liste des projets -->
      <div class="space-y-8">
        <!-- Projet 1 -->
        <div class="flex gap-4">
          <img
            src="/public/images/cover.png"
            alt="Ceux Qui Servent"
            class="w-32 h-32 object-cover rounded-lg"
          />
          <div class="flex-1">
            <div class="flex items-center mb-2">
              <h3 class="text-xl font-bold text-navy-900">Ceux Qui Servent</h3>
              <span class="ml-2 text-pink-500">(En cours)</span>
            </div>

            <div class="flex gap-2 mb-3">
              <span
                class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-md"
                >Magie</span
              >
              <span
                class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-md"
                >Animaux fantastiques</span
              >
              <span
                class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-md"
                >Rébellion</span
              >
            </div>

            <p class="text-gray-700 mb-3">
              Dans un monde où les griffons règnent sur les cieux, les humains
              ne sont que des serviteurs. Mais tandis qu'une rébellion gronde,
              l'équilibre millénaire vacille. Entre alliances fragiles,
              trahisons et batailles épiques, Ceux qui servent v...
            </p>

            <div class="flex items-center">
              <div class="flex -space-x-2">
                <img
                  src="/public/images/avatar-1.png"
                  alt="Lecteur"
                  class="w-6 h-6 rounded-full border border-white"
                />
                <img
                  src="/public/images/avatar-1.png"
                  alt="Lecteur"
                  class="w-6 h-6 rounded-full border border-white"
                />
              </div>
              <span class="ml-2 text-sm text-gray-600"
                >2 bêta lecteurs travaillent sur ce projet</span
              >
            </div>
          </div>
        </div>

        <!-- Projet 2 -->
        <div class="flex gap-4">
          <img
            src="/public/images/cover.png"
            alt="Tarot"
            class="w-32 h-32 object-cover rounded-lg"
          />
          <div class="flex-1">
            <div class="flex items-center mb-2">
              <h3 class="text-xl font-bold text-navy-900">Nom du projet</h3>
              <span class="ml-2 text-gray-500">(Terminé)</span>
            </div>

            <div class="flex gap-2 mb-3">
              <span
                class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-md"
                >Fantastique</span
              >
              <span
                class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-md"
                >Objets magiques</span
              >
              <span
                class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-md"
                >Aventure</span
              >
            </div>

            <p class="text-gray-700 mb-3">
              Quand une jeune femme découvre qu'elle peut lire l'avenir dans les
              cartes, son destin bascule. Entre secrets enfouis, forces occultes
              et choix impossibles, Tarot tisse un récit envoûtant où chaque
              tirage peut tout changer. Osez suivre l...
            </p>

            <div class="flex items-center">
              <div class="flex -space-x-2">
                <img
                  src="/public/images/avatar-1.png"
                  alt="Lecteur"
                  class="w-6 h-6 rounded-full border border-white"
                />
                <img
                  src="/public/images/avatar-1.png"
                  alt="Lecteur"
                  class="w-6 h-6 rounded-full border border-white"
                />
              </div>
              <span class="ml-2 text-sm text-gray-600"
                >2 bêta lecteurs ont travaillés sur ce projet</span
              >
            </div>
          </div>
        </div>

        <!-- Projet 3 -->
        <div class="flex gap-4">
          <img
            src="/public/images/cover.png"
            alt="Dune"
            class="w-32 h-32 object-cover rounded-lg"
          />
          <div class="flex-1">
            <div class="flex items-center mb-2">
              <h3 class="text-xl font-bold text-navy-900">Nom du projet</h3>
              <span class="ml-2 text-gray-500">(Terminé)</span>
            </div>

            <div class="flex gap-2 mb-3">
              <span
                class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-md"
                >Science-fiction</span
              >
              <span
                class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-md"
                >Désert</span
              >
              <span
                class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-md"
                >Rébellion</span
              >
              <span
                class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-md"
                >Prophétie</span
              >
            </div>

            <p class="text-gray-700 mb-3">
              Sur la planète aride d'Arrakis, où le sable cache autant de
              dangers que de secrets, le jeune Paul Atréides se retrouve pris
              dans un jeu de pouvoir impitoyable. Entre intrigues politiques,
              guerre et destinée messianique, Dune est une épo...
            </p>

            <div class="flex items-center">
              <div class="flex -space-x-2">
                <img
                  src="/public/images/avatar-1.png"
                  alt="Lecteur"
                  class="w-6 h-6 rounded-full border border-white"
                />
                <img
                  src="/public/images/avatar-1.png"
                  alt="Lecteur"
                  class="w-6 h-6 rounded-full border border-white"
                />
              </div>
              <span class="ml-2 text-sm text-gray-600"
                >2 bêta lecteurs ont travaillés sur ce projet</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
