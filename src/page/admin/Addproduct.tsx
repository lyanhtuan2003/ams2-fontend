import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input, Select, message, Upload } from 'antd';
import { useNavigate } from 'react-router-dom';
import FormItem from 'antd/es/form/FormItem';
import { Icategory } from '../../interface/categorys';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;
const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};
interface Iprops {
    category: Icategory[]
    onadd: Function
}

const Addproduct = (props: Iprops) => {
    const [data, setData] = useState<Icategory[]>([])
    const [category, setCategory] = useState<string>("")
    const navigate = useNavigate()
    useEffect(() => {
        setData(props.category)
    }, [props])
    const onFinish = (values: any) => {
        console.log('Success:', values);
        props.onadd({ ...values, "categoryId": category })
        navigate('/admin/product')
        alert("thêm sản phẩm thành công")
    };
    const onChange = (value: string) => {
        console.log(`selected ${value}`);
        setCategory(value)
    };

    const onSearch = (value: string) => {
        console.log('search:', value);

    };
    return (
        <div >
            <h1>Thêm Sản Phẩm</h1>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="image"
                    name="image"
                    rules={[{ required: true, message: 'Please input your image!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="price"
                    name="price"
                    rules={[{ required: true, message: 'Please input your price!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="description"
                    name="description"
                    rules={[{ required: true, message: 'Please input your description!' }]}
                >
                    <Input />
                </Form.Item>

                <FormItem>
                    <Select
                        showSearch
                        style={{ width: 160, marginLeft: 200 }}
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                    >
                        {data.map((item) => (
                            <Option key={item._id} value={item._id}>
                                {item.name}
                            </Option>
                        ))}
                    </Select>

                </FormItem>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        thêm sản phẩm
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Addproduct