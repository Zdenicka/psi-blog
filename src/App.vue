<template>
  <div class="home">
      <h2>Home</h2>
      <input type="text" v-model="search">
      <p>search term - {{ search }}</p>
      <p v-for="dog in matchingNames" :key="dog">{{ dog }}</p>
      <q-btn @click="handleClick" label="Stop Watching" />

  </div>

</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue'

export default {
  name: 'psí blog',

  setup () {

    const search = ref('')
    const dogs = ref([ 'Charlie', 'Bohoušek', 'Adam', 'Dorotka'])

    const stopWatch = watch(search, () => {
      console.log('watch function run')
    })

    const stopEffect = watchEffect(() => {
      console.log('watchEffect', search.value)
    })


    const matchingNames = computed(() => {
      return dogs.value.filter((dog) => dog.includes(search.value))
    
    })

    const handleClick = () =>{
        stopWatch()
        stopEffect()
    }


    return { dogs, search, matchingNames, handleClick }

  },
}
</script>





<style lang="scss">
.home {
  text-align: center;
  color: $primary
}

</style>