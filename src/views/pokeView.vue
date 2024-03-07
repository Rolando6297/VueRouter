<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useGetData } from '@/composables/getData';
import {useCounterStore} from '@/store/counter.js'
const useCounter = useCounterStore()
const router = useRouter();
const route = useRoute();
const { data, getData, loading, error } = useGetData();
const back = () => {
    router.push('/pokemons')
}
getData(`https://pokeapi.co/api/v2/pokemon/${route.params.pokemon}`);


</script>

<template>
    <div v-if="loading">
        <div class="text-center">
            <div class="spinner-border" role="status">
                <span class="sr-only">Cargando..</span>´´
            </div>
        </div>
    </div>
    <div v-else>
        <div class="text-center mt-5" v-if="!data">
            <h1 class="text-danger text-center mt-5">No existe pokemon</h1>
            <div class="alert alert-danger" v-if="error">{{ error }}</div>
            <button @click="back" class="btn btn-outline-success mt-4">Back</button>
        </div>
        <div v-else>
            <div>
                <h1>Poke name: {{ $route.params.pokemon }}   {{ useCounter.double }}</h1>
                <p> Description {{ data.name }} </p>
                <img :src="data.sprites?.front_default" alt="cargando ...">
                <button @click="back" class="btn btn-outline-success">Back</button>
            </div>
        </div>
    </div>
</template>