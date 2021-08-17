<template>
  <h1 class="uk-text-bolder uk-text-uppercase uk-text-center uk-margin-top">
    ANÚNCIO MENSAL SOBRE AS CONTAS DA CONGREGAÇÃO
  </h1>
  <h6 class="uk-margin-left">
    <strong>Instruçõoes</strong>: O anúncio deve ser lido para a congregacão na
    segunda semana de cada mês na reunião do meio de semana. Se o anúncio não
    puder ser feito (por exemplo, se a congregacão tiver assembleia ou
    congresso), então ele pode ser feito na semana seguinte. Depois de o anúncio
    ter sido lido, a página 1 deste relatório deve ser colocada no quadro de
    anúncios.
  </h6>
  <h2 class="uk-text-bolder uk-text-uppercase uk-margin-left">
    LER PARA A CONGREGAÇÃO:
  </h2>
  <h4 class="uk-margin-left">
    Para o mês de
    <span class="uk-text-bolder uk-text-uppercase">
      {{ getMonthNameByIndex(getMonth) }} </span
    >, a congregação recebeu um total de
    <span class="uk-text-bolder">Field 2</span> As despesas da congregacão para
    o mês deram um total de <span class="uk-text-bolder">Field 3</span>. Isso
    deixa no final do mês um saldo de
    <span class="uk-text-bolder">Field 4</span>. A congregaçã também enviou para
    Betel o valor de <span class="uk-text-bolder">Field 5</span> das caixas de
    donativos para a obra mundial. Uma cópia do Relatório Mensal de Contas da
    Congregação será colocada no quadro de anúncios.
  </h4>
</template>

<script>
// * Vuex
import { mapGetters } from "vuex";

export default {
  name: "ReportLetter",
  methods: {
    getMonthNameByIndex(index) {
      const localeLanguage = navigator.language;

      const options = {
        month: "long",
      };

      const date = new Date(0, index - 1, 1);

      console.log(date);
      const monthName = Intl.DateTimeFormat(localeLanguage, options).format(
        date
      );

      console.log(monthName);

      return monthName;
    },
  },
  computed: {
    ...mapGetters(["getMonth"]),
  },
};
</script>

<style>
</style>