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

    // watch - zadáívá se sledovaná proměnná a může jich být víc
    const stopWatch = watch(search, () => {
      console.log('watch function run')
    })

    //watchEffect nezadává se sledovaná proměnná, sám se spouští poprvé ihned při načtení stránky
    const stopEffect = watchEffect(() => {
      console.log('watchEffect', search.value)
    })


    const matchingNames = computed(() => {
      return dogs.value.filter((dog) => dog.includes(search.value))
    
    })

    // stopWatch a stopEffect spustí vnitřní return fcí watch a watchEffect a tím ukončí jejich funkci
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