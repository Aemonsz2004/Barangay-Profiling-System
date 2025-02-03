import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChartComponent = ({
  data,
  colors,
  bars,
  className,
  layout = "horizontal",
  xAxisProps = {},
  yAxisProps = {},
}) => {
  return (
    <div className={`${className}`}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout={layout === "vertical" ? "vertical" : "horizontal"}
          margin={layout === "vertical" ? { left: 30 } : { right: 30 }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          {/* Y-Axis: Configurable via props */}
          <YAxis
            dataKey={yAxisProps.dataKey || "category"}
            type={yAxisProps.type || "category"}
            width={yAxisProps.width || 100}
            interval={yAxisProps.interval ?? 0} // Default to show all labels
            {...yAxisProps}
          />

          {/* X-Axis: Configurable via props */}
          <XAxis
            type={xAxisProps.type || "number"}
            interval={xAxisProps.interval ?? 0}
            {...xAxisProps}
          />

          <Tooltip content={<CustomTooltip />} />
          <Legend />
          {bars.map((bar, index) => (
            <Bar key={bar.key} dataKey={bar.key} fill={colors[index]} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        {payload.map((item, index) => (
          <p key={index} className="text-sm" style={{ color: item.color }}>
            {item.name}: <span className="ml-2">{item.value}%</span>
          </p>
        ))}
      </div>
    );
  }
};
