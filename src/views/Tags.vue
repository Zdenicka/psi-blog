<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="tagPosts.length" class="row">
      <div class="col-9">
        <PostList :posts="tagPosts" />
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
import { ref } from 'vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import PostList from '@/components/PostList.vue';
import TagCloud from '../components/TagCloud.vue'
import getPosts from '@/composables/getPosts';


export default {
    components: { PostList, TagCloud },
    setup() {
        const route = useRoute()
        const {posts, error, load } = getPosts()
        load()

        const tag = ref(route.params.tag)
        const tagPosts = computed(() => {
            return posts.value.filter((post) => post.tags.includes(tag.value))
        })
 
        return {

            posts,
            error,
            tag,
            tagPosts

        }
    }


}
</script>

<style>

</style>