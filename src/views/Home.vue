<template>
  <div id="container">
    <red-link url="http://www.naver.com">네이버로 가기</red-link>
    <br />
    <blue-link url="http://www.daum.net">다음</blue-link>
    <hr>
    <ul>
      <li v-for="(animal, idx) in animals" :key="idx">
        {{animal}}
      </li>
    </ul>
    <input v-model="animalText" placeholder="동물을 추가해.">
    <button @click="addAnimalNow">추가</button>
    <hr>
    <ul>
      <li v-for="(city, idx) in cities" :key="idx">
        {{city}}
      </li>
    </ul>
    <input v-model="cityText" placeholder="도시를 추가해.">
    <button @click="addCityNow">추가</button>
    <hr>
  </div>
</template>
<script>
import {mapMutations} from "vuex";
import {mapState} from "vuex";

export default {
  name: "home",
  data() {
    return {
      animalText : "lion",
      cityText : "newyork"
    };
  },
  computed : {
    ...mapState("animal", ["animals"]),
    ...mapState("city", ["cities"]),
  },
  methods: {
    ...mapMutations("animal", {"addAnimal" : "add"}),
    ...mapMutations("city", {"addCity" : "add"}),
    addAnimalNow() {
      this.addAnimal(this.animalText);
    },
    addCityNow() {
      this.addCity(this.cityText);
    }
  }
};
</script>
<style scoped>
div {
  margin-top: 10px;
}
</style>
