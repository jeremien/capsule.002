<template>
  <ul>
    <li v-for="(objet, i) in objets" :key="i">
      <figure>
        <img :src="getLink(objet.image)" />
        <figcaption>{{objet.titre}}, {{objet.date}}</figcaption>
      </figure>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Objets',
  props: {
    objets: Object
  },
  methods: {
    getLink(img) {
      return `/images/${img}`
    }
  }
}
</script>

<style>

li {
  list-style: none;
}

figure {
  width: 400px;
}

img {
  width: 100%;
}

</style>