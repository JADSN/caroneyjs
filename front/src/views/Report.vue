<template>
  <TheNavbar />
  <!-- <div class="uk-container"> -->
  <div class="uk-margin-top">
    <h2 class="uk-text-center">RELATÓRIO MENSAL DE CONTAS DA CONGREGAÇÃO</h2>
    <div class="uk-flex uk-flex-around">
      <!-- Congregation name -->
      <div>
        <label class="uk-text-bolder uk-text-uppercase" for="inp-finish-month">
          CONGREGATION NAME
        </label>
        <span class="uk-text-uppercase" type="text" id="inp-finish-month">{{
          getCongregationName
        }}</span>
      </div>
      <!-- Month/year -->
      <div>
        <label class="uk-text-bolder uk-text-uppercase" for="inp-finish-month"
          >MONTH/YEAR:
        </label>
        <span class="uk-text-uppercase" type="text" id="inp-finish-month"
          >{{ getMonth }}/{{ getYear }}</span
        >
      </div>
    </div>
    <div class="uk-margin-top uk-flex uk-flex-around">
      <h5>
        Saldo disponível no começo do mês (valor do campo[i] do relatório do mês
        anterior)
      </h5>
      <input class="uk-input w20" type="number" value="0" />
    </div>
    <div class="uk-flex uk-flex-around">
      <!-- TODAS AS ENTRADAS -->
      <div>
        <h4 class="uk-text-bolder uk-text-uppercase">TODAS AS ENTRADAS</h4>
        <div class="uk-flex uk-flex-column">
          <h5 class="uk-text-uppercase uk-text-bolder">
            ENTRADAS PARA CONGREGAÇÃO
          </h5>
          <div class="uk-flex uk-flex-around">
            <h6 class="w100">
              Donativos para a congregação (caixas de donativos)
            </h6>
            <input class="uk-input w20" type="number" />
          </div>
          <div class="uk-flex uk-flex-around uk-margin-top">
            <h6 class="w100">
              Donativos para a congregação (transferêncas eletrônicas)
            </h6>
            <input class="uk-input w20" type="number" />
          </div>
        </div>
        <div>
          <h5 class="uk-text-uppercase uk-text-bolder">OUTRAS ENTRADAS</h5>
          <div class="uk-flex uk-flex-around">
            <h6 class="w100">
              Donativos para a congregação (caixas de donativos)
            </h6>
            <input class="uk-input w20" type="number" />
          </div>
          <!-- TODO: Adicionar lista para CRUD -->
        </div>
        <div class="uk-flex uk-flex-around uk-margin-top">
          <h6 class="w100">Total das outras entradas</h6>
          <input class="uk-input w20" type="number" />
        </div>
        <div class="uk-flex uk-flex-around uk-margin-top">
          <h6 class="uk-text-bolder">Total das entradas</h6>
          <input class="uk-input w20" type="number" />
        </div>
      </div>
      <!-- TODAS AS DESPESAS -->
      <div>
        <h4 class="uk-text-bolder uk-text-uppercase">TODAS AS DESPESAS</h4>
        <div class="uk-flex uk-flex-column">
          <div>
            <h5 class="uk-text-uppercase uk-text-bolder">
              DESPESAS DA CONGREGAÇÃO
            </h5>
            <div class="uk-flex uk-flex-around uk-margin-top">
              <h6 class="w100">Despesas operacionais do Salão do Reino</h6>
              <input class="uk-input w20" type="number" />
            </div>
            <div class="uk-flex uk-flex-around uk-margin-top">
              <h6 class="w100">Resolução -- Obra Mundial</h6>
              <input class="uk-input w20" type="number" />
            </div>
            <div class="uk-flex uk-flex-around uk-margin-top">
              <h6 class="w100">
                Resolução -- Construção mundial de Salões do Reino e Salões de
                Assembleias
              </h6>
              <input class="uk-input w20" type="number" />
            </div>
            <div class="uk-flex uk-flex-around uk-margin-top">
              <h6 class="w100">Resolução -- Programa Mundial de Auxílio</h6>
              <input class="uk-input w20" type="number" />
            </div>
            <div class="uk-flex uk-flex-around uk-margin-top">
              <h6 class="w100">
                Resolução -- Programa de Ajuda para Superintendentes de Circuito
              </h6>
              <input class="uk-input w20" type="number" />
            </div>
            <!-- CRUD - DESPESAS DA CONGREGAÇÃO -->
            <div class="uk-flex uk-flex-around uk-margin-top">
              <h6 class="w100">Total das despesas da congregação</h6>
              <input class="uk-input w20" type="number" />
            </div>
          </div>
          <!-- OUTRAS DESPESAS -->
          <div>
            <h5 class="uk-text-uppercase uk-text-bolder">OUTRAS DESPESAS</h5>
            <div class="uk-flex uk-flex-around uk-margin-top">
              <h6 class="w100">Total das despesas da congregação</h6>
              <input class="uk-input w20" type="number" />
            </div>
            <!-- CRUD - OUTRAS DESPESAS -->
            <div class="uk-flex uk-flex-around uk-margin-top">
              <h6 class="w100">Total das outras despesas</h6>
              <input class="uk-input w20" type="number" />
            </div>
            <div class="uk-flex uk-flex-around uk-margin-top">
              <h6 class="w100">Total das despesas [(e) + (f)]</h6>
              <input class="uk-input w20" type="number" />
            </div>
            <div class="uk-flex uk-flex-around uk-margin-top">
              <h6 class="w100">Saldo positivo (saldo negativo) [(d) – (g)]</h6>
              <input class="uk-input w20" type="number" />
            </div>
            <div class="uk-flex uk-flex-around uk-margin-top">
              <h6 class="w100">
                Saldo disponível no final do mês [(a) (h)] (Coloque esse valor
                no campo [a] no relatório do mês seguinte.)
              </h6>
              <input class="uk-input w20" type="number" />
            </div>
          </div>
          <div>
            <h5 class="uk-text-uppercase uk-text-bolder">
              FUNDOS DA CONGREGAÇÃO RESERVADOS PARA OBJETIVOS ESPECÍFICOS
            </h5>
            <div class="uk-flex uk-flex-around uk-margin-top">
              <input class="uk-input w100" type="number" />
              <input class="uk-input w100" type="number" />
            </div>
            <div class="uk-flex uk-flex-around uk-margin-top">
              <input class="uk-input w100" type="number" />
              <input class="uk-input w100" type="number" />
            </div>
            <div class="uk-flex uk-flex-around uk-margin-top">
              <h6 class="w100">
                Total dos fundos da congregaçãoo reservados para objetivos
                especíıficos
              </h6>
              <input class="uk-input w20" type="number" />
            </div>
          </div>
          <div>
            <div class="uk-flex uk-flex-around uk-margin-top">
              <h5 class="uk-text-uppercase uk-text-bolder">
                FUNDOS DA CONGREGAÇÃO DISPONÍVEIS NO FINAL DO MÊS [(i) – (j)]
              </h5>
              <input class="uk-input w20" type="number" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="uk-flex uk-flex-column uk-flex-middle uk-margin-bottom">
      <input class="uk-input w20" type="number" />
      <label class="uk-margin-top"
        >(Servo de contas — Assinatura e nome em letra de fôrma)</label
      >
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
// * Vuex
import { mapGetters } from "vuex";

import TheNavbar from "../components/TheNavbar.vue";

export default {
  name: "Report",
  components: { TheNavbar },
  computed: {
    ...mapGetters(["getCongregationName", "getMonth", "getYear"]),
  },
};
</script>

<style>
.w20 {
  width: 20%;
}

.w50 {
  width: 50%;
}

.w100 {
  width: 100%;
}
</style>