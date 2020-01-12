<template>
  <div id="app">
    <router-view/>
    <main-tab-bar></main-tab-bar>

    <!--    <button @click="getQ">获取数据</button>-->

    <!--    <ul>-->
    <!--      <li v-for="(value,key) in commentdto">{{key}}: {{value}}</li>-->
    <!--    </ul>-->
    <!--    <hr>-->
    <!--    <br>-->
    <!--    <button @click="postQ">获取数据</button>-->
    <!--    <span>{{out}}</span>-->

  </div>
</template>

<script>

  import MainTabBar from '@/components/content/mainTabBar/MainTabBar'

  export default {
    name: 'app',
    components: {
      MainTabBar
    },
    // data() {
    //   return {
    //     id: '17',
    //     commentdto: null,
    //     question: {
    //       title: 'vue axios2',
    //       content: 'The 2 vue axios sample!',
    //       tag: 'vue.js',
    //       nid: null,
    //     },
    //     out: null
    //   }
    // },
    // methods: {
    //   getQ() {
    //     this.$api.mgcomm.getQuestion(this.id).then(res => this.commentdto = res)
    //   },
    //
    //   postQ() {
    //     console.log('hellooooo');
    //     this.$api.mgcomm.postQuestion(this.question).then(res => {
    //       console.log(res);
    //       this.out = res.data;
    //     })
    //   }
    //
    // }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
