<template>
  <div class="rating">
    <span>
      <img v-for="n in getStars(rating)" :key="n" class="stars" src="../assets/icon/star-full.png">
      <img
        v-for="n in (5-getStars(rating))"
        :key="n+5"
        class="stars"
        src="../assets/icon/star-grey.png"
      >
    </span>
  </div>
</template>

<script>
export default {
  name: "RatingStar",
  props: ["rating"],
  methods: {
    getStars(rating) {
      return parseInt(rating / 2);
    }
  }
};
</script>

<style>
.rating {
  display: inline-block;
  white-space: nowrap;
}
.stars {
  margin: 0;
  padding: 0;
  width: 15px;
}
</style>
