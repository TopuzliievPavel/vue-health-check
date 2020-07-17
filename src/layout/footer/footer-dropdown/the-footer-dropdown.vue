<template>
  <div class="dropdown dropdown-language order-negative-presmall order-normal-xlarge"
       :class="{'dropdown-language--active': isOpenLanguageDropdown}">
    <button class="btn-language font-weight-semi"
            type="button"
            @click="toggleLanguageDropdown"
    >
      EN
      <svg class="btn-language__icon" width="20" height="20" viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg">
        <path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM7.71 17.667C6.72341 15.5743 6.15187 13.3102 6.027 11H2.062C2.25659 12.5389 2.89392 13.9882 3.89657 15.1717C4.89922 16.3552 6.22401 17.2221 7.71 17.667ZM8.03 11C8.181 13.439 8.878 15.73 10 17.752C11.1523 15.6766 11.8254 13.3695 11.97 11H8.03ZM17.938 11H13.973C13.8481 13.3102 13.2766 15.5743 12.29 17.667C13.776 17.2221 15.1008 16.3552 16.1034 15.1717C17.1061 13.9882 17.7434 12.5389 17.938 11ZM2.062 9H6.027C6.15187 6.68979 6.72341 4.42569 7.71 2.333C6.22401 2.77788 4.89922 3.64475 3.89657 4.8283C2.89392 6.01184 2.25659 7.4611 2.062 9ZM8.031 9H11.969C11.8248 6.6306 11.152 4.32353 10 2.248C8.84768 4.32345 8.17456 6.63052 8.03 9H8.031ZM12.29 2.333C13.2766 4.42569 13.8481 6.68979 13.973 9H17.938C17.7434 7.4611 17.1061 6.01184 16.1034 4.8283C15.1008 3.64475 13.776 2.77788 12.29 2.333Z"/>
      </svg>
    </button>
    <ul class="dropdown__menu dropdown-language__menu"
        v-if="isOpenLanguageDropdown"
    >
      <slot></slot>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'TheFooterDropdown',
    data () {
      return {
        isOpenLanguageDropdown: false
      }
    },
    created() {
      window.addEventListener("click", this.closeLanguageDropdown);
    },
    beforeDestroy() {
      window.removeEventListener("click", this.closeLanguageDropdown);
    },
    methods: {
      toggleLanguageDropdown () {
        this.isOpenLanguageDropdown = !this.isOpenLanguageDropdown
      },
      closeLanguageDropdown(e) {
        if (!this.$el.contains(e.target)) {
          this.isOpenLanguageDropdown = false;
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../scss/base-styles";
  @import "../../../scss/components/dropdown";

  .dropdown-language__menu {
    bottom: 45px;
    right: 0;

    &:after {
      top: 100%;
      right: 25px;
      border-bottom-right-radius: $border-radius;
    }
  }

  .dropdown-language__btn {
    padding: 16px 30px 16px 40px;

    @include media(">=medium") {
      padding: 16px 50px;
    }

    .custom-after {
      top: 50%;
      left: 20px;
      @include media(">=medium") {
        left: 26px;
      }
    }
  }

  .dropdown-language__btn--active {
    .custom-after {
      display: block;
    }
  }

  .btn-language {
    display: flex;
    align-items: center;
    padding: 0;

    font-size: $font-size-small;
    background-color: transparent;
    border: 0;

    @include media(">=xlarge") {
      font-size: $font-size-additional;
    }
  }

  .btn-language__icon {
    margin-left: 10px;
    fill: $primary;
  }
</style>
