<template>
  <main class="main">
    <div class="container">
      <div class="main__inner--vertical-align flex-start">
        <h2 class="secondary-title">Almost there!</h2>

        <div class="text-holder holder--bottom-indent">
          <span class="d-block">Let’s verify your e-mail address to finish signing up for HealthCheck.</span>
          <span class="d-block">Please check your email inbox for activation instructions.</span>
        </div>
        <router-link class="btn btn-primary"
                      :to="{name: 'SignIn'}"
        >
          Sign in
        </router-link>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'VerifyPage'
  }
</script>
