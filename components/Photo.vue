<template >
  <v-dialog
    v-model="dialog"
    width="75%"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-card
        class="mx-auto ma-3"
        max-width="344"
        :attrs="attrs"
        v-on="on"
      >
        <v-img
          :src="img.url"
          height="200px"
        ></v-img>

        <v-card-title>
          {{img.title}}
        </v-card-title>
      </v-card>
    </template>

    <v-card class="mx-auto">
      <v-img :src="img.url"></v-img>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: ['img'],
  data() {
    return {
      dialog: false
    }
  },
}
</script>
