import React from 'react'
import { 
  Form, 
  Icon, 
  Input, 
  Button, 
  Upload,
  DatePicker, 
  Select, 
  AutoComplete,
} from 'antd'
import _ from 'loadsh'
import Api from '@/services/api'
import './style.less'
const { TextArea } = Input
const { Option } = Select
const AutoCompleteOption = AutoComplete.Option

export default 
@Form.create()
class extends React.PureComponent {
  state = {
    autoCompleteResult: []
  }

  handleWebsiteChange = value => {
    let autoCompleteResult
    if (!value) {
      autoCompleteResult = []
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`)
    }
    this.setState({ autoCompleteResult })
  }

  normFile = e => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }

  handleSubmit = e => {
    e.preventDefault()
    const { getFormData } = this.props
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let { upload, datePicker, ...options } = values
        const imgurl = _.get(values, 'upload[0].response.result', '')
        const date = values['datePicker'].format('YYYY.MM.DD')
      
      
        getFormData({ ...options, imgurl, date })
       
      }
    })
  }

  render () {
    const { formAd } = this.props
    const { getFieldDecorator } = this.props.form
    const { autoCompleteResult } = this.state
    const formItemLayout = {
      labelCol: {
        sm: { span: 4 },
      },
      wrapperCol: {
        sm: { span: 20 },
      },
    }
    const tailFormItemLayout = {
      wrapperCol: {
        sm: {
          span: 16,
          offset: 8,
        },
      },
    }
    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ))
    return (
      <div className="comm_forms">
        <Form onSubmit={this.handleSubmit} { ...formItemLayout }>
       
         {
            !formAd && (<Form.Item label="标题">
              {
                getFieldDecorator('title')(
                <Input placeholder="标题" />
              )}
            </Form.Item>)
         }
         {
              !formAd &&  (<Form.Item label="描述信息">
            {
              getFieldDecorator('info')(
              <TextArea  rows={3} placeholder="描述信息"/>
            )}
            </Form.Item>)
         }
          <Form.Item label="上传图片" >
            {getFieldDecorator('upload', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <Upload 
                name="file" 
                action={Api.upload} 
                listType="picture"
                data={{type: 'upload'}}
              >
                <Button>
                  <Icon type="upload" /> Click to upload
                </Button>
              </Upload>,
            )}
          </Form.Item>
          <Form.Item label="内容">
            {
              getFieldDecorator('contents')(
              <TextArea rows={6}  placeholder="内容" />
            )}
          </Form.Item>
          <Form.Item label="日期">
            {getFieldDecorator('datePicker')(<DatePicker/>)}
          </Form.Item>
          <Form.Item label="图片类型">
            {getFieldDecorator('imgType')(
              <Select>
                <Option value="static">static</Option>
                <Option value="carousel">carousel</Option>
                <Option value="video">video</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label="COD">
            {getFieldDecorator('cod')(
              <Select>
                <Option value="Other">Other</Option>
                <Option value="Diet">Diet</Option>
                <Option value="Casino">Casino</Option>
                <Option value="&Crypto">&Crypto</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label="域名">
            {getFieldDecorator('website')(
              <AutoComplete
                dataSource={websiteOptions}
                onChange={this.handleWebsiteChange}
                placeholder="域名"
              >
                <Input />
              </AutoComplete>,
            )}
          </Form.Item>
          
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" className="login-form-button">
              添加
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}