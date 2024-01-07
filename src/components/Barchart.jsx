import { BarChart } from "@mui/x-charts/BarChart";

const uData = [11, 22, 33, 44, 55, 66, 77, 88, 99];
const pData = [11, 22, 33, 44, 55, 66, 77, 88, 99];
const aData = [11, 22, 33, 44, 55, 66, 77, 88, 99];
const xLabels = ["20", "25", "30", "35", "40", "45", "50", "55", "60"];

const Barchart = () => {
  const seriesColors = ["#0800a3", "#4935ff", "#85afff"];

  return (
    <BarChart
      width={700}
      height={300}
      series={[
        {
          data: pData,
          label: "Employer: K 73,500",
          id: "EmployerId",
          stack: "total",
          color: seriesColors[0],
        },
        {
          data: uData,
          label: "Employee K 52,500",
          id: "EmployeeId",
          stack: "total",
          color: seriesColors[1],
        },
        {
          data: aData,
          label: "Total Interest K 244,313",
          id: "TotalId",
          stack: "total",
          color: seriesColors[2],
        },
      ]}
      xAxis={[{ data: xLabels, scaleType: "band" }]}
    ></BarChart>
  );
};

export default Barchart;
