<template>
  <main class="main">
    <div class="container">
      <div class="main__inner main__inner-indent">
        <h1 class="main-title">Being <span class="text-primary">healthy</span>
          is being <span class="text-primary">safe</span></h1>

        <div class="main__text-holder text-holder">
          <p>Check your health daily and become a superhero using HealthCheck</p>
        </div>
        <div class="main__img-holder">
          <img src="@/assets/images/illustration.jpg"
                alt="two boys and two girls are wearing in different clothes and talking to each other">
        </div>

        <span class="sub-text">Sign in with your social network or email:</span>
        <ul class="social-list">
          <li class="social-list__item">
            <a class="social-list__link bg-gray-100" href="#"><i class="icon icon-facebook facebook-bg"></i></a>
          </li>
          <li class="social-list__item">
            <a class="social-list__link bg-gray-100" href="#">
              <img src="@/assets/images/svg-icons/icon_google.svg" alt="icon google logo">
            </a>
          </li>
          <li class="social-list__item">
            <a class="social-list__link bg-gray-100" href="#"><i class="icon icon-twitter twitter-bg"></i></a>
          </li>
          <li class="social-list__item">
            <a class="social-list__link bg-gray-100" href="#"><i class="icon icon-apple apple-bg"></i></a>
          </li>
        </ul>


        <!-- Please remove class - d-none from this block to show the error-block -->
        <div class="error-block d-none">
          <i class="icon icon-warning"></i>
          <span>Incorrect email and password</span>
        </div>
        <!-- Please uncomment this block to show the error-block -->

        <form name="signInForm">
          <div class="form-group form-group--width">
            <label class="form-group__label" for="email">Email</label>
            <input type="email" class="form-control" id="email">
          </div>
          <div class="form-group form-group--width">
            <label class="form-group__label" for="password">Password</label>
            <div class="input-holder">
              <input type="password" class="form-control" id="password">
              <button class="btn-show-password btn-reset" type="button"></button>
            </div>
            <div class="form-subtext">
              <span>Forgot your&nbsp;</span>
              <router-link class="text-primary"
                            :to="{name: 'RestorePage'}"
            >password</router-link>?
            </div>
          </div>
          <div class="btn-holder">
            <button class="btn btn-primary" type="button">Sign in</button>
          </div>
          <div class="form-subtext">
            <span>Don’t have an account yet?&nbsp;</span>
            <router-link class="text-primary"
                          :to="{name: 'SignUp'}"
            >Sign up
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'SignIn'
  }
</script>

<style lang="scss">
  @import "../../../scss/base-styles";
  @import "../../../scss/components/social-list";
</style>
