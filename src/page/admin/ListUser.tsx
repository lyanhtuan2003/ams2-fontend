
import { Iuser } from '../../interface/user'
import React, { useEffect, useState } from 'react';
import { Divider, Radio, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: Iuser[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: Iuser) => ({
        disabled: record.username === 'Disabled User', // Column configuration not to be checked
        name: record.username,
    }),
};
interface Iprops {
    alluser: Iuser[]
}
const ListUser = (props: Iprops) => {
    const [data, setData] = useState<Iuser[]>([])
    useEffect(() => {
        setData(props.alluser)
    }, [props])
    const columns: ColumnsType<Iuser> = [
        {
            title: 'userame',
            dataIndex: 'username',
        
        },
        {
            title: 'email',
            dataIndex: 'email',
        },
        {
            title: 'password',
            dataIndex: 'password',
        },
    ];
    const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');

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

            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 5 }}
            />
        </div>
    );
}

export default ListUser