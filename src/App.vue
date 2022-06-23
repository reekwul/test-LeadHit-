<template>
    <router-view></router-view>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>
#app {
  display: flex;
    flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
h1{
    margin: 10px;
    padding: 10px;
    position: relative;
    left: 100px;
    font-size: 50px;
}
hr{
    align-self: center;
    width: 90%;
    border:  1px solid darkcyan;
    box-shadow: 0px 3px 9px rgba(0,0,0, 0.5) ;
    margin: 0 0 50px;
}
</style>
