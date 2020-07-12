<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <router-link class="logo" to="/" tabindex="1">
          <img src="@/assets/images/svg-icons/logo_healthcheck.svg" alt="blue heart near the black text - HealthCheck">
        </router-link>
        <the-header-dropdown></the-header-dropdown>
      </div>
    </div>
  </header>
</template>

<script>
  import TheHeaderDropdown from '@/layout/header/header-dropdown/the-header-dropdown.vue'

  export default {
    name: 'TheHeader',
    components: {
      TheHeaderDropdown
    },
    data () {
      return {
        dropdownDataLinks: [

        ]
      }
    }
  }
</script>

<style lang="scss">
  @import "../../scss/base-styles";
  @import "../../scss/components/dropdown";
  @import "../../scss/components/btn-user";

  .header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: map_get($header-height, "xs");
    background-color: $white;
    box-shadow: $shadow;
    transition: transform $animation-speed;


    @include media(">=medium") {
      height: map_get($header-height, "md");
    }

    @include media(">=xlarge") {
      height: map_get($header-height, "xl");
    }

    .header__inner,
    .container {
      height: 100%;
    }
  }

  .header--hide {
    transform: translateY(-100%);
  }

  .header--show {
    transform: translateY(0);
  }

  .header__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    display: inline-block;
    vertical-align: middle;
    height: 22px;

    @include media(">=premedium") {
      height: 30px;
    }

    @include media(">=xlarge") {
      height: auto;
    }

    img {
      height: 100%;

      @include media(">=xlarge") {
        height: auto;
      }
    }
  }

</style>
