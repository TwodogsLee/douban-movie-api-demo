<!-- 头部 650*47 -->
<template>
  <div class="topbar">
    <h2 id="logo">豆瓣</h2>
    <a href="about:blank">
      <div id="link-douban">打开豆瓣APP</div>
    </a>
  </div>
</template>

<style>
.topbar {
  background:coral;
  position: fixed;
  top: 0;
  width: 100%;
  height: 47px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  z-index: 100;
}
h2 {
  float: left;
  margin: 10px 10px 10px 10px;
  color: #42bd56;
  font-family: "Helvetica Neue";
}
#link-douban {
  position: absolute;
  right: 10px;
  margin: 10px;
  padding: 5px;
  background: #42bd56;
  background-size: 80px 60px;
  border-radius: 4px;
  color: white;
  font-size: 14px;
}
</style>
