<script setup>
import { RouterLink } from 'vue-router'
import { useGetData } from '@/composables/getData'

const { data, getData, loading, error } = useGetData();
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
        <ul class="list-group">
            <h1>Pokemons</h1>
            <li class="list-group-item list-group-item-info " v-for="elemento in data.results">
                <RouterLink :to="`/pokemons/${elemento.name}`"> {{ elemento.name }}
                </RouterLink>

            </li>
        </ul>
        <div class="mt-2">
            <button class="btn btn-warning me-1" :disabled="!data.previous"
                @click="getData(data.previous)">Previous</button>
            <button class="btn btn-success" :disabled="!data.next" @click="getData(data.next)">Next</button>
        </div>
    </div>


</template>