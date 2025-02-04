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

const HorizontalBarChat = ({ data, colors, bars, className, layout = 'horizontal' }) => {
  return (
    <div className={`pb-4 flex flex-col items-center bg-[--color-lightest]  border-[1px] border-blue-gray-100 shadow-sm rounded-xl ${className}`}>
    <div>
      <h2 className='text-2xl mt-3 font-bold'>
        Gender Distribution
      </h2>
    </div>
      <ResponsiveContainer width="100%" height='80%'>
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

export default HorizontalBarChat;

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-[#F5F5DC] flex flex-col gap-4 rounded-md">
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