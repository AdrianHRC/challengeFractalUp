<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
const currentPath = computed(() => route.path);
const rutas = [
  { name: 'Home', path: '/' },
  { name: 'Vista 1', path: '/vista1' },
  { name: 'Vista 2', path: '/vista2' },
];
function navigateTo(path) {
  router.push(path);
}
</script>
<template lang="pug">
nav
  h1.logo Logo
  ul
    li(v-for="ruta in rutas" :key="ruta.path" @click="navigateTo(ruta.path)" :class="{ 'active': ruta.path === currentPath }")
      span {{ ruta.name }}
</template>
<style scoped>
nav {
  background-color: #5f5f5f;
  width: 200px;
  height: 100vh;
  padding-top: 20px;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  z-index: 2;
}
h1.logo {
  background-color: #ecf0f1;
  color: #5f5f5f;
  width: 80%;
  padding: 20px 10px;
  text-align: center;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
}
ul {
  color: #5f5f5f;
  list-style-type: none;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
li {
  background-color: transparent; 
  color: #ecf0f1; 
  width: 80%; 
  padding: 10px; 
  margin-bottom: 10px; 
  text-align: start; 
  border-radius: 10px; 
  transition: background-color 0.2s; 
  cursor: pointer; 
  font-size: 18px;
}
li:hover {
  background-color: #9a9a9a;
}
li.active {
  background-color: #ffffff;
  color: #5f5f5f;
}
@media (max-width: 768px) {
  nav {
    width: 100%; 
    height: auto; 
    flex-direction: row; 
    justify-content: center; 
    padding-top: 0;
    top: 0;
    left: 0;
  }

  h1.logo {
    margin: 10px;
    width: 50%;
  }

  ul {
    flex-direction: row; /* Cambia la dirección de columna a fila para los elementos de la lista */
    align-items: center;
    padding: 0; /* Elimina el relleno izquierdo que podría estar presente */
  }

  li {
    padding: 10px 5px; /* Relleno menor para los elementos de la lista en dispositivos móviles */
    margin: 0 5px; /* Menos margen entre elementos de lista */
    font-size: 16px; /* Opcional: ajusta el tamaño de la fuente para dispositivos móviles */
  }
}
</style>

