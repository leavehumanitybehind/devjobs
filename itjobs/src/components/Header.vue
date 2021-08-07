<template>
  <header>
    <router-link to="/"
      ><img alt="Vue logo" src="../assets/logo.svg" width="115" height="32"
    /></router-link>
    <div class="range-price__labels">
      <label class="label">
        <input
          class="range-price__checkbox"
          type="checkbox"
          name="checkbox"
           :checked="value"
         @change="$emit('input', $event.target.checked)"
        />
        <span class="range-price__label range-price__label--sun"></span>
      </label>

      <span class="range-price__label range-price__label--night"></span>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
   props: ["value"],
  data() {
    return {
    };
  },
};
</script>



<style>
header {
  background: #5964e0;
  background-image: url("../assets/header-bg.svg");
  background-repeat: no-repeat;
  border-radius: 0px 0px 0px 100px;
  padding: 45px 10% 75px;
  display: flex;
  justify-content: space-between;
}

.range-price__labels {
  display: flex;
  justify-content: center;
  align-items: center;
}

.label {
  display: flex;
  margin: 0;
  position: relative;
  cursor: pointer;
}

.range-price__checkbox {
  position: absolute;
  opacity: 0;
  cursor: inherit;
}

label .range-price__label:before,
label .range-price__label:after {
  content: "";
  position: absolute;
  top: 50%;
  transition: 0.3s;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

label .range-price__label:before {
  right: 0;
  height: 24px;
  margin-top: -13px;
  width: 46px;
  border-radius: 12px;
  background: #ddd;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.4);
  cursor: pointer;
}

label .range-price__label:after {
  right: 25px;
  height: 14px;
  width: 14px;
  margin-top: -8px;
  background-color: #5964E0;
  border-radius: 50%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

label:hover .range-price__label:after {
   background-color: #939bf4;
}


label .range-price__checkbox:checked + .range-price__label:after {
  right: 4px;
}

label .range-price__checkbox:focus + .range-price__label:before {
  box-shadow: 0 0 0 3px rgba(50, 150, 255, 0.2);
 
}

label .range-price__checkbox:disabled + .range-price__label {
  opacity: 0.35;
}

label .range-price__checkbox:disabled + .range-price__label:before {
  background: #cfd8ef;
}

.range-price__label {
  font-size: 12px;
  line-height: 16px;
  width: 80px;
  height: 30px;
}

.range-price__label--sun {
  background: url("../assets/sun.svg") no-repeat center left;
  margin-right: 10px;
}

.range-price__label--night {
  background: url("../assets/moon.svg") no-repeat center center;
  margin-left: -10px;
}
</style>