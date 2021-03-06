import React from 'react'
import ReactDOM from 'react-dom'
import DataTable from 'bfd-ui/lib/DataTable'
import './Liebiao.less'

import CMDR from '../CalcManageDataRequester/requester.js'
import './index.less'

const TabLiebiao = React.createClass({
	getInitialState: function () {
    setTimeout( () => { CMDR.getMytaskList( this,this.xhrCallback ) }, 0);

    let state_dict = {
      // 表格信息
      column: [{ title:'任务名称',  key:'task',         order:true }, 
               { title:'类型',      key:'category',     order:true }, 
               { title:'准备时间',  key:'ready_time',   order:true }, 
               { title:'开始时间',  key:'running_time', order:true },
               { title:'完成时间',  key:'leave_time',   order:true },
               { title:'执行状态',  key:'status',       order:true },
               { title:'执行结果',  key:'result',       order:true }],
      showPage:'false',
      data:{"totalList": [],"totalPageNum":0},

    }
    return state_dict
  },

  xhrCallback:(_this,executedData) => {
    _this.setState ( { 
      'data': {
        "totalList": executedData,
        "totalPageNum":executedData.length
      }
    })
  },  

  componentDidMount:function(){
    this.resizeThWidth()
  },

  componentDidUpdate:function(){
    this.resizeTdWidth()
  },

  resizeThWidth:function(){
    let dataTableNode = ReactDOM.findDOMNode( this.refs.DataTable )
    let thead = dataTableNode.childNodes[1].childNodes[0]
    let tr = thead.childNodes[0]
    for( let j = 0 ; j < tr.childNodes.length ; j ++ ){
      tr.childNodes[j].className += ' width_' + j
    }
  },

  resizeTdWidth:function(){
    let dataTableNode = ReactDOM.findDOMNode( this.refs.DataTable )
    let tbody = dataTableNode.childNodes[1].childNodes[1]
    for ( let i = 0 ; i < tbody.childNodes.length ; i ++ ){
      let tr = tbody.childNodes[i]

      if (tr.childNodes.length !== this.state.column.length)
        break

      for( let j = 0 ; j < tr.childNodes.length ; j ++ ){
        tr.childNodes[j].className = 'width_' + j
      }
    }
  },

  /**(loadData:function(){
    function GetRandomNum(Min,Max)
    {   
      var Range = Max - Min;   
      var Rand = Math.random();   
      return(Min + Math.round(Rand * Range));   
    }   
    let t1 = this.state.data
    for (let i = 0 ; i < 10 ; i ++){
      t1['totalList'].push({
        name:'job' + i,
        type:i % 2 == 0 ? '自动' : '手动',
        pretime:'2016-07-04 17:25:00',
        starttime:'2016-07-04 17:25:00',
        finishtime:'None',
        state:i % 2 == 0 ? 'ture' : 'false',
        result:i %2 == 0 ? '成功 过程' : '失败 过程' ,
      })
    }
    t1['totalPageNum'] = t1['totalList'].length
    this.setState({ data:t1 })
  },**/

  render: function() {
    if ( this.height !== this.props.height ){
      setTimeout( ()=>{
        let tablePanel = ReactDOM.findDOMNode( this.refs.DataTableDiv )
        tablePanel.style.height = this.props.height - 20 + 'px'
      } )
      this.height = this.props.height
    }
    return  (
      <div className="LiebiaoRootDiv">
        <div className='DataTableDiv' ref='DataTableDiv'>
          <DataTable ref="DataTable" data={this.state.data} showPage={this.state.showPage} 
            column= { this.state.column } ></DataTable>
          </div>
      </div>
    )
  }
});
export default TabLiebiao