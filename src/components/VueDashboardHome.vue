<template>
  <div class="my-container">
    <div class="my-row">
      <div class="c-md-4 c-12">
        <bg header="Stepper">
          <stepper :isVertical="true" :dataStepper="dataForStepper"></stepper>
        </bg>
        <div class="my-container">
          <div class="my-row">
            <div class="c-md-6 c-12 relative-pos">
              <bg header="Spinner">
                <my-btn
                  class="spinner-button"
                  type="success"
                  size="small"
                  @click="showSpin"
                >Show spinner</my-btn>
                <spinner v-if="showSpinner"></spinner>
              </bg>
            </div>
            <div class="c-md-6 c-12 select-wrapper">
              <bg class="select-bg" header="Custom Select">
                <myselect class="select" :options="selectOptions"></myselect>
              </bg>
            </div>
          </div>
        </div>
      </div>
      <div class="c-md-8 c-12">
        <div class="my-container">
          <div class="my-row">
            <div class="c-md-6 c-12">
              <list :content="listTwoData"></list>
            </div>
            <div class="c-md-6 c-12">
              <tabs class="tabs" :tabData="tabData"></tabs>
            </div>
          </div>
        </div>
        <basic-form :basicFormData="basicFormData"></basic-form>
      </div>
    </div>
  </div>
</template>
<script>
import stepper from "./side-menu/layouts-folder/BetterStepper/StepperItem";
import tabs from "./side-menu/layouts-folder/Tabs/tab1";
import spinner from "./side-menu/extra-components-folder/Spinner/SpinnerItem";
import basicForm from "./side-menu/forms-folder/FormLayouts/BasicForm";
import list from "./side-menu/layouts-folder/Lists/list2";
import myselect from "./side-menu/forms-folder/FormInputs/Select";
import bg from "./side-menu/WhiteBack";
import myBtn from "./side-menu/forms-folder/Buttons/ButtonItem";

export default {
  components: {
    stepper,
    tabs,
    spinner,
    basicForm,
    list,
    bg,
    myselect,
    myBtn
  },
  methods: {
    showSpin() {
      var self = this;
      this.showSpinner = true;
      setTimeout(() => {
        self.showSpinner = false;
      }, 2000);
    }
  },
  data() {
    return {
      showSpinner: false,
      dataForStepper: {
        steps: 5,
        content: [
          {
            header: "#1",
            text: "Here you can see..."
          },
          {
            header: "#2",
            text: "...some of the components..."
          },
          {
            header: "#3",
            text: "...which was implemented..."
          },
          {
            header: "#4",
            text: "...in my Vue.js dashboard..."
          },
          {
            header: "#5",
            text: "..for learning purposes."
          }
        ],
        finalStep: {
          header: "Welcome",
          text: "For more components use a navigation sidebar:)"
        }
      },
      basicFormData: {
        checkboxData: {
          id: 1,
          name: "Check me out",
          value: "check",
          checked: true
        },
        firstInputPlaceholder: "Your e-mail",
        secondInputPlaceholder: "Your password",
        buttonText: "Submit",
        formName: "Basic Form"
      },
      listTwoData: {
        title: "People",
        list: [
          {
            name: "Adam Silver",
            description: "Commisioner"
          },
          {
            name: "Alex Caruso",
            description: "The Greatest"
          },
          {
            name: "Hakeem Olajuwon",
            description: "Drop Step master"
          },
          {
            name: "Ben Wallace",
            description: "DPOY"
          },
          {
            name: "Kawhi Leonard",
            description: "Fun Guy"
          },
          {
            name: "Vince Carter",
            description: "Half Man Half Amazing"
          },
          {
            name: "Bryan Scalabrine",
            description: "White Mamba"
          }
        ]
      },
      tabData: [
        {
          id: 1,
          tabName: "Closures",
          tabContent:
            "A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time."
        },
        {
          id: 2,
          tabName: "IFFY",
          tabContent:
            "An Immediately-invoked Function Expression (IIFE for friends) is a way to execute functions immediately, as soon as they are created.IIFEs are very useful because they don’t pollute the global object, and they are a simple way to isolate variables declarations."
        },
        {
          id: 3,
          tabName: "Lambda",
          tabContent:
            "An arrow function expression is a syntactically compact alternative to a regular function expression, although without its own bindings to the this, arguments, super, or new.target keywords. Arrow function expressions are ill suited as methods, and they cannot be used as constructors."
        }
      ],
      selectOptions: [
        { id: 1, value: "rabbit", option: "Rabbit" },
        { id: 2, value: "turtle", option: "Turtle" },
        { id: 3, value: "elephant", option: "Elephant" }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.my-container {
  .my-row {
    .c-md-6,
    .c-12 {
      .tabs {
        min-height: 400px;
        box-shadow: 0 0.5rem 1rem 0 rgba(44, 51, 73, 0.1);
      }
    }
  }
}
.spinner-button {
  margin: 30px 0;
  width: 100%;
}
.select-wrapper {
  min-height: 95px !important;
}
.relative-pos {
  position: relative;
}
</style>