<template>
  <div class="hello">
    <h1>
      <span v-show="!w">
        <router-link class = 'ui huge button' to='/edit' exact='' title="Setting">
          <i class="cogs icon" />編輯照片
        </router-link>
      </span>
    </h1>
    <div>
      <div id = "left" @click="check()">
        <ul v-for="(i, index) in img_list" :key="index">
          <li v-show = "Math.floor(a) % img_list.length == index">
            <img class="a" :src="i">
          </li>
        </ul>
      </div>
      <div id = "right" @click="check()">
        <img class="a" :src="img_list[b]">
      </div>
    </div>
    <h1>
      <span v-show="!w">{{msg}}
        <br/>
        <div class="ui buttons">
          <a class="ui huge blue button" @click="speed-=0.25" v-show="speed>0.25">慢些！</a>
          <a class="ui huge green button" @click="speed+=0.25" v-show="speed<1">快些！</a>
        </div>
      </span>
    </h1>
    <img id = "win1" v-show="w" src = "../assets/animated-congratulation-image-0058.gif"/>
    <img id = "win2" v-show="w" src = "../assets/animated-congratulation-image-0058.gif"/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['img_list'],
  data () {
    return {
      a: 0,
      b: 0,
      w: 0,
      speed: 0.25,
      msg: '看到相同的照片時，請按空白鍵'
    }
  },
  methods: {
    go: function () {
      if (!this.w) {
        this.a += this.speed
      }
    },
    check: function () {
      if (Math.floor(this.a) % this.img_list.length === this.b) {
        this.win()
      }
    },
    reset: function () {
      this.b = Math.floor(Math.random() * this.img_list.length)
      this.w = 0
    },
    win: function () {
      this.w++
      setTimeout(this.reset, 3000)
    }
  },
  mounted () {
    setInterval(this.go, 500)
    this.reset()
    window.addEventListener('keyup', this.check)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  cursor: pointer;
  padding: 3px;
  background-color: #ccc;
  border-radius: 5px;
}
#left, #right {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: inline-block;
  width: 40%;
}

img.a {
  max-width: 100%;
  height: 40vmin;
  border-radius: 30px;
}

#rainbow {
  width: 5%;
  height: auto;
}

#win1 {
  z-index: 99999;
  position: fixed;
  width: 300px;
  top: 0;
  left: 0;
}

#win2 {
  z-index: 99999;
  position: fixed;
  width: 300px;
  bottom: 0;
  right: 0;
}

</style>
