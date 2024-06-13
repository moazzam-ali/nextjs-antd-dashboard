import React from 'react'
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import Title from 'antd/es/typography/Title';
import Link from 'next/link';

function RegisterForm() {
    const onFinish = (values) => {
        console.log("Received values of form: ", values);
      };
  return (
    <Form
    name="normal_login"
    className="login-form"
    initialValues={{
      remember: true,
    }}
    layout='vertical'
    onFinish={onFinish}
  >
    <Form.Item
        name="fullName"
        label="Full Name"
        rules={[{ required: true, message: 'Please input your full name!', whitespace: true }]}
      >
        <Input 
        prefix={<UserOutlined className="site-form-item-icon" />}
        size='large'
        />
      </Form.Item>
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
        type='email'
        size='large'
      />
    </Form.Item>
    <Form.Item
      name="password"
      label='Password'
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
    <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password size='large'  prefix={<LockOutlined className="site-form-item-icon" />}/>
      </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit" block className="login-form-button mt-5">
        Sign Up
      </Button>
      <p className='text-center pt-3'>Have an account? <Link href='/login'>Sign In</Link> </p>
    </Form.Item>
  </Form>
  )
}

export default RegisterForm