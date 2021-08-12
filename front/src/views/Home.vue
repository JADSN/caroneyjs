<template>
  <div class="uk-container-expand">
    <!-- Navbar -->
    <TheNavbar />

    <div class="uk-flex uk-flex-column">
      <!-- Headers -->
      <RegisterHeader />

      <!-- Button Add Register -->
      <div class="uk-margin-top uk-margin-left">
        <button
          id="btn-add-register"
          class="uk-button uk-button-secondary uk-text-bolder uk-text-uppercase"
          uk-toggle="target: #btn-add-register"
          type="button"
        >
          ADD
        </button>
      </div>

      <RegisterTable />
      <RegisterResume />
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

// * Vuex
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

// * Components
import TheNavbar from "../components/TheNavbar.vue";
import RegisterHeader from "../components/RegisterHeader.vue";
import RegisterTable from "../components/RegisterTable.vue";
import RegisterResume from "../components/RegisterResume.vue";

export default {
  name: "Home",
  components: { TheNavbar, RegisterHeader, RegisterTable, RegisterResume },
};
</script>

<style>
</style>