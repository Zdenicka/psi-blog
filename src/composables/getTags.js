import { ref } from 'vue'

const getTags = (posts) => {

    const tags = ref([])
    // Set je něco jako pole, ale neumožňuje duplikace v obsahu
    const tagSet = new Set()


    //projde celé posts a pro každý post projde všechny tagy a každý se pokusí přidat do tagSetu
    //když tagSet narazí na položku, kterou už obsahuje, tak ji prostě ignoruje a přesune se na další
    posts.forEach(post => {
        post.tags.forEach(tag => tagSet.add(tag))
    })


    // nevkládám do pole tagSet, ale jeho položky
    /* 
    vysvětlení chatbota:
    tři tečky jsou součástí zápisu JavaScriptu zvaného "spread operator" (rozprostřený operátor). Tento operátor umožňuje rozbalit prvky z pole, objektu nebo jiného iterable do samostatných hodnot.
    To umožňuje převést Set na pole. Bez tohoto operátoru by Set zůstal Setem, což by mělo jiné vlastnosti než pole.
    Spread operator je užitečný pro konverzi mezi různými datovými strukturami a také pro vytváření klonů polí a objektů, protože vytváří novou instanci dat, nikoliv pouze referenci.
    */
    tags.value = [...tagSet]


    return { tags }

}

export default getTags