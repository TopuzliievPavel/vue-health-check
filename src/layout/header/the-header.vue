<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <a class="logo" href="main.html">
          <img src="../../assets/images/svg-icons/logo_healthcheck.svg" alt="blue heart near the black text - HealthCheck">
        </a>
        <div class="dropdown header__dropdown">
          <button class="btn-user btn-reset btn-user-js" type="button">
            <span class="btn-user__text">Sally Johnson</span>
            <img class="btn-user__img" src="../../assets/images/img_girl.png" alt="icon person">
          </button>
          <ul class="dropdown__menu dropdown-user__menu dropdown-user__menu-js">
            <li class="dropdown__item">
              <a href="profile.html" class="dropdown__btn dropdown-user__btn">
                <span class="icon icon-person text-primary"></span>
                My profile
              </a>
            </li>
            <li class="dropdown__item">
              <a href="profile.html" class="dropdown__btn dropdown-user__btn">
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
    name: 'TheHeader'
  }
</script>

<style lang="scss" scoped>
  @import "../../scss/base-styles";

  .header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 60px;
    background-color: $white;
    box-shadow: $shadow;
    transition: transform $animation-speed;


    @include media(">=premedium") {
      height: 70px;
    }

    @include media(">=xlarge") {
      height: 80px;
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