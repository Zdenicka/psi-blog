<template>
  <div class="tag-cloud">
    <h3>Tags</h3>
    <div v-for="tag in tags" :key="tag" class="tag">
        <router-link :to="{name:'Tags', params: {tag: tag}}">
            # {{ tag }}
        </router-link>
    </div>
  </div>
</template>

<script>
import getTags from '@/composables/getTags' 

export default {
    props: [ 'posts' ],
    setup(props) {

        const { tags } = getTags(props.posts)
        
        return {
            tags,
        }
    }
}
</script>

<style>

</style>