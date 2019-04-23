<template>
  <div id="bottom-item">
    <div class="bottom-item-info">
      <div class="bottom-item-info-a">
        <img src="../../src/assets/douban-app-logo.png" width="48px" height="48px">
      </div>
      <div class="bottom-item-info-b">豆瓣</div>
    </div>
    <div>
      <p>
        <a id="download" href="https://www.douban.com/doubanapp">免费下载 Android 客户端</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
#bottom-item {
  text-align: center;
}
.bottom-item-info .bottom-item-info-a {
  display: inline-block;
  vertical-align: middle;
}
.bottom-item-info .bottom-item-info-b {
  display: inline-block;
  font-size: 23px;
  padding: 0 0 0 5px;
}
#download {
  color: #42bd56;
  text-decoration: none;
}
</style>
