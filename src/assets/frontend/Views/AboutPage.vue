<script setup>
import LayoutComp from '@/assets/frontend/Components/LayoutComp.vue'
</script>

<template>
    <LayoutComp>
        <div class="bg-gradient-to-b from-base-100 to-black">
            <img class="w-full object-none md:object-cover md:h-64 opacity-50" src="@/assets/images/ordi.webp" alt="photographie d'un écran d'ordinateur avec du code un peu flou">
        </div>
        <div class="flex flex-col items-center ">
            <div class="-mt-20 z-10">
                <img class="w-32 rounded-full p-6 border-opacity-5 bg-base-100" src="@/assets/images/coin.webp" alt="photo d'un canard en plastique jaune">
            </div>
            <p class="text-xs -mt-1 opacity-90">(Photo non contractuelle)</p>
            <p class="text-3xl text-white my-4">Loreleï</p>
            <div class="flex flex-col items-start mx-3 my-4">
                <h1 class="text-base mt-1">En train d'apprendre l'ingénierie des données, entre autres choses.</h1>
                <p class="text-base mt-1 text-white font-bold">+ dev en alternance @                         <a href="https://www.akawaka.fr/" target="_blank" rel="noopener noreferrer" class="text-amber-500">Akawaka</a></p>
                <p class="text-base mt-3">
                    <span class="md:hidden block">
                        <ul>
                            <li>
                                <a href="https://www.codecademy.com/" target="_blank" rel="noopener noreferrer" class="text-yellow-100">[ 'Codecademy',</a>
                            </li>
                            <li>
                                <a href="https://openclassrooms.com/fr/" target="_blank" rel="noopener noreferrer" class="text-indigo-500 ml-2">'OpenClassrooms',</a>
                            </li>
                            <li>
                                <a href="https://www.wildcodeschool.com/fr-fr/" target="_blank" rel="noopener noreferrer" class="text-pink-500 ml-2">'Wild Code School']</a>
                            </li>
                        </ul>
                    </span>
                    <span class="hidden md:inline-block">
                        <a href="https://www.codecademy.com/" target="_blank" rel="noopener noreferrer" class="text-yellow-100">Codecademy</a> / 
                        <a href="https://openclassrooms.com/fr/" target="_blank" rel="noopener noreferrer" class="text-indigo-500">OpenClassrooms</a> / 
                        <a href="https://www.wildcodeschool.com/fr-fr/" target="_blank" rel="noopener noreferrer" class="text-pink-500">Wild Code School</a> / 
                    </span>
                </p>
            </div>
            <div class="flex flex-col items-start mx-3 my-20">
                <p>Je crois qu'il me faut plus qu'une fin de journée après le travail pour écrire cette page.</p>
            </div>
        </div>
    </LayoutComp>
</template>