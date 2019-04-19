<template>
  <div id="app">
    <TopBar></TopBar>
    <router-view/>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar'
export default {
  name: 'App',
  components:{TopBar}
}
</script>

<style>
TopBar{
  padding:0;
  margin: 0;
}
</style>
