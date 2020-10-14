import React, { Component } from 'react';
import Chart from 'chart.js';
import { getBudgetData } from '../GetBudgetData/GetBudgetData';

    class ChartJS extends Component{
        render(){
            return (
                    <div>
                       <canvas id="myChart" width="400" height="400"></canvas>
                       {getBudget()}
                    </div>
                  );
        }
    }

        var dataSource = {
                datasets: [
                    {
                        data: [],
                        backgroundColor: [
                            '#ffcd56',
                            '#ff6384',
                            '#36a2eb',
                            '#fd6b19',
                            '#8AE74D',
                            '#DB4DE7',
                            '#4DE7D9',
                            '#1E4029'
                        ]
                    }
                ],
                labels: []
            };

        function createChart() {
            var ctx = document.getElementById('myChart').getContext('2d');
            new Chart(ctx, {
                type: 'pie',
                data: dataSource
            });
        }

        function getBudget() {
            getBudgetData().then(function (res) {
                for (var i = 0; i < res.data.myBudget.length; i++) {
                    dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
                    dataSource.labels[i] = res.data.myBudget[i].title;
                }
                createChart();
            });
        }


export default ChartJS;
