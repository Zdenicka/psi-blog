<template>
  <div class="home">
      <h2>Home</h2>
      <div v-if="error">{{ error }}</div>
      <PostList :posts="posts" />

  </div>

</template>

<script>
import { ref } from 'vue'
import PostList from '../components/PostList.vue'


export default {
  name: 'psí blog',
  components: { PostList },
  setup () {
    const posts= ref([])
    const error = ref(null)

    const load = async () => {
      try {
        let data = await fetch('http://localhost:3000/posts')
        if (!data.ok) {
          throw Error('no data available')
        }
        posts.value = await data.json()
      }
      catch (err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    load()

    return { posts, error }

  },
}
</script>





<style lang="scss">
.home {
  text-align: center;
  color: $primary
}

</style>