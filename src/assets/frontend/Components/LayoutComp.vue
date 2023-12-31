<script setup>
import NavMenu from '@/assets/frontend/Components/NavMenu.vue'
import RibbonInfo from '@/assets/frontend/Components/RibbonInfo.vue'
import FooterThing from '@/assets/frontend/Components/FooterThing.vue'
</script>

<template>
    <NavMenu />
    <RibbonInfo />
    <slot></slot>
    <FooterThing />
</template>