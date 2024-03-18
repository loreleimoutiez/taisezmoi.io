<template>
    <LayoutComp>
        <div class="py-10 bg-white">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="md:p-6 bg-white md:py-24">
                      <h1 class="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6 md:mb-10">Nouvelle carte</h1>
                        <form @submit.prevent="handleSubmit" method="POST">
                            <div class="mb-4">
                                <label class="md:text-xl text-gray-600">Nom <span class="text-red-500">*</span></label>
                                <input v-model="name" id="name" name="name" autocomplete="name" required type="text" class="mt-5 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                            </div>

                            <div class="mb-8">
                                <label class="md:text-xl text-gray-600">Description <span class="text-red-500">*</span></label>
                                <textarea v-model="description" id="description" name="description" autocomplete="description" required type="text" class="mt-5 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full h-80 p-2.5">
                                </textarea>
                            </div>

                            <div class="mb-4">
                                <label for="image" class="md:text-xl text-gray-600">Image <span class="text-red-500">*</span></label>
                                <input @change="handleFileUpload" id="image" name="image" type="file" required class="mt-5 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                            </div>

                            <div class="flex text-gray-600 mt-10">
                                <button role="submit" class="md:w-32 flex w-full justify-center rounded-md bg-success px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-info focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" required>Créer</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </LayoutComp>
</template>

<script setup>
import LayoutComp from '../Components/LayoutComp.vue'
import { ref } from 'vue'
import { getToken } from '@/frontend/js/authentication.js'

const name = ref('')
const description = ref('')
const image = ref('')

const token = getToken()

const handleFileUpload = (e) => {
  image.value = e.target
}

const handleSubmit = async () => {
  try {
    const formData = new FormData()
    formData.append('title', name.value)
    formData.append('description', description.value)

    if(image.value && image.value.files[0]) {
      formData.append('image', image.value.files[0])
    }

    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cards`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Erreur de publication')
    }
    const data = await response.json()
    console.log('Carte créée :', data)

    name.value = ''
    description.value = ''
    document.getElementById('image').value = ''
  } catch (error) {
    console.error('Erreur lors de la création :', error)
  }
}

</script>