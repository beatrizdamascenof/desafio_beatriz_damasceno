import{Line} from 'react-chartjs-2'
import {
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement,
    Title,
    Tooltip, 
    Legend,
} from 'chart.js';
import { lineChartData } from './Database';

ChartJS.register(
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement,
    Title,
    Tooltip, 
    Legend
);


export const LineGraph = () => {

    const options = {

        responsive : true,
        plugins: {
            legend: {
                position: "top" as 'bottom',
            },
            title: {
                display: true,
                text: "Gráfico de Linhas indicando número de bolsistas no projeto NEXUS em 2024",
            } 
            
        },
    };

    return <Line options={options} data={lineChartData} />;
}