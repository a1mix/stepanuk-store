import { createStore } from 'vuex'

export default createStore({
  state: {
    goods: [
      {
        "id": 1,
        "name": "Болт",
        "available": true,
        "caption": "Размеры: , и описание товара",
        "optom": true,
        "type": "",
        "optom_quantity": 50,
        "price_for_one": "10",
        "home_image": "1.png",
        "other_images": ["1_1.png", "1_2.png"]
      },
      {

      },
      {
        
      },
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
