<template>
  <div>
    <p>
      {{listname}}
      <a :href="morelink">
        <span id="morelink">更多</span>
      </a>
    </p>

    <div id="moviecard">
      <MovieCover
        v-for="(movie,index) in movieList"
        :key=index
        :name=movie.title
        :rating=movie.rating.average
        :imgpath=movie.images.small
        :href='"/details/"+movie.id'
      ></MovieCover>
    </div>
  </div>
</template>

<script>
import MovieCover from '@/components/MovieCover.vue'
var url=''
export default {
  name: 'MovieListCard',
  props: ['listname', 'morelink'],
  components: { MovieCover },
  data () {
    switch (this.listname) {
      case '影院热映': {
        url = 'in_theaters'
        break
      }
      case '高分电影': {
        url = 'top250'
        break
      }
      case '新片速递': {
        url = 'coming_soon'
        break
      }
      default: {
        url = ''
      }
    }
    return { 
      movieList: [],
      url : url
      }
  },
  mounted() {
    this.axios
      .get("/api/movie/"+this.url)
      .then(response => {
        this.movieList = response.data.subjects;
        console.log(this.movieList)
      })
      .catch(response => {
        console.log(response);
      });
  }
}
</script>

<style>
p {
  padding: 10px 10px 0px 10px;
  color: #333333;
}
span{
  margin:0;
  padding:0;
}
#moviecard {
  padding:0 0 0 10px;
  margin: 0;
}
#morelink {
  /* position: absolute; */
  color: #42bd56;
  /* right: 10px; */
  float:right;
  font-size: 16px;
}
</style>
