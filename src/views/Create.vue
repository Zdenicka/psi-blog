<template>
  <div class="create">
    <form>
        <q-input 
            outlined
            type="text"
            label="Nadpis"
            v-model="title" 
            required 
        />
        <q-input 
            outlined
            type="textarea"
            label="Text článku" 
            v-model="body"
            required 
        />
        <q-input 
            outlined
            type="text"
            label="hashtagy - pro vložení stisni enter" 
            v-model="tag"
            required 
        />
        <q-btn>Vložit článek</q-btn>


    </form>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        const title = ref ('')
        const body = ref('')
        const tag = ref([])
    }



}
</script>

<style>

</style>