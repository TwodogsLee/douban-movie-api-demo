<template>
  <div id="app">
    <div id="topbar">
    <TopBar></TopBar>
    </div>
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
#topbar{
  height:50px;
}
body{
  margin:0 auto;
  background-color: #f6f6f6;
}
#app{
  max-width: 700px;
  margin: 0 auto;
	overflow: hidden;
  background-color: white;
}
a{
  /* router-link 是 a 标签来实现的，去除它的下划线 */
  text-decoration: none;
}
</style>
