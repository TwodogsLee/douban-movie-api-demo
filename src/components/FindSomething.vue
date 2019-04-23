<template>
  <div class="findsomething">
    <p>发现好电影</p>
    <ul>
      <li style="border-color: #2384E8;">
        <a
          href="https://m.douban.com/doulist/968362/"
          style="color: #2384E8;"
        >同时入选IMDB250和豆瓣电影250的电影</a>
      </li>
      <li style="border-color: #4F9DED;">
        <a href="https://m.douban.com/doulist/16002/" style="color: #4F9DED;">带你进入不正常的世界</a>
      </li>
      <li style="border-color: #FFC46C;">
        <a href="https://m.douban.com/doulist/190343/" style="color: #FFC46C;">用电【影】来祭奠逝去的岁月</a>
      </li>
      <li style="border-color: #42BD56;">
        <a href="https://m.douban.com/doulist/1125971/" style="color: #42BD56;">女孩们的故事【电影】</a>
      </li>
      <br>
      <li style="border-color: #42BD56;">
        <a
          href="https://www.douban.com/doubanapp/card/get_app?from=mdouban&amp;client_uri=douban%3A%2F%2Fdouban.com%2Fmovie%2Ftag&amp;model=B&amp;copy=1&amp;page=movie&amp;channel=card_find_movie"
          style="color: #42BD56;"
        >使用 App 【找电影】功能</a>
      </li>
      <li style="border-color: #3BA94D;">
        <a
          href="https://m.douban.com/doulist/4253902/"
          style="color: #3BA94D;"
        >科幻是未来的钥匙。【科幻题材佳作·收藏必备】</a>
      </li>
      <li style="border-color: #FF4055;">
        <a href="https://m.douban.com/doulist/121326/" style="color: #FF4055;">美国生活面面观</a>
      </li>
      <li style="border-color: #CC3344;">
        <a href="https://m.douban.com/doulist/37479562/" style="color: #CC3344;">2015终极期待</a>
      </li>
      <li style="border-color: #FFAC2D;">
        <a href="https://m.douban.com/doulist/458087/" style="color: #FFAC2D;">经典韩国电影——收集100部</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {}
</script>
<style>
.findsomething a {
  text-decoration: none;
  text-align: center;
  height: 50px;
  line-height: 50px;
}
.findsomething ul {
  list-style-type: none;
  margin: 0 0 0 -30px;
  overflow-x: auto;
  white-space: nowrap;
}
.findsomething li {
  border: 1px solid;
  border-radius: 4px;
  vertical-align: center;
  display: inline-block;
  margin: 5px;
  padding:0 20px 0 20px;
}
.findsomething ul::-webkit-scrollbar {
  width: 0;
  height: 0;
  display: none;
}
</style>
