<template>
  <div class="content-wrap">
    <main class="main">
      <div class="intro">
        <div class="container">
          <div class="intro__inner intro__inner-indent--large">
            <h1 class="main-title">Being <span class="text-primary">healthy</span>
              is being <span class="text-primary">safe</span></h1>

            <div class="intro__text-holder text-holder">
              <p>Check your health daily and become a superhero using HealthCheck</p>
            </div>
            <div class="intro__img-holder">
              <img src="@/assets/images/illustration.png"
                   alt="two boys and two girls are wearing in different clothes and talking to each other">
            </div>
            <router-link class="btn btn-primary" :to="{name: 'TestPage'}">Check Health</router-link>
          </div>
        </div>
      </div>

    </main>
  </div>

</template>

<script>
  export default {
    name: 'MainPage'
  }
</script>

<style lang="scss">
  @import "../../../scss/base-styles";

</style>
