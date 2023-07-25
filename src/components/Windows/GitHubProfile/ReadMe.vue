<script lang="ts" setup>
import { faStar, faCircleDown } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faStar, faCircleDown)
const skills = [
  {
    id: 'linux',
    name: 'GNU Linux',
    exp: '3 years',
    confidence: 5
  },
  {
    id: 'webtrifecta',
    name: 'HTML, JS, & CSS',
    exp: '3 years',
    confidence: 5
  },
  {
    id: 'tailwindcss',
    name: 'TailwindCSS',
    exp: '<1 year',
    confidence: 5
  },
  {
    id: 'vuejs',
    name: 'Vue.js',
    exp: '1 year',
    confidence: 5
  },
  {
    id: 'github',
    name: 'Git & GitHub',
    exp: '1.5 years',
    confidence: 4
  },
  {
    id: 'mysql',
    name: 'MySQL',
    exp: '3 years',
    confidence: 4
  },
  {
    id: 'postgres',
    name: 'PostgreSQL',
    exp: '<1 year',
    confidence: 4
  },
  {
    id: 'typescript',
    name: 'Typescript',
    exp: '<1 year',
    confidence: 4
  },
  {
    id: 'expressjs',
    name: 'Express.js',
    exp: '<1 year',
    confidence: 3
  },
  {
    id: 'docker',
    name: 'Docker',
    exp: '1 year',
    confidence: 3
  },
  {
    id: 'mochachai',
    name: 'Mocha & Chai',
    exp: '<1 year',
    confidence: 3
  },
  {
    id: 'ci4',
    name: 'CodeIgniter 4',
    exp: '<1 year',
    confidence: 2
  },
  {
    id: 'github-actions',
    name: 'GitHub Actions',
    exp: '<1 year',
    confidence: 1
  }

]
</script>

<template>
  <div class="scrollbar prose prose-invert mx-auto h-96 overflow-auto rounded-md p-4 text-text">
    <div class="mx-auto w-fit text-center">
      <img
        class="m-0 mx-auto"
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExejJ5b29hM2F4aWNvdjd0eGV3dzAzcHN0OW5yd3FhaG93NmV0dmNodyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/smGCEo5zsAXtK4bqAT/giphy.gif"
        width="150"
        alt=""
      />
      <img
        class="mx-auto my-0"
        src="https://komarev.com/ghpvc/?username=paulo-pertierra&style=flat-square&color=blue"
        alt=""
      />
      <h4 class="my-2">Hello! Welcome to my Portfolio.</h4>
      <h4>
        You can view my GitHub projects
        <a href="https://github.com/paulo-pertierra?tab=repositories">here</a>!
      </h4>
      <h4>
        <font-awesome-icon class="animate-bounce" icon="fa-solid fa-circle-down" /> Scroll down for
        my skills! <font-awesome-icon class="animate-bounce" icon="fa-solid fa-circle-down" />
      </h4>
    </div>
    <div id="badges" class="mx-auto my-2 flex w-fit items-center">
      <a href="https://www.linkedin.com/in/paulo-pertierra-a5b4591b0/">
        <img
          src="https://img.shields.io/badge/LinkedIn-blue?logo=linkedin&logoColor=white&style=for-the-badge"
          alt=""
      /></a>
      <a href="https://www.youtube.com/channel/UCltl4deYpsfB-FCn6Lri2JA">
        <img
          src="https://img.shields.io/badge/YouTube-red?style=for-the-badge&logo=youtube&logoColor=white"
          alt="Youtube Badge"
        />
      </a>
      <a href="https://dev.to/paulo-pertierra">
        <img
          src="https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&logo=devdotto&logoColor=white"
          alt="dev.to Badge"
        />
      </a>
    </div>
    <div class="p-4">
      <h1 class="mb-4 text-xl">
        I'm Paulo, a versatile web developer hailing from the Philippines.
      </h1>

      <p class="-mt-2">
        I want to contribute in meaningful and challenging projects all over the world.
      </p>

      <div class="scrollbar h-48 overflow-auto border-y px-2">
        <table class="my-2">
          <tr>
            <th>skills</th>
            <th>years of experience</th>
            <th>my confidence</th>
          </tr>
          <tr v-for="skill in skills" :key="skill.id">
            <td>
              {{ skill.name }}
            </td>
            <td>
              {{ skill.exp }}
            </td>
            <td>
              <font-awesome-icon
                class="text-xs"
                v-for="star in skill.confidence"
                :key="(star as number)"
                icon="fa-solid fa-star"
              />
            </td>
          </tr>
        </table>
      </div>
      <img
        class="mx-auto my-8 h-32"
        src="https://media.giphy.com/media/l41JU9pUyosHzWyuQ/giphy.gif"
        alt=""
      />
      <h4 class="text-center">
        Curious on the tech-stacks I've worked on or projects I helped with?
      </h4>
      <div class="mx-auto w-fit">
        <button
          class="m-2 inline-block w-36 bg-gray-600 p-4 text-xl transition-colors ease-in-out hover:bg-gray-800"
        >
          Techs
        </button>
        <button
          class="m-2 inline-block w-36 bg-gray-600 p-4 text-xl transition-colors ease-in-out hover:bg-gray-800"
        >
          Projects
        </button>
      </div>
    </div>
  </div>
</template>
