<template>
  <div>
    <div class = "page">
      <img src="../assets/sunflower.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'win',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  img {
    z-index: 99999;
    width: 300px;
    border-radius: 30px;
    border: 5px gold ridge;
  }

  .page {
    z-index: 99999;
    position: fixed;   
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .page img {
  }
</style>
