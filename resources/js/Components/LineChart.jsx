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
  { year: 2000, population: 500000, growth: 2.1 },
  { year: 2005, population: 530000, growth: 2.3 },
  { year: 2010, population: 560000, growth: 2.5 },
  { year: 2015, population: 590000, growth: 2.7 },
  { year: 2020, population: 620000, growth: 3.0 },
  { year: 2025, population: 650000, growth: 3.2 },
];

const LineChartComponent = ({ className }) => {
  return (
    <div className={`${className}`}>
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
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
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
