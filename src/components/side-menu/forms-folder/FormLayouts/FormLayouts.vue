<template>
  <div class="my-container">
    <div class="my-row">
      <app-inline-form class="c-12" :inlineFormData="inlineFormData"></app-inline-form>
      <div class="my-container c-12 c-md-6">
        <div class="my-row">
          <app-basic-form class="c-12" :basicFormData="basicFormData"></app-basic-form>
          <app-block-form class="c-12" :blockFormData="blockFormData"></app-block-form>
        </div>
      </div>
      <div class="my-container c-12 c-md-6">
        <div class="my-row">
          <app-without-labels class="c-12" :withoutLabelsFormData="withoutLabelsFormData"></app-without-labels>
          <app-horizontal-form class="c-12" :horizontalFormData="horizontalFormData"></app-horizontal-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import InlineForm from "./InlineForm";
import BasicForm from "./BasicForm";
import WithoutLabels from "./FormWithoutLabels";
import BlockForm from "./BlockForm";
import HorizontalForm from "./HorizontalForm";
export default {
  components: {
    appInlineForm: InlineForm,
    appBasicForm: BasicForm,
    appWithoutLabels: WithoutLabels,
    appBlockForm: BlockForm,
    appHorizontalForm: HorizontalForm
  },
  data() {
    return {
      inlineFormData: {
        checkboxData: {
          id: 1,
          name: "Remember me",
          value: "remember",
          checked: true
        },
        firstInputPlaceholder: "Name",
        secondInputPlaceholder: "Password",
        buttonText: "Submit",
        formName: "Inline Form"
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
      withoutLabelsFormData: {
        formName: "Form without Labels",
        firstInputPlaceholder: "Your e-mail",
        secondInputPlaceholder: "Your password",
        textareaPlaceholder: "Your comment",
        buttonText: "Comment"
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
      horizontalFormData: {
        formName: "Horizontal Form",
        firstLabel: "Email",
        firstInputPlaceholder: "Email",
        secondLabel: "Password",
        secondInputPlaceholder: "Password",
        buttonText: "Sign in",
        checkboxData: {
          id: 1,
          name: "Remember me",
          value: "remember",
          checked: false
        }
      }
    };
  }
};
</script>
<style lang="scss" scoped>
</style>