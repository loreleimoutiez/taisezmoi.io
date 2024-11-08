<template>
  <LayoutComp>
    <div class="bg-white md:h-5/6 py-10 md:py-28">
      <div class="py-4 md:py-16 px-4 mx-auto max-w-screen-md mb-3">
        <h2 class="mb-4 text-2xl md:text-3xl tracking-tight font-extrabold text-center text-gray-900">Connexion</h2>
      </div>

      <div class="mx-auto w-full max-w-[480px] md:mb-28">
        <div class="bg-white py-10 sm:rounded-lg px-6 md:px-12">
          <form class="space-y-6" @submit.prevent="handleSubmit" method="POST">
            <div>
              <p v-if="errorMessage" class="text-red-500 text-sm mb-4">{{ errorMessage }}</p>
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
              <div class="mt-2">
                <input v-model="email" id="email" name="email" type="email" autocomplete="email" required="true"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" />
              </div>
            </div>

            <div>
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Mot de passe</label>
              <div class="mt-2">
                <input v-model="password" id="password" name="password" type="password" autocomplete="current-password"
                  required="true"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" />
              </div>
            </div>

            <div class="flex items-center justify-between text-gray-400">
              <div class="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-100" />
                <label for="remember-me" class="ml-3 block text-sm leading-6">Se souvenir de moi</label>
              </div>

              <div class="text-sm leading-6 text-gray-400">
                <a href="#/login" class="">Mot de passe oublié ?</a>
              </div>
            </div>

            <div>
              <button type="submit"
                class="flex w-full justify-center rounded-md bg-success px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-info focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Se
                connecter</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </LayoutComp>
</template>

<script setup>
import LayoutComp from '@/frontend/Components/LayoutComp.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const errorMessage = ref('')

const handleSubmit = async () => {
  try {
    //const response = await fetch('http://localhost:3000/api/auth/login', { // LOCAL
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, { // PROD
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
      credentials: 'include'
    });

    if (!response.ok) {
      throw new Error('Erreur de connexion')
    }

    router.push({ name: 'Écrire un article' })
  } catch (error) {
    console.error('Erreur de connexion', error)
    errorMessage.value = 'Informations de connexion incorrectes, veuillez réessayer.'
  }
};
</script>
