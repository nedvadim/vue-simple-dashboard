<template>
  <div class="my-container">
    <div class="my-row">
      <app-inline-form class="c-12" :inlineFormData="inlineFormData"></app-inline-form>
      <app-basic-form class="c-12 c-md-6" :basicFormData="basicFormData"></app-basic-form>
      <app-without-labels class="c-12 c-md-6" :withoutLabelsFormData="withoutLabelsFormData"></app-without-labels>
    </div>
  </div>
</template>
<script>
import InlineForm from "./InlineForm";
import BasicForm from "./BasicForm";
import WithoutLabels from "./FormWithoutLabels";
export default {
  components: {
    appInlineForm: InlineForm,
    appBasicForm: BasicForm,
    appWithoutLabels: WithoutLabels
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
      }
    };
  }
};
</script>
<style lang="scss" scoped>
</style>