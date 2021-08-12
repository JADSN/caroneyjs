<template>
  <div class="uk-container-expand">
    <div class="uk-flex uk-flex-column">
      <!-- Headers -->
      <div class="uk-flex uk-flex-around uk-flex-middle uk-margin-top">
        <div>
          <input
            type="text"
            name="inp-congregationName"
            id="inp-congregationName"
            class="uk-input"
            placeholder="Congregation name"
          />
        </div>
        <div>
          <input
            type="text"
            name="inp-city"
            id="inp-city"
            class="uk-input"
            placeholder="City name"
          />
        </div>
        <div>
          <input
            type="text"
            name="inp-state"
            id="inp-state"
            class="uk-input"
            placeholder="State name"
          />
        </div>
        <div>
          <select class="uk-select">
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
            :value="actualYear"
          />
        </div>
      </div>

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

      <!-- Table of Register Moviments  -->
      <div>
        <div class="uk-overflow-auto">
          <table class="uk-table">
            <col />
            <colgroup span="1"></colgroup>
            <colgroup span="1"></colgroup>
            <colgroup span="2"></colgroup>
            <colgroup span="2"></colgroup>
            <thead>
              <tr>
                <th
                  rowspan="2"
                  class="
                    uk-text-bolder
                    uk-text-uppercase
                    uk-text-center
                    uk-text-middle
                  "
                >
                  DATE
                </th>
                <th
                  rowspan="2"
                  class="
                    uk-text-bolder
                    uk-text-uppercase
                    uk-text-center
                    uk-text-middle
                  "
                >
                  DESCRIPTION OF MOVEMENT
                </th>
                <th
                  rowspan="2"
                  class="
                    uk-text-bolder
                    uk-text-uppercase
                    uk-text-center
                    uk-text-middle
                  "
                >
                  S
                </th>
                <th
                  class="
                    uk-text-bolder
                    uk-text-uppercase
                    uk-text-center
                    uk-text-middle
                  "
                  colspan="2"
                  scope="colgroup"
                >
                  DONATES
                </th>
                <th
                  class="uk-text-bolder uk-text-uppercase uk-text-center"
                  colspan="2"
                  scope="colgroup"
                >
                  BANK ACCOUNT SAFE / SAFE BOX
                </th>
                <th
                  class="uk-text-bolder uk-text-uppercase uk-text-center"
                  colspan="2"
                  scope="colgroup"
                >
                  Others
                </th>
              </tr>
              <tr>
                <th
                  class="uk-text-bolder uk-text-uppercase uk-text-center"
                  scope="col"
                >
                  INPUT
                </th>
                <th
                  class="uk-text-bolder uk-text-uppercase uk-text-center"
                  scope="col"
                >
                  OUTPUT
                </th>
                <th
                  class="uk-text-bolder uk-text-uppercase uk-text-center"
                  scope="col"
                >
                  INPUT
                </th>
                <th
                  class="uk-text-bolder uk-text-uppercase uk-text-center"
                  scope="col"
                >
                  OUTPUT
                </th>
                <th
                  class="uk-text-bolder uk-text-uppercase uk-text-center"
                  scope="col"
                >
                  INPUT
                </th>
                <th
                  class="uk-text-bolder uk-text-uppercase uk-text-center"
                  scope="col"
                >
                  OUTPUT
                </th>
              </tr>
            </thead>

            <!-- Table footer -->
            <tfoot>
              <tr>
                <td
                  colspan="3"
                  class="
                    uk-text-bolder
                    uk-text-uppercase
                    uk-text-center
                    uk-text-middle
                  "
                >
                  TOTAIS DAS COLUNAS
                </td>
                <td
                  class="
                    uk-text-bolder
                    uk-text-uppercase
                    uk-text-center
                    uk-text-middle
                  "
                >
                  <span>{{ getSumOfRegisterDonateInput }}</span>
                </td>
                <td
                  class="
                    uk-text-bolder
                    uk-text-uppercase
                    uk-text-center
                    uk-text-middle
                  "
                >
                  <span>{{ getSumOfRegisterDonateOutput }}</span>
                </td>
                <td
                  class="
                    uk-text-bolder
                    uk-text-uppercase
                    uk-text-center
                    uk-text-middle
                  "
                >
                  <span>{{ getSumOfRegisterBankAccountInput }}</span>
                </td>
                <td
                  class="
                    uk-text-bolder
                    uk-text-uppercase
                    uk-text-center
                    uk-text-middle
                  "
                >
                  <span>{{ getSumOfRegisterBankAccountOutput }}</span>
                </td>
                <td
                  class="
                    uk-text-bolder
                    uk-text-uppercase
                    uk-text-center
                    uk-text-middle
                  "
                >
                  <span>{{ getSumOfRegisterOtherInput }}</span>
                </td>
                <td
                  class="
                    uk-text-bolder
                    uk-text-uppercase
                    uk-text-center
                    uk-text-middle
                  "
                >
                  <span>{{ getSumOfRegisterOtherOutput }}</span>
                </td>
              </tr>
            </tfoot>

            <!-- Content table -->
            <tbody>
              <tr v-for="register in registers" :key="register.id">
                <td>
                  <input
                    class="
                      uk-input uk-text-bolder uk-text-uppercase uk-text-center
                    "
                    type="date"
                    name="dt-date"
                    disabled="true"
                    :value="register.date"
                  />
                </td>
                <td>
                  <input
                    class="
                      uk-input
                      uk-text-bolder
                      uk-text-uppercase
                      uk-text-truncate
                      uk-text-left
                    "
                    type="text"
                    name="inp-description"
                    disabled="true"
                    v-model.trim="register.description"
                  />
                </td>
                <td>
                  <span class="uk-text-bolder uk-text-uppercase uk-text-center">
                    <select
                      class="uk-select w60"
                      disabled="true"
                      v-model.number="register.symbol"
                    >
                      <option disabled>Choose a symbol</option>
                      <option
                        v-for="(symb, index) in symbols"
                        :key="index"
                        :value="index + 1"
                      >
                        {{ symb }}
                      </option>
                    </select>
                  </span>
                </td>
                <td>
                  <input
                    class="
                      uk-input uk-text-bolder uk-text-uppercase uk-text-left
                    "
                    type="number"
                    name="inp-donate-input"
                    step="0.01"
                    disabled="true"
                    v-model.number="register.donateInput"
                  />
                </td>
                <td>
                  <input
                    class="
                      uk-input uk-text-bolder uk-text-uppercase uk-text-left
                    "
                    type="number"
                    name="inp-donate-output"
                    step="0.01"
                    disabled="true"
                    v-model.number="register.donateOutput"
                  />
                </td>
                <td>
                  <input
                    class="
                      uk-input uk-text-bolder uk-text-uppercase uk-text-left
                    "
                    type="number"
                    name="inp-cb-input"
                    step="0.01"
                    disabled="true"
                    v-model.number="register.cbInput"
                  />
                </td>
                <td>
                  <input
                    class="
                      uk-input uk-text-bolder uk-text-uppercase uk-text-left
                    "
                    type="number"
                    name="inp-cb-output"
                    step="0.01"
                    disabled="true"
                    v-model.number="register.cbOutput"
                  />
                </td>
                <td>
                  <input
                    class="
                      uk-input uk-text-bolder uk-text-uppercase uk-text-left
                    "
                    type="number"
                    name="inp-others-input"
                    step="0.01"
                    disabled="true"
                    v-model.number="register.otherInput"
                  />
                </td>
                <td>
                  <input
                    class="
                      uk-input uk-text-bolder uk-text-uppercase uk-text-left
                    "
                    type="number"
                    name="inp-others-output"
                    step="0.01"
                    disabled="true"
                    v-model.number="register.otherOutput"
                  />
                </td>
                <!-- Actions -->
                <td>
                  <span
                    :id="'btn-edit-register-' + register.id"
                    :uk-toggle="'target: #btn-edit-register-' + register.id"
                    class="uk-icon-button"
                    uk-icon="pencil"
                  ></span>
                </td>
                <td>
                  <span
                    :id="'btn-remove-register-' + register.id"
                    :uk-toggle="'target: #btn-remove-register-' + register.id"
                    class="uk-icon-button"
                    uk-icon="trash"
                  ></span>
                </td>

                <!-- Modals Actions -->

                <!-- Edit modal dialog -->
                <div :id="'btn-edit-register-' + register.id" uk-modal>
                  <div class="uk-modal-dialog">
                    <button
                      class="uk-modal-close-default"
                      type="button"
                      uk-close
                    ></button>
                    <div class="uk-modal-header">
                      <h2>
                        Edit item <strong>#{{ register.id }}</strong>
                      </h2>
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
                          >
                            <option>Choose a symbol</option>
                          </select>
                        </div>
                        <!-- Date -->
                        <div class="uk-margin-top">
                          <label for="inp-add-date">Date</label>
                          <input
                            class="
                              uk-input
                              uk-text-bolder
                              uk-text-uppercase
                              uk-text-center
                            "
                            type="date"
                            name="inp-add-date"
                            id="inp-add-date"
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
                        ></textarea>
                      </div>
                      <!-- Donate -->
                      <div class="uk-margin-top">
                        <label for="">Donate</label>
                        <div class="uk-flex">
                          <input
                            class="uk-input"
                            type="text"
                            placeholder="Input"
                          />
                          <input
                            class="uk-input"
                            type="text"
                            placeholder="Output"
                          />
                        </div>
                      </div>
                      <!-- BACK ACCOUNT SAFE / SAFE BOX -->
                      <div class="uk-margin-top">
                        <label for="">BACK ACCOUNT SAFE / SAFE BOX</label>
                        <div class="uk-flex">
                          <input
                            class="uk-input"
                            type="text"
                            placeholder="Input"
                          />
                          <input
                            class="uk-input"
                            type="text"
                            placeholder="Output"
                          />
                        </div>
                      </div>
                      <!-- Other -->
                      <div class="uk-margin-top">
                        <label for="">Other</label>
                        <div class="uk-flex">
                          <input
                            class="uk-input"
                            type="text"
                            placeholder="Input"
                          />
                          <input
                            class="uk-input"
                            type="text"
                            placeholder="Output"
                          />
                        </div>
                      </div>
                    </div>
                    <!-- Buttons Modal -->
                    <div class="uk-modal-footer uk-text-right">
                      <button
                        class="uk-button uk-button-default uk-modal-close"
                        type="button"
                      >
                        Cancel
                      </button>
                      <button
                        class="uk-button uk-button-primary uk-modal-close"
                        type="button"
                        role="button"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Remove modal dialog -->
                <div :id="'btn-remove-register-' + register.id" uk-modal>
                  <div class="uk-modal-dialog">
                    <button
                      class="uk-modal-close-default"
                      type="button"
                      uk-close
                    ></button>
                    <div class="uk-modal-header">
                      <h2 class="uk-modal-title">
                        Delete item <strong>#{{ register.id }}</strong>
                      </h2>
                    </div>
                    <div class="uk-modal-body">
                      <h5 class="uk-modal-title">Are you sure?</h5>
                    </div>
                    <div class="uk-modal-footer uk-text-right">
                      <button
                        class="uk-button uk-button-default uk-modal-close"
                        type="button"
                      >
                        Cancel
                      </button>
                      <button
                        class="uk-button uk-button-primary uk-modal-close"
                        type="button"
                        role="button"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
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
            >
              <option>Choose a symbol</option>
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
            />
            <input
              class="uk-input"
              type="number"
              step="1.0"
              placeholder="Output"
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
            />
            <input
              class="uk-input"
              type="number"
              step="1.0"
              placeholder="Output"
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
            />
            <input
              class="uk-input"
              type="number"
              step="1.0"
              placeholder="Output"
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
        >
          Add
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

import { obtainAllMonthsOfYear, actualYear } from "./utils/date";

export default {
  name: "App",
  computed: {
    months() {
      return obtainAllMonthsOfYear();
    },
    actualYear() {
      return actualYear();
    },
    ...mapState({
      registers: (state) => state.registers,
      symbols: (state) => state.symbols,
    }),
    ...mapGetters([
      "getSumOfRegisterDonateInput",
      "getSumOfRegisterDonateOutput",
      "getSumOfRegisterBankAccountInput",
      "getSumOfRegisterBankAccountOutput",
      "getSumOfRegisterOtherInput",
      "getSumOfRegisterOtherOutput",
      // "getSymbols",
    ]),
  },
  methods: {
    // ...mapMutations(["SET_TASK_DESCRIPTION"]),
    // ...mapActions(["createTask", "updateTask", "removeTask"]),
  },
  created() {
    this.$store.dispatch("getAllRegisters");
  },
};
</script>

<style>
</style>