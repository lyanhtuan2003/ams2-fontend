import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { Icategory } from '../../interface/categorys';



const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

interface Iprops {
    category: Icategory[]
    onupdate: Function
}
const UpdateCategory = (props: Iprops) => {

    const { id } = useParams()
    const [data, setData] = useState<Icategory>()
    const [form] = Form.useForm()
    const navigate = useNavigate()
    useEffect(() => {
        const filtercate = props.category.find((item) => item._id == id)
        setData(filtercate)
    }, [props])

    useEffect(() => {
        if (data) {
            setfildes(data)
            console.log(data)
        }
    })
    const setfildes = (data: Icategory) => {
        console.log(data)
        form.setFieldsValue({
            _id: data._id,
            name: data.name
        })
    }
    const onFinish = (values: any) => {
        console.log('Success:', values);
        const newform = { ...data, ...values }
        props.onupdate(newform)
        navigate("/admin/category")
        alert("cập nhật danh mục thành công")
    };
    return (
        <Form
            form={form}
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
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Cập nhật
                </Button>
            </Form.Item>
        </Form>
    )
}

export default UpdateCategory