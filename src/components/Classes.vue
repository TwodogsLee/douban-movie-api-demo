<template>
  <div>
    <ul class="class">
      <li v-for="(item,id) in classes" :key="id" class="class">
        <a :href="item.link" class="class">{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      classes: [
        { name: '经典', link: '/jingdian' },
        { name: '冷门佳片', link: '/lengmen' },
        { name: '豆瓣高分', link: '/doubangaofen' },
        { name: '动作', link: '/dongzuo' },
        { name: '喜剧', link: '/xiju' },
        { name: '爱情', link: '/aiqing' },
        { name: '悬疑', link: '/xuanyi' },
        { name: '恐怖', link: '/kongbu' },
        { name: '科幻', link: '/kehuan' },
        { name: '治愈', link: '/zhiyu' },
        { name: '文艺', link: '/wenyi' },
        { name: '成长', link: '/chengzhang' },
        { name: '动画', link: '/donghua' },
        { name: '华语', link: '/hauyu' },
        { name: '欧美', link: '/oumei' },
        { name: '韩国', link: '/hanguo' },
        { name: '日本', link: '/riben' }
      ]
    }
  }
}
</script>
<style>
.class ul {
  width: 100%;
  margin-left: 0px;
  list-style-type: none;
}
.class li {
  width: 50%;
  list-style-type: none;
  display: inline-block;
  /* border: 1px solid #ddd; */
}
.class a {
  color: #42bd56;
  text-decoration: none;
  font-size: 14px;
  line-height: 40px;
}
</style>
