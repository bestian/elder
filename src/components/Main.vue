<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div>
      <div id = "left">
        <ul v-for="i in img_list" :key = "i">
          <li>
            {{i}}
            <img :src="i">
          </li>
        </ul>
      </div>
      <div id = "right">
        <img :src="img_r">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '請按空白鍵',
      img_l: 'static/img/be001.5de86c5.jpg',
      img_r: 'static/img/water001.00969a7.jpg',
      img_list: ['static/img/water001.00969a7.jpg', 'static/img/water002.cf560ba.jpg', 'static/img/be001.5de86c5.jpg', 'static/img/au001.5c5fd00.jpg']
    }
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
}
#left, #right {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: inline-block;
  width: 40%;
}
</style>
