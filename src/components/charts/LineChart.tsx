
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
const LineChart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'User Registrations',
        data: [30, 45, 60, 40, 80, 70],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        fill: false
      }
    ]
  };
  return (
    <Line data={lineChartData} />
  )
}

export default LineChart