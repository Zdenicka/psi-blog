<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="row">
      <div class="col-9">
        <PostList :posts="posts" />
      </div>
      <div class="col-3">
        <TagCloud :posts="posts" />
      </div>
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
import TagCloud from '../components/TagCloud.vue'


export default {
  name: 'psí blog',
  components: { PostList, TagCloud },
  setup () {
    const {posts, error, load } = getPosts()
    load()

    console.log(posts)
    
    return { posts, error }

  },
}
</script>





<style lang="scss">


</style>