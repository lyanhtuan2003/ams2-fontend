import React, { useEffect, useState } from 'react';
import { Button, Table, Space, Select, Input } from 'antd';
import type { ColumnType, ColumnGroupType } from 'antd/es/table';
import { Iproduct } from '../../interface/product';
import { Link } from 'react-router-dom';
import { Icategory } from '../../interface/categorys';

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
}

interface Iprops {
    products: Iproduct[]
    onremove: Function
    category: Icategory[]
}


const { Option } = Select
const Listproduct = (props: Iprops) => {

    const columns: (ColumnGroupType<Iproduct> | ColumnType<Iproduct>)[] = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'image',
            dataIndex: 'image',
            render: (_, record) => <img src={record.image} alt="" style={{ maxWidth: 100 }} />,
        },
        {
            title: 'price',
            dataIndex: 'price'

        },
        {
            title: 'description',
            dataIndex: 'description',
        },
        {
            title: 'Action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary" danger onClick={() => handeldelete(record._id)}>
                        Xoá
                    </Button>
                    <Link to={`/admin/product/${record._id}/edit`}>
                        <Button type="primary"  >
                            cập nhật
                        </Button>
                    </Link>
                </Space>
            ),
        }
    ];

    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<Iproduct[]>([])
    const [categorys, setCategorys] = useState<Icategory[]>([])
    const [search, setSearch] = useState<string>("")
    const [checkinputs, setCheckinput] = useState<Iproduct[]>([])
    useEffect(() => {
        setCategorys(props.category)
    }, [props])
    useEffect(() => {
        setData(props.products)
    }, [props])

    const start = () => {
        setLoading(true);
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const onChangecategory = (value: string) => {
        const product = props.products
        let result = product.filter((item) => item.categoryId === value)
        console.log(result)
        setData(result)
    };

    const onSearch = (value: string) => {
        console.log('search:', value);
    };
    const hasSelected = selectedRowKeys.length > 0;
    const handeldelete = (id: string) => {
        if (confirm("bạn có muốn xoá hay không")) {
            props.onremove(id)
        }
    }

    const handelsearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }
    const handelgetinput = () => {
        const result = data.filter((item) => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        setCheckinput(result)
    }

    let newdata = checkinputs.length > 0 ? checkinputs : data
    return (
        <div>
            <div style={{ marginBottom: 16 }}>
                <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
                    Reload
                </Button>
                <span style={{ marginLeft: 8 }}>
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                </span>
            </div>
            <Space size="middle">
                <Link to={"/admin/product/add"}>
                    <Button type="primary">
                        thêm sản phẩm
                    </Button></Link>
            </Space>
            <Select
                showSearch
                style={{ width: 160, marginLeft: 1000 }}
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChangecategory}
                onSearch={onSearch}
            >
                {categorys.map((item) => (
                    <Option key={item._id} value={item._id}>
                        {item.name}
                    </Option>
                ))}

            </Select>
            <div style={{ marginLeft: 300, marginTop: -35 }}> <Input style={{ width: 400 }} onChange={handelsearch} placeholder="Basic usage" /><Button type="primary" onClick={handelgetinput}>Search</Button></div>

            <br></br>
            <br></br>
            <Table rowSelection={rowSelection} style={{ marginTop: 10 }} columns={columns} dataSource={newdata} pagination={{ pageSize: 3 }} />
        </div>
    );
}

export default Listproduct