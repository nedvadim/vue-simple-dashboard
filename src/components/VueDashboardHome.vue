<template>
  <div>
    <div class="my-row">
      <div class="c-md-4 c-12">
        <bg header="Stepper">
          <stepper :isVertical="true" :dataStepper="dataForStepper"></stepper>
        </bg>
        <div class="c-md-6 c-12 relative-pos margin-top">
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
        <div class="c-md-6 c-12 margin-top">
          <bg class="select-bg" header="Custom Select">
            <div class="select-padding">
              <myselect class="select" :options="selectOptions"></myselect>
            </div>
          </bg>
        </div>
      </div>
      <div class="c-md-8 c-12">
        <div class="my-container">
          <div class="my-row">
            <div class="c-md-6 c-12">
              <list :content="listTwoData"></list>
            </div>
            <block-form class="min-height-389 c-12 c-md-6" :blockFormData="blockFormData"></block-form>
          </div>
        </div>
        <bg header="Tabs">
          <tabs class="c-md-6 c-12" :tabData="tabData"></tabs>
        </bg>
      </div>
    </div>
  </div>
</template>
<script>
import stepper from "./side-menu/layouts-folder/BetterStepper/StepperItem";
import tabs from "./side-menu/layouts-folder/Tabs/tab1";
import spinner from "./side-menu/extra-components-folder/Spinner/SpinnerItem";
import blockForm from "./side-menu/forms-folder/FormLayouts/BlockForm";
import list from "./side-menu/layouts-folder/Lists/list2";
import myselect from "./side-menu/forms-folder/FormInputs/Select";
import bg from "./side-menu/WhiteBack";
import myBtn from "./side-menu/forms-folder/Buttons/ButtonItem";

export default {
  components: {
    stepper,
    tabs,
    spinner,
    blockForm,
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
      blockFormData: {
        formName: "Block form",
        firstInputPlaceholder: "First Name",
        firstLabel: "First Name",
        secondInputPlaceholder: "Email",
        secondLabel: "Email",
        thirdInputPlaceholder: "Last Name",
        thirdLabel: "Last Name",
        fourthInputPlaceholder: "Website",
        fourthLabel: "Website",
        buttonText: "Submit"
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
.min-height-389 {
  min-height: 389px;
}
.spinner-button {
  margin: 0.5rem 0 0px 0;
  width: 100%;
}
.relative-pos {
  position: relative;
}
.margin-top {
  margin-top: $gap-size;
}
.select-padding {
  padding-top: 15px;
}
</style>