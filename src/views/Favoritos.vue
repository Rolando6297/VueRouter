<script setup>
import { useFavoritosStore } from '@/store/favoritos';
import { storeToRefs } from 'pinia';

const useFavoritos = useFavoritosStore();
const {favoritos} = storeToRefs(useFavoritos) ;
</script>
<template>
<h1>Favoritos</h1>
<h1 class="text-danger" v-if="favoritos.length ==0">No hay favoritos</h1>
<div v-else>
    <ul class="list-group">
        <li v-for="elemento in favoritos" class="list-group-item">
            {{ elemento.name }}
        </li>
    </ul>

</div>
</template>