import{Pie} from 'react-chartjs-2'
import {
    Chart as ChartJS, 
    Tooltip, 
    Legend,
    ArcElement,
} from 'chart.js';
import { pieChartData } from './Database';

ChartJS.register(
    Tooltip, 
    Legend,
    ArcElement
);

export const PieChart = () => {

    const options = {

        responsive : true,
        plugins: {
            legend: {
                position: "top" as "bottom",
            },
            title: {
                display: true,
                text: "Tecnologias mais utilizadas no projeto NEXUS (%)",
            }
  
        },
    };

    return <Pie options={options} data={pieChartData} />;
}