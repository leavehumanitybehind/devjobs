<template>
  <div class="companies__content">
    <Filtration @getData="getFormData" />
    <div v-if="!filtered.length">
      <p class="error">
        Oops..we didn`t find job with this parameters. Try to change some of
        them.
      </p>
      <button class="btn load-btn" @click="reset()">Again</button>
    </div>

    <div class="companies">
      <div v-for="item in filtered" :key="item._id" class="company__item">
        <router-link
          :to="{ name: 'company', params: { id: item._id, date: item } }"
        >
          <img
            class="company__img"
            :src="require(`../assets/${item.icon}.svg`)"
            @error="setAltImg"
            width="50"
            height="50"
        /></router-link>
        <div class="company__details">
          <TimeComponent :date="item.details.datePlacement" />
          <span> {{ item.schedule }} </span>
        </div>
        <div>
          <h5 class="company__position">{{ item.details.position }}</h5>
          <p class="company__name">{{ item.name }}</p>
        </div>
        <p class="company__country">{{ item.country }}</p>
      </div>
    </div>
    <button
      v-if="!filteredArr.length"
      class="btn load-btn"
      @click="getMoreData"
      :disabled="finished"
    >
      Load more
    </button>
    <button v-else class="btn load-btn" @click="reset()">Reset</button>
  </div>
</template>

<script>
import data from "../companies.json";
import Filtration from "./Filtration.vue";
import TimeComponent from "./TimeComponent.vue";
export default {
  name: "Companies",
  data() {
    return {
      initialCompanies: [],
      companies: [],
      finished: false,
      searchPosition: "",
      searchLocation: "",
      searchTime: "",
      filteredArr: [],
    };
  },
  components: {
    Filtration,
    TimeComponent,
  },

  methods: {
    setAltImg(event) {
      event.target.src = "default.svg";
    },
    getFormData(data) {
      let { position, selectedLocation, checked } = data;
      this.searchPosition = position;
      this.searchLocation = selectedLocation;
      this.searchTime = checked;
    },
    getData() {
      const limit = 12;
      this.initialCompanies = data.slice(0, limit);
    },
    getMoreData() {
      const limit = 12;
      const newData = data.slice(
        this.initialCompanies.length,
        this.initialCompanies.length + limit
      );
      this.initialCompanies = this.initialCompanies.concat(newData);
      if (this.initialCompanies.length >= data.length) {
        this.finished = true;
      }
    },

    filterByName(prof) {
      this.filteredArr = data.filter(function (elem) {
        return elem.details.position.toLowerCase().indexOf(prof) > -1 || elem.name.toLowerCase().indexOf(prof) > -1;
      });
      return this.filteredArr;
    },
    filterByLocation(country) {
      this.filteredArr = data.filter(function (elem) {
        return elem.country.toLowerCase().indexOf(country) > -1;
      });
      return this.filteredArr;
    },
    filterByTime() {
      this.filteredArr = data.filter(function (elem) {
        return elem.schedule === "Full Time";
      });
      return this.filteredArr;
    },
    filterByNameAndLocation(prof, country) {
      this.filteredArr = this.filterByName(prof).filter(function (elem) {
        return elem.country.toLowerCase().indexOf(country) > -1;
      });
      return this.filteredArr;
    },
    filterByNameAndTime(prof) {
      return (this.filteredArr = this.filterByName(prof).filter(function (
        elem
      ) {
        return elem.schedule === "Full Time";
      }));
    },
    filterByNameAndLocationAndTime(prof, country) {
      return (this.filteredArr = this.filterByNameAndLocation(
        prof,
        country
      ).filter(function (elem) {
        return elem.schedule === "Full Time";
      }));
    },
    filterByLocationAndTime(country) {
      return (this.filteredArr = this.filterByLocation(country).filter(
        function (elem) {
          return elem.schedule === "Full Time";
        }
      ));
    },
    reset() {
      this.searchPosition = "";
      this.searchLocation = "";
      this.searchTime = false;
      this.filteredArr = "";
    },
  },
  computed: {
    filtered: function () {
      let position = this.searchPosition;
      let location = this.searchLocation;
      let time = this.searchTime;
      switch (true) {
        case location !== "" && position !== "" && time === true:
          return this.filterByNameAndLocationAndTime(position, location, time);
        case location !== "" && position !== "":
          return this.filterByNameAndLocation(position, location);
        case position !== "" && time === true:
          return this.filterByNameAndTime(position);
        case location !== "" && time === true:
          return this.filterByLocationAndTime(location);
        case position !== "":
          return this.filterByName(position);
        case location !== "":
          return this.filterByLocation(location);
        case time == true:
          return this.filterByTime();
        default:
          return this.initialCompanies;
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style>
.error {
  font-size: 1.5rem;
  text-align: center;
}
.companies {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  row-gap: 49px;
  line-height: 1;
  font-weight: normal;
  color: #6e8098;
  padding-top: 105px;
  margin-bottom: 55px;
  justify-content: center;
}
.company__item {
  background: #ffffff;
  border-radius: 6px;
  padding: 49px 32px 32px;
  position: relative;
  max-width: 350px;
}

.company__img {
  position: absolute;
  top: -10%;
  left: 10%;
}

.company__position {
  font-weight: bold;
  font-size: 20px;
  line-height: 1;

  color: #19202d;
}

.company__name {
  text-align: left;
}

.company__country {
  text-align: left;
  margin-top: 40px;
  font-weight: bold;
  font-size: 14px;
  color: #5964e0;
}

.load-btn {
  display: flex;
  margin: 0 auto;
}
.load-btn:disabled {
  background-color: black;
  cursor: not-allowed;
}


@media (min-width: 768px) {

  .error {
  font-size: 2rem;
  text-align: center;
}
  .companies__content {
    margin: 0 40px;
  }
  .companies {
    grid-template-columns: 1fr 1fr;
    row-gap: 65px;
    column-gap: 30px;
  }
}

@media (min-width: 1028px) {
  .companies {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .companies__content {
    margin: 0 auto;
  }
}
</style>

