<template>
  <div class="uk-flex uk-flex-around uk-flex-middle uk-margin-top">
    <div>
      <input
        type="text"
        name="inp-congregationName"
        id="inp-congregationName"
        class="uk-input"
        placeholder="Congregation name"
        v-model.trim="congName"
      />
    </div>
    <div>
      <input
        type="text"
        name="inp-city"
        id="inp-city"
        class="uk-input"
        placeholder="City name"
        v-model.trim="cityName"
      />
    </div>
    <div>
      <input
        type="text"
        name="inp-state"
        id="inp-state"
        class="uk-input"
        placeholder="State name"
        v-model.trim="stateName"
      />
    </div>
    <div>
      <select class="uk-select" v-model.number="actualMonth">
        <option disabled>Choose the month</option>
        <option v-for="month in months" :key="month.id" :value="month.id">
          {{ month.name }}
        </option>
      </select>
    </div>
    <div>
      <input
        type="number"
        name="inp-year"
        id="inp-year"
        class="uk-input"
        step="1"
        :min="actualYear - 1"
        :max="actualYear + 1"
        v-model="actualYear"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

// * Utils
import { obtainAllMonthsOfYear, actualYear, actualMonth } from "../utils/date";

export default {
  name: "RegisterHeader",
  computed: {
    congName: {
      get() {
        return this.getCongregationName;
      },
      set(newValue) {
        this.SET_CONGREGATION_NAME(newValue);
      },
    },
    cityName: {
      get() {
        return this.getCityName;
      },
      set(newValue) {
        this.SET_ACTUAL_CITY_NAME(newValue);
      },
    },
    stateName: {
      get() {
        return this.getStateName;
      },
      set(newValue) {
        this.SET_ACTUAL_STATE_NAME(newValue);
      },
    },
    actualMonth: {
      get() {
        return this.getMonth;
      },
      set(newValue) {
        this.SET_MONTH(newValue);
      },
    },
    months: {
      get() {
        return this.getAllMonths;
      },
      set(newValue) {
        this.SET_ALL_MONTHS(newValue);
      },
    },
    actualYear: {
      get() {
        return this.getYear;
      },
      set(newValue) {
        this.SET_YEAR(newValue);
      },
    },
    ...mapGetters([
      "getCongregationName",
      "getCityName",
      "getStateName",
      "getMonth",
      "getAllMonths",
      "getYear",
    ]),
  },
  methods: {
    ...mapMutations([
      "SET_CONGREGATION_NAME",
      "SET_ACTUAL_CITY_NAME",
      "SET_ACTUAL_STATE_NAME",
      "SET_MONTH",
      "SET_ALL_MONTHS",
      "SET_YEAR",
    ]),
  },
  created() {
    this.actualMonth = actualMonth();
    this.months = obtainAllMonthsOfYear();
    this.actualYear = actualYear();
  },
};
</script>

<style>
</style>