<template>
  <div class="window-wrapper">
    <div class="page-wrapper my-container">
      <div class="arrow-block">
        <font-awesome-icon class="arrow" icon="arrow-left" @click="$router.go(-1)"></font-awesome-icon>
      </div>
      <div class="my-row">
        <div class="c-md-4 c-1"></div>
        <div class="c-md-4 c-10 form">
          <p class="header">Password Request</p>
          <p
            class="small-text"
          >Enter your e-mail adress and we will send you a link to restore your password</p>
          <label class="labeltext">
            Your e-mail:
            <my-inp
              class="input"
              :type="'email'"
              :inputPlaceholder="'E-Mail'"
              :inputValue="emailInput"
              :status="setEmailInputStatus"
              v-model="emailInput"
              @focus="emailWasFocused = true"
            ></my-inp>
            <p class="error" v-if="isInputStatusDanger">
              <font-awesome-icon icon="exclamation-circle"></font-awesome-icon>Invalid e-mail
            </p>
          </label>
          <my-btn
            class="form-button"
            :type="emailValidator ? 'primary' : 'disabled' "
          >Request password</my-btn>
          <div class="nav-links">
            <router-link class="navs" :to="'/auth/login'" tag="a">
              <a>Back to Log In</a>
            </router-link>
            <router-link class="navs" :to="'/auth/login'" tag="a">
              <a>Register</a>
            </router-link>
          </div>
        </div>
        <div class="c-md-4 c-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Inp from "../../side-menu/forms-folder/FormInputs/TextInputItem";
import Btn from "../../side-menu/forms-folder/Buttons/ButtonItem";

export default {
  data() {
    return {
      emailInput: null,
      emailWasFocused: false
    };
  },
  components: {
    myInp: Inp,
    myBtn: Btn
  },
  computed: {
    isInputStatusDanger() {
      return this.setEmailInputStatus === "danger" ? true : false;
    },
    setEmailInputStatus() {
      console.log("email focused " + this.emailWasFocused);
      if (this.emailWasFocused) {
        console.log("email validator " + this.emailValidator);
        return this.emailValidator ? "success" : "danger";
      }
      return "";
    },
    emailValidator() {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.emailInput);
    }
  }
};
</script>

<style lang="scss" scoped>
.window-wrapper {
  width: 100%;
  height: 100vh;
  padding-top: 2.5rem;
  background-color: #edf1f7;
  .page-wrapper {
    width: 95vw;
    margin: auto;
    height: 90%;
    background-color: #fff;
    box-shadow: 0 0.5rem 1rem 0 rgba(44, 51, 73, 0.1);
    .arrow-block {
      border-bottom: 1px solid #f7f7f7;
      .arrow {
        color: $primary-color;
        font-size: 32px;
        cursor: pointer;
        margin: 15px 0 15px 15px;
        transition: all 0.1s;
        &:hover {
          color: $primary-color * 2;
        }
      }
    }
    .form {
      width: 100%;
      margin: 5rem auto;
      .header {
        font-size: 44px;
        text-align: center;
        font-weight: 700;
        margin-bottom: 15px;
      }
      .small-text {
        font-size: 17px;
        font-weight: 300;
        text-align: center;
      }
      .labeltext {
        font-size: 12px;
        color: #96a7be;
        font-weight: 700;
      }
      .input {
        margin-bottom: 15px;
        margin-top: 5px;
      }
      .checkbox {
        margin-bottom: 20px;
        font-weight: 600;
        font-size: 16px;
      }
      .form-button {
        width: 100%;
        margin: 20px 0;
      }
      .nav-links {
        display: flex;
        .navs {
          router-link {
          }
          a {
            font-size: 14px;
            color: #96a7be;
            font-weight: 700;
          }
        }
      }
    }
  }
}
.error {
  font-size: 14px;
  font-weight: 400;
  color: $danger-color;
}
</style>