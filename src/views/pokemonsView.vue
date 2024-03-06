<script setup>
import { RouterLink } from 'vue-router'
import axios from 'axios';
import { ref } from 'vue';

//----------------------------------------------------------------------------------------------------------
const pokemons= ref([])
const getData = async () => {
    try {
        const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon/");
        pokemons.value = data.results;
    } catch (error) {
        console.log(error);
    }   
}

getData();
</script>
<template>
    
    <ul>
        <h1>Pokemons</h1>
        <li v-for="elemento in pokemons">
            <RouterLink :to="`/pokemons/${elemento.name}`"> {{ elemento.name }}
            </RouterLink>
            
            </li>
    </ul>
    
    
</template>