<template>
  <main class="main">
    <div class="container">
      <div class="main__inner--vertical-align main__inner-restore">
        <h2 class="secondary-title">Restore password</h2>

        <div class="text-holder text-holder-restore">
          <span class="d-block-medium">Enter your username or email to reset your password.</span>
          <span class="d-block-medium">You will receive an email with instructions on how to reset your password.</span>
        </div>

        <form>
          <div class="form-group form-group--width">
            <label class="form-group__label" for="email">Email</label>
            <input type="email" class="form-control" id="email">
          </div>
          <div class="btn-holder-restore">
            <button class="btn btn-primary" type="submit">Restore</button>
          </div>
        </form>
      </div>
  
    </div>
  </main>
</template>

<script>
  export default {
    name: 'RestorePage'
  }
</script>

<style lang="scss">
  @import "../../../scss/base-styles";

  .text-holder-restore {
    margin-bottom: 40px;

    @media screen and (min-width: 768px) and (max-width: 1199px) {
      max-width: 465px;
    }

    @include media(">=xlarge") {
      margin-bottom: 60px;
    }
  }

  .btn-holder-restore {
    margin-top: 60px;
    @include media(">=xlarge") {
      margin-top: 100px;
    }
  }

  .main__inner-restore {
    padding-top: 100px;
    padding-bottom: 50px;

    @include media("<medium") {
      min-height: auto;
    }
  }
</style>
