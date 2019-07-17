<template>
  <div id="location">
    <h1>{{smallName}}</h1>
    <ul>
      <li>{{largeName}}</li>
      <li class="on">{{smallName}}</li>
    </ul>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: "Location",
  data() {
    return {
      largeName: "",
      smallName: ""
    };
  },
  mounted() {
    for (let row of this.menus) {
      if (row.idx == this.largeIdx) {
        this.largeName = row.name;

        for (let subRow of row.sub) {
          if (subRow.idx == this.smallIdx) {
            this.smallName = subRow.name;
            break;
          }
        }
        break;
      }
    }
  },
  computed: {
    ...mapState(['menus'])
  },
  props: {
    largeIdx: Number,
    smallIdx: Number
  }
};
</script>
