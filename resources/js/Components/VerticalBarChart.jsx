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

const VerticalBarChart = ({
  data,
  colors,
  bars,
  className,
  layout = "horizontal",
  xAxisProps = {},
  yAxisProps = {},
}) => {
  return (
    <div className={`pb-4 flex flex-col  items-center border-[1px] border-blue-gray-100 shadow-sm rounded-xl ${className}`}>

    <div>
      <h2 className="text-2xl p-3 font-bold mb-3">
        Age distribution
      </h2>
    </div>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          data={data}
          layout={layout === "vertical" ? "vertical" : "horizontal"}
          margin={ { right: 30 }}
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

export default VerticalBarChart;

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-white flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        {payload.map((item, index) => (
          <p key={index} className="text-sm" style={{ color: item.color }}>
            {item.name}: <span className="ml-2">{item.value}</span>
          </p>
        ))}
      </div>
    );
  }
};
