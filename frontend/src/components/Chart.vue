<template>
  <div>
    <apexchart ref="demoChart" width="500" type="line" :options="options" :series="series"></apexchart>
  </div>
</template>

<script>
import moment from "moment";
moment.locale(`PT-BR`);
export default {
  name: "Chart",
  data() {
    return {
      dataset: [],
      options: {
        chart: {
          theme: {
            palette: "palette2"
          },
          id: "vuechart-example"
        },
        xaxis: {
          categories: [1, 2, 3, 4, 5, 6, 7]
        }
      },
      series: [
        {
          name: "Tarefas",
          data: [1, 2, 3, 4, 7, 8, 9]
        }
      ]
    };
  },
  mounted() {
    let array = this.$store.state.taskList;
    let arr = array.filter(task => task.done === true);
    let newArray = [];
    arr.forEach((element, i) => {
      newArray.push(i);
    });

    this.series.data = newArray;
  }
};
</script>