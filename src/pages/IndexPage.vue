<template>
  <q-page>
    <!-- <h2>You have rescued {{ opossums }} opossums!</h2>
    <img :src="sillyGuys[1]" />
    <button @click="opossums = opossums + 1">Rescue an Opossum</button> -->
    <div class="center">
      <div class="flex-container">
        <table>
          <tr>
            <td><img :src="sillyGuys[1]" /></td>

            <td>
              <h4>Statistics</h4>
              <ul>
                <li>Total Opossums: {{ opossums }}</li>
                <li>Savings: $ {{ money }}</li>
                <li>Total Visitors: {{ visitors }}</li>
                <li>Days Open: {{ daysOpen }}</li>
                <li>Total Days: {{ totalDays }}</li>
              </ul>
              <h5>You are currently idle.</h5>
              <button class="action">Go Looking for Friends</button>
              <button class="action">Open to Visitors</button>
            </td>
          </tr>
        </table>
      </div>
      <br />
      <div class="flex-container">
        <div v-for="item in upgradeList" :key="item">
          <button class="upgrade">
            {{ item.title }}<br /><i> Cost: {{ item.cost }}</i>
          </button>
        </div>
      </div>
    </div>
  </q-page>
</template>

<!--
  A few Ideas I have before I need to go to bed:
    - Need to buy food and water, maybe opossums only eat a little bit compared to what you buy.
    - a Multiplier for the buy buttons: 1x 5x 10x etc etc, maybe a function call with an index and multiplier as params
    - Everyday there is a chance for friends
    - Everyday there is a chance for visitors, scaling with how many opossums and how they're treated.

 -->

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      opossums: 0,
      money: 0,
      daysOpen: 0,
      totalDays: 0,
      visitors: 0,
      sillyGuys: ["/images/silly.jpeg", "/images/silly2.jpeg"],
      upgradeList: {
        0: {
          title: "Feed",
          cost: 10,
        },
        1: {
          title: "Water",
          cost: 25,
        },
        2: {
          title: "Bed",
          cost: 100,
        },
        3: {
          title: "Blankets",
          cost: 0,
        },
        4: {
          title: "",
          cost: 0,
        },
      },
    };
  },
  methods: {
    lookForFriends() {},
  },
});
</script>

<style scoped>
tr {
  width: 50%;
}
.action {
  width: 100%;
  margin-bottom: 1em;
}

img {
  border-radius: 5%;
  margin: 5em;
}

.center {
  width: 75%;
  margin: auto;
}

.flex-container {
  display: inline-flex;
  flex-wrap: wrap;
}

.flex-container .split {
  width: 50%;
}

.flex-container button i {
  font-size: 12px;
  font-weight: normal;
}

/* CSS */
button {
  background-color: #ffffff;
  border: 1px solid #222222;
  border-radius: 8px;
  box-sizing: border-box;
  color: #222222;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  outline: none;
  padding: 13px 23px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition: box-shadow 0.2s, -ms-transform 0.1s, -webkit-transform 0.1s,
    transform 0.1s;
  user-select: none;
  -webkit-user-select: none;
}

button:focus-visible {
  box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
  transition: box-shadow 0.2s;
}

button:active {
  background-color: #f7f7f7;
  border-color: #000000;
  transform: scale(0.96);
}

button:disabled {
  border-color: #dddddd;
  color: #dddddd;
  cursor: not-allowed;
  opacity: 1;
}

.upgrade {
  margin: 0.5em;
  width: 100px;
  height: 100px;
}
</style>
