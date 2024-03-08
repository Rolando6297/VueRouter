<script setup>
import { useFavoritosStore } from '@/store/favoritos';
import { storeToRefs } from 'pinia';

const useFavoritos = useFavoritosStore();
const { favoritos } = storeToRefs(useFavoritos);
const { remove } = useFavoritos;
</script>
<template>
    <h1>Favoritos</h1>
    <h1 class="text-danger" v-if="favoritos.length == 0">No hay favoritos</h1>
    <div v-else>
        <ul class="list-group">
            <li v-for="elemento in favoritos" :key="elemento.id" class="list-group-item">
                <div>
                    {{ elemento.name }}
                </div>
                <img :src="elemento.sprites?.front_default" alt="">
                <div>
                    <button class="btn btn-sm  btn-danger"  @click="remove(elemento.id)" >Quitar de favoritos</button>
                </div>
            </li>
        </ul>

    </div>
</template>