<template>
  <LayoutComp>
    <div class="bg-white py-10">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto md:p-6 md:py-24">
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-5">Projets</h2>
        </div>
        <div
          class="mx-auto pt-10 md:px-6 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3 md:mb-44">
          <article v-for="post in posts" :key="post.id"
            class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-4 md:pt-60 pt-36 lg:pt-52">
            <img :src="post.imageSrc" :alt="post.title" class="absolute inset-0 -z-10 h-full w-full object-cover" />
            <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              <time :datetime="post.datetime" class="mr-8">{{ post.date }}</time>
              <div class="-ml-4 flex items-center gap-x-4">
              </div>
            </div>
            <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
              <router-link :to="post.link">
                <span class="absolute inset-0" />
                {{ post.title }}
              </router-link>
            </h3>
            <span class="mt-4" />
            {{ post.description }}
          </article>
        </div>
      </div>
    </div>
  </LayoutComp>
</template>

<script setup>
import LayoutComp from '@/frontend/Components/LayoutComp.vue'
import tarotReadingImage from '@/assets/images/tarotreading.webp'
import Dino from '@/assets/images/dino.webp'

const posts = [
  {
    id: 1,
    title: 'Tarot Reading',
    link: '/tarot-reading',
    description:
      'Le tout premier site que j\'ai mis en ligne, et le tout premier site que j\'ai fait, tout court. HTML CSS JS vanilla, à l\'époque (pour ce que je voulais en faire c\'était bien suffisant).',
    imageSrc: tarotReadingImage,
    date: '11 mai 2022',
    datetime: '2022-05-11',
  },
  {
    id: 2,
    title: 'Bientôt',
    link: '/projects',
    description:
      'Bientôt',
    imageSrc: Dino,
    date: '',
    datetime: '2022-05-11',
  },
  {
    id: 3,
    title: 'Bientôt',
    link: '/projects',
    description:
      'Bientôt',
    imageSrc: Dino,
    date: '',
    datetime: '2022-05-11',
  },
  {
    id: 4,
    title: 'Bientôt',
    link: '/projects',
    description:
      'Bientôt',
    imageSrc: Dino,
    date: '',
    datetime: '2022-05-11',
  },
  {
    id: 5,
    title: 'Bientôt',
    link: '/projects',
    description:
      'Bientôt',
    imageSrc: Dino,
    date: '',
    datetime: '2022-05-11',
  },
  {
    id: 6,
    title: 'Bientôt',
    link: '/projects',
    description:
      'Bientôt',
    imageSrc: Dino,
    date: '',
    datetime: '2022-05-11',
  }
]
</script>