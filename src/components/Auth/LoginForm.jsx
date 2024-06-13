import React from 'react'
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import Title from 'antd/es/typography/Title';
import Link from 'next/link';

function LoginForm() {
    const onFinish = (values) => {
        console.log("Received values of form: ", values);
      };
  return (
    <Form
    layout='vertical'
    name="normal_login"
    className="login-form"
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
  >
    <Form.Item
      name="email"
      label="Email"
      rules={[
        {
          required: true,
          message: "Please input your Email!",
        },
      ]}
    >
 
      <Input
        prefix={<MailOutlined className="site-form-item-icon" />}
        size='large'
      />
    </Form.Item>
    <Form.Item
      name="password"
      label="Password"
      rules={[
        {
          required: true,
          message: "Please input your Password!",
        },
      ]}
      hasFeedback
    >
       <Input.Password
        prefix={<LockOutlined className="site-form-item-icon" />}
        size='large'
      />
    </Form.Item>
    <Form.Item>
      <Form.Item name="remember" valuePropName="checked" noStyle>
        <Checkbox>Stay Sign in for week</Checkbox>
      </Form.Item>
    </Form.Item>

    <Form.Item className='pt-40'>
      <Button type="primary" htmlType="submit" block className="login-form-button">
        Sign in
      </Button>
      <p className='text-center pt-3'>Dont Have a account? <Link href='/register'>Sign Up</Link> </p>
    </Form.Item>
  </Form>
  )
}

export default LoginForm