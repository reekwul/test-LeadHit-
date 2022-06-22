<template>

    <v-avtorization/>
    <v-analitics/>
</template>

<script>

import VAvtorization from "@/components/v-avtorization";
import VAnalitics from "@/components/v-analitics";
export default {
  name: 'App',
  components: {
      VAnalitics,
      VAvtorization

  }
}
</script>

<style>
app {
  display: flex;
    flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
