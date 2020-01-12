<template>
  <div class="swiper-container" ref="swiperContainer">
    <div class="swiper-wrapper swiper">
      <!--swiper-start: Insert Parts 1/4-->
      <div v-for="(item, index) in images" :key="index" class="swiper-slide item">
        <img :src="item" alt="">
      </div>
      <!--swiper-end: Insert Parts-->
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  //swiper-start: Insert Parts 2/4
  import Swiper from 'swiper/js/swiper.min.js';
  //swiper-end: Insert Parts

	export default {
		name: "DetailSwiper",
    props: {
		  images: {
		    type: Array,
        default() {
		      return []
        }
      }
    },
    mounted() {
      //swiper-start: Insert Parts 3/4
      this.$nextTick(() => {
        let swiperContainer = this.$refs.swiperContainer;
        let mySwiper = new Swiper(swiperContainer, {
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
        })
      })
      //swiper-end: Insert Parts
    }
	}
</script>

<style scoped>
  /*swiper-start: Insert Parts 4/4*/
  @import '~swiper/css/swiper.css';
  .swiper {
    width: 100px;
    /*flex-shrink: 0;*/
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
