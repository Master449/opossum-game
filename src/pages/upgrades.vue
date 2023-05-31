<template>
  <q-page>
    <h3>You have rescued {{ opossums }} opossums!</h3>
    <img :src="sillyGuys[1]" />
    <button @click="opossums = opossums + 1">Rescue an Opossum</button>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      opossums: 0,
      sillyGuys: ["/images/silly.jpeg", "/images/silly2.jpeg"],
    };
  },
});
</script>
