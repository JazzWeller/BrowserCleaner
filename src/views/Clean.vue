<template>
  <div class="home">
    <div id="intro">
      <div id="imagez">
        <img class="browserImg" src="../images/Chrome.png" />
      </div>
      <div id="buttons">
        <button id="auto">
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Auto Clean</a>
        </button>
        <button @click="setup()" id="manual"><a href="#">Manual Clean</a></button>
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
          d.innerHTML = '<img class="browserImg" src="/img/Chrome.fed5359a.png" />'
          break;
        case 1:
          d.innerHTML = '<img class="browserImg" src="/img/Edge.d9b989a0.png" />'
          break;
        case 2:
          d.innerHTML = '<img class="browserImg" src="/img/Firefox.250345ce.png" />'
          break;
        case 3:
          d.innerHTML = '<img class="browserImg" src="/img/Opera.2eb2ff9c.png" />'
          break;
        case 4:
          d.innerHTML = '<img class="browserImg" src="/img/Safari.b4cd1b63.png" />'
          break;
      }
    },
    setup() {
      document.getElementById("select").innerHTML = '<br><hr /><br><h2> Enter the following </h2><ul><li> Cached Images and Files not used in the last <textarea></textarea> days </li><li> Cookies and other site data smaller than <textarea></textarea> kB </li><li> Search and Browsing History older than <textarea></textarea> days </li><li> Hosted app data used less frequently than every <textarea></textarea> days </li></ul><button><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Submit</a></button>';
      this.onCreate();
    },
  },
}
</script>

<style>
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
#buttons {
  display: flex;
  justify-content: center;
}
#auto {
  font-size: 2em;
  margin: 4em 1em 1em 1em;
  width: 10%;
  border-radius: 15px;
  background-color: white;
  color: black;
  border: 4px solid #dddddd;
  height: 100px;
}
#manual {
  font-size: 2em;
  margin: 4em 1em 1em 1em;
  width: 10%;
  border-radius: 15px;
  background-color: white;
  color: black;
  border: 4px solid #dddddd;
  height: 100px;
}
button {
  font-size: 1.5em;
  margin: 1em 1em 1em 1em;
  width: 8%;
  border-radius: 15px;
  background-color: white;
  color: black;
  border: 4px solid #dddddd;
  height: 75px;
}
a:link {
  color: black;
}
a:visited {
  color: black;
}
a:hover {
  color: black;
}
a:active {
  color: black;
}
#select {
  margin-bottom: 7em;
}
textarea {
  rows: 1;
  cols: 4;
}
</style>
