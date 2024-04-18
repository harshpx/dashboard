import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const CustomDoughnut = ({source,color,title}) => {
    return (
        <Doughnut data={{
            labels: Array.from(source.keys()),
            datasets: [{
                data: Array.from(source.values()),
                backgroundColor: [
                    "rgba(253, 135, 135, 0.8)",
                    "#0891b2",
                    "#1fa215",
                ],
                borderColor: [
                    "rgba(253, 135, 135, 0.8)",
                    "#0891b2",
                    "#1fa215",
                ],
            }]
        }} options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: `${title}`,
                    color: 'white',
                    font: {
                        size: 24,
                        weight: 'bold'
                    }
                },
                legend: {
                    // position: 'right',
                    labels: {
                        display: true,
                        padding: 20,
                        usePointStyle: true,
                        pointStyle: "rectRounded",
                        pointStyleWidth: 40,
                        color: 'white'
                    },
                },    
              },
        }}/>
    )
}

export default CustomDoughnut