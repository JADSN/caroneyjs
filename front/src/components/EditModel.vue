 <!-- Edit modal dialog -->
  <div :id="'btn-edit-register-' + register.id" uk-modal>
    <div class="uk-modal-dialog">
      <button class="uk-modal-close-default" type="button" uk-close></button>
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
              v-model.number="register.symbol"
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
              v-model="register.date"
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
            v-model="register.description"
          ></textarea>
        </div>
        <!-- Donate -->
        <div class="uk-margin-top">
          <label for="">Donate</label>
          <div class="uk-flex">
            <input
              class="uk-input"
              type="number"
              placeholder="Input"
              v-model.number="register.donateInput"
            />
            <input
              class="uk-input"
              type="number"
              placeholder="Output"
              v-model.number="register.donateOutput"
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
              placeholder="Input"
              v-model.number="register.cbInput"
            />
            <input
              class="uk-input"
              type="number"
              placeholder="Output"
              v-model.number="register.cbOutput"
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
              placeholder="Input"
              v-model.number="register.otherInput"
            />
            <input
              class="uk-input"
              type="number"
              placeholder="Output"
              v-model.number="register.otherOutput"
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
          @click.prevent="changeRegister(register)"
        >
          Edit
        </button>
      </div>
    </div>
  </div>