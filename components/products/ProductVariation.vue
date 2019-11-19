<template>
  <v-container>
    <v-chip-group active-class="primary--text">
      <v-chip>{{ type }}</v-chip>
    </v-chip-group>

    <v-chip-group v-model="selection" active-class="primary--text" @change="changed($event, type)">
      <v-chip
        filter
        v-for="variation in variations"
        :key="variation.id"
        :value="variation.id"
        :disabled="!variation.in_stock"
      >{{ variation.name }}</v-chip>
    </v-chip-group>
    <!--<template v-if="!variation.in_stock">Out of Stock</template>-->
  </v-container>
</template>
<script>
export default {
  data: () => ({
    selection: ""
  }),
  props: {
    type: {
      required: true,
      type: Array
    },
    variations: {
      required: true,
      type: Array
    },
    value: {
      required: false,
      default: ""
    }
  },

  computed: {
    selectedVariationId() {
      if (!this.findVariation(this.value.id)) {
        return "";
      }

      return this.value.id;
    }
  },

  methods: {
    changed(event, type) {
      this.$emit("input", this.findVariation(event.target.value));
    },

    findVariation(id) {
      let variation = this.variations.find(v => v.id == id);

      if (typeof variation === "undefined") {
        return null;
      }

      return variation;
    }
  }
};
</script>