
<template>
<!-- v tamplate nepoužívám u refs value property, jen název ref a template to automaticky chápe jako value --> 
    <router-view/>
    <p ref="p">Můj pejsek se jmenuje {{ name }} a jsou  mu {{ age }} roky</p>
    <p>Můj pejsek se jmenuje {{ name2 }} a jsou  mu {{ age2 }} roky</p>

    <q-btn @click="handleClick">click me</q-btn>
<!-- na eventy nemusím použít jen volání funkce, můžu do nich ten javaScript napsat rovnou-->
    <q-btn @click="age++">zvyš věk</q-btn>

    <h4>Refs</h4>
      <p>{{ dogs.name }} - {{ dogs.age }}</p>
      <q-btn @click="updateDogs" label="update Dogs" />

      <h4>Reactive</h4>
      <p>{{ cats.name }} - {{ cats.age }}</p>
      <q-btn @click="updateCats" label="update Cats" />



  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    name: 'psí blog',
  // do setup můžu dát jakýkoliv javaScript
  // spouští se dřív než cokoliv dalšího co do export default dám
    setup () {
      console.log('setup')
  
      // když na ref kliknu při zápisu v nápovědě, naimportuje se mi ref rovnou z vue
      const p = ref(null)
      console.log(p.value)
  
  
  
      // tohle není stejný jako data(){} - tohle není reaktivní!!! 
      //pokud se tady změní hodnoty, tak zápis se nezmění
        // není reaktivní - když změním jejich hodnotu nějakou funkcí, tak se automaticky neobnoví v textu apod
        let name = 'Dorotka'
      let age = '4'

      // ref je reaktivní
      // to že ho zadávám jako const neznamená, že je konstanta jeho hodnota, ale on sám je konstanta
      const name2 = ref('Dorotka')
      const age2 = ref('4')

      // reactive v tomhle formátu reaktivní není
      const nameCat = reactive('Prcek')
      //ref v tomhle formátu reaktivní je
      const nameDog = ref('Prcek')

  
  
      //zápis fce
      // p je ref - javaScriptová věc ve Vue je to reaktivní referenční objekt
      //clasList je javaScriptový příkaz a celý řádek "p.value.classList.add('test')" přidává class tam, kde mám nastaveno ref="p"
      const handleClick = () => {
        console.log(p)
        p.value.classList.add('test')
        p.value.textContent ='Dorotka vrtí'
        //ve funkci musím u refs použít value, aby bylo jasné, co upravuju
        name2.value = 'Bohoušek'
        age2.value = 7
    }


    const dogs = ref({ name: 'Dorotka', age: 4 })
    const cats = reactive({ name: 'Mandík', age: 14 })



    const updateDogs = () => {
      dogs.value.age = 7
    }

    const updateCats = () => {
      cats.age = 15
    }


  
      // původní zápis - za dvojtečkou vracím hodnotu zapsanou v odstavci "let....." kde definuju proměnné
      //return { name: name, age: age}
      // zapisuju sem to, co chci mít dostupný z templatu
      // protože jsem si nazvala proměnné před dvojtečkou i za ní stejně, můžu takhle zkrátit
      return { name, age, handleClick, p, name2, age2, dogs, cats, updateDogs, updateCats }
  
    },
  
  }
  </script>
  