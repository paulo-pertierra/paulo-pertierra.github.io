<script lang="ts" setup>
import type { PropType } from 'vue'
import WorkspaceTile from './WindowWorkspaceTile.vue'
type Stack = 'full' | 'front' | 'back' | 'dev'

const props = defineProps({
  stack: {
    type: String as PropType<Stack>,
    required: true
  }
})
</script>

<template>
  <div
    class="scrollbar grid h-min max-h-full w-full grid-cols-1 gap-2 overflow-auto p-2 lg:grid-cols-3"
    v-if="props.stack === 'front'"
  >
    <workspace-tile icon-file-name="vue" href="https://vuejs.org/" :shift-left="2" :text-space="1"
      >Vue.js</workspace-tile
    >
    <workspace-tile
      icon-file-name="tailwind"
      href="https://tailwindcss.com/"
      :shift-left="1"
      :text-space="1"
      >Tailwind CSS</workspace-tile
    >
    <workspace-tile
      icon-file-name="figma"
      href="https://www.figma.com/"
      :shift-left="3"
      :text-space="1"
      >Figma</workspace-tile
    >
    <workspace-tile icon-file-name="html" :shift-left="3" :text-space="1">HTML</workspace-tile>
    <workspace-tile icon-file-name="css" :shift-left="2" :text-space="1">CSS</workspace-tile>
    <workspace-tile icon-file-name="javascript" :shift-left="0" :text-space="2"
      >JavaScript</workspace-tile
    >
    <workspace-tile
      icon-file-name="codeigniter"
      href="https://www.codeigniter.com"
      :shift-left="2"
      :text-space="2"
      >CodeIgniter</workspace-tile
    >
    <workspace-tile icon-file-name="php" href="https://www.php.net" :shift-left="2" :text-space="2"
      >PHP</workspace-tile
    >
  </div>
</template>
