<template>
  <div>
    <div class="uk-margin">
      <label class="uk-text-bolder uk-text-uppercase" for="inp-finish-month"
        >Of the month ending in:
      </label>
      <span
        class="uk-text-uppercase"
        type="text"
        id="inp-finish-month"
        placeholder="Finish date"
        >{{ getReportDate }}</span
      >
    </div>
    <div>
      <div>
        <h3>Donates</h3>
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
        <div>
          <label for="inp-donate-input">INPUT</label>
          <input
            class="uk-input"
            type="text"
            id="inp-donate-input"
            placeholder="Input"
          />
        </div>
        <div>
          <label for="inp-donate-input">OUTPUT</label>
          <input
            class="uk-input"
            type="text"
            id="inp-donate-output"
            placeholder="Output"
          />
        </div>
        <div>
          <label for="inp-donate-product">PRODUCT</label>
          <input
            class="uk-input"
            type="text"
            id="inp-donate-product"
            placeholder="Product"
          />
        </div>
      </div>

      <div>
        <h3>BANK ACCOUNT SAFE / SAFE BOX</h3>
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
        <div>
          <label for="inp-safe-box-input">INPUT</label>
          <input
            class="uk-input"
            type="text"
            id="inp-safe-box-input"
            placeholder="Input"
          />
        </div>
        <div>
          <label for="inp-safe-box-input">OUTPUT</label>
          <input
            class="uk-input"
            type="text"
            id="inp-safe-box-output"
            placeholder="Output"
          />
        </div>
        <div>
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
        <h3>Other</h3>
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
        <div>
          <label for="inp-other-input">INPUT</label>
          <input
            class="uk-input"
            type="text"
            id="inp-other-input"
            placeholder="Input"
          />
        </div>
        <div>
          <label for="inp-other-input">OUTPUT</label>
          <input
            class="uk-input"
            type="text"
            id="inp-other-output"
            placeholder="Output"
          />
        </div>
        <div>
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

  <div>
    <div class="uk-margin">
      <label for="inp-balance-available-at-the-end-of-the-month"
        >BALANCE AVAILABLE AT THE END OF THE MONTH</label
      >
      <input
        class="uk-input"
        type="text"
        id="inp-balance-available-at-the-end-of-the-month"
        placeholder="Input"
      />
    </div>
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

<style>
</style>