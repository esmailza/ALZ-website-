<script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  props: {
    label: {
      type: String
    },
    chartData: {
      type: Array
    },
    options: {
      type: Object
    },
 
  },
  mounted() {
    // const dates = this.chartData.map(d => d.date).reverse();
    // const totals = this.chartData.map(d => d.total).reverse();

    // const {
    //   borderColor,
    //   pointBorderColor,
    //   pointBackgroundColor,
    //   backgroundColor
    // } = this.chartColors;

    this.renderChart(
      {
        labels:["Phase 1", "Phase 2", "Phase 3","Phase 1 or Phase 2", "Phase 2 or Phase 3"],
        datasets: [
          {
            label: this.label,
            data: this.chartData,
            backgroundColor: ["#3816f5", "#FF0000", " #008000", "#40E0D0","#FF7F50"],
            // borderColor: borderColor,
            // pointBorderColor: pointBorderColor,
            // pointBackgroundColor: pointBackgroundColor,
            // backgroundColor: backgroundColor
          }
        ]
      },
      this.options
    );
  }
};
</script>
