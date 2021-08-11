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
            <option>Choose the month</option>
          </select>
        </div>
        <div>
          <input
            type="number"
            name="inp-year"
            id="inp-year"
            class="uk-input"
            step="1"
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

      <!-- Table Register Moviments  -->
      <!-- Table -->
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
                  <span>1.200</span>
                </td>
                <td
                  class="
                    uk-text-bolder
                    uk-text-uppercase
                    uk-text-center
                    uk-text-middle
                  "
                >
                  <span>1.200</span>
                </td>
                <td
                  class="
                    uk-text-bolder
                    uk-text-uppercase
                    uk-text-center
                    uk-text-middle
                  "
                >
                  <span>1.200</span>
                </td>
                <td
                  class="
                    uk-text-bolder
                    uk-text-uppercase
                    uk-text-center
                    uk-text-middle
                  "
                >
                  <span>1.200</span>
                </td>
                <td
                  class="
                    uk-text-bolder
                    uk-text-uppercase
                    uk-text-center
                    uk-text-middle
                  "
                >
                  <span>1.200</span>
                </td>
                <td
                  class="
                    uk-text-bolder
                    uk-text-uppercase
                    uk-text-center
                    uk-text-middle
                  "
                >
                  <span>1.200</span>
                </td>
              </tr>
            </tfoot>

            <!-- Content table -->
            <tbody>
              <td>
                <input
                  class="
                    uk-input uk-text-bolder uk-text-uppercase uk-text-center
                  "
                  type="date"
                  name="dt-date"
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
                  name="fl-description"
                />
              </td>
              <td>
                <span class="uk-text-bolder uk-text-uppercase uk-text-center">
                  <select class="uk-select w60">
                    <option>Choose a symbol</option>
                  </select>
                </span>
              </td>
              <td>
                <input
                  class="uk-input uk-text-bolder uk-text-uppercase uk-text-left"
                  type="number"
                  name="fl-don-input"
                  step="0.01"
                />
              </td>
              <td>
                <input
                  class="uk-input uk-text-bolder uk-text-uppercase uk-text-left"
                  type="number"
                  name="fl-don-output"
                  step="0.01"
                />
              </td>
              <td>
                <input
                  class="uk-input uk-text-bolder uk-text-uppercase uk-text-left"
                  type="number"
                  name="fl-cbc-input"
                  step="0.01"
                />
              </td>
              <td>
                <input
                  class="uk-input uk-text-bolder uk-text-uppercase uk-text-left"
                  type="number"
                  name="fl-cbc-output"
                  step="0.01"
                />
              </td>

              <td>
                <input
                  class="uk-input uk-text-bolder uk-text-uppercase uk-text-left"
                  type="number"
                  name="fl-cbc-input"
                  step="0.01"
                />
              </td>
              <td>
                <input
                  class="uk-input uk-text-bolder uk-text-uppercase uk-text-left"
                  type="number"
                  name="fl-cbc-output"
                  step="0.01"
                />
              </td>

              <!-- Actions -->
              <td>
                <span
                  id="btn-edit-register"
                  uk-toggle="target: #btn-edit-register"
                  class="uk-icon-button"
                  uk-icon="pencil"
                ></span>
              </td>
              <td>
                <span
                  id="'btn-remove-register'"
                  uk-toggle="target: #btn-remove-register"
                  class="uk-icon-button"
                  uk-icon="trash"
                ></span>
              </td>

              <div id="btn-remove-register" uk-modal>
                <div class="uk-modal-dialog">
                  <button
                    class="uk-modal-close-default"
                    type="button"
                    uk-close
                  ></button>
                  <div class="uk-modal-header">
                    <h2 class="uk-modal-title">
                      Delete item <strong>#1</strong>
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

              <!-- Edit modal dialog -->
              <div id="btn-edit-register" uk-modal>
                <div class="uk-modal-dialog">
                  <button
                    class="uk-modal-close-default"
                    type="button"
                    uk-close
                  ></button>
                  <div class="uk-modal-header">
                    <h2>Edit item <strong>#1</strong></h2>
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
export default {
  name: "App",
};
</script>

<style>
</style>