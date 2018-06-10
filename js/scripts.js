/* global $ */

$(document).ready( () => {
    
    console.log("Ready!");
    
    var ctx = $('#mycanvas').get(0).getContext("2d");
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Energy", "Water", "Waste", "Space","Noise"],
            datasets: [{
                label: 'Points',
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(37, 145, 250, 0.2)'
                ],
                data: [30, 20, 55, 40, 60]
            }]
        },

    });
        
});