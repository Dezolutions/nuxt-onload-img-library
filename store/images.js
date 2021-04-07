export const state = () => ({
  imgs: [],
})
export const mutations = {
  setImages(state,payload) {
    state.imgs = payload
  },
  addImage(state,payload){
    state.imgs.push(payload)
  }
}

export const getters = {
  getImgs: state => state.imgs
}
export const actions = {
  async fetchImages({commit}){
    try {
      const imgs = await this.$axios.$get('https://jsonplaceholder.typicode.com/photos?_limit=3')
      commit('setImages',imgs) 
    } catch (e) { console.log(e) }
    
  }
}