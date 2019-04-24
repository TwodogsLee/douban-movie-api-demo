<template>
  <div class="detailCard">
    <h1>{{movieInfo.title}}</h1>
    <div class="infoCard">
      <div id="info-outer">
        <div id="info">
          <div id="rating">
            <RatingStar :rating="getRating"></RatingStar>
            {{getRating}}
            <span class="ratingNum">{{getRatingNum}}人已评价</span>
          </div>
          {{getInfo}}
        </div>
      </div>
      <div id="cover">
        <img :src="movieInfo.image" alt="gg" width="100px">
      </div>
    </div>
    <div class="mark-item">
        <span>想看</span>
        <span>看过</span>
    </div>
    <div>
      <h2>所属频道</h2>
      <li v-for="(item,index) in getTags" :key="index" class="tags">{{item}}</li>
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
    //导演
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
    getTags() {
      var result = [];
      var temp = [];
      if (this.movieInfo.attrs != undefined) {
        temp = this.movieInfo.tags;
        for (var i = 0; i < temp.length; i++) {
          result.push(temp[i].name + "  >");
        }
        return result;
      } else {
        return "";
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
.infoCard {
  height: 150px;
  margin: 0 auto;
  overflow: hidden;
}
.infoCard #cover {
  max-width: 700px;
  width: 100px;
  float: right;
}
.infoCard #info-outer {
  float: left;
  width: 100%;
  margin-left: -120px;
}
#info {
  margin-left: 120px;
}
.tags {
  display: inline-block;
  background-color: #effaf0;
  border: 1px solid #42bd56;
  color: #42bd56;
  font-size: 13px;
  border-radius: 15px;
  padding: 5px 10px;
  margin-right: 10px;
  margin-bottom: 10px;
}
RatingStar {
  display: inline-block;
}
#rating {
  white-space: nowrap;
  line-height: 20px;
}
.detailCard {
  padding: 5px 15px 5px 15px;
}
.mark-item{
  margin: 10px 0 0 0;
  width:100%
}
.mark-item span{
  display:inline-block;
  line-height:30px;
  width:49%;
  border:1px solid #ffb712;
  border-radius: 3px;
  color:#ffb712;
  text-align: center;
}
</style>
