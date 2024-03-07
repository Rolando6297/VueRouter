<script setup>
import { RouterLink } from 'vue-router'
import { useGetData } from '@/composables/getData'

const { data, getData, loading , error} = useGetData();
getData("https://pokeapi.co/api/v2/pokemon/");

</script>

<template>
        <div v-if="loading">
        <div class="spinner-border" role="status">
            <span class="sr-only">Cargando..</span>
        </div>
    </div>
    <div class="alert alert-danger" v-if="error">{{ error }}</div>
 

    <div v-if="data">
                <ul>
            <h1>Pokemons</h1>
            <li v-for="elemento in data.results">
                <RouterLink :to="`/pokemons/${elemento.name}`"> {{ elemento.name }}
                </RouterLink>

            </li>
        </ul>
    </div>
    

</template>