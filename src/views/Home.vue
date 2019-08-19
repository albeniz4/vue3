<template>
  <div id="container">
    <red-link url="http://www.naver.com">네이버로 가기</red-link>
    <br />
    <blue-link url="http://www.daum.net">다음</blue-link>
    <hr>
    <ul>
      <li v-for="(animal) in animals" :key="animal.idx">
        {{animal.name}}
        <button @click="removeAnimal(animal.idx)">삭제</button>
      </li>
    </ul>
    <input v-model="animalText" placeholder="동물을 추가해.">
    <button @click="addAnimalNow">추가</button>
    <hr>
    <ul>
      <li v-for="city in cities" :key="city.idx">
        {{city.name}}
        <button @click="removeCity(city.idx)">삭제</button>
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
      animalText : "",
      cityText : ""
    };
  },
  computed : {
    ...mapState("animal", ["animals"]),
    ...mapState("city", ["cities"]),
  },
  methods: {
    ...mapMutations("animal", {"addAnimal" : "add", "removeAnimal" : "remove"}),
    ...mapMutations("city", {"addCity" : "add", "removeCity" : "remove"}),
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
