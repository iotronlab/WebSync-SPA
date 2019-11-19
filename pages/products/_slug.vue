<template>
  <v-card class="mx-auto">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="6" lg="6">
          <v-img height="500" src="/man.jpg"></v-img>
        </v-col>
        <v-col cols="12" md="6" lg="6">
          <p class="title">{{product.name}}</p>
          <v-divider class="mt-n3 mb-1"></v-divider>
          <p class="headline">{{product.price}}</p>
          <p v-if="!product.in_stock">Out of Stock</p>
          <v-row>
            <form action>
              <ProductVariation
                v-for="(variations, type) in product.variations"
                :type="type"
                :variations="variations"
                :key="type"
                v-model="form.variation"
              />
            </form>
          </v-row>

          <p>{{product.description}}</p>
          <v-row no-gutters class="hidden-sm-and-down">
            <v-col>
              <v-btn block class="mr-1" color="primary" @click.prevent="addToCart(product)">
                Add To Cart
                <v-icon right>mdi-cart</v-icon>
              </v-btn>
            </v-col>
            <v-col>
              <v-btn block color="primary" outlined class="ml-1">
                Wishlist
                <v-icon right>mdi-bookmark</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-rating v-model="rating" color="primary" dense half-increments hover size="25"></v-rating>
            </v-col>
          </v-row>
          <v-app-bar bottom fixed class="hidden-md-and-up">
            <v-container class="px-0 py-0">
              <v-row no-gutters>
                <v-col>
                  <v-btn block class="mr-1" color="primary" @click.prevent="addToCart(product)">
                    Add To Cart
                    <v-icon right>mdi-cart</v-icon>
                  </v-btn>
                </v-col>
                <v-col>
                  <v-btn block color="primary" outlined class="ml-1">
                    Wishlist
                    <v-icon right>mdi-bookmark</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-app-bar>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
import ProductVariation from "@/components/products/ProductVariation";

export default {
  data() {
    return {
      product: null,
      form: {
        variation: null,
        quantity: 1
      }
    };
  },
  components: {
    ProductVariation
  },
  async asyncData({ params, app }) {
    let response = await app.$axios.$get(`products/${params.slug}`);

    return {
      product: response.data
    };
  },
  methods: {
    ...mapActions("cart", ["addToCart"])
  }
};
</script>

<style>
</style>
