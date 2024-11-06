<script setup>
import NavMenu from '@/frontend/Components/NavMenu.vue'
import RibbonInfo from '@/frontend/Components/RibbonInfo.vue'
import FooterThing from '@/frontend/Components/FooterThing.vue'

defineOptions({
  inheritAttrs: false
})
</script>

<template>
    <NavMenu />
    <RibbonInfo />
    <div v-bind="$attrs">
      <slot></slot>
    </div>
    <FooterThing />
</template>
