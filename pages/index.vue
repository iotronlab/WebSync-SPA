<template>
  <v-app class="content">
    <v-card>
      <v-container>
        <v-row>
          <v-col>
            {{devices}}
            <v-switch
              v-for="device in devices"
              :key="device.id"
              :label="device.name"
              :device="device"
              v-model="device.status"
              @change="update({id: device.id, status: device.status})"
            ></v-switch>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-app>
</template>


<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    device: {
      required: true,
      type: Object
    }
  },

  data() {
    return {
      livestatus: ""
    };
  },
  computed: {
    ...mapGetters({
      devices: "devices"
    })
  },
  methods: {
    ...mapActions({
      update: "update"
    })
  }
};
</script>
<style scoped>
</style>





