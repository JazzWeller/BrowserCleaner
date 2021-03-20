<template>
  <div class="home">
    <div id="intro">
      <div id="imagez">
        <img class="browserImg" src="../images/Chrome.png" />
        <hr />
      </div>
    </div>
    <div id="select"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.onCreate()
  },
  methods: {
    onCreate() {
      let id = this.$root.$data.browser;
      console.log(id);
      let d = document.getElementById("imagez");
      switch (id) {
        case 0:
          d.innerHTML = '<img class="browserImg" src="../images/Chrome.png" /><hr />'
          break;
        case 1:
          d.innerHTML = '<img class="browserImg" src="../images/Edge.png" /><hr />'
          break;
        case 2:
          d.innerHTML = '<img class="browserImg" src="../images/Firefox.png" /><hr />'
          break;
        case 3:
          d.innerHTML = '<img class="browserImg" src="../images/Opera.png" /><hr />'
          break;
        case 4:
          d.innerHTML = '<img class="browserImg" src="../images/Safari.png" /><hr />'
          break;
      }
    },
  },
}
</script>

<style scoped>
hr {
  width: 50%;
}
p {
  margin-left: 28%;
  width: 44%;
  font-size: 1.2em;
  font-align: center;
}
#select {
  margin-top: 150px;
}
.browserImg {
  width: 13%;
}
</style>
