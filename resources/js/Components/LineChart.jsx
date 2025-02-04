import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Updated data with population and growth
const data = [
  { year: 2000, population: 50000, growth: 2.1 },
  { year: 2005, population: 53000, growth: 2.3 },
  { year: 2010, population: 56000, growth: 2.5 },
  { year: 2015, population: 59000, growth: 2.7 },
  { year: 2020, population: 62000, growth: 3.0 },
  { year: 2025, population: 65000, growth: 3.2 },
];

const LineChartComponent = ({ className }) => {
  return (
    <div className={` flex flex-col items-center border-[1px] border-blue-gray-100 shadow-sm rounded-xl  ${className}`}>
      <div>
        <h2 className='mt-3 text-2xl font-bold'>
          Population Growth
        </h2>
      </div>
        <ResponsiveContainer width="100%" height="80%">
          <LineChart
            width={600}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              bottom: 20,
              left: 60,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            
            {/* Left Y-Axis for Population */}
            <YAxis
              yAxisId="left"
              tickFormatter={(tick) => tick.toLocaleString()}
            />
            
            {/* Right Y-Axis for Growth */}
            <YAxis
              yAxisId="right"
              orientation="right"
              tickFormatter={(tick) => `${tick}%`}
            />
            
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            
            {/* Population Line */}
            <Line
              type="monotone"
              dataKey="population"
              stroke="#3b82f6"
              yAxisId="left"
            />
            
            {/* Growth Line */}
            <Line
              type="monotone"
              dataKey="growth"
              stroke="#8b5cf6"
              yAxisId="right"
            />
          </LineChart>
        </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-[#F5F5DC] flex flex-col gap-4 rounded-md">
        <p className="text- text-lg">{label}</p>
        <p className="text-sm text-blue-400">
          Population:
          <span className="ml-2">{payload[0].value.toLocaleString()}</span>
        </p>
        <p className="text-sm text-indigo-400">
          Growth Rate:
          <span className="ml-2">{payload[1].value}%</span>
        </p>
      </div>
    );
  }
};
