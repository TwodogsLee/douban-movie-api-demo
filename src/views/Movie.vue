<template>
  <div>
    <div class="moviecard">
      <MovieListCard :listname="'影院热映'" :morelink="'about:blank'"></MovieListCard>
    </div>
    <div class="moviecard">
      <MovieListCard :listname="'高分电影'" :morelink="'about:blank'"></MovieListCard>
    </div>
    <div class="moviecard">
      <MovieListCard :listname="'新片速递'" :morelink="'about:blank'"></MovieListCard>
    </div>
    <div>
      <FindSomething></FindSomething>
    </div>
    <div id="class">
      <p class="list">分类浏览</p>
      <Classes></Classes>
    </div>
    <BottomBar></BottomBar>
  </div>
</template>
<script>
import MovieListCard from '@/components/MovieListCard'
import Classes from '@/components/Classes'
import BottomBar from '@/components/BottomBar'
import FindSomething from '@/components/FindSomething'
export default {
    name:'Home',
    components: { MovieListCard, FindSomething, Classes, BottomBar}
}
</script>
<style>
#moviecard {
  white-space: nowrap;
  overflow-x: auto;
}
#moviecard::-webkit-scrollbar {
  width: 0;
  height: 0;
  display: none;
}
.list {
  margin: 10px;
  overflow-x: auto;
  white-space: nowrap;
}

</style>
