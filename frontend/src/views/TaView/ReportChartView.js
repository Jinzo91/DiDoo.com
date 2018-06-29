import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import Page from '../../components/Page'

export class ReportChartView extends Component {
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            title: { text: '' },
            tooltip: {},
            xAxis: {
                data: ["2018.01", "2018.02", "2018.03", "2018.04", "2018.05", "2018.06"]
            },
            yAxis: {},
            series: [{
                name: 'Sales Volume',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }
    render() {
        return (
            <Page>
                <div id="main" style={{ width: 1200, height: 500, maxWidth: '80%', marginTop:'5%', marginLeft: '200px' }}></div>
            </Page>
        );
    }
}
