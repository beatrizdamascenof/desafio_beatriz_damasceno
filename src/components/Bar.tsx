import{Bar} from 'react-chartjs-2'
import {
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale,  
    BarElement,
    Title,
    Tooltip, 
    Legend,
} from 'chart.js';
import { barChartData } from './Database';

ChartJS.register(
    CategoryScale, 
    LinearScale, 
    BarElement,
    Title,
    Tooltip, 
    Legend
);



export const BarChart = () => {
    const options = {

        responsive : true,
        plugins: {
            legend: {
                position: "top" as 'bottom',
            },
            title: {
                display: true,
                text: "Gastos do projeto NEXUS no ano de 2024",
            } 
            
        },
    };
    return <Bar options={options} data={barChartData} />;

}