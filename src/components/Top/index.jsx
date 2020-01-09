import React from 'react'
import './index.less'
import { DatePicker } from 'antd';
import { Select } from 'antd';

const { Option } = Select;

export default class extends React.PureComponent {
    constructor(props){
        super(props)
        this.state = {
            radio: false
        }
    }
    //单选按钮
    onRadio = () => {
        this.setState({
            radio:!this.state.radio
        })
    }
  render () {
    function onFirstDate(date, dateString) {
      console.log(date, dateString);
    }
    function onLastDate(date, dateString) {
      console.log(date, dateString);
    }
    //下拉
    function onChange(value) {
      console.log(`selected ${value}`);
    }
    return (
          <div className="header">
              <li className="li_one">
                  <span>Serch Position:</span>
                  <p>
                    Page Name AD URL AD Text Money Page Text
                  </p>
              </li>
              <li className="li_two">
                  <span>Ads Fomat:</span>
                  <p>
                     <span>Image Video Carousel</span>
                  </p>
                  <span className="two_span">Device:</span>
                  <p>
                     <span>Desktop Android IOS</span>
                  </p>
              </li>
              <li className="li_three">
                  <span>First Seen Date:</span>
                  <p>
                      <DatePicker onChange={onFirstDate} className="times"/>
                  </p>
                  <span className="two_span">Last Seen Date:</span>
                  <p>
                      <DatePicker onChange={onLastDate} className="times"/>
                  </p>
              </li>
              <li className="li_four">
                  <span>First Seen Date:</span>
                  <p>
                  <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a person"
                    onChange={onChange}
                    className="sel"
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                  </Select>
                  <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a person"
                    onChange={onChange}
                    className="sel"
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                  </Select>
                  <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a person"
                    onChange={onChange}
                    className="sel"
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                  </Select>
                  <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a person"
                    onChange={onChange}
                    className="sel"
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                  </Select>
                  <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a person"
                    onChange={onChange}
                    className="sel"
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                  </Select><br/>
                  <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a person"
                    onChange={onChange}
                    className="sel"
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                  </Select>
                    <input type="radio" checked={this.state.radio} className="sel" onClick={this.onRadio}/>COD
                  </p>
              </li>
              
          </div>
    )
  }
}