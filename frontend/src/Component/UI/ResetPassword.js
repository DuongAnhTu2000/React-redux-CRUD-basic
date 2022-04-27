import { Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { forgotPassword } from "../../redux/api";

function ResetPassword() {
  const [form] = Form.useForm();
  const onReset = (values) => {
    forgotPassword(values);
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="form mt-200 ">
    <Form
      form={form}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onReset}
      onFinishFailed={onFinishFailed}
    >
      <h1 className='center font-size-36 '>Password Reset</h1>
      <h2 className='center '>We'll send you an email a link to reset your password.</h2>
      <b>Email address or username</b>
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} />
      </Form.Item>
      <Button type="primary" htmlType="submit" className="w-100">
        SEND
      </Button>
    </Form>
    </div>
  )
}

export default ResetPassword










