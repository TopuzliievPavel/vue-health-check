<template>
  <main class="main">
    <div class="container">
      <div class="main__inner main__inner-indent--small">
        <h2 class="secondary-title mb-1">HealthCheck</h2>

        <div class="text-holder holder--bottom-indent">
          <span>Please answer questions truthfully and to the best of your ability</span>
        </div>

        <div class="card card-test">
          <h2 class="secondary-title card-test__title">Select your facility</h2>
          <div class="form-group form-group--width">
            <div class="select"  :class="{'select--active': openSelect}">
              <button class="select__current btn-reset" type="button"
                      @click="openSelect = !openSelect">Corporate HQ</button>
              <div class="list-wrap">
                <ul class="select__body">
                  <li class="select__option">
                    <button class="select__btn btn-reset" type="button">USA</button>
                  </li>
                  <li class="select__option">
                    <button class="select__btn btn-reset" type="button">Ukraine</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="btn-holder mb-0">
            <button class="btn btn-primary" type="button">Next</button>
          </div>
        </div>
        <span class="d-none d-block-xlarge font-size-additional">Your answers are confidential and will keep our workplace safe</span>

      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'TestPage',
    data () {
      return {
        openSelect: false
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../scss/base-styles";
  @import "../../../scss/components/card";
  @import "../../../scss/components/form";
  @import "../../../scss/components/select";

  .card-test {
    padding: 40px 20px;

    @include media(">=medium") {
      padding: 60px 40px;
    }

    @include media(">=xlarge") {
      padding-top: 100px;
      padding-bottom: 50px;
      margin-bottom: 20px;
    }
  }

  .card-test__title {
    margin-bottom: 60px;
    max-width: 510px;

    @include media(">=medium") {
      margin-bottom: 95px;
    }
    @include media(">=xlarge") {
      max-width: 716px;
    }
  }

  .card-test__btn {
    min-width: 45%;
    @media screen and (min-width: 375px) {
      min-width: 140px;
    }
    @include media(">=medium") {
      min-width: 180px;
    }
  }

  .btn--right-indent {
    margin-right: 22px;
    @include media(">=medium") {
      margin-right: 40px;
    }
  }

  .card-test__footer {
    .btn-additional {
      padding: 0;
      @include media(">=medium") {
        margin-right: 88px;
      }

      @include media(">=xlarge") {
        margin-right: 70px;
      }
    }
  }

</style>
