<template>
  <tbody>
    <tr v-for="register in registers" :key="register.id">
      <RegisterTableBodyItem :register="register" />
    </tr>
  </tbody>
</template>

<script>
// * Vuex
import { mapState } from "vuex";

// * Components
import RegisterTableBodyItem from "./RegisterTableBodyItem.vue";

export default {
  name: "RegisterTableBody",
  components: { RegisterTableBodyItem },
  computed: {
    ...mapState({
      registers: (state) => state.registers,
    }),
  },
  created() {
    this.$store.dispatch("getAllRegisters");
  },
};
</script>

<style>
</style>