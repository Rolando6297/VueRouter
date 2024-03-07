import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import PokemonsView from '@/views/pokemonsView.vue';
import pokemonsView from '@/views/pokemonsView.vue';
import pokeView from '@/views/pokeView.vue';
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass:"active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/pokemons',
      name: 'pokemons',
      component: pokemonsView
    },
    {
      path: '/pokemons/:pokemon',
      name: 'poke',
      component: pokeView
    },
    {
      path: '/favoritos',
      name: 'favoritos',
      component:  () => import("@/views/Favoritos.vue")
    },
    {
      path: "/:pathMatch(.*)*",
      name: 'NotFound',
      component: NotFoundView

    }
  ]
})

export default router
