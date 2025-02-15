import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';
const UserTable = () => {

    const [dataUsers, setDataUsers] = useState([
        { _id: "abc", fullName: "John", email: "123@gamil.com" },
        { _id: "abcbbb", fullName: "John", email: "123@gamil.com" },
    ])

    //empty array = run once
    useEffect(() => {
        console.log('>>>>run useEffect')
        loadUser();
    }, []);

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
    ];

    const loadUser = async () => {
        const res = await fetchAllUserAPI()
        setDataUsers(res.data)
    }

    console.log('>>>>run render')
    return (
        <Table columns={columns}
            dataSource={dataUsers}
            rowKey={"_id"}
        />
    )
}

export default UserTable;