<template>
    <LayoutComp>
        <section class="bg-white h-5/6 md:py-24">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Me contacter</h2>
                <p class="mb-8 lg:mb-16 px-3 pt-3 font-light md:text-center text-gray-700 md:text-lg">Vous avez des suggestions, des idées à partager ? Ce formulaire est là pour ça. N'hésitez pas à m'écrire pour échanger, ou simplement pour laisser un message encourageant 🙂</p>
                <form action="#" class="space-y-8">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Votre email</label>
                        <input v-model="formData.email" type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="exemple@gmail.com" required>
                    </div>
                    <div>
                        <label for="subject" class="block mb-2 text-sm font-medium text-gray-900">Sujet</label>
                        <input v-model="formData.subject" type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Sujet de votre message" required>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Votre message</label>
                        <textarea v-model="formData.message" id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Écrivez ici votre message"></textarea>
                    </div>
                    <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-info sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Envoyer</button>
                </form>
            </div>
        </section>
    </LayoutComp>
</template>

<script setup>
import LayoutComp from '@/frontend/Components/LayoutComp.vue'
import { ref } from 'vue'

const formData = ref({
    email: '',
    subject: '',
    message: ''
})
</script>