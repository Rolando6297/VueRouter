<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const pokemon = ref({});
const cargado = ref(true);
const back = () => {
    router.push('/pokemons')
}
const getData = async () => {
    try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.pokemon}`);
        pokemon.value = data;
    } catch (error) {
        console.log(error);
    } finally {
        cargado.value = false;
    }
}
getData();
 
</script>

<template>
    <div v-if="cargado">
        <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
    <div v-else>
    <h1 >Poke name: {{ $route.params.pokemon }} </h1>
    <p> Description {{pokemon.name }} </p>
    <img :src="pokemon.sprites?.front_default" alt="cargando ...">
    <button @click="back" class="btn btn-outline-success">Back</button>
    </div>
</template>