<template>
  <div class="hello">
    <br class="fat-only">
    <div class="ui grid">
      <div class="doubling two column row">
        <div class="column">
          <div class="ui segment container">
            <div class="image">
              <a href="https://zh.wikipedia.org/wiki/%E5%A4%B1%E6%99%BA%E7%97%87" target="_blank">
                <amp-img src = "/static/og_image.jpeg" alt="Welcome" width="400" height="250"></amp-img>
                <!--<img src = "../assets/aged1.jpeg" alt="Welcome"/>-->
              </a>
            </div>
            <div class="description">
              <p>
                您家中有年紀大的長輩嗎？
              </p>
              <p>
                本站作者最初是為了自己的外婆，寫了認照片遊戲，提供娛樂與刺激。
              </p>
              <p>
                目前提供4種認照片遊戲，讓您輸入自己家族成員的照片，幫助長輩記得大家。
              </p>
              <p></p>
            </div>
            <div class="ui two bottom attached buttons thin-only">
              <router-link class = "ui green button" to='/intro' exact=''>
                <i class="balance scale icon" /><br class="thin-only" />玩遊戲
              </router-link>
              <router-link class = "ui blue button" to='/edit' exact=''>
                <i class="cogs icon" /><br class="thin-only" />輸入照片
              </router-link>
            </div>
            <div class="ui two bottom massive attached buttons fat-only">
              <router-link class = "ui green button" to='/intro' exact=''>
                <i class="balance scale icon" /><br class="thin-only" />玩遊戲
              </router-link>
              <router-link class = "ui blue button" to='/edit' exact=''>
                <i class="cogs icon" /><br class="thin-only" />輸入照片
              </router-link>
            </div>
          </div>
        </div><!-- colmun END-->
        <div class="ui column">
          <div class="ui segment container">
            <p>
              失智症（英文Dementia）來自拉丁語（de-意指「遠離」 + mens意指「心智」）。
            </p>
            <amp-iframe width="400" height="315" 
              sandbox="allow-scripts allow-same-origin"
              src="https://www.youtube.com/embed/M-L6nIzJa84" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></amp-iframe>
            <p>
              失智症是腦部疾病的其中一類，此症導致思考能力和記憶力長期而逐漸地退化，並使個人日常生活功能受到影響。
              您可以使用<a href="https://www.everydayhealth.com.tw/article/15778" target="_blank">畫鐘測驗</a>來協助暸解長輩失智的情況。
            </p>
            <p>
              對於記憶自然退化之長者、失智症患者及其照護者而言，有些方法可以改善生活品質，例如認知行為療法可能有所助益。而玩遊戲則是一種方便法門。
            </p>
            <p>
              失智症初期，和自然退化很像，是從短期的記憶力先退化。近的事情先忘記，遠的事情還記憶。
            </p>
            <p>
              長輩會忘記剛才講過的話、剛剛做過的事、眼鏡放哪裡等等。面對自己這樣的情況，一開始會而產生困惑與不安。
            </p>
            <p>
              漸漸地，他會忘記各種人事時地物。對人的記憶會忘記。他會認不得人了，對於現在生活週圍存在的人，也會忘記他們是誰。
            </p>
            <p>
              失智的人常會有一個很大的不安全感，覺得自己是活在一個陌生的世界，什麼都很陌生，人是陌生的。
            </p>
            <p>
              所有陌生的環境和變動，都會造成不安。對人的認識已經陌生了，對環境的熟悉又不見了，這就太可怕了。
            </p>
              <InArticleAdsense
                  data-ad-client="ca-pub-2267134225801525"
                  data-ad-slot="1234567890">
              </InArticleAdsense>
            <p>
              認照片、認人的遊戲，對認人多少有一些幫忙。至少，對親威朋友來講，有一個機會讓失智老人不斷熟悉親人的臉和名字。大家會覺得自己有為老輩做些什麼，而不是束手無策。
            </p>
            <p>
              失智的人，早期記憶還在，寫字對他們有幫助。看到文字他會記得。
            </p>
            <p>
              對於陪伴者來說，切記不要勉強老人家做他做不到的事。也不要期待情況會有多大的改善。能夠避免持續退化就很好了。
            </p>
          </div>
        </div><!-- colmun END-->
      </div><!--Row END -->
    </div><!-- gird END -->
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
