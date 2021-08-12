<template>
  <!-- Table footer -->
  <tfoot>
    <tr>
      <td
        colspan="3"
        class="uk-text-bolder uk-text-uppercase uk-text-center uk-text-middle"
      >
        TOTAIS DAS COLUNAS
      </td>
      <td
        class="uk-text-bolder uk-text-uppercase uk-text-center uk-text-middle"
      >
        <span>{{ getSumOfRegisterDonateInput }}</span>
      </td>
      <td
        class="uk-text-bolder uk-text-uppercase uk-text-center uk-text-middle"
      >
        <span>{{ getSumOfRegisterDonateOutput }}</span>
      </td>
      <td
        class="uk-text-bolder uk-text-uppercase uk-text-center uk-text-middle"
      >
        <span>{{ getSumOfRegisterBankAccountInput }}</span>
      </td>
      <td
        class="uk-text-bolder uk-text-uppercase uk-text-center uk-text-middle"
      >
        <span>{{ getSumOfRegisterBankAccountOutput }}</span>
      </td>
      <td
        class="uk-text-bolder uk-text-uppercase uk-text-center uk-text-middle"
      >
        <span>{{ getSumOfRegisterOtherInput }}</span>
      </td>
      <td
        class="uk-text-bolder uk-text-uppercase uk-text-center uk-text-middle"
      >
        <span>{{ getSumOfRegisterOtherOutput }}</span>
      </td>
    </tr>
  </tfoot>
</template>

<script>
// * Vuex
import { mapGetters } from "vuex";

export default {
  name: "RegisterTableFooter",
  computed: {
    ...mapGetters([
      "getSumOfRegisterDonateInput",
      "getSumOfRegisterDonateOutput",
      "getSumOfRegisterBankAccountInput",
      "getSumOfRegisterBankAccountOutput",
      "getSumOfRegisterOtherInput",
      "getSumOfRegisterOtherOutput",
    ]),
  },
};
</script>

<style>
</style>