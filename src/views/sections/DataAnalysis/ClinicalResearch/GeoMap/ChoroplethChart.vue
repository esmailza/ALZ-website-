<script>
import { generateChart, mixins } from "vue-chartjs";
// import to auto register
import "chartjs-chart-geo";

const Choropleth = generateChart("choropleth", "choropleth");

export default {
  extends: Choropleth,
  mixins: [mixins.reactiveProp],
  props: ["options"],
  mounted() {
    this.renderChart(this.chartData, this.options);
  }
};
</script>