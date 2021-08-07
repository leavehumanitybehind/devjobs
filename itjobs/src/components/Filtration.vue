<template>
  <div class="filtration">
    <form @submit.prevent="sendFiltrationData">
      <div class="position">
        <input type="text" v-model="position" placeholder="Software Engineer" />
      </div>
      <div class="location">
        <input type="text" v-model="country" placeholder="New York">
      </div>
      <div class="check__wrapper">
        <input
          class="checkbox"
          v-model="checked"
          type="checkbox"
          name="time"
          id="time-job"
        />
        <label for="time-job" class="label time-job">Full time only </label>
        <button type="submit" class="btn">Search</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Filtration",
  data() {
    return {
      position: "",
      checked: false,
      country: ""
    };
  },
  methods: {
    sendFiltrationData() {
      this.$emit("getData", {
        position: this.position,
        selectedLocation: this.country,
        checked: this.checked,
      });
      this.position = '';
      this.country = '';
      this.checked = false;
    },
  },
};
</script>

<style>
select {
  border: none;
  outline: none;
  width: 100%;
  padding: 28px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 1;
  color: #19202d;
  caret-color: blueviolet;
}

.filtration {
  background-color: white;
  max-width: 1110px;
  margin: -3% auto 0;
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
}
form {
  display: grid;
  grid-template-columns: 40% 25% 35%;
  align-items: center;
}
input:not(.checkbox) {
  padding: 28px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 1;
  border: none;
  border-right: 1px solid rgba(110, 128, 152, 0.2);
  color: #19202d;
  width: 78%;
}

.position {
  position: relative;
}
.position input {
  padding-left: 52px;
  border-radius: 6px 0px 0px 6px;
  caret-color: #5964e0;
}
.position::before {
  content: "";
  position: absolute;
  left: 4%;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  background-image: url("../assets/search.svg");
  background-size: 24px 24px;
  background-repeat: no-repeat;
}

.location {
  position: relative;
  text-align: left;
}

.location::before {
  content: "";
  position: absolute;
  left: -2%;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  background-image: url("../assets/location.svg");
  background-size: 24px 24px;
  background-repeat: no-repeat;
}

.check__wrapper {
  display: flex;
  justify-content: space-around;
}

.time-job {
  font-weight: bold;
}

.checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.checkbox + .label {
  display: inline-flex;
  align-items: center;
  user-select: none;
  position: relative;
  padding: 16px 0;
}
.checkbox + .label::before {
  content: "";
  display: inline-block;
  width: 24px;
  height: 24px;
  background-color: rgba(25, 32, 45, 0.1);
  margin-right: 12px;
  border-radius: 3px;
}
.checkbox:checked + .label::before {
  background-position: center;
  border-color: inherit;
}
/* стили при наведении курсора на checkbox */
.checkbox:not(:disabled):not(:checked) + .label:hover::after {
  left: 1px;
}
/* стили для активного состояния чекбокса (при нажатии на него) */
.checkbox:not(:disabled):checked + .label::before {
  background-image: url("../assets/checked.svg");
  background-repeat: no-repeat;
}
/* стили для чекбокса, находящегося в фокусе */
.checkbox:hover + .label::before {
  background-color: rgba(89, 100, 224, 0.25);
}

/* стили для чекбокса, находящегося в состоянии disabled */

.darkApp .checkbox + .label::before {
  background: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.1;
}
</style>