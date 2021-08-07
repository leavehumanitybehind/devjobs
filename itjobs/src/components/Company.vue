<template>
  <div class="company__card">
    <div class="card__content">
      <div class="card__intro-wrapper">
        <div class="card__img-wrapper">
          <img
            class="card__img"
            :src="require(`../assets/${$route.params.date.icon}.svg`)"
            @error="setAltImg"
          />
        </div>

        <div class="company__info">
          <h5>{{ $route.params.date.name }}</h5>
          <span> {{ $route.params.date.name }}.com</span>
        </div>
        <a href="#" class="company__btn"> Company Site</a>
      </div>
      <div class="card">
        <div class="card__wrapper">
          <div class="card__info">
            <div class="company__details">
              <TimeComponent :date="$route.params.date.details.datePlacement" />
              <span> {{ $route.params.date.schedule }} </span>
            </div>
            <div>
              <h2 class="card__position">
                {{ $route.params.date.details.position }}
              </h2>
              <p class="card__country">
                {{ $route.params.date.country }}
              </p>
            </div>
          </div>
          <button class="btn">Apply now</button>
        </div>
        <p class="company__desc company__desc-start">
          {{ $route.params.date.details.description }}
        </p>
        <div class="company__req">
          <h3>Requirements</h3>
          <p class="company__desc">
            {{ $route.params.date.details.requirements.desc }}
          </p>
          <ul v-if="$route.params.date.details.requirements.list.length">
            <li
              class="company__desc"
              v-for="(req, index) in $route.params.date.details.requirements
                .list"
              :key="index"
            >
              {{ req }}
            </li>
          </ul>
        </div>
        <div class="company__resp">
          <h3>What You Will Do</h3>

          <p class="company__desc">
            {{ $route.params.date.details.responsobilities.desc }}
          </p>
          <ol v-if="$route.params.date.details.responsobilities.list.length">
            <li
              class="company__desc"
              v-for="(res, index) in $route.params.date.details.responsobilities
                .list"
              :key="index"
            >
              {{ res }}
            </li>
          </ol>
        </div>
      </div>
    </div>
    <div class="card__footer">
      <div class="card__footer-company-info">
        <h3>{{ $route.params.date.details.position }}</h3>

        <span> So digital inc.</span>
      </div>

      <button class="btn">Apply now</button>
    </div>
  </div>
</template>

<script>
import TimeComponent from "./TimeComponent.vue";
export default {
  components: { TimeComponent },
  name: "Company",
  props: ["date"],
  data() {
    return {
      items: this.date,
    };
  },
};
</script>

<style>
a {
  text-decoration: none;
}


.company__btn {
  padding: 16px 20px;
  color: #5964e0;
  background: rgba(89, 100, 224, 0.1);
  font-weight: bold;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  border-radius: 5px;
}

.company__card {
  margin: 0 24px;
}

.company__card .btn {
  width: 100%;
}
.card__wrapper .btn {
  margin-top: 50px;
}

.card__content {
  max-width: 700px;
  margin: 0 auto;
}

.card__content ul,
.card__content ol {
  padding-left: 24px;
}
.card__content h5 {
  font-size: 1.5em;
  margin: 0;
  margin-bottom: 13px;
}

.card__img-wrapper {
  margin-top: -55px;
}
.card__intro-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 6px;
  gap: 24px;
  padding: 32px;
  margin-bottom: 24px;
  margin-top: -5%;
}

.card {
  background-color: white;
  margin-top: 3%;
  padding: 40px 24px;
  margin-bottom: 80px;
  border-radius: 6px;
}

.card__position {
  margin: 11px 0;
  font-size: 20px;
}

.card__country {
  font-weight: bold;
  font-size: 14px;
  color: #5964e0;
  margin: 0;
}
.card__footer {
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 23px;
  border-radius: 6px;
}

.card__footer-company-info {
  display: none;
}

.c.btn {
  width: 100%;
}

.company__info {
  text-align: center;
  margin-bottom: 25px;
}

.company__desc {
  font-size: 16px;
  line-height: 162%;
  color: #6e8098;
}

.company__desc::marker {
  color: #5964e0;
}

.company__desc-start {
  margin: 40px 0;
}
ol li,
ul li {
  padding-left: 28px;
}

ul li::marker {
  font-size: 10px;
}
ol li::marker {
  font-weight: bold;
  font-size: 16px;
  line-height: 162%;
  /* identical to box height, or 162% */

  color: #5964e0;
}

.company__req,
.company__resp {
  margin-top: 40px;
}
h3 {
  font-weight: bold;
  font-size: 20px;
}

@media (min-width: 768px) {
  .company__card {
    margin: 0 39px;
  }
  .card__intro-wrapper {
    flex-direction: row;
    padding: 0;
    margin-bottom: 32px;
  }

  .card__img {
    width: 100%;
    transform: scale(1.22);
  }

  .company__info {
    margin-left: 40px;
    text-align: initial;
    margin-bottom: 0;
  }

  .company__btn {
    margin-left: auto;
    margin-right: 43px;
  }

  .card__img-wrapper {
    overflow: hidden;
    align-self: stretch;
    flex-basis: 140px;
    margin-top: 0;
  }

  .card__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card__wrapper .btn {
    margin-top: 0;
  }

  .card__footer-company-info {
    display: block;
  }

  .company__card .btn {
    width: auto;
  }

  .card {
    background-color: white;
    margin-top: 3%;
    padding: 42px;
    margin-bottom: 80px;
    border-radius: 6px;
  }

  .card__content ul,
  .card__content ol {
    padding-left: 40px;
  }

  .card__position {
    font-size: 28px;
  }
}
</style>