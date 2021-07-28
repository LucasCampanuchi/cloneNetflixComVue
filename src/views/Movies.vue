<template>

  <div class="lists">
    <section id="secao" @mouseover="teste()" v-for="list in movieList" :key="list.slug">
        <h2 style="">{{list.title}}</h2>            
            
        <div class="movieRow-left">
            &lt;	
        </div>
        <div class="movieRow-right">
            >
        </div>

        <div class="movieRow--listarea">
            <div class="movieRow--list" v-for="(movie) in list.items.data.results" :key="movie.id">
                <div class="movieRow--item">                
                <img :src="imgPath+movie.poster_path" >             
                </div>
            </div>
        </div>
    </section>    
    
    
    
  </div>
</template>

<script>



export default {

    
    data(){
        return{
            imgPath: "https://image.tmdb.org/t/p/w300"
        }
    },
    props: {
        movieList: Array
    },
    methods: {
        teste(){
            
            var todos = document.getElementById("secao");
            
            console.log(todos.getElementsByClassName("movieRow-left")[0].style.opacity = "0");
        }
    }

}
</script>

<style>

h2{
    text-align: left;
    padding-left: 30px;
}
.lists{
    margin-top: -221px;

}
.movieRow{
  margin-bottom: 30px;
}

.movieRow h2{
  margin: 0px 0px 0px 30px;
}

.movieRow--listarea{
  overflow-x: hidden;
  display: flex;
  flex-wrap: nowrap;
  padding-left: 30px;
}

.movieRow--list {
    display: flex;    
}

.movieRow--item{
  display: inline-block;
  transform: scale(0.9);
  transition: 0.3s all;
  cursor: pointer;

}

.movieRow--item:hover{
  transform: scale(1);
}

.movieRow-left,
.movieRow-right{
    color: white;
    font-size: 55px;
    position: absolute;
    width: 40px;
    height: 454px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
    background-color: rgba(0,0,0,0.6);
    cursor: pointer;
    opacity: 0;
}

.movieRow-left{
    left: 0;    
}

.movieRow-right{
    right: 0;
}



#secao:hover .movieRow-left,
#secao:hover .movieRow-right {
    opacity: 1;           

}



</style>