<template>
  <div>
    <div>{{ counter }}</div>
  </div>
</template>

<script>
import Cron from "vue-crontab";

export default {
  name: "CronDemo",
  data() {
    return {
      counter: 0,
    };
  },
  mounted() {
    Cron.addJob({
      name: "counter",
      interval: {
        seconds: "/0.5",
      },
      job: this.countUp,
    });
  },
  methods: {
    countUp() {
      this.counter += 1;
    },
  },
};
</script>