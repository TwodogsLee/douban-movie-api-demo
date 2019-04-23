<template>
  <li>
    <router-link :to="href">
      <img class="moviecover" :src="imgpath" alt="gg">
    <br>
    <div id="text-area">{{name}}</div>
    </router-link>
    <div class="rating">
      <span>
        <!-- 画黄星星 -->
        <span>
          <img v-for="n in stars(rating)" :key="n" class="stars" src="../assets/icon/star-full.png">
        </span>
        <!-- 画灰星星 -->
        <span>
          <img
            v-for="n in (5-stars(rating))"
            :key="n + 5"
            class="stars"
            src="../assets/icon/star-grey.png"
          >
        </span>
        <span id="ratingscore">{{rating}}</span>
      </span>
    </div>
  </li>
</template>

<script>
export default {
  name: 'MovieCover',
  props: ['id', 'name', 'rating', 'imgpath', 'href'],
  methods: {
    stars (rating) {
      return parseInt(rating / 2)
    }
  }
}
</script>

<style>
li {
  display: inline-block;
}
.moviecover {
  width: 100px;
  height: 142px;
  padding:5px;
}
.stars {
  width: 12px;
  margin: 0;
  padding: 0;
}
#text-area {
  color: #000;
  position: relative;
  text-align: center;
  overflow: hidden;
  width: 100px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
router-link{
  text-decoration: none
}
.rating {
  line-height: 15px;
  width:100px;
}
#ratingscore {
  font-size: 5px;
  color: #aaaaaa;
  height: 15px;
}
</style>
