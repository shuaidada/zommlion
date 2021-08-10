<template>
  <div id="app">
    <div class="Navigation">
      <p class="NavigationBen">
        <i class="cubeic-back" @click="$router.go(-1)" ></i>
      </p>
      <span class="title">{{ $route.name }}</span>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  .Navigation {
    position: relative;
    z-index: 100;
    width: 100%;
    height: 45px;
    line-height: 45px;
    font-size: 17px;
    background-color: #fff;
    .NavigationBen {
      width: 45px;
      height: 45px;
      position: absolute;
      font-size: 15px;
      z-index: 2;
    }
    .title {
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
    }
  }
}

</style>
