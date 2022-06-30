import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import {
    SortingState,
    FilteringState,
    IntegratedFiltering,
    IntegratedSorting,
} from '@devexpress/dx-react-grid';
import {
    Grid,
    Table,
    TableHeaderRow,
    TableFilterRow,
    TableColumnResizing
} from '@devexpress/dx-react-grid-material-ui';
import './css/style.css'

export const SuggestSheet = function (props) {
    const info = props.info;
    let suggestions = props.suggestions;
    console.log(suggestions)
    suggestions = suggestions.map((suggestion) => {
        let result = {};
        result.schoolName = suggestion.schoolName;
        if (suggestion.is985) {
            result.quality = '985';
        } else if (suggestion.is211) {
            result.quality = '211';
        } else {
            if (suggestion.isPrivate) {
                result.quality = '私立大学'
            }
            result.quality = '无'
        }
        result.submitRank = '';
        for (const minRank of suggestion.submit.minRank) {
            if (minRank) {
                result.submitRank += `${minRank}，`
            } else {
                result.submitRank += `-，`
            }
        }
        if (suggestion.admissionProbability) {
            result.pr = String(suggestion.admissionProbability).slice(0, 7)
        } else {
            result.pr = '-'
        }
        result.overallRating = parseInt(suggestion.overallRating)
        return result
    })
    //整理来自服务器的数据

    const [columns] = useState([
        {name: 'schoolName', title: '学校名称'},
        {name: 'quality', title: '学校标签'},
        {name: 'overallRating', title: '评分'},
        {name: 'pr', title: '录取概率'},
        {name: 'submitRank', title: '近5年录取位次'},
    ]);
    const [columnWidth] = useState([
        {columnName: 'schoolName', width: 160},
        {columnName: 'quality', width: 100},
        {columnName: 'overallRating', width: 80},
        {columnName: 'submitRank', width: 240},
        {columnName: 'pr', width: 120}
    ])
    //表头
    const [rows] = useState(suggestions);

    return (
        <>
            <div style={{height: '3vh'}}></div>
            <div className='title-container'>
                <h2 id="title">高考志愿辅助填报系统</h2>
            </div>
            <div style={{height: '3vh'}}></div>
            <p className='hello'>{info.studentName}同学，你好。你的高考分数是{info.studentScore}，位次是{info.studentRank}。系统为你推荐了以下学校：</p>
            <p className='annotate'>对于录取概率小于0.6的学校，您可以采用“冲”的策略；对于录取概率大于0.8的学校，您可以采用“保”的策略；对于录取概率介于两者之间的学校，您可采用“稳”的策略</p>
            <p className="annotate">请注意志愿梯度，尽量避免填多所录取概率极其相近、且小于0.8的学校</p>
            <p className='annotate'>默认的排序方式是武书连排行榜，你可以点击表头来更改排序方式</p>
            <p className="annotate">表格支持筛选、调整列宽</p>
            <div className="sheetContainer">
                <div className="sheet ">
                    <Paper>
                        <Grid
                            rows={rows}
                            columns={columns}
                        >
                            <SortingState
                                defaultSorting={[{columnName: 'overallRating', direction: 'desc'}]}
                            />
                            <IntegratedSorting/>
                            <FilteringState defaultFilters={[]}/>
                            <IntegratedFiltering/>
                            <Table/>
                            <TableColumnResizing
                                defaultColumnWidths={columnWidth}
                            />
                            <TableHeaderRow showSortingControls/>
                            <TableFilterRow/>
                        </Grid>
                    </Paper>
                </div>
            </div>
            <p className='annotate'>数据可能有缺失。结果仅供参考。用户的决策失误导致的一切事故与开发者无关。</p>
            <p className='annotate'> 使用算法来自论文：《基于多特征权重模糊聚类的高考志愿推荐算法》（余奎锋、段桂华、时翔 著）</p>
            <div style={{height: '8vh'}}></div>
        </>
    );
}
