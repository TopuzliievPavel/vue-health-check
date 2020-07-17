<template>
  <div class="dropdown header__dropdown"
       :class="{'header__dropdown--active': isOpenUserDropdown}"
  >
    <button class="btn-user btn-reset"
            @click="toggleUserDropdown"
            type="button"
    >
      <span class="btn-user__text">Sally Johnson</span>
      <img class="btn-user__img" src="@/assets/images/img_girl.png" alt="icon person">
    </button>
    <ul v-if="isOpenUserDropdown" class="dropdown__menu dropdown-user__menu">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'TheHeaderDropdown',
    data () {
      return {
        isOpenUserDropdown: false
      }
    },
    created() {
      window.addEventListener("click", this.closeUserDropdown);
    },
    beforeDestroy() {
      window.removeEventListener("click", this.closeUserDropdown);
    },
    methods: {
      toggleUserDropdown () {
        this.isOpenUserDropdown = !this.isOpenUserDropdown
      },
      closeUserDropdown(e) {
        if (!this.$el.contains(e.target)) {
          this.isOpenUserDropdown = false;
        }
      }
    }
  }

</script>

<style lang="scss">
  @import "../../../scss/base-styles";
  @import "../../../scss/components/dropdown";
  @import "../../../scss/components/btn-user";

  .header__dropdown {
    margin-right: 16px;
    @include media(">=medium") {
      margin-right: 0;
    }
  }

  .dropdown-user__menu {
    display: none;
    position: absolute;
    top: 60px;
    right: -15px;
    min-width: 240px;
    background-color: $white;
    box-shadow: $shadow;
    border-radius: $border-radius;

    @include media(">=medium") {
      top: 70px;
      right: -10px;
    }

    @include media(">=xlarge") {
      top: 80px;
      right: -5px;
    }

    &:after {
      top: 0;
      right: 25px;
      border-top-left-radius: $border-radius;
    }
  }

  .dropdown-user__btn {
    padding: 17px 20px 17px 64px;

    @include media(">=medium") {
      padding-right: 70px;
    }

    .icon {
      position: absolute;
      top: 50%;
      left: 24px;
      font-size: 20px;
      transform: translateY(-50%);
    }
  }
</style>
