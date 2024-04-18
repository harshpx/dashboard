import React from 'react'
import { Chart } from 'chart.js/auto'
import {Bar, Doughnut, Line} from 'react-chartjs-2';

const CustomProgressBar = ({progress}) => {
    
    return <Bar data={{
        labels: ["AI Generated Score"],
        datasets:[{
            data: [progress],
            borderRadius: 15,
            borderSkipped: false,
            borderWidth: 1,
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54,162,600,0.4)',

        },]
    }} options={{
        indexAxis:'y',
        responsive:true,
        barThickness: 40,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                ticks: {
                    beginAtZero: true,
                    font: {size:15},
                }
            },
            x: {
                max: 100
            }
        }
    }}/>
}

export default CustomProgressBar;