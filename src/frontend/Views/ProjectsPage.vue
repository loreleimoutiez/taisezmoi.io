<template>
    <LayoutComp>
    <div class="bg-white py-10">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto md:p-6 md:py-24">
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-5">Projets</h2>
          <p class="mt-2 md:text-lg leading-8 text-gray-600">Cette page regroupe des projets que j'aime bien.</p>
          <p class="md:text-lg leading-8 text-gray-600">Tout est toujours sujet à l'amélioration (et si on attendait que quelque chose soit parfait pour le poster, on ne posterait jamais rien).</p>
        </div>
        <div class="mx-auto pt-10 md:p-6 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3 md:mb-40">
          <article v-for="post in posts" :key="post.id" class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 md:pt-80 pt-48 lg:pt-80">
            <img :src="post.imageUrl" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
            <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
  
            <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              <time :datetime="post.datetime" class="mr-8">{{ post.date }}</time>
              <div class="-ml-4 flex items-center gap-x-4">
              </div>
            </div>
            <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
              <a :href="post.href">
                <span class="absolute inset-0" />
                {{ post.title }}
              </a>
            </h3>
          </article>
        </div>
      </div>
    </div>
    </LayoutComp>
</template>
  
<script setup>
import LayoutComp from '@/frontend/Components/LayoutComp.vue'

  const posts = [
    {
      id: 1,
      title: 'Exemple',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      imageUrl:
        'https://cataas.com/cat',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
    },
  ]
</script>