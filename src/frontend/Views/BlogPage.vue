<template>
  <LayoutComp>
    <div class="bg-white py-10">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto md:p-6 bg-white md:py-24">
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-5">Blog</h2>
          <p class="mt-2 md:text-xl md:leading-8 text-gray-600">Tous les articles</p>
          <div class="mt-6 md:mt-16 space-y-4 md:space-y-20 lg:mt-20">
            <article v-for="post in posts" :key="post.id" class="relative isolate flex flex-col lg:flex-row">
              <div>
                <div class="group relative max-w-xl">
                  <h3 class="text-lg md:text-2xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600 mt-5 md:mt-0">
                    <a :href="post.href">
                      <span class="absolute inset-0" />
                      {{ post.title }}
                    </a>
                  </h3>
                  <p class="mt-5 text-base leading-6 text-gray-600">{{ post.description }}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </LayoutComp>
</template>

<script setup>
import LayoutComp from '@/frontend/Components/LayoutComp.vue'
import { ref, onMounted } from 'vue'

const posts = ref([])

onMounted(async () => {
  await fetchPosts()
})

const fetchPosts = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/articles`)
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des articles')
    }
    const articles = await response.json()
    posts.value = articles
  } catch (error) {
    console.error('Erreur :', error)
  }
}
</script>