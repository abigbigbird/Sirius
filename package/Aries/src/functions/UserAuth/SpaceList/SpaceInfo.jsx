import React from 'react'
import Task from 'public/Task'
import './index.less'
import Percentage from 'bfd-ui/lib/Percentage'

const SpaceInfo = React.createClass({
  render: function() {
    return (
        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="thumbnail function-service-div-border" style={{width:'100px'}}><a href="javascript:">cpu使用率</a></div>
            <div className="caption"><Percentage percent={30} style={{width: '150px'}}></Percentage></div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="thumbnail function-service-div-border" style={{width:'100px'}}><a href="javascript:">cpu使用率</a></div>
            <div className="caption"><Percentage percent={35} style={{width: '150px'}}></Percentage></div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="thumbnail function-service-div-border" style={{width:'100px'}}><a href="javascript:">cpu使用率</a></div>
            <div className="caption"><Percentage percent={40} style={{width: '150px'}}></Percentage></div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="thumbnail function-service-div-border" style={{width:'100px'}}><a href="javascript:">cpu使用率</a></div>
            <div className="caption"><Percentage percent={30} style={{width: '150px'}}></Percentage></div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="thumbnail function-service-div-border" style={{width:'100px'}}><a href="javascript:">cpu使用率</a></div>
            <div className="caption"><Percentage percent={50} style={{width: '150px'}}></Percentage></div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="thumbnail function-service-div-border" style={{width:'100px'}}><a href="javascript:">cpu使用率</a></div>
            <div className="caption"><Percentage percent={60} style={{width: '150px'}}></Percentage></div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="thumbnail function-service-div-border" style={{width:'100px'}}><a href="javascript:">cpu使用率</a></div>
            <div className="caption"><Percentage percent={70} style={{width: '150px'}}></Percentage></div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="thumbnail function-service-div-border" style={{width:'100px'}}><a href="javascript:">cpu使用率</a></div>
            <div className="caption"><Percentage percent={80} style={{width: '150px'}}></Percentage></div>
          </div>
        </div>
      );
    }
});
export default SpaceInfo
