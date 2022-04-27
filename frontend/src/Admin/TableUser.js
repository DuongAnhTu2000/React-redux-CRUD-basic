import { Table  } from 'antd';
import {
} from '@ant-design/icons';

const UserList = ({columns, data}) => {
  

  return (

    <Table columns={columns} dataSource={data} style={{ margin: 70 }} />
  )
}
export default UserList