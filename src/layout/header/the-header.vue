<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <router-link class="logo" to="/" tabindex="1">
          <img src="../../assets/images/svg-icons/logo_healthcheck.svg" alt="blue heart near the black text - HealthCheck">
        </router-link>
        <div class="dropdown header__dropdown"
             :class="{'header__dropdown--active': openUserDropdown}"
        >
          <button class="btn-user btn-reset" type="button" @click="openUserDropdown = !openUserDropdown">
            <span class="btn-user__text">Sally Johnson</span>
            <img class="btn-user__img" src="../../assets/images/img_girl.png" alt="icon person">
          </button>
          <ul class="dropdown__menu dropdown-user__menu dropdown-user__menu-js">
            <li class="dropdown__item">
              <a href="#" class="dropdown__btn dropdown-user__btn">
                <span class="icon icon-person text-primary"></span>
                My profile
              </a>
            </li>
            <li class="dropdown__item">
              <a href="#" class="dropdown__btn dropdown-user__btn">
                <span class="icon icon-folder text-primary"></span>
                My results
              </a>
            </li>
            <li class="dropdown__item">
              <button class="dropdown__btn dropdown-user__btn" type="button">
                <span class="icon icon-log-out"></span>
                Log out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'TheHeader',
    data () {
      return {
        openUserDropdown: false
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
