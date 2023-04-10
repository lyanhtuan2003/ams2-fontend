import React, { useEffect, useState } from 'react';
import { Divider, Radio, Table, Button, Space, Input } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Icategory } from '../../interface/categorys'
import { Link } from 'react-router-dom';
import { Iproduct } from '../../interface/product';

const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: Icategory[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: Icategory) => ({
        disabled: record.name === 'Disabled User',
        name: record.name,
    }),
};

interface Iprops {
    category: Icategory[]
    onremove: Function
}
const ListCategory = (props: Iprops) => {
    const [data, setData] = useState<Icategory[]>([])
    const [checkinput, setCheckinput] = useState<string>("")
    const [inputcheck, setInputcheck] = useState<Icategory[]>([])
    useEffect(() => {
        setData(props.category)
    }, [props])
    const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');

    const columns: ColumnsType<Icategory> = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text: string) => <p>{text}</ p>,
        },
        {
            title: "Action",
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary" danger onClick={() => handelremove(record._id)}>
                        Xoá
                    </Button>
                    <Link to={`/admin/category/${record._id}/edit`}>
                        <Button type="primary"  >
                            cập nhật
                        </Button>
                    </Link>

                </Space>
            )
        }
    ];
    const handelremove = (id: string) => {
        if (confirm("bạn có muốn xoá hay không")) {
            props.onremove(id)
        }
    }

    //filter input
    const handeloncheng = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckinput(event.target.value)
    }

    const setinputs = () => {
        const result = data.filter((item) => item.name.toLocaleLowerCase().includes(checkinput.toLocaleLowerCase()))
        setInputcheck(result)
    }
    let calldatasearch = inputcheck.length > 0 ? inputcheck : data
    return (
        <div>
            <Radio.Group
                onChange={({ target: { value } }) => {
                    setSelectionType(value);
                }}
                value={selectionType}
            >
                <Radio value="checkbox">Checkbox</Radio>
                <Radio value="radio">radio</Radio>
            </Radio.Group>

            <Divider />
            <Space size="middle" style={{ width: 30 }}>
                <Link to={"/admin/category/add"}>
                    <Button type="primary"  >
                        thêm danh mục
                    </Button></Link>
            </Space>
            <Input style={{ width: 400, marginLeft: 600 }} placeholder="Basic usage" onChange={handeloncheng} /><Button type="primary" onClick={setinputs}>Search</Button>
            <br></br>
            <br></br>


            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={calldatasearch}
                pagination={{ pageSize: 3 }}
            />
        </div>
    );

}

export default ListCategory