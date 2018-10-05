<template>
  <div>
    <br class="fat-only"/>

    <div class="ui segment container no-print">
      <h1 class="ui header">如何新增照片：</h1>
      <div class="ui large ordered divided list">
        <div class="item">
          <div class="upload-btn-wrapper">
            <button class="btn">選擇檔案</button>
            <input type="file" @change="previewImage" name="photo" id="photo"  accept="image/*">
            <img v-show="url" :src="url" />
          </div>
        </div>
        <div class="item"><input type ="text" v-model="name" placeholder="輸入名字"></div>
        <div class="item">再按「新增」即可 <a class = "ui green huge button" @click="add(url, name); url = ''; name = ''"><i class="plus icon"/>新增{{name}}</a></div>
      </div>
      <div class="ui action input fat-only">
      </div>
    </div><!-- Segment END -->
    <br/>
    <div class="ui four doubling cards">
      <div class="ui card no-print" v-show="url || name">
        <div class="content">
          <div class = "image">
            <img :src="url"/>
          </div>
        </div>
        <div class="extra content">
          <a class="ui green basic button" @click="add(url, name); url = ''; name = ''" title="新增"><i class="plus square icon" />新增{{name}}</a>
        </div>
      </div>
      <div class="ui card" v-for = "(c, index) in card_list" :key="index">
        <div class="content">
          <a class = "image" @click="url = c.img; name = c.name">
            <img :src="c.img"/>
          </a>
        </div>
        <div class="extra content">
          <a class="ui red basic button" @click="remove(index)" title="刪除"><i class="window close icon no-print" />{{c.name}}</a>
        </div>
      </div>
    </div>
    <div class="ui labeled icon menu fat-only no-print">
      <div class="right item">
        <a onclick="window.print()"><i class="print icon" />友善列印</a>
      </div>
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
    },
    previewImage: function (event) {
      var input = event.target
      if (input.files && input.files[0]) {
        var reader = new FileReader()
        reader.onload = (e) => {
          this.url = e.target.result
        }
        reader.readAsDataURL(input.files[0])
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img {
    height: 20vmin;
    max-width: 100%;
    border: 3px gold ridge;
    border-radius: 15px;
  }
  a {
    cursor: pointer;
  }
  a:hover {
    text-decoration: underline;
  }
  input {
    max-width: 75vw !important;
  }
  .fluid {
    width: 100%;
    max-width: 100% !important;
  }
  .list .item {
    font-size: 1.6em;
  }

  .upload-btn-wrapper {
    position: relative;
    overflow: hidden;
    display: inline-block;
  }

  .btn {
    border: 2px solid gray;
    color: gray;
    background-color: white;
    padding: 8px 20px;
    border-radius: 8px;
    font-size: 20px;
    font-weight: bold;
  }

  .upload-btn-wrapper input[type=file] {
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }
</style>
