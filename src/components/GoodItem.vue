<template>
  <!-- <li class="todoItem">
    <img :src="require(`../assets/images/${item.id}.jpg`)" alt="selectedImage">
       <div>{{ item.name }}</div> 
       <div v-if="item.available">Наличие: да</div>
       <div v-else>Наличие: нет</div>
        <v-btn size="x-small">
            <router-link to="/good">Подробнее</router-link> 
        </v-btn>
    </li> -->


    <v-card
    width="220"
  >
    <v-img
      class="align-end text-black"
      :src="require(`../assets/images/${item.home_image}`)"
      cover
      max-width="200"
      max-height="200"
    ></v-img>
    <v-card-title >{{ item.name }}</v-card-title>

    <v-card-subtitle class="pt-4">
       <div v-if="item.available">Наличие: да</div>
       <div v-else>Наличие: нет</div>
    </v-card-subtitle>

    <v-card-text>
       <div v-if="item.optom">Оптом: от {{ item.optom_quantity }} шт.</div>
       <div>Цена за шт.: {{ item.price_for_one }} руб.</div>
      <div></div>
    </v-card-text>

    <v-card-actions>
        <v-btn
        size="small"
       v-if="!show"
        @click="show = !show"
       
      >Подробнее</v-btn>
      <v-btn
      size="small"
       v-else
        @click="show = !show"
       
      >Скрыть</v-btn>
      <v-btn
        :disabled="!item.available"
        class="text-none text-subtitle-1 custom"
        color="#5865f2"
        size="small"
        variant="flat"
      >
        Купить
      </v-btn>

    </v-card-actions>
    <v-expand-transition >
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
            <div>Размеры: {{ item.dimensions }}</div>
            <div>Описание: {{ item.caption }}</div>
            <div>Номер: {{ item.number }}</div>
            <div>Производитель: {{ item.producer }}</div>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>

export default {
    props: {
        item: {
            type: Object,
        },
    },
    data() {
        return {
            show: false
        }
    },
    methods: {

    },
    computed: {
      
    }
}
</script>

<style>
li {
    box-shadow: 0px -5px 10px 0px rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 5px;
}
.custom::before {
    color: transparent
}

.custom:hover {
    color: rgba(0, 0, 0, 0.241);
}
</style>