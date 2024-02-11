<template>
    <LayoutComp>
      <div class="bg-white py-10">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto md:p-6 bg-white md:py-24">
            <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-5">Blog</h2>
              <p class="mt-2 md:text-lg md:leading-8 text-gray-600">Tous les articles</p>
              <div class="mt-6 md:mt-16 space-y-4 md:space-y-20 lg:mt-20">
                <article v-for="post in posts" :key="post.id" class="relative isolate flex flex-col gap-8 lg:flex-row">
                  <div class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                    <img :src="post.imageUrl" alt="" class="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover" />
                    <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div>
                    <div class="flex items-center gap-x-4 text-xs">
                    <time :datetime="post.datetime" class="text-gray-500">{{ post.date }}</time>
                    </div>
                    <div class="group relative max-w-xl">
                    <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a :href="post.href">
                        <span class="absolute inset-0" />
                        {{ post.title }}
                        </a>
                    </h3>
                    <p class="mt-5 text-sm leading-6 text-gray-600">{{ post.description }}</p>
                    </div>
                    <div class="mt-6 flex border-t border-gray-900/5 pt-6">
                    <div class="relative flex items-center gap-x-4">
                    </div>
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