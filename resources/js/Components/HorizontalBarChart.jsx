import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const HBarChartComponent = ({ data, colors, bars, className, layout = 'horizontal' }) => {
  return (
    <div className={`${className}`}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          layout={layout === 'vertical' ? 'vertical' : 'horizontal'} // Dynamically set layout
          margin={layout === 'vertical' ? { left: 30 } : { right: 30 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type={layout === 'vertical' ? 'number' : 'category'} />
          <YAxis type={layout === 'vertical' ? 'category' : 'number'}  />
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

export default HBarChartComponent;

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