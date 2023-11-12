<script setup>
import { ref, computed } from 'vue'
const allCountries = ref([])
const searchQuery = ref('')
const filteredCountries = computed(() => {
  if (!searchQuery.value) {
    return allCountries.value
  }
  return allCountries.value.filter(country => 
    country.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
const graphQuery = {
  query: `
  {
    countries {
      name
      capital
      continent {
        name
      }
    }
  }
  `
}
const jsonData = JSON.stringify(graphQuery)
const getImage = () => {
  const Images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
  const index = Math.floor(Math.random() * Images.length);
  return Images[index];
}
fetch('https://countries.trevorblades.com/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: jsonData, 
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText)
  }
  return response.json()
})
.then(data => {
  allCountries.value = data.data.countries.map(item => ({...item, image:getImage()}))
})
.catch(error => {
  console.error('There has been a problem with your fetch operation:', error)
})
</script>
<template lang="pug">
div.pt-4.overflow-x-hidden.row
  .container
    .row
      .col-12
        .row.mb-3
          .col
            input.form-control(type='text', placeholder='Buscar país', v-model='searchQuery')
        div.row
          div.col-4.mb-4(v-for='country in filteredCountries', :key='country.name')
            .card
              .card-body
                img(:src = 'country.image' height = '40') 
                h5.card-title {{ country.name }}
                p.card-text Capital: {{ country.capital }}
                p.card-text Continente: {{ country.continent.name }}
</template>
<style scoped>

</style>





