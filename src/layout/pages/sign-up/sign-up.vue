<template>
  <main class="main">
    <div class="container">
      <div class="main__inner-indent">
        <h2 class="secondary-title">Sign up</h2>
        <span class="sub-text">Autofill forms using social networks:</span>
        <ul class="social-list">
          <li class="social-list__item">
            <a class="social-list__link bg-gray-100" href="#"><span class="icon icon-facebook facebook-bg"></span></a>
          </li>
          <li class="social-list__item">
            <a class="social-list__link bg-gray-100" href="#">
              <img src="@/assets/images/svg-icons/icon_google.svg" alt="icon google logo">
            </a>
          </li>
          <li class="social-list__item">
            <a class="social-list__link bg-gray-100" href="#"><span class="icon icon-twitter twitter-bg"></span></a>
          </li>
          <li class="social-list__item">
            <a class="social-list__link bg-gray-100" href="#"><span class="icon icon-apple apple-bg"></span></a>
          </li>
        </ul>

        <form class="sign-up__form" name="signUpForm">

          <div class="form-group-wrap form-group-wrap-1">
            <div class="form-group">
              <label class="form-group__label" for="email">Email</label>
              <input type="email" class="form-control" id="email" name="email">
              <small class="form-text">Please enter your email address in format yourname@example.com</small>
            </div>

            <div class="form-group">
              <label class="form-group__label form-group__label--password" for="password">Password</label>
              <label class="form-group__label form-group__label--password form-group__label--error" for="password">Weak password</label>

              <div class="input-holder">
                <input type="password" class="form-control" id="password" name="password">
                <button class="btn-show-password btn-reset btn-show-password-js" type="button"></button>
              </div>
              <small class="form-text">Please use at least 8 characters</small>
            </div>

            <div class="form-group">
              <label class="form-group__label" for="phone">Phone</label>
              <input type="tel" class="form-control" id="phone" name="phone">
            </div>
          </div>

          <div class="form-group-wrap form-group-wrap-2">
            <div class="form-group">
              <label class="form-group__label" for="firstName">First Name</label>
              <input type="text" class="form-control" id="firstName" name="firstName">
            </div>

            <div class="form-group">
              <label class="form-group__label" for="lastName">Last Name</label>
              <input type="text" class="form-control" id="lastName" name="lastName">
            </div>
          </div>

          <div class="form-group-wrap form-group-wrap-3">
            <div class="form-group">
              <label class="form-group__label">Sex</label>

              <div class="select select-js">
                <button class="select__current btn-reset select__current-js" type="button">Select sex</button>
                <div class="list-wrap">
                  <ul class="select__body">
                    <li class="select__option">
                      <button class="select__btn btn-reset" type="button">Male</button>
                    </li>
                    <li class="select__option">
                      <button class="select__btn btn-reset" type="button">Female</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- need to change to datepicker -->
            <div class="form-group">
              <label class="form-group__label">Date of birth</label>

              <div class="select select-datepicker select-js">
                <button class="select__current btn-reset select__current-js" type="button">
                  Select date
                  <i class="icon icon-calendar"></i>
                </button>
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
            <!-- need to change to datepicker -->
          </div>


          <div class="form-group-wrap form-group-wrap-4">
            <div class="form-group">
              <label class="form-group__label">Country</label>

              <div class="select select-js">
                <button class="select__current btn-reset select__current-js" type="button">Select country</button>
                <div class="list-wrap">
                  <ul class="select__body scroll-bar">
                    <li class="select__option">
                      <button class="select__btn btn-reset" type="button">Tuvalu</button>
                    </li>
                    <li class="select__option">
                      <button class="select__btn btn-reset" type="button">Uganda</button>
                    </li>
                    <li class="select__option">
                      <button class="select__btn btn-reset" type="button">Ukraine</button>
                    </li>
                    <li class="select__option">
                      <button class="select__btn btn-reset" type="button">United Arab Emirates</button>
                    </li>
                    <li class="select__option">
                      <button class="select__btn btn-reset" type="button">United Kingdom</button>
                    </li>
                    <li class="select__option">
                      <button class="select__btn btn-reset" type="button">United States</button>
                    </li>
                    <li class="select__option">
                      <button class="select__btn btn-reset" type="button">Uruguay</button>
                    </li>
                    <li class="select__option">
                      <button class="select__btn btn-reset" type="button">Uzbekistan</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="form-group hide-block">
              <label class="form-group__label">State</label>

              <div class="select select-js">
                <button class="select__current btn-reset select__current-js" type="button">Select state</button>
                <div class="list-wrap">
                  <ul class="select__body scroll-bar">
                    <li class="select__option">
                      <button class="select__btn btn-reset" type="button">Alabama</button>
                    </li>
                    <li class="select__option">
                      <button class="select__btn btn-reset" type="button">Alaska</button>
                    </li>
                    <li class="select__option">
                      <button class="select__btn btn-reset" type="button">Kansas</button>
                    </li>
                    <li class="select__option">
                      <button class="select__btn btn-reset" type="button">Minnesota</button>
                    </li>
                    <li class="select__option">
                      <button class="select__btn btn-reset" type="button">Texas</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="form-group-accept">
                <label class="form-group__label" for="facilityCode">Facility code</label>
                <input type="text" class="form-control" id="facilityCode" name="facilityCode">
                <div class="d-flex align-items-center">
                  <label class="custom-checkbox-label">
                    <input class="common-checkbox" type="checkbox">
                    <span class="custom-checkbox"></span>
                  </label>
                  <div class="sign-up__form-text">I accept HealthCheck’s <button
                    class="btn-privacy btn-reset text-primary font-weight-semi btn-privacy-js"
                    type="button">Terms and Conditions</button> and
                    <button class="btn-privacy btn-reset text-primary font-weight-semi btn-privacy-js"
                            type="button">Privacy Policy</button>
                  </div>
                </div>
              </div>
              <div class="btn-holder mt-0 mb-0">
                <!-- need to change to the button -->
                <router-link class="btn btn-primary mb-2"
                              :to="{name: 'VerifyPage'}"
                >
                  Sign up
                </router-link>
                <div class="form-subtext">
                  <span>Already have an account?&nbsp;</span>
                  <router-link class="text-primary"
                                :to="{name: 'SignIn'}">
                    Sign in
                  </router-link>
                </div>
              </div>
            </div>
          </div>

        </form>

      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'SignUp'
  }
</script>

<style lang="scss">
  @import "../../../scss/base-styles";
  @import "../../../scss/components/social-list";
  @import "../../../scss/components/custom-checkbox";

  .form-group--error {
    .form-group__label {
      color: $danger;
    }

    .form-control {
      border-color: $danger;
    }

    .form-text {
      display: block !important;
    }

    .form-group__label--password {
      display: none;
    }

    .form-group__label--error {
      display: block;
    }
  }

  .form-group__label--error {
    display: none;
  }

  .sign-up__form {
    @include media(">=medium") {
      display: grid;
      grid-template-columns: 6fr 6fr;
      align-items: start;
    }
    @media screen and (min-width: 768px) and (max-width: 1199px) {
      margin-left: -10px;
      margin-right: -10px;
    }

    @include media(">=xlarge") {
      grid-template-columns: 4fr 4fr 4fr;
    }

    .form-text {
      display: none;
    }

    .form-group {
      @include media(">=medium") {
        padding-left: 10px;
        padding-right: 10px;
      }

      @include media(">=xlarge") {
        flex: 1 0 400px;
        max-width: 400px;
        padding-left: 0;
        padding-right: 0;
      }
    }
  }

  .form-group-wrap {
    @include media(">=xlarge") {
      &:not(:last-child) {
        margin-right: 50px;
      }
    }
  }

  .form-group-wrap-2 {
    @include media(">=xlarge") {
      grid-column: 2;
      grid-row: 1;
    }
  }

  .form-group-wrap-3 {
    @include media(">=medium") {
      grid-column: 2;
      grid-row: 1;
    }
    @include media(">=xlarge") {
      grid-column: 2;
      grid-row: 1;
      transform: translateY(100%);
    }
  }

  .form-group-wrap-4 {
    @include media(">=medium") {
      transform: translateY(-107px);
    }
    @include media(">=xlarge") {
      grid-row: 1;
      grid-column: 3;
      transform: translateY(0);
    }
  }

  .sign-up__form-text {
    font-size: $font-size-small;
    margin-left: 12px;

    @include media(">=xlarge") {
      font-size: $font-size-additional;
    }
  }

  .form-group-accept {
    margin-bottom: 60px;

    @include media(">=medium") {
      margin-bottom: 80px;
    }

    @include media(">=xlarge") {
      margin-bottom: 112px;
    }
  }

</style>
