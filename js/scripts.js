/* global $ */

$(document).ready( () => {
    
    console.log("Ready!");
    
    let data = {
              'id': '1001'
    };
    
    $.post('https://green-score-eagarcia.c9users.io/readUser', data, (s) => {
        console.log('final', s);
        
        var globalUser = s;
        
        var score = s.Item.gs.energy + s.Item.gs.water + s.Item.gs.waste + s.Item.gs.space;
        
        $('#greenscore').html(score);
        $('#username').html(s.Item.username);
        
        
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
                data: [globalUser.Item.gs.energy, globalUser.Item.gs.water, globalUser.Item.gs.waste, globalUser.Item.gs.space, globalUser.Item.gs.noise]
            }]
        },

    });
    });
    
        
});