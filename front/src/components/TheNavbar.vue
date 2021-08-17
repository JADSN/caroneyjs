<template>
  <div>
    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li class="uk-active uk-text-bolder uk-text-uppercase">
            <router-link :to="{ name: 'Home' }">CARONEY</router-link>
          </li>
          <li class="uk-text-bolder uk-text-uppercase">
            <router-link :to="{ name: 'Report' }">REPORT</router-link>
          </li>
          <li class="uk-text-bolder uk-text-uppercase">
            <router-link :to="{ name: 'ReportLetter' }"
              >REPORT LETTER</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TheNavbar",
};
</script>

<style>
</style>