<template>
<div>
    <div class="pricipal">
        {{iniciar()}}
        <section class="featured" v-bind:style="{
                                        backgroundSize: 'cover', 
                                        backgroundPosition: 'center', 
                                        backgroundImage: `url(https://image.tmdb.org/t/p/original${this.movie.backdrop_path})`
        }">

        <div class="featured-vertical">
            <div class="featured-horizontal">
                <div class="featured-name">{{movie.original_name}}</div>
                <div class="featured-info">
                    <div class=featured-points>{{movie.vote_average}} pontos</div>
                    <div class=featured-year>{{movie.first_air_date | manipulaData}}</div>
                </div>
                <div class=featured-description>{{movie.overview}}</div>
                <div class="featured-buttons">
                    <a href="" class="feature-watchbutton">► Assistir</a>
                    <a href="" class="feature-mylist">+ Minha Lista</a>
                </div>

            </div>
        </div> 

                                        
                                        
        
        </section>
        
        
        
        
        
    </div>
</div>

</template>

<script>
export default {
    created(){
        this.iniciar();
    },
    data(){
        return{
            movie: []
        }
    },
    props: {
        movieList: Array
    },
    methods: {
        iniciar(){
            let originals = this.movieList.filter(movie => movie.slug === "originals");
            let randomChosen = Math.floor(Math.random() * (originals[0].items.data.results.length - 1));
            let chosen = originals[0].items.data.results[randomChosen];             
            
            this.movie = chosen;

            console.log(this.movie);
        }
    },
    filters: {
        manipulaData: function(data){

            let date = new Date(data);

            return date.getFullYear();
        }
    }
    
    


    
}
</script>

<style scoped>

    .principal{
    text-align: left;
        }
    .featured{
        height: 100vh;

    }
    .featured-vertical{
        width: inherit;
        height: inherit;
        background: linear-gradient(to top, #111 10%, transparent 90%);
        text-align: left;
        color: white;
    }
    .featured-horizontal{
        width: inherit;
        height: inherit;
        background: linear-gradient(to right, #111 30%, transparent 70%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 30px;
    }
    .featured-name{
        font-size: 60px;
        font-weight: bold;
        
        
    }
    .featured-info{
        font-size: 18px;
        font-weight: bold;
        margin-top: 15px;
    }
    .featured-points{
        display: inline-block;
        color: #46d369;
        margin-right: 15px;
    }
    .featured-year{
        display: inline-block;
        margin-right: 15px;
    }
    .featured-description{
        margin-top: 15px;
        font-size: 20px;
        color: #999;
        max-width: 40%;
        margin-bottom: 15px;
    }
    .feature-watchbutton,
    .feature-mylist{
        display: inline-block;
        font-size: 20px;
        font-weight: bold;
        padding: 12px 25px;
        border-radius: 5px;
        text-decoration: none;
        margin-right: 10px;
        opacity: 1;
        transition: all ease 0.3;
    }

    .feature-watchbutton:hover,
    .feature-mylist:hover{
        opacity: 0.7;
    }

     .feature-watchbutton{
         background-color: #FFF;
         color: #000;
     }
        
    .feature-mylist{
        background-color: #333;
        color: #FFF
    }


</style>