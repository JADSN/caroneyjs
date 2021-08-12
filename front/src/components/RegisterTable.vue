<template>
  <!-- Table of Register Moviments  -->
  <div>
    <div class="uk-overflow-auto">
      <table class="uk-table">
        <!-- Table header -->
        <RegisterTableHead />

        <!-- Table footer -->
        <RegisterTableFooter />

        <!-- Content table -->
        <RegisterTableBody />
      </table>
    </div>
  </div>

  <!-- Add modal dialog -->
  <div id="btn-add-register" uk-modal>
    <div class="uk-modal-dialog">
      <button class="uk-modal-close-default" type="button" uk-close></button>
      <div class="uk-modal-header">
        <h2 class="uk-modal-title">Add register</h2>
      </div>
      <div class="uk-modal-body">
        <div>
          <!-- Symbol -->
          <div>
            <label for="symbol-option">Symbol</label>

            <select
              class="uk-select w60"
              name="symbol-option"
              id="symbol-option"
              v-model="registerToAdd.symbol"
            >
              <option>Choose a symbol</option>
              <option
                v-for="(symb, index) in symbols"
                :key="index"
                :value="index + 1"
              >
                {{ symb }}
              </option>
            </select>
          </div>

          <!-- Date -->
          <div class="uk-margin-top">
            <label for="inp-add-date">Date</label>
            <input
              class="uk-input uk-text-bolder uk-text-uppercase uk-text-center"
              type="date"
              name="inp-add-date"
              id="inp-add-date"
              v-model.trim.lazy="registerToAdd.date"
            />
          </div>
        </div>

        <!-- Description -->
        <div class="uk-margin-top">
          <label for="inp-add-description">Description</label>
          <textarea
            class="uk-textarea"
            name="inp-add-description"
            id="inp-add-description"
            placeholder="Descripiton"
            v-model.trim="registerToAdd.description"
          ></textarea>
        </div>

        <!-- Donate -->
        <div class="uk-margin-top">
          <label for="">Donate</label>
          <div class="uk-flex">
            <input
              class="uk-input"
              type="number"
              step="1.0"
              placeholder="Input"
              v-model.number="registerToAdd.donateInput"
            />
            <input
              class="uk-input"
              type="number"
              step="1.0"
              placeholder="Output"
              v-model.number="registerToAdd.donateOutput"
            />
          </div>
        </div>

        <!-- BACK ACCOUNT SAFE / SAFE BOX -->
        <div class="uk-margin-top">
          <label for="">BACK ACCOUNT SAFE / SAFE BOX</label>
          <div class="uk-flex">
            <input
              class="uk-input"
              type="number"
              step="1.0"
              placeholder="Input"
              v-model.number="registerToAdd.cbInput"
            />
            <input
              class="uk-input"
              type="number"
              step="1.0"
              placeholder="Output"
              v-model.number="registerToAdd.cbOutput"
            />
          </div>
        </div>

        <!-- Other -->
        <div class="uk-margin-top">
          <label for="">Other</label>
          <div class="uk-flex">
            <input
              class="uk-input"
              type="number"
              step="1.0"
              placeholder="Input"
              v-model.number="registerToAdd.otherInput"
            />
            <input
              class="uk-input"
              type="number"
              step="1.0"
              placeholder="Output"
              v-model.number="registerToAdd.otherOutput"
            />
          </div>
        </div>
      </div>

      <!-- Buttons Modal -->
      <div class="uk-modal-footer uk-text-right">
        <button
          class="uk-button uk-button-default uk-modal-close"
          type="button"
          role="button"
        >
          Cancel
        </button>
        <button
          class="uk-button uk-button-primary uk-modal-close"
          type="button"
          role="button"
          @click.prevent="createRegister(registerToAdd)"
        >
          Add
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

// * Vuex
import { mapState, mapActions } from "vuex";

// * Components
import RegisterTableFooter from "./RegisterTableFooter.vue";
import RegisterTableHead from "./RegisterTableHead.vue";
import RegisterTableBody from "./RegisterTableBody.vue";

export default {
  name: "RegisterTable",
  components: { RegisterTableFooter, RegisterTableHead, RegisterTableBody },
  data() {
    const registerToAdd = reactive({
      date: "",
      description: "",
      symbol: 1,
      donateInput: 0,
      donateOutput: 0,
      cbInput: 0,
      cbOutput: 0,
      otherInput: 0,
      otherOutput: 0,
    });

    return { registerToAdd };
  },
  computed: {
    ...mapState({
      symbols: (state) => state.symbols,
    }),
  },
  methods: {
    ...mapActions(["createRegister"]),
  },
  // created() {
  //   this.$store.dispatch("getAllRegisters");
  // },
};
</script>

<style>
</style>