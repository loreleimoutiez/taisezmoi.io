<script setup>
import LayoutComp from '@/assets/frontend/Components/LayoutComp.vue'
</script>

<template>
    <LayoutComp>
        <div class="flex flex-col items-center mt-14 md:mt-48">
            <h1 class="text-9xl text-warning">404</h1>
            <router-link :to="'/'" class="text-lg text-white font-bold underline mt-5">Retourner à la page d'accueil</router-link>
            <img src="@/assets/images/dino.png" class="h-20 md:h-48 mt-14 md:mt-28 animate-bounce">
        </div>
    </LayoutComp>
</template>