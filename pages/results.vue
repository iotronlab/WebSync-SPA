<template>
  <v-card tile>
    <!-- toolbar -->
    <v-toolbar class="mb-2">
      <span class="title">{{title }}</span>
      <span>- {{items.length}} items</span>

      <div class="flex-grow-1"></div>

      <template v-if="$vuetify.breakpoint.mdAndUp">
        <div class="flex-grow-1"></div>

        <!-- sort by -->
        <v-select
          v-model="sortBy"
          text
          prefix="Sort by:   "
          solo-inverted
          hide-details
          :items="keys"
        ></v-select>
      </template>
    </v-toolbar>

    <v-container fluid>
      <v-row>
        <!-- filters -->
        <v-col cols="12" md="3" lg="3">
          <v-card class="mx-auto fill-height hidden-sm-and-down" max-width="300">
            <v-list flat>
              <v-subheader>Filters</v-subheader>
              <v-list-item-group v-model="item" color="primary">
                <v-list-item v-for="(filter, i) in filters" :key="i">
                  <v-list-item-content>
                    <v-list-item-title v-text="filter.title"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
        <v-divider vertical inset></v-divider>
        <!-- products -->
        <v-col cols="12" md="8" lg="8">
          <v-card class="mx-auto pa-5" flat>
            <v-data-iterator
              :items="items"
              :items-per-page.sync="itemsPerPage"
              :page="page"
              :sort-by="sortBy.toLowerCase()"
              :sort-desc="sortDesc"
              hide-default-footer
            >
              <template v-slot:default="props">
                <v-row>
                  <!-- product -->
                  <v-col v-for="item in props.items" :key="item.name" xs="6" sm="6" md="4" lg="4">
                    <v-card tile class="my-2" :to="item.to">
                      <v-img
                        :src="item.src"
                        exact
                        class="white--text"
                        height="200px"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      ></v-img>
                      <v-card-title class v-text="item.title"></v-card-title>
                      <v-card-text>
                        <span>{{item.desc}}</span>
                        <br />
                        <span class="subtitle-2 black--text">Rs. {{item.price}}</span>
                      </v-card-text>
                      <v-card-actions>
                        <div class="flex-grow-1"></div>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                </v-row>
              </template>

              <!-- footer of table -->
              <template v-slot:footer>
                <v-row class="mt-2 mx-2" align="center" justify="center">
                  <span class="mr-4 grey--text" align="left">Page {{ page }} of {{ numberOfPages }}</span>
                  <v-btn fab small dark color="blue darken-3" class="mr-1" @click="formerPage">
                    <v-icon>mdi-chevron-left</v-icon>
                  </v-btn>
                  <v-btn fab small dark color="blue darken-3" class="ml-1" @click="nextPage">
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </v-row>
              </template>
            </v-data-iterator>
          </v-card>
        </v-col>
      </v-row>
      <v-app-bar fixed app bottom floating class="hidden-md-and-up mx-auto">
        <v-row class>
          <v-col xs="6" sm="6">
            <v-menu class="text-center">
              <template v-slot:activator="{ on }">
                <v-btn color="primary" dark v-on="on" large class="px-12 py-4" height="50">Filter</v-btn>
              </template>

              <v-list>
                <v-list-item v-for="(item, index) in filters" :key="index">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
          <v-col xs="6" sm="6">
            <v-select
              v-model="sortBy"
              class
              placeholder="Sort by"
              color="purple"
              hide-details
              :items="keys"
              outlined
            ></v-select>
          </v-col>
        </v-row>
      </v-app-bar>
    </v-container>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      title: "Men and women",
      itemsPerPageArray: [3, 6, 9, 12, 15, 18],
      search: "",
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 9,
      sortBy: "name",
      filters: [
        { title: "Category" },
        { title: "Price" },
        { title: "Colors" },
        { title: "Material" }
      ],
      keys: ["price", "title"],
      items: [
        {
          src: "/kurta.jpg",
          title: "Kurta",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          to: "/inspire",
          price: "2000"
        },
        {
          src: "/dress1.jpg",
          title: "Dress",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          to: "/inspire",
          price: "2000"
        },
        {
          src: "/sherwani.jpg",
          title: "Sherwani",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          to: "/inspire",
          price: "10000"
        },
        {
          src: "/lehenga.png",
          title: "Lehenga",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          to: "/inspire",
          price: "20000"
        },
        {
          src: "/kurta.jpg",
          title: "Kurta",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          to: "/inspire",
          price: "2000"
        },
        {
          src: "/dress1.jpg",
          title: "Dress",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          to: "/inspire",
          price: "2000"
        },
        {
          src: "/sherwani.jpg",
          title: "Sherwani",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          to: "/inspire",
          price: "4000"
        },
        {
          src: "/lehenga.png",
          title: "Lehenga",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          to: "/inspire",
          price: "5000"
        },
        {
          src: "/dress1.jpg",
          title: "Dress",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          to: "/inspire",
          price: "2000"
        },
        {
          src: "/sherwani.jpg",
          title: "Sherwani",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          to: "/inspire",
          price: "3000"
        },
        {
          src: "/lehenga.png",
          title: "Lehenga",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          to: "/inspire",
          price: "5000"
        },
        {
          src: "/lehenga.png",
          title: "Lehenga",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          to: "/inspire",
          price: "20000"
        }
      ]
    };
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    }
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    }
  }
};
</script>