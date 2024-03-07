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
        pokemon.value = false;
    } finally {
        cargado.value = false;
    }
}
getData();

</script>

<template>
    <div class="text-center mt-5" v-if="!pokemon"><h1 class="text-danger text-center mt-5">No existe pokemon</h1> <button @click="back" class="btn btn-outline-success mt-4">Back</button></div>
    <div v-else>
        <div v-if="cargado">
            <div class="spinner-border" role="status">
                <span class="sr-only">Cargando..</span>
            </div>
        </div>
        <div v-else>
            <h1>Poke name: {{ $route.params.pokemon }} </h1>
            <p> Description {{ pokemon.name }} </p>
            <img :src="pokemon.sprites?.front_default" alt="cargando ...">
            <button @click="back" class="btn btn-outline-success">Back</button>
        </div>
    </div>
</template>