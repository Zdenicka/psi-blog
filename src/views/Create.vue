<template>
  <div class="home">
    <form  @submit.prevent="handleSubmit" class="q-gutter-sm">
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
        <!--bez prevent u keydown by se formulář po odentrování odeslal-->
        <q-input 
            outlined
            type="text"
            label="hashtagy - pro vložení stisni enter" 
            v-model="tag"
            @keydown.enter.prevent="handleKeydown"
        />
        <div v-for="tag in tags" :key="tag" class="tags">
            #{{ tag }}
        </div>
        <div class="q-mt-lg">
            <q-btn type="submit" style="background: teal; color: white">Vložit článek</q-btn>
        </div>


    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const title = ref ('')
        const body = ref('')
        const tag = ref('')
        const tags = ref([])
        const router = useRouter()


        //tady je někde chyba - když dám před tag mezery, stejně ho vloží znovu a jedna mezera tam vždycky mezi tagem a # zůstane
        const handleKeydown = () => {
            //vymazání všech mezer - v zápisu jejich nahrazení prázdným řetězcem \s je znak pro mezeru v textu, "g" znamená, že se všechny výskyty nalezeného vzoru budou nahrazovat, ne jen první výskyt
            tag.value = tag.value.replace(/\s/g,'')
            //pracuju jen s tagem, který už není obsažený v poli tags
            if (!tags.value.includes(tag.value)) {
                tags.value.push(tag.value)
            }
            //čistím formulář pro další tag
            tag.value = ''
        }

        const handleSubmit = async() => {
            try {
                let post = {
                    title: title.value,
                    body: body.value,
                    tags: tags.value
                }
                await fetch('http://localhost:3000/posts', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(post)
                })
                router.push('/')
            }
            catch(err) {
                console.log('PROBLÉM S ULOŽENÍM DAT')
            }
        }



        return {
            title,
            body, 
            tag,
            tags,
            handleKeydown,
            handleSubmit,
        }
    }



}
</script>

<style>

</style>