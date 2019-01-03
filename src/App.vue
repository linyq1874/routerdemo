<template>
  <div id="app">
    <router-view/>

    <nav>
      <ul>
        <li
          v-for="(item, index) in navInfo"
          :key="'nav'+index"
          class="item"
          :class="{active: index == curIndex}"
          @click="changeIndex(index)"
        >
          <i :style="{backgroundImage:`url(${item.imgSrc})`}" v-if="index !== curIndex"></i>
          <i :style="{backgroundImage:`url(${item.activeImgSrc})`}" v-if="index == curIndex"></i>
          <span class="title">{{item.title}}</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      curIndex: 0,
      navInfo: [
        {
          title: "违法建设",
          imgSrc: require("./assets/project.png"),
          activeImgSrc: require("./assets/project_active.png")
        },
        {
          title: "违法建设",
          imgSrc: require("./assets/supervision.png"),
          activeImgSrc: require("./assets/supervision_active.png")
        },
        {
          title: "违法建设违法",
          imgSrc: require("./assets/manage.png"),
          activeImgSrc: require("./assets/manage_active.png")
        }
      ]
    };
  },
  methods: {
    changeIndex(index) {
      this.curIndex = index;
    }
  }
};
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
#app {
  background:  #211a36;
  /* outline: 9999px solid  #211a36;
    clip: (0 9999px 9999px 0);*/
  color: #fff;
}
nav {
  height: 400px;
  background: #211a36;
}
.item {
  cursor: pointer;
  float: left;
  list-style: none;
  display: inline-block;
  padding: 15px 60px;
}

.item i {
  display: inline-block;
  width: 40px;
  height: 40px;  
  background-repeat: no-repeat;
  background-position: center;
  vertical-align: middle;
}

.active {
  background: url("./assets/titleBG1.png") no-repeat center;
  background-size: 100% 100%;
}

.title {
  width: 282px;
  height: 100px;
  line-height: 100px;
  /* text-align: center; */
  font-size: 40px;
   vertical-align: middle;
}
</style>
