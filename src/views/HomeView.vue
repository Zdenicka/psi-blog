<template>
  <div class="home">
      <h2>Home</h2>
      <div v-if="error">{{ error }}</div>
      <div v-if="posts.length">
        <PostList :posts="posts" />
      </div>
      <div v-else>
        <div class="q-pa-md flex flex-center">
          <q-circular-progress
            indeterminate
            rounded
            size="50px"
            color="lime"
            class="q-ma-md"
          />
        </div>
      </div>
  </div>

</template>

<script>
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'

export default {
  name: 'psí blog',
  components: { PostList },
  setup () {
    const {posts, error, load } = getPosts()
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