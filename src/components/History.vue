<template>
  <div class="hello">
    <br class="fat-only">
    <div class="ui three column grid print-only">
      <div class="column" v-for = "(e, index) in event_list" :key="index">
        <div class="ui fluid card">
          <div class="content">
            <div class="header">{{e.year}}：{{e.title}}
            </div>
          </div>
          <div class="image">
            <img :src="e.img" v-show="e.img">
          </div>
          <div class="content">
            <div class="description" v-html="e.detail">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ui grid no-print">
      <div class="four wide column no-print">
        <div class="ui list">
          <div class="item">
            大事紀 <input class="ui search" type="search" name="myS" placeholder="搜尋" v-model="myS"/>
          </div>
          顯示星等：<star-rating v-model="minRating" v-bind:star-size="15" inline="true"></star-rating>
        </div>
        <div class="ui divided animated list">
          <a class="item" v-for = "(e, index) in event_list" :key="index" v-show="(!e.rating || e.rating >= minRating) && (!myS || (e.title+e.detail).indexOf(myS) > -1)" v-bind:class="myIndex == index ? 'active' : ''" @click="myEvent = e; myIndex = index">
            {{e.year}}：{{e.title}}<img class="ui avatar" v-show="e.img" :src="e.img"/>
           <star-rating v-model="e.rating" text-class="null" v-bind:star-size="15" @rating-selected="changeEvent(index, e)"></star-rating>
          </a>
          <div class="item"><a class="ui green button" @click="addNew()">新增事件</a></div>
        </div>
      </div>
      <div class="twelve wide column no-print">
        <a id = "left" class="no-print" v-if="myIndex != -1 && myIndex < event_list.length-1" @click="myIndex++; myEvent = event_list[myIndex]"><i class="angle left icon"/><span>{{event_list[myIndex+1].year}}.{{event_list[myIndex+1].title}}</span></a>
        <a id = "right" class="no-print" v-if="myIndex > 0" @click="myIndex--; myEvent = event_list[myIndex]"><i class="angle right icon"/><span>{{event_list[myIndex-1].year}}.{{event_list[myIndex-1].title}}</span></a>
        <div class="ui centered fluid card no-print" v-show = "!myEvent.title && !edit">
          <div class="content">
            <h1 class="ui header">
              生命史是由一系列的事件串連起來的
            </h1>
            <h3 class="ui header">
              請按「新增事件」開始
            </h3>
            <h3 class="ui header">
              編輯後請按左下角的「匯出JSON」匯出存檔
            </h3>
            <h3 class="ui header">
              再次編輯時可以按「匯入JSON」匯入之前存的檔案
            </h3>
          </div>
        </div>
        <div class="ui huge three buttons" v-show = "!myEvent.title && !edit">
          <a class="ui green button" @click="addNew()"><i class="plus square icon" />新增事件</a>
          <a class="ui blue button" @click="importJSON()"><i class="upload icon" />匯入JSON</a>
          <a class="ui teal button" href="https://www.speechtexter.com/" target="_blank">啟用聽寫</a>
        </div>
        <div class="ui centered card no-print" v-show = "myEvent.title || edit">
          <div class="content">
            <div class="header">
              <div class="ui slider checkbox">
                <input type="checkbox" id="checkbox" v-model="edit">
                <label class = "clickable" for="checkbox" @click="edit = !edit"><i class = "edit icon" />編輯</label>
              </div>
            </div>
            <div class="header" v-show="!edit">{{myEvent.year}}：{{myEvent.title}}
            </div>
            <div class="header" v-show="edit">
              <input type="text" name="" v-model = "myEvent.year">
              <input type="text" name="" v-model = "myEvent.title">
            </div>
          </div>
          <div class="image" v-show = "!edit">
            <img :src="myEvent.img" v-show="myEvent.img">
          </div>
          <div class="image" v-if = "edit">
            <img :src="myEvent.img" v-show="myEvent.img">
            <div class="upload-btn-wrapper">
              <button class="btn"><i class="upload icon"/>選擇圖檔</button>
              <input type="file" @change="previewImage" name="photo" id="photo" accept="image/*" />
            </div>
          </div>
          <div class="content">
            <div class="description" v-show="!edit" v-html="myEvent.detail">
            </div>
            <div class="description" v-show="edit">
              <textarea  name="detail" v-model = "myEvent.detail" placeholder="請回想一下細節" cols="30" rows="10"></textarea>
            </div>
          </div>
          <div class="content" v-show="edit">
            <a class="ui huge green button" @click="changeEvent(myIndex, myEvent)">儲存</a>
          </div>
          <div class="content">
            <star-rating v-model="myEvent.rating" text-class="null" v-bind:star-size="15" @rating-selected="changeEvent(index, e)"></star-rating>
          </div>
          <div class="ui two bottom attached buttons">
            <a class="ui red basic button" @click="removeEvent(myIndex)">x刪除本事件</a>
            <a class="ui teal basic button" href="https://www.speechtexter.com/" target="_blank">啟用聽寫</a>
          </div>
        </div>
      </div>
    </div>
    <div class="ui labeled icon menu fat-only no-print">
      <div class="item">
        <a @click="exportEvents()"><i class="download icon" />匯出JSON</a>
        <a id="downloadAnchorElem" style="display:none"></a>
      </div>
      <div class="item">
        <div class="upload-btn-wrapper">
          <button class="btn"><i class="upload icon"/>匯入JSON</button>
          <input type="file" @change="importJSON" name="json" id="json" accept="application/json">
        </div>
      </div>
      <div class="item"><a class="ui green button" @click="addNew()">新增事件</a></div>
      <div class="right item">
        <a onclick="window.print()"><i class="print icon" />友善列印</a>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
  name: 'History',
  props: ['event_list'],
  components: {
    StarRating
  },
  data () {
    return {
      myEvent: {},
      my_event_list: [],
      minRating: 0,
      myS: '',
      myIndex: -1,
      edit: false
    }
  },
  methods: {
    changeEvent: function (index, obj) {
      this.$emit('changeEvent', index, obj)
      this.edit = false
    },
    removeEvent: function (index) {
      if (window.confirm('確認刪除嗎？')) {
        this.$emit('removeEvent', index)
      }
    },
    previewImage: function (event) {
      var input = event.target
      if (input.files && input.files[0]) {
        var reader = new FileReader()
        reader.onload = (e) => {
          this.myEvent.img = e.target.result
        }
        reader.readAsDataURL(input.files[0])
      }
    },
    addNew: function () {
      this.myEvent = {year: 1985, title: '未命名', detail: ''}
      this.edit = true
      this.myIndex = this.event_list.length
    },
    exportEvents: function () {
      var name = window.prompt('請輸入名字', '未命名')
      var dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.event_list))
      var dlAnchorElem = document.getElementById('downloadAnchorElem')
      dlAnchorElem.setAttribute('href', dataStr)
      dlAnchorElem.setAttribute('download', name + '.json')
      dlAnchorElem.click()
      console.log(JSON.stringify(this.event_list))
    },
    importJSON: function (event) {
      var input = event.target
      if (input.files && input.files[0]) {
        var reader = new FileReader()
        reader.onload = (e) => {
          this.my_event_list = JSON.parse(e.target.result)
          this.$emit('saveEvents', this.my_event_list)
        }
        reader.readAsText(input.files[0])
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div, p {
  white-space: pre-line;
}

div.description {
  text-align: left;
}

.ui.avatar {
  height: 2em;
  margin-left: 0.5em;
}

.ui.divided.list {
  height: calc(75vh - 100px);
  overflow-y: scroll;
}

.ui.divided.list > .item {
  text-align: left;
  margin-left: .5em;
}

.item.active {
  background-color: #ccf;
}

a.ui.red.basic.mini.button {
}

#left, #right {
  position: absolute;
  z-index: 2;
  top: 33vh;
  font-size: 5em;
}

#left {
  left: 0;
}

#right {
  right: 0;
}

#right span, #left span {
  position: absolute;
  top: 5vh;
  font-size: 14px;
  width: 20vw;
}

#left span {
  left: 0;
}

#right span {
  right: 0;
}

@media print {
  img {
    max-height: 120px;
  }
}

</style>
