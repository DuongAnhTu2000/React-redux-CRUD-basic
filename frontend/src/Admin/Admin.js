import "../App.css";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUsername, updateUsername, getUsername } from "../redux/api";
import { Button, Input, Form, Layout, Avatar, Space, Modal } from 'antd';
import { UserOutlined, EditOutlined, DeleteOutlined, } from '@ant-design/icons';
import { persistor } from "../redux/store";
import UserList from "./TableUser";
import User from "./User";

const { Header, Footer, Content } = Layout;


function Admin() {
  const [edit, setEdit] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const userList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    getUsername(dispatch);
  }, [dispatch])

  const handleLogout = () => {
    persistor.purge();
    navigate('/');
  }

  const handleEdit = async (record) => {
    setEdit(true)
    setEditUser({ ...record });

  }
  const resetEditing = () => {
    setEdit(false);
    setEditUser(null);
  };
  const handleDelete = async (record) => {
    console.log('record', record)
    deleteUsername(dispatch, record._id)
  }


  const columns = [
    {
      title: 'Name',
      dataIndex: 'username',
      key: '1',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: '2',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: '3',
    },
    {
      title: 'Action',
      key: '4',
      render: (record) => (
        <Space size="middle">
          <EditOutlined
            onClick={() => handleEdit(record)}
          />
          <DeleteOutlined
            onClick={() => handleDelete(record)}
            style={{ marginLeft: 24 }}
          />
        </Space>
      ),
    },
  ];

  return (
    <Layout>
      <Header
        id="header-admin">
        <div className="User-form">
          <Avatar icon={<UserOutlined />} style={{cursor: 'pointer' }} />
          <Button onClick={handleLogout}>Log Out</Button>

        </div>
      </Header>
      <Content
        className="content-admin"
      >
        <UserList columns={columns} data={userList} />
        <User />

        <Modal title="Edit User"
          visible={edit}
          className="modal"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onOk={() => {
            updateUsername(dispatch, editUser)
            resetEditing();
          }}
          onCancel={() => {
            resetEditing();
          }}
        >
          <Form>
            <Form.Item
              label="Name"
            >
              <Input value={editUser?.username}
                onChange={(e) => {
                  setEditUser((preState) => {
                    return {
                      ...preState,
                      username: e.target.value
                    };
                  });
                }} />
            </Form.Item>
            <Form.Item
              label="Email"
            >
              <Input
                value={editUser?.email}
                onChange={(e) => {
                  setEditUser((preState) => {
                    return {
                      ...preState,
                      email: e.target.value
                    };
                  });
                }}
              />
            </Form.Item>

            <Form.Item
              label="Phone"                >
              <Input value={editUser?.phone}
                onChange={(e) => {
                  setEditUser((preState) => {
                    return {
                      ...preState,
                      phone: e.target.value
                    };
                  });
                }} />
            </Form.Item>


          </Form>
        </Modal>
      </Content>
      <Footer>

      </Footer>
    </Layout>
    //   <Form className="formUser">
    //     {userList.map((user, index) => (
    //       <div key={index}>
    //         <h3> {user.name}</h3>
    //         <h3> {user.phone}</h3>
    //         <h3> {user.email}</h3>
    //         <Input
    //           type="text"
    //           placeholder="New Name..."
    //           onChange={e => {
    //             setNewName(e.target.value);
    //           }}
    //         />
    //         <Input
    //           type="text"
    //           placeholder="New Phone..."
    //           onChange={e => {
    //             setNewPhone(e.target.value);
    //           }}
    //         />
    //         <Input
    //           type="text"
    //           placeholder="New Email..."
    //           onChange={e => {
    //             setNewEmail(e.target.value);
    //           }}
    //         />
    //         <div className="btn-form">
    //           <Button
    //             onClick={() => {
    //               dispatch(updateUser({
    //                 id: user.id,
    //                 name: newName,
    //                 phone: newPhone,
    //                 email: newEmail,
    //               }));
    //             }}
    //           >
    //             {" "}
    //             Update Username
    //           </Button>
    //           <Button
    //             onClick={() => {
    //               dispatch(deleteUser({ id: user.id }))
    //               console.log(user.id)
    //             }
    //             }
    //           >
    //             Delete User
    //           </Button>
    //         </div>
    //       </div>
    //     ))}
    //   </Form>
    // </div>
  );
}

export default Admin
