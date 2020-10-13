<template>
  <h1>Loading: {{loading}}</h1>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class App extends Vue {
  loading = false
  mounted () {
    setTimeout(() =>{
      this.loading = true
    }, 1000)
    setTimeout(() =>{
      this.loading = false
    }, 2000)
  }
}
</script>
