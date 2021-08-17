<template>
  <div class="uk-container">
    <div class="uk-margin">
      <label class="uk-text-bolder uk-text-uppercase" for="inp-finish-month"
        >THE MONTH ENDS IN:
      </label>
      <span
        class="uk-text-uppercase"
        type="text"
        id="inp-finish-month"
        placeholder="Finish date"
        >{{ getReportDate }}</span
      >
    </div>
    <div class="uk-flex uk-flex-between">
      <div class="uk-margin-right">
        <h5 class="uk-text-bolder uk-text-uppercase">Donates</h5>
        <div>
          <label for="inp-donate-exit-from-the-previous-month"
            >Exit from the previous month</label
          >
          <input
            class="uk-input"
            type="text"
            id="inp-donate-exit-from-the-previous-month"
            placeholder="Input"
          />
        </div>
        <div class="uk-margin-top">
          <label for="inp-donate-input">INPUT</label>
          <input
            class="uk-input"
            type="text"
            id="inp-donate-input"
            placeholder="Input"
          />
        </div>
        <div class="uk-margin-top">
          <label for="inp-donate-input">OUTPUT</label>
          <input
            class="uk-input"
            type="text"
            id="inp-donate-output"
            placeholder="Output"
          />
        </div>
        <div class="uk-margin-top">
          <label for="inp-donate-product">PRODUCT</label>
          <input
            class="uk-input"
            type="text"
            id="inp-donate-product"
            placeholder="Product"
          />
        </div>
      </div>

      <div class="uk-margin-right">
        <h5 class="uk-text-bolder uk-text-uppercase">
          BANK ACCOUNT SAFE / SAFE BOX
        </h5>
        <div>
          <label for="inp-safe-box-exit-from-the-previous-month"
            >Exit from the previous month</label
          >
          <input
            class="uk-input"
            type="text"
            id="inp-safe-box-exit-from-the-previous-month"
            placeholder="Input"
          />
        </div>
        <div class="uk-margin-top">
          <label for="inp-safe-box-input">INPUT</label>
          <input
            class="uk-input"
            type="text"
            id="inp-safe-box-input"
            placeholder="Input"
          />
        </div>
        <div class="uk-margin-top">
          <label for="inp-safe-box-input">OUTPUT</label>
          <input
            class="uk-input"
            type="text"
            id="inp-safe-box-output"
            placeholder="Output"
          />
        </div>
        <div class="uk-margin-top">
          <label for="inp-safe-box-product">PRODUCT</label>
          <input
            class="uk-input"
            type="text"
            id="inp-safe-box-product"
            placeholder="Product"
          />
        </div>
      </div>

      <div>
        <h5 class="uk-text-bolder uk-text-uppercase">Other</h5>
        <div>
          <label for="inp-other-exit-from-the-previous-month"
            >Exit from the previous month</label
          >
          <input
            class="uk-input"
            type="text"
            id="inp-other-exit-from-the-previous-month"
            placeholder="Input"
          />
        </div>
        <div class="uk-margin-top">
          <label for="inp-other-input">INPUT</label>
          <input
            class="uk-input"
            type="text"
            id="inp-other-input"
            placeholder="Input"
          />
        </div>
        <div class="uk-margin-top">
          <label for="inp-other-input">OUTPUT</label>
          <input
            class="uk-input"
            type="text"
            id="inp-other-output"
            placeholder="Output"
          />
        </div>
        <div class="uk-margin-top">
          <label for="inp-other-product">PRODUCT</label>
          <input
            class="uk-input"
            type="text"
            id="inp-other-product"
            placeholder="Product"
          />
        </div>
      </div>
    </div>
  </div>

  <div
    class="
      uk-margin-top
      uk-margin-left
      uk-flex
      uk-flex-column
      uk-flex-center
      uk-flex-start
    "
  >
    <label
      class="uk-text-bolder"
      for="inp-balance-available-at-the-end-of-the-month"
      >BALANCE AVAILABLE AT THE END OF THE MONTH</label
    >
    <input
      class="uk-input w20"
      type="text"
      id="inp-balance-available-at-the-end-of-the-month"
      placeholder="Input"
    />
  </div>
</template>

<script>
// * Vuex
import { mapGetters } from "vuex";

export default {
  name: "RegisterResume",
  computed: {
    ...mapGetters(["getReportDate"]),
  },
  onCreated() {},
};
</script>

<style scoped>
.w20 {
  width: 20%;
}
</style>