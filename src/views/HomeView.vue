<template>
  <input v-model="searchQuery" placeholder="поиск по товарам">
  <div class="home">
    
    <!-- <v-select
    v-model="selected_types"
    :items="types"
    label="Выбрать категории товаров"
    class="w-100"
  ></v-select> -->
    <good-list 
      :goods="searchedGoods" 
      :selected_types="selected_types"
    />
  </div>
</template>

<script>
import GoodList from '@/components/GoodList.vue';
export default {
  name: 'HomeView',
  data() {
    return {
      searchQuery: "",
      goods: [
      {
        "id": 1,
        "name": "Шайба 8×35",
        "available": true,
        "dimensions": "8×35",
        "caption": "описание товара",
        "number": "1/26462/1",
        "optom": true,
        "type": "Шайба",
        "optom_quantity": 10,
        "price_for_one": "10",
        "home_image": "1_26462_1.jpg",
        "producer": "ООО'Металлургия'"
      },
      {
        "id": 2,
        "name": "Шайба 10×35",
        "available": false,
        "dimensions": "10x35",
        "caption": "описание товара",
        "number": "1/26443/01",
        "optom": true,
        "type": "Шайба",
        "optom_quantity": 100,
        "price_for_one": "1",
        "home_image": "1_26443_01.jpg",
        "producer": "ОООМеталлургия"
      },
      {
        "id": 3,
        "name": "Шайба 12×35",
        "available": false,
        "dimensions": "12×35",
        "caption": "описание товара",
        "number": "1/252045",
        "optom": true,
        "type": "Шайба",
        "optom_quantity": 100,
        "price_for_one": "1",
        "home_image": "1_252045.jpg",

        "producer": "ОООМеталлургия"
      },
      ],

      selected_types: [],
      types: [
        "Подшипники",
        "Шайбы",
        "Болты"
      ],
      
    }
  },
  components: {
    GoodList
  },
  computed: {
    searchedGoods() { 
      return this.goods.filter(good => good.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  }
}
</script>

<style scoped>
input {
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  margin: 10px 0;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>