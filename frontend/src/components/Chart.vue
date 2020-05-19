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
          data: []
        }
      ]
    };
  },
  mounted() {
  
  }
};
</script>