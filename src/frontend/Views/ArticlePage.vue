<template>
    <LayoutComp>
      <div class="bg-white py-10">
        <div v-if="post" class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto md:p-6 bg-white md:py-24">
            <h1 class="text-2xl md:text-3xl font-bold text-gray-900">{{ post.title }}</h1>
            <p class="mt-5 text-black" v-html="post.content"></p>
            </div>
        </div>
        <div v-else>
            <div class="mx-auto max-w-7xl px-6 lg:px-8 h-screen">
                <div class="mx-auto md:p-6 bg-white md:py-24">
                    <p class="text-lg font-bold text-black">Chargement de l'article...</p>
                </div>
            </div>
        </div>
      </div>
    </LayoutComp>
  </template>

<script setup>
import LayoutComp from '../Components/LayoutComp.vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const post = ref(null)

onMounted(async () => {
  await fetchPost()
})

const fetchPost = async () => {
  try {
    //const response = await fetch(`http://localhost:3000/api/articles/${route.params.id}`); // LOCAL
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/articles/${route.params.id}`); // PROD
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération de l\'article');
    }
    const data = await response.json();
    console.log(data);
    post.value = data;
  } catch (error) {
    console.error('Erreur :', error);
  }
}
</script>
