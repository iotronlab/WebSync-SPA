<template>
  <v-card
    class="mx-auto category-card"
    max-height="500"
    outline
    raised
    exact
    to='/'

  >
     <!-- <v-img
         class="white--text hidden-md-and-up "
         max-width="150"
         max-height="300"
         src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >

        <v-card-title class="align-end">    
            <div>{{title}}</div> <v-spacer></v-spacer>
            <span>{{desp}}</span>
        </v-card-title>
      </v-img> -->
    


    <div >
    <v-img
       class="mx-auto"
       max-height="300"
       src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
     ></v-img>

    <v-card-title>
      <div>{{title}}</div> <v-spacer></v-spacer>
      
      <span class="grey--text subtitle-1">{{desp}}</span>
    </v-card-title>

    <v-card-actions>
      
    </v-card-actions>
    </div>


  </v-card>
  </template>
 


<script>
export default {
    
    data(){
    return{
     title:'Casual Wear',
     desp:'70% - 80%',
    

    } 
    } 
}
</script>



