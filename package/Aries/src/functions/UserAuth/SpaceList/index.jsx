import React from 'react'
import Task from 'public/Task'
import './index.less'
import { Tabs, TabList, Tab, TabPanel } from 'bfd-ui/lib/Tabs'
import Fetch from 'bfd-ui/lib/Fetch'
import SpaceInfo from './SpaceInfo'
import SpaceManager from './SpaceManager'
import { Select ,Option} from 'bfd-ui/lib/Select2'
import auth from 'public/auth'

export default React.createClass({
  getInitialState: function() {
    return {
      cur_space:0,
      url:"",
      is_admin:0,
      defaultValue:"0"
    };
  },
  refreshTable(){
    let url_end = Date.parse(new Date());
    let url_old = this.state.url;
    let url_start = url_old.split("?")[0];
    let url_new = `${url_start}?date=${url_end}`;
    console.log(`url_new:${url_new}`)
    this.setState({url:url_new});
  },
  getSpaceInfo(data){
    let is_admin = data.is_admin;
    console.log("is_admin:"+is_admin);
    this.setState({is_admin:is_admin});
  },
  initCurSpace(data){
    let cur_space = data.space_id;
    let url = `v1/user_auth/spaces/member/${cur_space}/`;
    this.setState({cur_space:cur_space,url:url});
  },
  render() {
    let spaceInfoUrl=`v1/user_auth/spaces/info/${this.state.cur_space}/`;
    let filter = this.props.location.query.cur_space;
    if(filter==undefined){
      filter = auth.user.cur_space;
    }
    return (
       <div>
        <Tabs>
          <TabList>
            <Tab>成员管理</Tab>
          </TabList>
          <TabPanel>
          <Fetch style={{minHeight:100}} url={spaceInfoUrl} onSuccess={this.getSpaceInfo}>
            <SpaceManager url={this.state.url} refreshTable={this.refreshTable} cur_space={this.state.cur_space} is_admin={this.state.is_admin} />
          </Fetch>
          </TabPanel>
        </Tabs>
        <Fetch style={{minHeight:0}} url={`v1/user_auth/spaces/?filter=${filter}`} onSuccess={this.initCurSpace}>
        </Fetch>
        </div>
    )
  }
})
