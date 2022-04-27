import React from 'react';
import { Link } from 'react-router-dom'
import {
  Form,
  Input,
  Button,
} from 'antd';
import { addUsername } from '../../redux/api'
import { useDispatch } from 'react-redux'

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
};

function Register() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const onRegister = async (value) => {
    addUsername(dispatch, value);
    form.resetFields();
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="form ">
      <Form
        form={form}
        name="register"
        onFinish={onRegister}
        onFinishFailed={onFinishFailed}
        validateMessages={validateMessages}

      >
        <h1 className='center font-size-36'> Register Form</h1>

        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        {/* <Form.Item
          name="agreement"
          valuePropName="checked"
          className='center'
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
            },
          ]}
        >
          <Checkbox>
            I have read the <a href="#">agreement</a>
          </Checkbox>
        </Form.Item> */}
        <Form.Item >
          <Button type="primary" htmlType="submit" className='w-100'  >
            Register
          </Button>
        </Form.Item>
        <div className='text-center'>
          Already have an account? <br></br>
          <Link to="/" > Login Here</Link>
        </div>
      </Form>
    </div>
  );
}

export default Register