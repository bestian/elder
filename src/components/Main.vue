<template>
  <div class="hello">
    <br/>
    <div class="ui equal width grid">
      <div class="column" @click="check()">
        <img v-for="(i, index) in img_list" :key="index"  v-show = "Math.floor(a) % img_list.length == index" class="a" :src="i">
      </div>
      <div class="column" @click="check()">
        <img class="a" :src="img_list[b]">
      </div>
      <div class="column" v-show="hard" @click="check()">
        <img class="a" :src="img_list[c]">
      </div>
    </div>
    <h1>
      <span v-show="!w">{{msg}}
        <br/>
        <br/>
        <div class="ui center aligned segment">
          <div class="ui form">
            <div class="inline fields">
              <div class="field">
                <router-link class = 'ui huge button' to='/edit' exact='' title="Setting">
                  <i class="cogs icon" />編輯照片
                </router-link>
              </div>
              <label>速度：</label>
              <div class="field">
                <div class="ui radio checkbox">
                  <input type="radio" id="one" value="0.25" v-model="speed">
                  <label for="one">慢</label>
                </div>
              </div>
              <div class="field">
                <div class="ui radio checkbox">
                  <input type="radio" id="two" value="0.5" v-model="speed">
                  <label for="two">中</label>
                </div>
              </div>
              <div class="field">
                <div class="ui radio checkbox">
                  <input type="radio" id="three" value="1" v-model="speed">
                  <label for="three">快</label>
                </div>
              </div>
              <label>難度：</label>
              <div class="ui slider checkbox">
                <input type="checkbox" id="checkbox" v-model="hard">
                <label for="checkbox">較難</label>
              </div>
            </div>
          </div>
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
      c: 0,
      w: 0,
      speed: 0.25,
      hard: false,
      msg: '看到相同的照片時，請按空白鍵或點擊某張圖'
    }
  },
  methods: {
    go: function () {
      if (!this.w) {
        if (this.hard && Math.floor(this.a) < Math.floor(this.a + Number(this.speed))) {
          this.b = Math.floor(Math.random() * this.img_list.length)
          this.c = Math.floor(Math.random() * this.img_list.length)
        }
        this.a += Number(this.speed)
      }
    },
    check: function () {
      var ma = Math.floor(this.a) % this.img_list.length
      if (!this.hard) {
        if (ma === this.b) {
          this.win()
        }
      } else {
        if (ma === this.b || ma === this.c || this.b === this.c) {
          this.win()
        }
      }
    },
    reset: function () {
      this.b = Math.floor(Math.random() * this.img_list.length)
      this.c = Math.floor(Math.random() * this.img_list.length)
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
}
a {
  color: #42b983;
  cursor: pointer;
  padding: 3px;
  background-color: #ccc;
  border-radius: 5px;
}

img.a {
  max-width: 100%;
  height: 40vmin;
  border-radius: 30px;
  border: 5px gold ridge;
}

#rainbow {
  width: 5%;
  height: auto;
}

#win1, #win2 {
  z-index: 99999;
  position: fixed;
  width: 300px;
  border-radius: 30px;
  border: 5px gold ridge;
}

#win1 {
  top: 0;
  left: 0;
}

#win2 {
  bottom: 0;
  right: 0;
}

</style>
