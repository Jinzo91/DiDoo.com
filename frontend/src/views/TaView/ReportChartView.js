import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import Page from '../../components/Page';
import {SelectAttraction}  from '../../components/Ta/SelectAttraction';
import AttractionService from "../../services/AttractionService";
import TicketService from "../../services/TicketService";
import Background from '../../images/AdminBG.png';

export class ReportChartView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: [],

        };
    }

    componentWillMount()
    {
        this.setState({
            loading: true
        });

        AttractionService.getAttractions().then((data) => {
            this.setState({
                attractionData: [...data],
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });/*获得数据，从后端*/
    }

    checkSale = (fromdate, todate, ...attractionTitles) => {
        const scope = this;
        Promise.all(
            attractionTitles.map(title=>AttractionService.getAttractionidbytitle(title))
        ).then(attractions => {
            const attractionIds = attractions.map(attraction => attraction._id);
            Promise.all(
                attractionIds.map(attractionId => TicketService.checksale(fromdate, todate, attractionId))
            ).then(data => {
                scope.initChart(data, attractionTitles);
            })
        })
    }

    initChart(data, titles) {
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            title: { text: '' },
            tooltip: {},
            xAxis: {
                data: titles
            },
            yAxis: {},
            series: [{
                name: 'Sales Volume',
                type: 'bar',
                color: '#D78282',
                data: data
            }]
        });
    }

    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例

    }
    render() {
        return (
            <Page>
                <img src={Background} className="bg" />
                <SelectAttraction data={this.state.attractionData} onClick={this.checkSale} error={this.state.error}/>

                <div id="main" style={{ width: 1200, height: 500, maxWidth: '80%',  marginLeft: '175px' }}></div>
            </Page>
        );
    }
}
