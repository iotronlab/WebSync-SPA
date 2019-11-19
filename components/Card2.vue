<template>
    <v-card
           class="ma-4 "
            width="100"
            exact
            v-bind:to="item.to"
            raised
            outline
          >
         <v-img
          class="white--text hidden-md-and-up"
          max-width="200"
          max-height="300"
          v-bind:src="item.sr"
          >
         <div class="align-end">{{item.title}}</div> 
         </v-img>
         </v-card>
</template>

<script>
export default {
     data(){
        return{
            items:[
                {
                    title:'Men',
                    to:'/',
                    sr:'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
                },
                 {
                    title:'Women',
                    to:'/inspire',
                    sr:'https://cdn.vuetifyjs.com/images/cards/store.jpg'
                },
                 {
                    title:'Accessories',
                    to:'/',
                    sr:'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
                   
                },
                 {
                    title:'Art and Craft',
                    to:'/',
                    sr:'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
                },
                
            ],

}
}
}
</script>

<style>

</style>
