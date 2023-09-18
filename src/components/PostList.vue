<template>
  <div class="post-lists">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue';
export default {
  components: {SinglePost},
  props: [ 'posts' ],
  setup(props){
    console.log(props)
    console.log(props.posts)
  }

}
</script>

<style>

</style>