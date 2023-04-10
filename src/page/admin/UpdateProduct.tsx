import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { Iproduct } from '../../interface/product';
import { useNavigate, useParams } from 'react-router-dom';



const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};
interface Iprops {
    products: Iproduct[],
    onupdate: Function
}
const UpdateProduct = (props: Iprops) => {
    const [data, setData] = useState<Iproduct>()
    const { id } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        const setuplaod = props.products.find((item: Iproduct) => item._id == id)
        setData(setuplaod)
        console.log(data)
    }, [props])
    useEffect(() => {
        if (data) {
            setfildes(data)
        }
    }, [data])
    const [form] = Form.useForm()
    const setfildes = (data: Iproduct) => {
        form.setFieldsValue({
            _id: data?._id,
            name: data?.name,
            image: data?.image,
            price: data?.price,
            description: data?.description
        })

    }
    const onFinish = (values: any) => {
        console.log('Success:', values);
        const setupdate = { ...data, ...values }
        props.onupdate(setupdate)
        navigate("/admin/product")
        alert("cập nhật phẩm thành công")
    };
    return (
        <div>
            <h1>Cập Nhật Sản Phẩm</h1>
            <Form
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}

            >
                <Form.Item
                    label="name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="image"
                    name="image"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="price"
                    name="price"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="description"
                    name="description"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input />
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default UpdateProduct