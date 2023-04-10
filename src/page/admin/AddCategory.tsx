import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';


const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};
interface Iprops {
    onadd: Function
}
const AddCategory = (props: Iprops) => {
    const navigate = useNavigate()

    const onFinish = (values: any) => {
        console.log('Success:', values);
        props.onadd(values)
        navigate("/admin/category")
        alert("thêm sản phẩm thành công")
    };
    return (
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
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>



            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default AddCategory