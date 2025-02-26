<template>
  <client-only>
    <v-chart class="chart" :option="chartOption" autoresize />
  </client-only>
</template>

<script setup>
import VChart from "vue-echarts";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";

use([
  CanvasRenderer,
  BarChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
]);

const chartData = [
  { month: "Aug. 2024", CeuxQuiServent: 100, Tarot: 80, Torat: 50 },
  { month: "Sept. 2024", CeuxQuiServent: 90, Tarot: 85, Torat: 60 },
  { month: "Oct. 2024", CeuxQuiServent: 110, Tarot: 75, Torat: 55 },
  { month: "Nov. 2024", CeuxQuiServent: 105, Tarot: 90, Torat: 65 },
  { month: "Dec. 2024", CeuxQuiServent: 120, Tarot: 95, Torat: 70 },
  { month: "Jan. 2025\n(prévision)", CeuxQuiServent: 30, Tarot: 40, Torat: 20 },
];

const chartOption = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: chartData.map((item) => item.month),
    axisLine: {
      lineStyle: {
        color: "#E5E7EB",
      },
    },
  },
  yAxis: {
    type: "value",
    axisLine: {
      lineStyle: {
        color: "#E5E7EB",
      },
    },
    splitLine: {
      lineStyle: {
        color: "#E5E7EB",
      },
    },
  },
  series: [
    {
      name: "Ceux Qui Servent",
      type: "bar",
      stack: "total",
      data: chartData.map((item) => item.CeuxQuiServent),
      itemStyle: {
        color: "#065F46",
      },
    },
    {
      name: "Tarot",
      type: "bar",
      stack: "total",
      data: chartData.map((item) => item.Tarot),
      itemStyle: {
        color: "#059669",
      },
    },
    {
      name: "Torat",
      type: "bar",
      stack: "total",
      data: chartData.map((item) => item.Torat),
      itemStyle: {
        color: "#A7F3D0",
      },
    },
  ],
};
</script>

<style scoped>
.chart {
  height: 100%;
  width: 100%;
}
</style>
