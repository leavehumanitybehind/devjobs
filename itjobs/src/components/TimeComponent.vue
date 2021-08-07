<template>
  <span class="company__date-placement">
    {{ getTime(time) }}
  </span>
</template>

<script>
export default {
  name: "TimeComponent",
  props: ["date"],
  data() {
    return {
      time: this.date,
    };
  },
  methods: {
    getTime(elem) {
      let today = new Date();
      let createdOn = new Date(elem);
      let hours = createdOn.getHours();
      let msInDay = 24 * 60 * 60 * 1000;

      let diff = (+today - +createdOn) / msInDay;
      if (diff >= 30) {
        return `month ago`;
      } else if (diff >= 60) {
        return `more than month ago`;
      } else if (diff < 30 && diff > 1) {
        return `${Math.floor(diff)}d ago`;
      } else {
        return `${today.getHours() - hours}h ago`;
      }
    },
  },
};
</script>

<style>
.company__date-placement {
  position: relative;
  padding-right: 28px;
}

.company__date-placement::after {
  content: "";
  position: absolute;
  right: 10%;
  top: 55%;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #6e8098;
}
</style>