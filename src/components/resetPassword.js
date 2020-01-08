import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {
  Form,
  Input,
  Icon,
  Button,
  message
} from 'antd'
import '../less/index.less'
import logo from '../images/PureRetail_Logo.png'

const URL = 'https://shopping-cart-eu3.herokuapp.com/api/auth/recover'
const ResetPassword = (props) => {
  const handleSubmit = e => {
    e.preventDefault()
    props.form.validateFieldsAndScroll((err, values) => {
      const payload = {
        phone: values.number
      }
      console.log(payload)
      if (!err) {
        axios.post(URL, payload)
          .then(res => {
            message.success('Your password reset is on its way!')
            props.history.push('/login')
          })
          .catch(error => {
            message.error(error.message)
          })
      } else {
        message.error('Please enter a valid phone number to proceed.')
      }
    })
  }
  const { getFieldDecorator } = props.form
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 }
    }
  }
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0
      },
      sm: {
        span: 16,
        offset: 8
      }
    }
  }
  return (
    <div className='cover'>
      <div id='logo'>
        <img src={logo} alt='PureRetail Logo' />
      </div>
      <Form {...formItemLayout} onSubmit={handleSubmit}>
        <div id='header'>
          <h2>Reset Password</h2>
        </div>
        <div id='instruction-text'>
          <p>Enter your registered phone number to receive a password reset link via SMS:</p>
        </div>
        <Form.Item>
          {getFieldDecorator('number', {
            rules: [
              {
                message: 'Enter a valid phone number'
              },
              {
                required: true,
                message: 'Enter a valid phone number'
              }
            ]
          })(<Input
            placeholder='Phone number'
            prefix={<Icon type='phone' style={{ color: 'rgba(0,0,0,.25)' }} />}
          />)}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type='primary' htmlType='submit'>
              Get link
          </Button>
        </Form.Item>
      </Form>
      <div id='back-to-login'>
        <Link to='/'>Back to login</Link>
      </div>
      <div id='contact-support'>
        <Link to='/support'>Contact support</Link>
      </div>
    </div>
  )
}
const ResetPasswordForm = Form.create({ name: 'resetPassword' })(ResetPassword)

export default ResetPasswordForm
