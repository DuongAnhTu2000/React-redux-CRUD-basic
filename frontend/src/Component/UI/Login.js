import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link,useNavigate } from 'react-router-dom'
import { login } from '../../redux/api'
import { useDispatch } from "react-redux";
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
};

function Login() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const navigate = useNavigate();
  const onLogin = async (value) => {
    login(dispatch, value);
    form.resetFields();
  }

  const handleClick = () => {
    navigate('/admin')
  }
  return (
    <div className="form mt-200">
      <Form
        name="normal_login"
        form={form}
        initialValues={{
          remember: true,
        }}
        onFinish={onLogin}
        onFinishFailed={onFinishFailed}
        validateMessages={validateMessages}
      >
        <h1 className='center font-size-36'>Classic Form Login</h1>

        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            autoComplete='on'
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Link className="float-right" to="/reset-password">
            Forgot password
          </Link>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-100" onClick={handleClick}>
            Log in
          </Button>
          <div className='text-center'>
            Don't have an account? <br></br>
            <Link to="/register" > Register now</Link> <br></br>
          </div>

        </Form.Item>
      </Form>
    </div>
  );
}
export default Login