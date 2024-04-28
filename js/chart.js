function firstchart(){
const xValues = ["Monday","Tuesday","Wednesday","Thursday","Friday"];

new Chart("chart-1", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [860,1140,1060,1060,1070],
      borderColor: "#ff6361",
      fill: false
    }, { 
      data: [1600,1700,1700,1900,2000],
      borderColor: "#ffa600",
      fill: false
    }, { 
      data: [300,700,2000,5000,6000],
      borderColor: "#003f5c",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});
}

function secondchart(){
  var xValues = ["Students", "Teachers", "Admins"];
  var yValues = [65, 30, 5];
  var barColors = [
    "#58508d",
    "#ffa600",
    "#ff6361",
  ];
  
  new Chart("chart-2", {
    type: "doughnut",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      // title: {
      //   display: true,
      //   text: "World Wide Wine Production 2018"
      // }
    }
  });
  }

function thirdchart(){
  var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["#003f5c", "#58508d","#bc5090","#ff6361","#ffa600"];

new Chart("chart-3", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    // title: {
    //   display: true,
    //   text: "World Wine Production 2018"
    // }
  }
});
}  

function fourthchart(){
  const xValues = [50,60,70,80,90,100,110,120,130,140,150];
  const yValues = [7,8,8,9,9,9,10,11,14,14,15];
  
  new Chart("chart-4", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor:"rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: yValues
      }]
    },
    options:{
      // title: {
      //   display: true,
      //   text: "World Wine Production 2018"
      // }
    }
  });
}  

function fifthchart(){
var chartData = {
         labels: ['Ocak', 'Şubat','Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
         datasets: [{
            label: "Yatırımlar",
            backgroundColor: "#1355FF",
            borderWidth: 0,
            borderRadius: 5,
            data: [20423,40123,60313,80412,40414,1932,40131,10124,30578,50421,60124,14512]
            }, {
            label: "Çekimler",
            backgroundColor: "#57D3DD",
            borderRadius: 5,
            borderWidth: 0,
            data: [60732,30125,20712,50252,30689,50234,20464,30123,10245,15123,40126,60126]
            },
         
            ]
        };
         
        let value = 80000;
        var ctx = document.getElementById('chart-5');
        var myBarChart = new Chart(ctx, {
             
            type: "bar",
            data: chartData,
            drawBorder:false,
            options: {
                responsive:true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        title: {
                            display: false
                        },
                        grid: {
                            display:false
                        },
                        ticks: {
                            color: "#718096"
                        }
                    },
                    y: {
                        title: {
                            display: false
                        },
                        min: 0,
                        max: 80000,
                        ticks: {
                            stepSize: 20000,
                            color: "#718096",
                            callback: function(value, index, values) {
                                return value * 0.001 + " K";
                            }
                        },
                        grid: {
                            color: '#EDF2F7'
                        }
                    }
                },
                plugins: {
                    legend: {
                        position:"top",
                        labels: {
                            font: {
                                size: 12,
                                weight: 500
                            },
                            color: "#2D3748",
                            boxWidth: 8,
                            boxHeight:8,
                            usePointStyle: true,
                            pointStyle: "circle"
                        }
                    }
                }
            }
        });
}  