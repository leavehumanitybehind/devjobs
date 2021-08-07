<template>
  <div class="filtration">
    <form @submit.prevent="sendFiltrationData">
      <div class="position">
        <input type="text" v-model="position" placeholder="Software Engineer" />
      </div>
      <div
        class="mobile-wrapper"
        @click.self="active = false"
        :class="{ activeClass: active }"
      >
        <div class="mobile__menu" :class="{ activeClass: active }">
          <div class="location">
            <input type="text" v-model="country" placeholder="New York" />
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
        </div>
      </div>
      <div class="mobile__buttons">
        <button type="button" @click="active = true">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="filter-icon"
              d="M19.1076 1.50591e-06H0.860224C0.538187 -0.000593357 0.243138 0.175089 0.0960199 0.454871C-0.0531279 0.738422 -0.0269509 1.07987 0.163593 1.33883L6.84866 10.5411C6.85089 10.5443 6.85333 10.5473 6.85556 10.5504C7.09845 10.8709 7.22995 11.2591 7.23056 11.6579V19.1605C7.22914 19.3825 7.31842 19.5961 7.47853 19.7537C7.63884 19.9112 7.85677 20 8.08405 20C8.19951 19.9998 8.31396 19.9774 8.4207 19.934L12.1772 18.5345C12.5136 18.4339 12.7371 18.1236 12.7371 17.75V11.6579C12.7377 11.2591 12.8692 10.8709 13.1118 10.5504C13.1141 10.5473 13.1165 10.5443 13.1187 10.5411L19.804 1.33864C19.9946 1.07987 20.0207 0.73862 19.8716 0.45507C19.7247 0.175089 19.4294 -0.000593357 19.1076 1.50591e-06Z"
              fill="#6E8098"
            />
          </svg>
        </button>
        <button type="submit">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" rx="5" fill="#5964E0" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M27.3533 26.549H28.2603L33.9529 32.2531L32.2531 33.9529L26.549 28.2603V27.359L26.2353 27.0453C24.9405 28.1576 23.2578 28.8307 21.4153 28.8307C17.3198 28.8307 14 25.5109 14 21.4153C14 17.3198 17.3198 14 21.4153 14C25.5109 14 28.8306 17.3198 28.8306 21.4153C28.8306 23.2578 28.1576 24.9405 27.0396 26.2353L27.3533 26.549ZM16.2817 21.4153C16.2817 24.2503 18.5804 26.549 21.4153 26.549C24.2503 26.549 26.549 24.2503 26.549 21.4153C26.549 18.5804 24.2503 16.2817 21.4153 16.2817C18.5804 16.2817 16.2817 18.5804 16.2817 21.4153Z"
              fill="white"
            />
          </svg>
        </button>
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
      country: "",
      active: false,
    };
  },
  methods: {
    sendFiltrationData() {
      this.$emit("getData", {
        position: this.position,
        selectedLocation: this.country,
        checked: this.checked,
      });
      this.position = "";
      this.country = "";
      this.checked = false;
      this.active ? (this.active = false) : "";
    },
  },
};
</script>

<style>
.filtration {
  background-color: white;
  max-width: 1110px;
  margin: -3% auto 0;
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
}
form {
  display: flex;
  align-items: center;
  justify-content: space-around;

}
input:not(.checkbox) {
  padding: 28px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 1;
  border: none;
  color: #19202d;
  outline: none;
}

.position {
  position: relative;
}
.position input {
  padding-left: 52px;
  border-radius: 6px 0px 0px 6px;
  caret-color: #5964e0;
}

.location {
  position: relative;
  text-align: left;
  margin: 0 auto;
  border-bottom: 1px solid rgba(110, 128, 152, 0.2);
}

.location input {
  padding: 25px 30px 25px 45px;
  border-radius: 6px;
  outline: none;
}

.location::before {
  content: "";
  position: absolute;
  left: 4%;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  background-image: url("../assets/location.svg");
  background-size: 24px 24px;
  background-repeat: no-repeat;
}
.mobile-wrapper {
  display: none;
  background: rgba(0, 0, 0, 0.3);
  height: 100%;
  position: fixed;
  width: 100%;
  z-index: 1;
  top: 0;
  left: 0;
}

.mobile__menu {
  display: none;
  background-color: white;
  border-radius: 6px;
  padding-bottom: 20px;
  position: fixed;
  top: 100px;
  margin: 5% auto;
  left: 0;
  right: 0;
  width: 80%;
  z-index: 1000;
}

.mobile__menu .btn {
  margin-top: 24px;
  width: 100%;
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
.darkApp #filter-icon {
  fill: white;
}
.activeClass {
  display: block;
}

.check__wrapper {
  display: flex;
  flex-direction: column;
  margin: 0 24px;
}
.mobile__buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.mobile__buttons button {
  border: none;
  background-color: inherit;
  cursor: pointer;
}

@media (min-width: 768px) {
  .position input {
    padding-left: 20px;
  }

  input:not(.checkbox) {
    padding: 25px 0px 25px 45px;
  }

  .position input {
    border-right: 1px solid rgba(110, 128, 152, 0.2);
  }

  .location::before {
    left: 7%;
  }

  .position::before {
    content: "";
    position: absolute;
    left: 7%;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    background-image: url("../assets/search.svg");
    background-size: 24px 24px;
    background-repeat: no-repeat;
  }

  form {
    align-items: center;
    flex-wrap: nowrap;
  }

  .check__wrapper {
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    flex-grow: 1;
  }

  .mobile-wrapper {
    display: flex;
    position: static;
    background: none;
    flex-grow: 1;
  }

  .mobile__menu {
    display: flex;
    align-items: center;
    position: static;
    padding-bottom: 0;
    width: auto;
    flex-grow: 1;
  }

  .mobile__menu .btn {
    width: auto;
    margin-top: 0;
    padding: 16px;
  }

  .mobile__buttons {
    display: none;
  }

  .location {
    display: block;
    width: auto;
    margin: 0;
    border-bottom: none;
    border-right: 1px solid rgba(110, 128, 152, 0.2);
    flex-basis: 40%;
  }

  .location input {
    border-radius: 6px;
    outline: none;
  }
}

@media (min-width: 1068px) {
  input:not(.checkbox) {
    width: 78%;
    padding-left: 40px;
  }

  .position {
    flex-basis: 50%;
  }

  .position::before {
    left: 4%;
  }

  .location::before {
    left: -2%;
  }

  .mobile__menu {
    margin: 0;
  }

  .mobile__menu .btn {
    padding: 16px 35px;
  }

  .position input {
    padding: 25px 0px 25px 52px;
  }
}
</style>