import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Iuser } from '../../interface/user';



const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

interface Iprops {
    adduser: Function
}
const Singup = (props: Iprops) => {
    const navigate = useNavigate()
    const onFinish = (values: Iuser) => {
        console.log(values)
        props.adduser(values)
        navigate("/singin")
        alert("bạn đã đăng kí tài khaonr thành công")
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
                label="username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="email"
                name="email"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input />
            </Form.Item>


            <Form.Item
                label="password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                label="confirm password"
                name="confirmpassword"
                rules={[{ required: true, message: 'Please confirm your password!' }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}
export default Singup
