<template>
  <div class="hello">
    <br class="fat-only">
    <div class="ui segment container">
      <div class="image">
        <a href="https://zh.wikipedia.org/wiki/%E5%A4%B1%E6%99%BA%E7%97%87" target="_blank">
          <img src = "../assets/aged1.jpeg"/>
        </a>
      </div>
      <div class="description">
        <p>
          您家中有年紀大的長輩嗎？
        </p>
        <p class="fat-only">
          失智症（英文Dementia）來自拉丁語（de-意指「遠離」 + mens意指「心智」）。
        </p>
        <p>
          失智症是腦部疾病的其中一類，此症導致思考能力和記憶力長期而逐漸地退化，並使個人日常生活功能受到影響。
          <iframe width="560" height="315" src="https://www.youtube.com/embed/M-L6nIzJa84" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </p>
        <p class="fat-only">
          對於記憶自然退化之長者、失智症患者及其照護者而言，有些方法可以改善生活品質，例如認知行為療法可能有所助益。而玩遊戲則是一種方便法門。
        </p>
        <p>
          本站提供3種認照片遊戲，讓您輸入自己家族成員的照片，幫助長輩記得大家。
        </p>
        <p>
          您可以按<router-link to='/edit' exact=''>「編輯照片」</router-link>按鈕，輸入自家照片，取代範例圖片。
        </p>
        <br/>
      </div>
      <div class="ui three bottom attached massive buttons">
          <a class="ui button" href="https://zh.wikipedia.org/wiki/%E5%A4%B1%E6%99%BA%E7%97%87" target="_blank">
            <i class = "wikipedia w icon"/><br class="thin-only" />認識失智症
          </a>
          <router-link class = "ui green button" to='/intro' exact=''>
            <i class="balance scale icon" /><br class="thin-only" />玩遊戲
          </router-link>
          <router-link class = "ui blue button" to='/edit' exact=''>
            <i class="cogs icon" /><br class="thin-only" />輸入照片
          </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Main',
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
  font-size: 1.4em;
  text-align: left;
}

p img {
  float: left;
  margin: 1em;
  transition: all 0.5s ease-in;
}

p img:hover {
  opacity: 0.2;
}

</style>
