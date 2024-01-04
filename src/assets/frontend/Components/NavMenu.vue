<template>
    <Disclosure as="nav" class="bg-base-100" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white z-20">
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Ouvrir le menu principal</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start relative">
            <div class="flex flex-shrink-0 items-center">
              <img class="h-8 w-auto" src="../../../assets/images/dino.webp" alt="logo petit dinosaure" />
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <router-link v-for="item in navigation" :key="item.name" :to="{ name: item.name }" :class="[($route.name === item.name) ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</router-link>
                <a href="#" class="sm:invisible md:visible text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-2 py-2 text-sm font-medium absolute md:right-44 lg:right-32 sm:right-5"><i class="fa-solid fa-rainbow mr-2 animate-pulse text-info"></i>Projet météo<i class="fa-solid fa-rainbow ml-2 animate-pulse text-info"></i></a>
                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-2 py-2 text-sm font-medium absolute md:right-14 lg:right-3 sm:right-10">Se connecter</a>
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          </div>
        </div>
      </div>
  
      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <router-link v-for="item in navigation" :key="item.name" :to="{ name: item.name }" :class="[($route.name === item.name) ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</router-link>
          <div class="flex flex-col">
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projet météo</a>
            <span class="border-t border-green-200 mt-3 opacity-65"></span>
            <a href="#" class="text-green-200 font-bold hover:bg-success hover:text-white block rounded-md px-3 mt-3 py-2 text-base">Se connecter</a>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </template>
  
  <script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
  
  const navigation = [
    { name: 'Accueil' },
    { name: 'À propos' },
    { name: 'Projets' },
    { name: 'Blog' },
  ]
  </script>