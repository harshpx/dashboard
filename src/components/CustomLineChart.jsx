import React from 'react';
import { Line } from 'react-chartjs-2';

const CustomLineChart = ({source,color,title,xlabel,ylabel}) => {
    return (
        <Line data={{
            labels: Array.from(source.keys()),
            datasets: [{
                data: Array.from(source.values()),
                borderColor: `${color}`,
                backgroundColor: `${color}`,
            }]
        }} options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
                title: {
                    display: true,
                    text: `${title}`, // Set your chart title here
                    color: 'white',
                    font: {
                        size: 18,
                        weight: 'bold'
                    }
                },
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Interview Rounds',
                        color: 'white',
                        font: {
                            size: 14,
                            weight: ''
                        }
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: 'Candidate Count',
                        color: 'white',
                        font: {
                            size: 14,
                            weight: ''
                        }
                    },
                    ticks: {
                        stepSize: 1,
                    }

                }
            }

        }}/>
    )
}

export default CustomLineChart