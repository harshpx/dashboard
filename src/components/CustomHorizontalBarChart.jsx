import React from 'react'
import { Bar } from 'react-chartjs-2'

const CustomHorizontalBarChart = ({source,color,title,xlabel,ylabel}) => {
    return (
        <Bar data={{
            labels: Array.from(source.keys()),
            datasets: [{
                data: Array.from(source.values()),
                borderRadius: 15,
                backgroundColor: `${color}`,
            }]
        }} options={{
            indexAxis:'y',
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
                        size: 24,
                        weight: 'bold'
                    }
                },
            },
            scales: {
                x: {
                    max: 100,
                    title: {
                        display: true,
                        text: `${xlabel}`,
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
                        text: `${ylabel}`,
                        color: 'white',
                        font: {
                            size: 14,
                            weight: ''
                        }
                    },
                }
            }
        }}/>
    )
}

export default CustomHorizontalBarChart