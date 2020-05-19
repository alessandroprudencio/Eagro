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
    let array = this.$store.state.taskList;
    let newArray = [];

    let arr = [];

    array.forEach(element => {
      if (element.tasks.length) newArray.push(element.tasks);
      if (element.tasks.length > 0) arr.push(element.tasks[0]);
    });

    let totalArray = [];
    for (let i = 0; i < arr.length; i++) {
      this.itensLenght.push(i);
      totalArray.push(arr[i]);
    }

    console.log(this.itensLenght);
    console.log(totalArray);

    let test = totalArray.filter(task => task.done == true);

    let test2 = [];

    for (let i = 0; i < test.length; i++) {
      test2.push(i);
    }

    console.log(test2);

    this.series.data = test2;
  }
};
</script>