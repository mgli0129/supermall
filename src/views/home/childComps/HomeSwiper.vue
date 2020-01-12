<template>
  <div class="swiper-container" ref="homeSwiper">
    <div class="swiper-wrapper swiper">
      <!--swiper-start: Insert Parts 1/4-->
      <div v-for="(item, index) in banners" :key="index" class="swiper-slide item">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </div>
      <!--swiper-end: Insert Parts-->
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  //swiper-start: Insert Parts 2/4
  import Swiper from 'swiper'
  //swiper-end: Insert Parts

  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default: []
      }
    },
    mounted() {
      //swiper-start: Insert Parts 3/4
      this.$nextTick(() => {
        let homeSwiper = this.$refs.homeSwiper;
        let mySwiper = new Swiper(homeSwiper, {
          observer: true,
          observeParents: true,
          autoplay: {
            delay: 2000
          },
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets'
          }
        });
      })
      //swiper-end: Insert Parts
    }
  }
</script>

<style scoped>
  /*swiper-start: Insert Parts 4/4*/
  @import '~swiper/css/swiper.css';
  .swiper {
    /*height: 300px;*/
  }
  .item {
    height: 100%
  }
  .item img {
    width: 100%;
    height: 100%;
  }

  /*swiper-end: Insert Parts*/

</style>
