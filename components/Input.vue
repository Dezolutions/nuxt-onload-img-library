<template lang="">
  <v-container>
    <v-form
      ref="form"
      lazy-validation
    >
    <v-row class="d-flex">
        <v-text-field
          label="Name"
          v-model="title"
          required
        ></v-text-field>
        <v-file-input
          v-model="img"
        />
        <v-btn
          @click="addImg"
        >
          Add
        </v-btn> 
    </v-row>  
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: '',
    img: null
  }),
  methods: {
    addImg(){
      const reader = new FileReader()
      reader.onload = () => {
        let image = {
          id: Date.now(),
          title: this.title,
          url: reader.result
        }
        this.$store.commit('images/addImage',image)
        this.$refs.form.reset()
      }
      reader.readAsDataURL(this.img)
      
    } 
  },
}
</script>
