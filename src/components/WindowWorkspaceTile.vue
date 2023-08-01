<script lang="ts" setup>
const props = defineProps({
  iconFileName: String,
  href: String,
  shiftLeft: Number,
  textSpace: Number
})

function getImageUrl() {
  return new URL(`../assets/tile-logos/${props.iconFileName}-logo.svg`, import.meta.url)
}
</script>

<template>
  <a
    class="flex h-24 w-full items-center justify-center border border-slate-900 bg-background bg-opacity-50 transition-colors hover:bg-slate-800"
    :href="props.href"
  >
    <img :class="`-ml-${shiftLeft} mr-${textSpace} h-10`" :src="getImageUrl().href" alt="" />
    <h5 class="text-2xl"><slot></slot></h5>
  </a>
</template>
