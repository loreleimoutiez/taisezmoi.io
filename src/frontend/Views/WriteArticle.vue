<template>
    <LayoutComp>
        <div class="py-10 bg-white">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="md:p-6 bg-white md:py-24">
                      <h1 class="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6 md:mb-10">Nouvel article</h1>
                        <form @submit.prevent="handleSubmit" method="POST">
                            <div class="mb-4">
                                <label class="md:text-xl text-gray-600">Titre <span class="text-red-500">*</span></label>
                                <input v-model="title" id="title" name="title" autocomplete="title" required="true" type="text" class="mt-5 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                            </div>

                            <div class="mb-4">
                                <label class="md:text-xl text-gray-600">Description <span class="text-red-500">*</span></label>
                                <textarea v-model="description" id="description" name="description" autocomplete="description" required="true" type="text" class="mt-5 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full h-32 p-2.5">
                                </textarea>
                            </div>

                            <div class="mb-8">
                                <label class="md:text-xl text-gray-600">Contenu <span class="text-red-500">*</span></label>
                                <textarea v-model="content" id="content" name="content" autocomplete="content" required="true" type="text" class="mt-5 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full h-60 p-2.5">
                                </textarea>
                            </div>

                            <div class="flex text-gray-600">
                                <button role="submit" class="md:w-32 flex w-full justify-center rounded-md bg-success px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-info focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" required>Poster</button>
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

const title = ref('')
const content = ref('')
const description = ref('')

const token = getToken();

const handleSubmit = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        title: title.value,
        content: content.value,
        description: description.value
      }),
    });

    if (!response.ok) {
      throw new Error('Erreur de publication')
    }
    const data = await response.json();
    console.log('Article publié :', data);

    title.value = '';
    content.value = '';
    description.value = '';
  } catch (error) {
    console.error('Erreur lors de la publication :', error);
  }
};

</script>