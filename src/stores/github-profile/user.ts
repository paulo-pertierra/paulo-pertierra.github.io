import { defineStore } from 'pinia'

import axios from 'axios'
import { ref, type Ref } from 'vue'
import type { GitHubUser } from './user.type'
export const useGitHubProfileStore = defineStore('github-profile', () => {
  const user: Ref<GitHubUser> = ref()
  const readme: Ref<string> = ref('')

  function getUser() {
    axios
      .get('https://api.github.com/users/paulo-pertierra')
      .then((res) => {
        user.value = res.data as GitHubUser
        console.log(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  function getUserReadMe() {
    axios
      .get('https://raw.githubusercontent.com/paulo-pertierra/paulo-pertierra/main/README.md')
      .then((res) => {
        readme.value = res.data
      })
  }
  return { user, getUser, readme, getUserReadMe }
})
