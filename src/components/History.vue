<template>
  <div class="hello">
    <br class="fat-only">
    <div class="ui grid">
      <div class="three wide column">
        <div class="ui divided list">
          <a class="item" v-for = "(e, index) in event_list" :key="index" @click="myEvent = e; myIndex = index">{{e.year}}年：{{e.title}}</a>
        </div>
      </div>
      <div class="thirteen wide column">
        <div class="ui centered card" v-show = "!myEvent.title && !edit">
          <a class="ui huge green button" @click="myEvent={'year': 1981,'title':'New','detail':'???'}; edit=true; myIndex = event_list.length"><i class="plus square icon" />新增事件</a>
        </div>
        <div class="ui centered card" v-show = "myEvent.title || edit">
          <div class="content">
            <div class="header">
              <div class="ui slider checkbox">
                <input type="checkbox" id="checkbox" v-model="edit">
                <label class = "clickable" for="checkbox" @click="edit = !edit"><i class = "edit icon" />編輯</label>
              </div>
            </div>
            <div class="header" v-show="!edit">{{myEvent.year}}年：{{myEvent.title}}
            </div>
            <div class="header" v-show="edit">
              <input type="text" name="" v-model = "myEvent.year">
              <input type="text" name="" v-model = "myEvent.title">
            </div>
          </div>
          <div class="image" v-show = "!edit">
            <img :src="myEvent.img" v-show="myEvent.img">
          </div>
          <div class="image" v-show = "edit">
            <img :src="myEvent.img" v-show="myEvent.img">
            <div class="upload-btn-wrapper">
              <button class="btn"><i class="upload icon"/>選擇檔案</button>
              <input type="file" @change="previewImage" name="photo" id="photo"  accept="image/*" />
            </div>
          </div>
          <div class="content">
            <div class="description" v-show="!edit">
              {{myEvent.detail}}
            </div>
            <div class="description" v-show="edit">
              <input type="textarea" name="" v-model = "myEvent.detail">
            </div>
          </div>
          <div class="content" v-show="edit">
            <a class="ui huge green button" @click="changeEvent(myIndex, myEvent)">儲存</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'History',
  props: ['event_list'],
  data () {
    return {
      myEvent: {},
      myIndex: -1,
      edit: false
    }
  },
  methods: {
    changeEvent: function (index, obj) {
      console.log(index)
      console.log(obj)
      this.$emit('changeEvent', index, obj)
      this.edit = false
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .upload-btn-wrapper {
    position: relative;
    overflow: hidden;
    display: inline-block;
  }

  .btn {
    border: 2px solid green;
    color: green;
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
