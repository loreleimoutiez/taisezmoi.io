<script setup>
import NavMenu from '@/frontend/Components/NavMenu.vue'
import RibbonInfo from '@/frontend/Components/RibbonInfo.vue'
import FooterThing from '@/frontend/Components/FooterThing.vue'
</script>

<template>
    <NavMenu />
    <RibbonInfo />
    <slot></slot>
    <FooterThing />
</template>