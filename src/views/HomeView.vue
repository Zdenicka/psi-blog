<template>
  <div class="home">
      <h2>Home</h2>

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
    const posts= ref([
      {title: 'Welcome to the blog', body: 'lorem ipsum', id: 1},
      {title: 'První článek', body: 'lorem ipsum', id: 2},

    ])

    return { posts }

  },
}
</script>





<style lang="scss">
.home {
  text-align: center;
  color: $primary
}

</style>