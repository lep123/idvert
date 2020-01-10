import React from 'react'
import { Select, DatePicker, Checkbox } from 'antd';
import moment from 'moment';
import './style.less'

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}
//asd
function disabledDate(current) {
  // Can not select days before today and today
  return current && current > moment().endOf('day');
}
function disabledRangeTime(_, type) {
  if (type === 'start') {
    return {
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56],
  };
}
function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}
export default class extends React.PureComponent {
  state = {
    children: {},
    mode: 'time',
    clear: [],
    bool:false
  }
  handleChange = (e, s) => {
    console.log(e)
    this.state.clear[`${s}`] = e
    this.setState({
      bool:!this.state.bool
    })
  }
  handleOpenChange = open => {
    if (open) {
      this.setState({ mode: 'time' });
    }
  };

  handlePanelChange = (value, mode) => {
    this.setState({ mode });
  };
  onChange = (dates, dateStrings) => {
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
  }
  render() {
    console.log(this.state.clear)
    const { RangePicker } = DatePicker;
    const { Option } = Select;
    this.state.children = []
    for (let i = 10; i < 36; i++) {
      this.state.children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }

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
                onChange={this.handleChange}
                disabledTime={disabledRangeTime}
                maxTagCount={1}
              >
                {this.state.children}
              </Select>
              <RangePicker
                disabledDate={disabledDate}
                disabledTime={disabledRangeTime}
                onChange={this.onChange}
                showTime={{
                  hideDisabledOptions: true,
                }}
                placeholder="111"
                format="YYYY-MM-DD"
              />
              <RangePicker
                disabledDate={disabledDate}
                disabledTime={disabledRangeTime}
                onChange={this.onChange}
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
            console.log(111)
          }
          {
            this.state.children.lenght > 0 ?
              <div className="nativeSearched">

                <div className="nativeSearchedLeft">
                  Searched:
              </div>
                <div className="nativeSearchedRight">
                  <span className="clear">clear all</span>
                </div>
              </div> : null
          }
        </div>
      </div>
    )
  }
}