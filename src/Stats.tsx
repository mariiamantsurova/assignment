import "./styles/App.css";
import { PieChart } from "@mui/x-charts";

interface StatsProps {
  completed: number;
  uncompleted: number;
}

function Stats({ completed, uncompleted }: StatsProps) {
  return (
    <div className="stats-card card">
      <h2>Statistics:</h2>
      <PieChart
        colors={["#7209B7", "#E70092"]}
        series={[
          {
            data: [
              { id: 0, value: completed, label: "Completed" },
              { id: 1, value: uncompleted, label: "Uncompleted" },
            ],
          },
        ]}
        width={400}
        height={200}
        sx={{
          "& .MuiLegend-label": {
            color: "#FFFFFF", // Change legend text color to white
          },
          "& text": {
            fill: "white", // Change the color of the text inside the chart (including labels)
          },
        }}
      />
    </div>
  );
}

export default Stats;
