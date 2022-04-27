import { Form, Input, Button } from 'antd';
import { addUsername } from '../redux/api';
import { useDispatch } from 'react-redux';


const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
};

const User = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onAddUser = async (value) => {
    addUsername(dispatch, value);
    form.resetFields();
  }
  return (
    <Form
      form={form}
      name="basic"
      className="w-auto"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 8 }}
      initialValues={{ remember: true }}
      onFinish={onAddUser}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      validateMessages={validateMessages}
    >
      <Form.Item
        label="Name"
        name="username"
        rules={[{ required: true, message: 'Please input your Name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email" label="Email" rules={[{ type: 'email' }, { required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Phone"
        name="phone"
        rules={[{ required: true, message: 'Please input your phone!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Add User
        </Button>
      </Form.Item>
    </Form>
  );
};

export default User