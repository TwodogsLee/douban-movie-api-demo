<template>
  <div class="detailCard">
    <h1>{{movieInfo.title}}</h1>
    <div width="100%" height="150px">
      <div id="info">
        <div id="rating">
          <RatingStar :rating="getRating"></RatingStar>
          {{getRating}}
          <span class="ratingNum">{{getRatingNum}}人已评价</span>
        </div>
        <p>{{getInfo}}</p>
      </div>
      <img :src="movieInfo.image" id="cover" alt="gg">
    </div>
    <div class="differ_type">
      <ul>
        <li>想看</li>
        <li>看过</li>
      </ul>
    </div>
    <div>
      <h2>所属频道</h2>
      <li v-for="(item,index) in getTags"
      :key="index" class='tags'>
      {{item}}
      </li>
    </div>
      <h2>{{movieInfo.title}}的剧情简介</h2>
      <p>{{movieInfo.summary}}</p>
      <h2>影人</h2>
      <h2>{{movieInfo.title}}的短评</h2>
  </div>
</template>
<script>
import RatingStar from "@/components/RatingStar";
export default {
  name: "fordetails",
  components: { RatingStar },
  data() {
    return {
      movieInfo: {}
    };
  },
  mounted() {
    this.axios
      .get("/api/movie/" + this.$route.params.id)
      .then(response => {
        this.movieInfo = response.data;
        console.log(this.movieInfo);
      })
      .catch(response => {
        console.log(response);
      });
  },
  methods: {
    merge: function(...str) {
      var result = "";
      for (var i = 0; i < str.length; i++) {
        if (str[i] != "") {
          if (i < str.length - 1) {
            result += str[i] + " / ";
          } else {
            result += str[i];
          }
        }
      }
      return result;
    },
    arrToStr: function(arr) {
      var result = "";
      for (var i = 0; i < arr.length; i++) {
        if (i < arr.length - 1) {
          result += arr[i] + " / ";
        } else {
          result += arr[i];
        }
      }
      return result;
    }
  },
  computed: {
    //   好多函数是判断前一个是否为 undefined ，后面不知道可不可以修改一下
    getRating() {
      //&& this.movieInfo.rating.average!='' && this.movieInfo.rating.average!=null
      if (this.movieInfo.rating != undefined) {
        return this.movieInfo.rating.average;
      } else {
        return 0;
      }
    },
    getRatingNum() {
      //&& this.movieInfo.rating.numRaters!=''
      if (this.movieInfo.rating != undefined) {
        return this.movieInfo.rating.numRaters;
      } else {
        return 0;
      }
    },
    getDirector() {
      if (this.movieInfo.attrs != undefined) {
        return this.movieInfo.attrs.director[0] + "（导演）";
      } else {
        return "";
      }
    },
    //时长
    getDuration() {
      if (this.movieInfo.attrs != undefined) {
        return this.movieInfo.attrs.movie_duration[0];
      } else {
        return "";
      }
    },
    //类型
    getType() {
      var str = "";
      var type = [];
      if (this.movieInfo.attrs != undefined) {
        type = this.movieInfo.attrs.movie_type;
        return this.arrToStr(type);
      } else {
        return "";
      }
    },
    //主角信息
    getMainCast() {
      var str = "";
      var cast = [];
      if (this.movieInfo.attrs != undefined) {
        cast = this.movieInfo.attrs.cast;
        var len = cast.length;
        if (len <= 3) {
          return this.arrToStr(cast);
        } else {
          return this.arrToStr(cast.slice(0, 2));
        }
      }
    },
    //上映日期
    getPubdate() {
      if (this.movieInfo.attrs != undefined) {
        return this.movieInfo.attrs.pubdate[0];
      } else {
        return "";
      }
    },
    //标签
    getTags(){
      var result=[];
      var temp=[];
      if (this.movieInfo.attrs != undefined){
        temp=this.movieInfo.tags;
        for(var i=0;i<temp.length;i++){
          result.push(temp[i].name+"  >")
        }
        return result;
      }else{
        return ""
      }
    },
    getInfo() {
      return this.merge(
        this.getDuration,
        this.getType,
        this.getDirector,
        this.getMainCast,
        this.getPubdate
      );
    }
  }
};
</script>
<style>
.detailCard h1 {
  font-size: 22px;
  font-weight: normal;
}
.detailCard h2 {
  font-weight: normal;
  font-size: 15px;
  color: #555;
}
.ratingNum {
  color: #999;
  padding: 0 0 0 5px;
}
.tags{
  display: inline-block;
  background-color:#effaf0;
  border:1px solid #42bd56;
  color:#42bd56;
  font-size: 13px;
  border-radius:15px;
  padding:5px 10px;
  margin-right:10px;
  margin-bottom: 10px; 
}
RatingStar {
  display: inline-block;
}
#rating {
  white-space: nowrap;
  line-height: 20px;
}
#cover {
  display:inline-block;
  position: absolute;;
  width: 100px;
  right:10px;
}
.detailCard {
  margin: 5px 15px 5px 15px;
}
.differ_type ul{
  width:100%;
  display:inline-block;
}
.differ_type li{
  width:49%;
  display:inline-block;
  background-color:#effaf0;
  border:1px solid #42bd56;
  color:#42bd56;
  padding:5px 10px;
}
#info #cover {
  width: 100px;
}
#info {
  display: inline-block;
}
/* as follows are from other component */
</style>
