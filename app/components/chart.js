import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    TimeScale
} from "chart.js";
import { Line } from "react-chartjs-2";
import 'chartjs-adapter-date-fns';
import { enUS } from 'date-fns/locale';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    TimeScale
);

const options = {
    responsive: true,
    plugins: {
        title: {
            display: false
        },
        legend: {
            display: false
        }
    },
    interaction: {
        mode: 'index',
        intersect: false
    },
    scales: {
        x: {
            display: true,
            type: "time",
            time: {
                tooltipFormat: 'MMM dd',
                unit: 'day'
            },
            adapters: {
                date: {
                    locale: enUS,
                },
            },
            title: {
                display: true,
                text: 'Date'
            }
        },
        y: {
            display: true,
            title: {
                display: true,
                text: 'Weight (lb)'
            }
        }
    }
};

export default function Chart({ data }) {
    let lineData = { labels: [], datasets: [{ data: [] }] };
    for (let i = 0; i < data.length; i++) {
        lineData.labels.push(data[i].date);
        lineData.datasets[0].data.push(data[i].weight);
    }

    return (
        <Line data={lineData} width={500} height={200} options={options} />
    );
}