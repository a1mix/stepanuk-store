<template>
  <div v-if="goods.length" class="GoodList">
    <div class="d-flex justify-center bg-surface-variant flex-wrap">
      <transition-group name="goods">
          <good-item
              :selected_types="selected_types"
              v-for="item in goods" 
              :item="item" 
              :key="item.id"
              >
          </good-item>
      </transition-group>
    </div>
  </div>
</template>

<script>
import GoodItem from '@/components/GoodItem.vue'
export default {
  props: {
    goods: {
      type: Array
    },
    selected_types: {
      type: Array
    }
  },
  name: 'GoodList',
  components: {
      GoodItem
  },
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.d-flex {
  gap: 20px;
}
</style>
