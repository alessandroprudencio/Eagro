<template>
  <div>
    <apexchart ref="demoChart" width="500" type="line" :options="options" :series="series"></apexchart>
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
moment.locale(`PT-BR`);
export default {
  name: "Chart",
  data() {
    return {
      dataset: [],
      itensLenght: [],
      options: {
        chart: {
          theme: {
            palette: "palette2"
          },
          id: "vuechart-example"
        },
        xaxis: {
          categories: this.itensLenght //meses
        }
      },
      series: [
        {
          name: "Tarefa",
          data: this.dataset ? this.dataset : []
        }
      ]
    };
  },
  async mounted() {
    let all = (await axios.get("http://localhost:3000/api/v1/taskAll")).data;
    let array = [];
    for (let i = 0; i < all.length; i++) {
      array.push(i);
    }
    this.itensLenght = array;

    let test = all.filter(task => task.done === true);

    let series = [];

    for (let i = 0; i < test.length; i++) {
      series.push(i);
    }

    this.series.data = series;
  }
};
</script>