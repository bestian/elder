<template>
  <div>
    <br class="fat-only"/>
    <div class="ui four doubling cards">
      <div class="ui card" v-for = "(c, index) in card_list" :key="index">
        <div class="content">
          <a class = "image" @click="url = c.img; name = c.name">
            <img :src="c.img"/>
          </a>
        </div>
        <div class="extra content">
          <a class="ui red basic button" @click="remove(index)" title="刪除"><i class="window close icon" />{{c.name}}</a>
        </div>
      </div>
      <div class="ui card" v-show="url || name">
        <div class="content">
          <div class = "image">
            <img :src="url"/>
          </div>
        </div>
        <div class="extra content">
          <a class="ui green basic button" @click="add(url, name); url = ''; name = ''" title="新增"><i class="plus square icon" />新增{{name}}</a>
        </div>
      </div>
    </div>
    <div>
      <h1>請將您自選的照片上傳至<a href = "https://www.imgur.com" target="_blank">imgur</a>，<br class="thin-only"/>取得網址後，再貼上</h1>
    </div>
    <br/>
    <div class="ui action input fat-only">
      <a v-show = "!url" class = "ui blue button" href="https://imgur.com/" target = "_blank" title = "上傳照片"><i class="cloud upload icon"/>上傳照片</a>
      <input type ="text" v-model="url" placeholder="新增圖片網址">
      <input type ="text" v-model="name" placeholder="新增名字">
      <img v-show = "url" :src="url"/>
      <a v-show = "url && name" class = "ui green button" @click="add(url, name); url = ''; name = ''"><i class="plus icon"/>新增{{name}}</a>
    </div>
    <div class="thin-only">
      <a v-show = "!url" class = "ui blue button" href="https://imgur.com/" target = "_blank" title = "上傳照片"><i class="cloud upload icon"/>上傳照片</a><br/>
      <input class = "fluid" type ="text" v-model="url" placeholder="新增圖片網址"><br/>
      <input class = "fluid" type ="text" v-model="name" placeholder="新增名字"><br/>
      <img v-show = "url" :src="url"/><br/>
      <a v-show = "url && name" class = "ui green button" @click="add(url, name); url = ''; name = ''"><i class="plus icon"/>新增{{name}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Editor',
  props: ['card_list'],
  data () {
    return {
      url: '',
      name: ''
    }
  },
  methods: {
    add: function (url, name) {
      this.$emit('add', url, name)
    },
    remove: function (index) {
      this.$emit('remove', index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img {
    height: 15vmin;
    max-width: 100%;
    border: 3px gold ridge;
  }
  a {
    cursor: pointer;
  }
  a:hover {
    text-decoration: underline;
  }
  input {
    max-width: 30vw !important;
    font-size: 1.5em;
  }
  .fluid {
    width: 100%;
    max-width: 100% !important;
  }
</style>
