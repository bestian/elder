<template>
  <div>
    <br class="fat-only"/>

    <div class="ui segment container no-print">
      <h1 class="ui header">如何新增照片：</h1>
      <div class="ui large ordered list">
        <div class="item">
          <div class="upload-btn-wrapper">
            <button class="btn"><i class="upload icon"/>選擇圖檔</button>
            <input type="file" @change="previewImage" name="photo" id="photo"  accept="image/*">
            <img v-show="url" :src="url" />
          </div>
        </div>
        <div class="item"><input type ="text" v-model="name" placeholder="輸入名字"></div>
        <div class="item">再按「新增」即可 <a class = "ui green huge button" @click="addCard(url, name); url = ''; name = ''"><i class="plus icon"/>新增{{name}}</a></div>
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
          <a class="ui green basic button" @click="addCard(url, name); url = ''; name = ''" title="新增"><i class="plus square icon" />新增{{name}}</a>
        </div>
      </div>
      <div class="ui card" v-for = "(c, index) in card_list" :key="index">
        <div class="content">
          <a class = "image" @click="url = c.img; name = c.name">
            <img :src="c.img" v-bind:class="c.hide ? 'hide' : 'show'" />
          </a>
        </div>
        <div class="extra content">
          <a class="ui red basic button" @click="removeCard(index)" title="刪除"><i class="window close icon no-print" />{{c.name}}</a>
          <div class="ui checkbox">
            <input type="checkbox" name="example" v-model="c.hide" @change="hideShow(index, c.hide)">
            <label>隱藏{{c.name}}</label>
          </div>
        </div>
      </div>
    </div>
    <div class="ui labeled icon menu fat-only no-print">
      <div class="item">
        <a @click="exportCards()"><i class="download icon" />匯出JSON</a>
        <a id="downloadAnchorElem" style="display:none"></a>
      </div>
      <div class="item">
        <div class="upload-btn-wrapper">
          <button class="btn"><i class="upload icon"/>匯入JSON</button>
          <input type="file" @change="importJSON" name="json" id="json" accept="application/json">
        </div>
      </div>
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
      name: '',
      my_card_list: []
    }
  },
  methods: {
    addCard: function (url, name) {
      this.$emit('addCard', url, name)
    },
    removeCard: function (index) {
      this.$emit('removeCard', index)
    },
    hideShow: function (index, bool) {
      this.$emit('hideShow', index, bool)
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
    },
    exportCards: function () {
      var dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.card_list))
      var dlAnchorElem = document.getElementById('downloadAnchorElem')
      dlAnchorElem.setAttribute('href', dataStr)
      dlAnchorElem.setAttribute('download', 'card_list.json')
      dlAnchorElem.click()
    },
    importJSON: function (event) {
      var input = event.target
      if (input.files && input.files[0]) {
        var reader = new FileReader()
        reader.onload = (e) => {
          this.my_card_list = this.card_list.concat(JSON.parse(e.target.result))
          this.$emit('saveCards', this.my_card_list)
        }
        reader.readAsText(input.files[0])
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
  img.hide {
    opacity: 0.2;
  }
  a {
    cursor: pointer;
  }
  a:hover {
    text-decoration: underline;
  }
  input {
    max-width: 75vw !important;
    padding-left: 0.6em;
  }
  .fluid {
    width: 100%;
    max-width: 100% !important;
  }
  .list .item {
    font-size: 1.6em;
  }

</style>
