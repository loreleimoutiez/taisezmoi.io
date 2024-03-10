<template>
    <NavMenu />
    <div class="bg-secondary py-10 h-screen">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="flex justify-center m-auto">
                <h1 class="text-[#E1CA98] rock-salt text-2xl md:text-4xl font-bold tracking-tight sm:text-4xl my-10">Tarot Reading</h1>
            </div>
            <button class="flex m-auto text-black bg-[#E1CA98] py-3 px-6 rounded-xl">
                Click here
            </button>
        </div>
    </div>
</template>

<script setup>
import NavMenu from '@/frontend/Components/NavMenu.vue'


</script>

<style>
.rock-salt {
    font-family: 'Rock Salt', cursive;
}
</style>
