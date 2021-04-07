<template>
  <div>
    <h1 class="title">Galery</h1>
    <Input/>
    <div class="photo-block">
      <Photo
        class="photo-block__item"
        v-for="img in imgs"
        :key ="img.id"
        :img="img"
      />
    </div>
  </div>
</template>
<script>
import Photo from '@/components/Photo'
import Input from '@/components/Input'
import {mapGetters} from 'vuex'
export default {
  components: {
    Photo,
    Input
  },
  computed: {
    ...mapGetters({
      imgs: 'images/getImgs'
    })
  },
  async fetch({store}){
    if(store.getters['images/getImgs'].length === 0){
      await store.dispatch('images/fetchImages')
    }
  }
}
</script>

<style scoped>
  .v-application .title{
    text-align: center;
    font-size: 30px  !important;
    margin: 10px 0;
  }
  .photo-block{
    display: flex;
    flex-wrap: wrap;
  }
  .photo-block__item{
    margin: 10px 0;
  }
</style>
