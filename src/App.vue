<template>
  <div id="app">
    <header :class="{black: isTrue}">
      <div class="header-logo">
        <a href="/">
          <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="">
        </a>
      </div>
      <div class="header-user">
        <a href="/">
          <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="">
        </a>
      </div>      
    </header>
    <FeaturedMovie :movieList="movieList" />
    <Movies :movieList="movieList"/>
    

  </div>
</template>

<script>
import getHomeList from './assets/Requests/Tmdb.js'
import Movies from './views/Movies.vue'
import FeaturedMovie from './views/FeaturedMovie.vue'




export default {
  data(){
    return{
      movieList: [],
      imgPath: "https://image.tmdb.org/t/p/w300",
      isTrue: false
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);

    getHomeList().then(res => {
      this.movieList = res;      
    }).catch(err => {
      console.log(err);
    });
  },
  components: {
    Movies,
    FeaturedMovie
  },
  methods: {
    handleScroll () {
      if(window.scrollY > 10){
        this.isTrue = true;
      }
      else{
        this.isTrue = false;
      }
      
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
}
</script>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body{
  background-color: #111;
  margin: 0;  
}

h2{
  color: #FFF;
}

header{
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background: transparent;
  transition: all ease 0.5s;
}

header.black{
  background-color: #141414;
}

.header-logo{
  height: 30px;
}
.header-logo img{
  height: 100%;
}

.header-user{
  height: 35px;
}

.header-user img{
  height: 100%;
  border-radius: 3px;
}


</style>
