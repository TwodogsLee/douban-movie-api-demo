<!-- 头部 650*47 -->
<template>
  <div class="topbar">
    <h1 id="logo">豆瓣</h1>
    <router-link to="/menu">
    <img src="@/assets/icon/menu.png" alt="gg" id="menuimg">
    </router-link>
    <a href="about:blank">
      <div id="link-douban">打开豆瓣APP</div>
    </a>
  </div>
</template>

<style>
.topbar {
  background:white;
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 700px;
  height: 47px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  z-index: 100;
}
.topbar h1 {
  font-size: 24px;
  float: left;
  margin: 10px 10px 10px 10px;
  color: #42bd56;
  font-family: "Helvetica Neue";
  font-weight: normal
}
#menuimg {
  float: left;
  max-height: 20px;
  margin: 15px 10px 10px 5px;
}
#link-douban {
  /* position: absolute; */
  /* right: 10px; */
  float:right;
  margin: 10px;
  padding: 5px;
  background: #42bd56;
  background-size: 80px 60px;
  border-radius: 4px;
  color: white;
  font-size: 14px;
}
</style>
