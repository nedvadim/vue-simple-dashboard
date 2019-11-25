<template>
  <div class="window-wrapper">
    <div class="login-wrapper my-container">
      <div class="arrow-block">
        <font-awesome-icon class="arrow" icon="arrow-left" @click="$router.go(-1)"></font-awesome-icon>
      </div>
      <div class="my-row">
        <div class="c-md-4 c-1"></div>
        <div class="c-md-4 c-10 form">
          <p class="header">Register</p>

          <label class="name-label">
            Full name:
            <my-inp
              class="input"
              :inputPlaceholder="'Full name'"
              :status="setNameInputStatus"
              :inputValue="nameInput"
              v-model="nameInput"
              @focus="nameWasFocused = true"
            ></my-inp>
            <p class="error" v-show="showNameError">
              <font-awesome-icon icon="exclamation-circle"></font-awesome-icon>Invalid name value
            </p>
          </label>

          <label class="email-label">
            Your E-Mail:
            <my-inp
              class="input"
              :inputPlaceholder="'E-Mail'"
              :status="setEmailInputStatus"
              :inputValue="emailInput"
              v-model="emailInput"
              @focus="emailWasFocused = true"
            ></my-inp>
            <p class="error" v-show="showEmailError">
              <font-awesome-icon icon="exclamation-circle"></font-awesome-icon>Invalid e-mail
            </p>
          </label>
          <label class="password-label">
            Your Password:
            <my-inp
              class="input"
              :inputPlaceholder="'Password'"
              :inputType="'password'"
              :inputValue="passwordInput"
              :status="setPasswordInputStatus"
              v-model="passwordInput"
              @focus="passwordWasFocused = true"
            ></my-inp>
            {{passwordInput}}
            <div v-if="passwordWasFocused" class="password-errors-block">
              <p class="error" v-for="error in listOfPasswordErrors" :key="error">
                <font-awesome-icon icon="exclamation-circle"></font-awesome-icon>
                {{error}}
              </p>
            </div>
          </label>

          <label class="repeat-password-label">
            Repeat password:
            <my-inp
              class="input"
              :inputPlaceholder="'Confirm password'"
              :inputType="'password'"
              :inputValue="passwordRepeat"
              :status="setRepeatPasswordInputStatus"
              v-model="passwordRepeat"
              @focus="passwordRepeatWasFocused = true"
            ></my-inp>
            {{passwordRepeat}}
          </label>
          <check-box class="checkbox" :data="checkbox"></check-box>
          <my-btn
            class="form-button"
            :type="(passwordValidator&&emailValidator&&nameValidator&&repeatedPasswordValidator) ? 'primary' : 'disabled' "
          >Login</my-btn>
          <p class="small-text" :style="'text-align: center'">or enter with:</p>
          <div class="icon-group">
            <font-awesome-icon class="icon" :icon="['fab', 'github']" />
            <font-awesome-icon class="icon" :icon="['fab', 'twitter']" />
            <font-awesome-icon class="icon" :icon="['fab', 'facebook']" />
          </div>
          <p class="small-text">
            Already have an account?
            <router-link :to="'/auth/login'">
              <a>Log in</a>
            </router-link>
          </p>
        </div>

        <div class="c-md-4 c-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Inp from "../../side-menu/forms-folder/FormInputs/TextInputItem";
import CheckBox from "../../side-menu/forms-folder/FormInputs/CheckboxItem";
import Btn from "../../side-menu/forms-folder/Buttons/ButtonItem";
export default {
  components: {
    myInp: Inp,
    CheckBox,
    myBtn: Btn
  },
  data() {
    return {
      checkbox: {
        id: 1,
        name: "Agree to Terms & Conditions",
        value: "remember",
        checked: false
      },
      nameInput: "",
      emailInput: null,
      passwordInput: "",
      passwordRepeat: null,
      nameWasFocused: false,
      emailWasFocused: false,
      passwordWasFocused: false,
      passwordRepeatWasFocused: false,
      validPasswordRules: [
        { message: "One lowercase letter required.", regex: /[a-z]+/ },
        { message: "One uppercase letter required.", regex: /[A-Z]+/ },
        { message: "8 characters minimum.", regex: /.{8,}/ },
        { message: "One number required.", regex: /[0-9]+/ }
      ]
    };
  },
  mounted: function() {},
  computed: {
    nameValidator() {
      var re = /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1,15}[a-zA-Z0-9]{1,15}|[a-zA-Z0-9]+\s{1,15}[a-zA-Z0-9]{1,15}\s{1,15}[a-zA-Z0-9]{3,})$/;
      return re.test(this.nameInput);
    },
    emailValidator() {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.emailInput);
    },
    passwordValidator() {
      return !this.validPasswordRules
        .map(validator => validator.regex.test(this.passwordInput))
        .includes(false);
    },
    repeatedPasswordValidator() {
      return this.passwordInput.localeCompare(this.passwordRepeat) === 0
        ? true
        : false;
    },
    // Refactor show methods
    showEmailError() {
      return this.setEmailInputStatus === "danger" ? true : false;
    },
    showNameError() {
      return this.setNameInputStatus === "danger" ? true : false;
    },
    // Refactor set methods
    setNameInputStatus() {
      if (this.nameWasFocused) {
        console.log("Name valid result: " + this.nameValidator);
        return this.nameValidator ? "success" : "danger";
      } else {
        return "";
      }
    },
    setEmailInputStatus() {
      if (this.emailWasFocused) {
        return this.emailValidator ? "success" : "danger";
      } else {
        return "";
      }
    },
    setPasswordInputStatus() {
      if (this.passwordWasFocused) {
        return this.passwordValidator ? "success" : "danger";
      } else {
        return "";
      }
    },
    setRepeatPasswordInputStatus() {
      if (this.passwordWasFocused) {
        return this.repeatedPasswordValidator ? "success" : "danger";
      } else {
        return "";
      }
    },
    listOfPasswordErrors() {
      var list = [];
      this.validPasswordRules.forEach(element => {
        if (!element.regex.test(this.passwordInput)) {
          list.push(element.message);
        }
      });
      return list;
    }
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.window-wrapper {
  width: 100%;
  height: 100vh;
  padding-top: 2.5rem;
  background-color: #edf1f7;
  .login-wrapper {
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
      margin: 0 auto;
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
        .register-link {
          color: #96a7be;
          font-size: 18px;
        }
      }
      .email-label,
      .password-label,
      .name-label,
      .repeat-password-label {
        font-size: 12px;
        color: #96a7be;
        font-weight: 700;
      }
      .input {
        margin-bottom: 15px;
        margin-top: 5px;
      }
      .checkbox {
        margin: 20px 0;
        font-weight: 600;
        font-size: 16px;
      }
      .form-button {
        width: 100%;
        margin-bottom: 20px;
      }
      .icon-group {
        width: 100px;
        margin: 20px auto;

        .icon {
          color: lightslategray;
          margin-right: 20px;
          &:nth-child(3) {
            margin-right: 0px;
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
