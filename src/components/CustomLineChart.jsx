import React from 'react';
import { Line } from 'react-chartjs-2';
import useWindowWidth from '../hooks/useWindowWidth.js'

const CustomLineChart = ({source,color,title,xlabel,ylabel}) => {
    const {isMobile} = useWindowWidth()
    return (
        <Line data={{
            labels: Array.from(source.keys()),
            datasets: [{
                data: Array.from(source.values()),
                borderColor: `${color}`,
                backgroundColor: `${color}`,
                borderWidth: isMobile ? 1 : 4,
            }]
        }} options={{
            responsive: true,
            maintainAspectRatio: false,
            elements: {
                line: {
                  tension: 0.5,
                },
            },  
            plugins: {
                legend: {
                    display: false,
                },
                title: {
                    display: true,
                    text: `${title}`,
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
                    ticks: {
                        color: 'white'
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
                        color:'white'
                    }

                }
            }

        }}/>
    )
}

export default CustomLineChart