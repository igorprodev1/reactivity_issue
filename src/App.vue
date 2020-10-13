<template>
  <h1>Loading: {{loading}}</h1>
  <hr />
  <button @click="onToggLoading">Toggle loading</button>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class App extends Vue {
  loading = false

  onToggLoading() {
    this.loading=!this.loading
    console.log('this.loading', this.loading)
  }

  mounted () {
    setTimeout(() => {
      this.loading = true
      console.log('this.loading',this.loading)
    }, 1000)
    setTimeout(() => {
      this.loading = false
      console.log('this.loading',this.loading)
    }, 2000)
  }
  watch = {
    loading (newV: boolean , oldV: boolean) {
      console.log('loading', newV, oldV)
    }
  }
}
</script>
