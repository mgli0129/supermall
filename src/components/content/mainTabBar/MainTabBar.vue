<template>
  <tab-bar>
    <tab-bar-item link="/home" active-color="red">
      <img alt="" slot="item-icon" src="~assets/img/tabbar/home.svg"/>
      <img alt="" slot="item-icon-active" src="~assets/img/tabbar/home-active.svg"/>
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/category" active-color="red">
      <img alt="" slot="item-icon" src="~assets/img/tabbar/category.svg"/>
      <img alt="" slot="item-icon-active" src="~assets/img/tabbar/category-active.svg"/>
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item link="/cart" active-color="red">
      <img alt="" slot="item-icon" src="~assets/img/tabbar/cart.svg"/>
      <img alt="" slot="item-icon-active" src="~assets/img/tabbar/cart-active.svg"/>
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item link="/profile" active-color="red">
      <img alt="" slot="item-icon" src="~assets/img/tabbar/profile.svg"/>
      <img alt="" slot="item-icon-active" src="~assets/img/tabbar/profile-active.svg"/>
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
