import React from "react";
import { Cell, Pie, PieChart as RechartsPieChart, Tooltip } from "recharts";
import '../../css/app.css';

const defaultColors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#F44236"];

const renderCustomizedLabel = (props) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props;
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomTooltip = ({ active, payload, formatValue }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={{ background: "white", padding: "5px", border: "1px solid #ccc" }}>
        <p className="label">
          {payload[0].name}: {formatValue ? formatValue(payload[0].value) : payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

const PieChart = ({
  title,
  data,
  colors = defaultColors,
  formatTooltipValue,
  className,
  customLabel = renderCustomizedLabel,
}) => {
  return (
    <div className={`${className}overflow-hidden bg-[--color-1] border-[1px] rounded-xl border-blue-gray-100 shadow-sm flex flex-col items-center`}>
      <h2 className={`mt-3 text-2xl font-bold text-center inline`}>{title}</h2>

      <div className="flex min-h-[500px] justify-center items-center">
        <RechartsPieChart width={450} height={500} >
          <Pie data={data} dataKey="value" label={customLabel} labelLine={false}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip formatValue={formatTooltipValue} />} />
        </RechartsPieChart>
        <div className="flex flex-col gap-4 mt-4 px-2">
          {data.map((entry, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-4 h-4 mr-2" style={{ backgroundColor: colors[index % colors.length] }}></div>
              <span className="text-[0.8rem] text-center">{entry.name}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default PieChart;
