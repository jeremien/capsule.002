<template>
  <objets 
    :objets="objets"
  />
</template>

<script>
import Objets from './components/Objets.vue'

export default {
  name: 'App',
  components: {
    Objets
  },
  data() {
    return {
      objets: [
        {
          titre: 'Portacarte e Portamatite di Marmo',
          date: '1960',
          image: '036.jpg'
        },
        {
          titre: 'Guardare un Fotografo',
          date: '2000',
          image: '013.jpg'
        },
        {
          titre: 'Portaritratti',
          date: '1965',
          image: '033.jpg'
        }
      ]
    }
  }
}
</script>

<style>
#app {
  background: white;
}
</style>
