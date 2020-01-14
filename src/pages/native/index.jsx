import React from 'react'
import { Select, DatePicker, Checkbox } from 'antd';
import moment from 'moment';
import './style.less'
import Waterfalls from '@@/Waterfalls'

function disabledDate(current) {
  console.log(moment().endOf('day'))
  return current && current > moment().endOf('day');
}
function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}
export default class extends React.PureComponent {
  state = {
    children: {},
    mode: 'time',
    clear: {},
    bool: false,
    start: [],
    end: []
  }
  handleChange = (e, s) => {
    this.state.clear[`${s}`] = e
    this.setState({
      bool: !this.state.bool
    })
  }
  handleOpenChange = open => {
    if (open) {
      this.setState({ mode: 'time' });
    }
  }
  handlePanelChange = (value, mode) => {
    this.setState({ mode });
  };
  onChange = (dates, dateStrings) => {
    this.setState({
      start: dateStrings,
      bool: this.state.bool
    })
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
  }
  onChanges = (dates, dateStrings) => {
    this.setState({
      end: dateStrings,
      bool: this.state.bool
    })
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
  }
  forin = (e) => {
    let info = ``
    for (let x in e) {
      console.log(e[x],'----',x)
        for(let i in e[x]){
          info += `
              <p class="nativename">
                ${x}:
                <span class="nativenameinfo">${e[x][i]}
                  <button class="error" onclick={this.error1()}>×</button>
                </span>
              </p>`
        }
    }
    return info
  }
  error1 = () => {
    console.log("点击")
  }
  clear = () => {
    this.setState({
      clear: {},
      bool: !this.state.bool,
      start: [],
      end: []
    })
  }
  render() {
    console.log(this.props)
    console.log(this.state)
    const { RangePicker } = DatePicker;
    const { Option } = Select;
    this.state.children = []
    for (let i = 10; i < 36; i++) {
      this.state.children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }
    const { start, end, clear } = this.state
    return (
      <div className="native">
        <div className="nativeHead">
          <div className="nativeHeadsear">
            <div className="nativeHeadlSearch">
              Premium Seatch:
            </div>
            <div className="nativeHeadlSearchs">
              <Select
                className="nativeselect position"
                mode="multiple"
                allowClear={true}
                placeholder="Search Position"
                defaultValue={[]}
                onChange={e => this.handleChange(e, 'Search Position')}
                maxTagCount={1}
              >
                {this.state.children}
              </Select>
              <Select
                className="nativeselect geo"
                mode="multiple"
                placeholder="Geo"
                defaultValue={[]}
                onChange={e => this.handleChange(e, 'Geo')}
                maxTagCount={1}
              >
                {this.state.children}
              </Select>
              <Select
                className="nativeselect language"
                mode="multiple"
                placeholder="Language"
                defaultValue={[]}
                onChange={e => this.handleChange(e, 'Language')}
                maxTagCount={1}
              >
                {this.state.children}
              </Select>
              <Select
                className="nativeselect device"
                mode="multiple"
                placeholder="Device Type"
                defaultValue={[]}
                onChange={e => this.handleChange(e, 'Device Type')}
                maxTagCount={1}
              >
                {this.state.children}
              </Select>
              <Select
                className="nativeselect ad"
                mode="multiple"
                placeholder="Ad"
                defaultValue={[]}
                onChange={e => this.handleChange(e, 'Ad')}
                maxTagCount={1}
              >
                {this.state.children}
              </Select>
              <RangePicker
                disabledDate={disabledDate}
                onChange={this.onChange}
                showTime={{
                  hideDisabledOptions: true,
                }}
                placeholder="111"
                format="YYYY-MM-DD"
              />
              <RangePicker
                disabledDate={disabledDate}
                onChange={this.onChanges}
                showTime={{
                  hideDisabledOptions: true,
                }}
                placeholder="111"
                format="YYYY-MM-DD"
              />
              <Select
                className="nativeselect height"
                mode="multiple"
                placeholder="Height"
                defaultValue={[]}
                onChange={e => this.handleChange(e, 'Height')}
                maxTagCount={1}
              >
                {this.state.children}
              </Select>
              <Select
                className="nativeselect width"
                mode="multiple"
                placeholder="Width"
                defaultValue={[]}
                onChange={e => this.handleChange(e, 'Width')}
                maxTagCount={1}
              >
                {this.state.children}
              </Select>
              <Select
                className="nativeselect affiliate"
                mode="multiple"
                placeholder="Affiliate Network"
                defaultValue={[]}
                onChange={e => this.handleChange(e, 'Affiliate Network')}
                maxTagCount={1}
              >
                {this.state.children}
              </Select>
              <Select
                className="nativeselect vertical"
                mode="multiple"
                placeholder="Vertical"
                defaultValue={[]}
                onChange={e => this.handleChange(e, 'Vertical')}
                maxTagCount={1}
              >
                {this.state.children}
              </Select>
              <Select
                className="nativeselect offer"
                mode="multiple"
                placeholder="Offer Name"
                defaultValue={[]}
                onChange={e => this.handleChange(e, 'Offer Name')}
                maxTagCount={1}
              >
                {this.state.children}
              </Select>
              <Checkbox onChange={onChange} >COD</Checkbox>
            </div>
          </div>
          <hr></hr>
          {
            clear['Search Position'] && clear['Search Position'].length > 0 || clear['Geo'] && clear['Geo'].length || clear['Language'] && clear['Language'].length > 0
              || clear['Device Type'] && clear['Device Type'].length > 0 || clear['Height'] && clear['Height'].length > 0 || clear['Width'] && clear['Width'].length > 0
              || clear['Affiliate Network'] && clear['Affiliate Network'].length > 0 || clear['Vertical'] && clear['Vertical'].length > 0
              || clear['Offer Name'] && clear['Offer Name'].length > 0 || clear['Ad'] && clear['Ad'].length > 0
              ?
              <div className="nativeSearched">

                <div className="nativeSearchedLeft">
                  Searched:
                </div>
                <div className="nativeSearchedRight">
                  <div dangerouslySetInnerHTML = {{__html:this.forin(clear)}} ></div>
                  <span className="clear" onClick={this.clear}>clear all</span>
                </div>
              </div> : null
          }
        </div>
        <Waterfalls className="waterfalls" />
      </div>
    )
  }
}