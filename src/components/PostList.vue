<template>
  <div class="post-lists">
    <div v-for="post in posts" :key="post.id">
      <h3>{{ post.title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'posts' ],
  setup(props){
    console.log(props)
  }

}
</script>

<style>

</style>