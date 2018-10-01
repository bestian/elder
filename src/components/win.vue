<template>
  <div>
    <img id = "win1" src = "../assets/animated-congratulation-image-0058.gif"/>
    <img id = "win2" src = "../assets/animated-congratulation-image-0058.gif"/>
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

  #win1, #win2 {
    z-index: 99999;
    position: fixed;
    width: 300px;
    border-radius: 30px;
    border: 5px gold ridge;
  }

  #win1 {
    top: 0;
    left: 0;
  }

  #win2 {
    bottom: 0;
    right: 0;
  }
</style>
