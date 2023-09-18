<template>
    <header>
        <h1>Blog o psech</h1>
        <nav class="row justify-around">
            <RouterLink :to="{name: 'Home' }">Home</RouterLink>        
            <RouterLink :to="{name: 'Create' }">Přidat článek</RouterLink>
        </nav>
    </header>
</template>

<script>
export default {

}
</script>

<style>

</style>