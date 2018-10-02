<template>
  <div class="hello">
    <br class="fat-only">
    <div class="ui segment container">
      <p>
        <img src = "../assets/aged.jpeg"/>
        失智症也稱癡呆症，其英文Dementia一字來自拉丁語（de-意指「遠離」 + mens意指「心智」）。
      </p>
      <p class="fat-only">失智症是腦部疾病的其中一類，此症導致思考能力和記憶力長期而逐漸地退化，並使個人日常生活功能受到影響。
      </p>
      <p class="fat-only">
        對於失智症患者與照護者而言，有些方法可以改善他們的生活品質，例如認知行為療法與玩遊戲可能有所助益。
      </p>
      <p>
        本站提供3種認照片遊戲，您可以使用自家的照片，讓長輩來玩。
      </p>
      <div class="ui three bottom attached massive buttons">
          <a class="ui button" href="https://zh.wikipedia.org/wiki/%E5%A4%B1%E6%99%BA%E7%97%87" target="_blank">
            <i class = "wikipedia w icon"/><br class="thin-only" />認識失智症
          </a>
          <router-link class = "ui green button" to='/pair' exact=''>
            <i class="balance scale icon" /><br class="thin-only" />玩遊戲
          </router-link>
          <router-link class = "ui blue button" to='/edit' exact=''>
            <i class="cogs icon" /><br class="thin-only" />編輯照片
          </router-link>
      </div>
    </div>
  </div>
</template>

<script>

import win from './win'

export default {
  name: 'HelloWorld',
  props: ['card_list'],
  components: {
    win
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

p {
  font-size: 1.6em;
  text-align: left;
}

p img {
  float: left;
  margin: 1em;
}

</style>
