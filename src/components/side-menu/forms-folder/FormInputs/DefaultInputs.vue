<template>
  <div>
    <div class="form-container">
      <div class="form-header">
        <p>Default Inputs</p>
      </div>
      <div class="app-inputs">
        <input type="text" class="app-input" placeholder="Project" />
        <input type="text" class="app-input" placeholder="Full name" />
        <input type="password" class="app-input" placeholder="Password" />
        <input type="text" class="app-input rect" placeholder="Recangle border" />
        <input type="text" class="app-input semi-round" placeholder="Semi round border" />
        <input type="text" class="app-input round" placeholder="Round border" />
        <input type="text" class="app-input" placeholder="Disabled" disabled />
        <textarea class="app-input app-textarea semi-round" placeholder="Text Area"></textarea>
        <input type="text" class="app-input small" placeholder="Small" />
        <input type="text" class="app-input large rect" placeholder="Large" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form-container {
  background-color: #f5f5f5;
  padding: 15px;
  height: fit-content;
  width: 100%;
  margin: 1.5em auto;
  .form-header {
    p {
      font-size: 25px;
      border-bottom: 1px solid rgb(211, 211, 211);
    }
  }
}
.app-inputs {
}
.app-input {
  //display: block;
  margin-top: 20px;
  width: 100%;
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid #cecece;
  transition: all 0.2s;
  &::placeholder {
    color: #c8c8c8;
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 5px #e6e6e6;
  }
}

.rect {
  border-radius: 0;
}
.semi-round {
  border-radius: 14px;
}
.round {
  border-radius: 30px;
}
input[type="text"]:disabled {
  background-color: #e2e2e2;
}
.app-textarea {
  box-sizing: border-box;
  min-height: 150px;
  min-width: 100%;
  resize: none;
}
.small {
  padding: 2px 12px;
}
.large {
  padding: 12px;
}
</style>