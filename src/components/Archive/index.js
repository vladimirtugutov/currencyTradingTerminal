import { useSelector } from 'react-redux';
import {
  Row, Col, Table, Tag,
} from 'antd';

export default function Archive() {
  const ordersSlice = useSelector((store) => store.ordersSlice);
  const orders = ordersSlice.data;
  const columns = [
    {
      title: 'Side',
      dataIndex: 'side',
      key: 'side',
      align: 'center',
      width: 100,
      render: (side) => (
        <Tag color={side === 'BUY' ? 'green' : 'red'} style={{ textTransform: 'capitalize' }} key={side}>
          {side.toLowerCase()}
        </Tag>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      align: 'center',
      width: 100,
    },
    {
      title: 'Instrument',
      dataIndex: 'instrument',
      key: 'instrument',
      align: 'center',
      width: 100,
    },
    {
      title: 'Volume',
      dataIndex: 'volume',
      key: 'volume',
      align: 'center',
      width: 100,
    },
    {
      title: 'Timestamp',
      dataIndex: 'timestamp',
      key: 'timestamp',
      align: 'center',
      width: 250,
    },
  ];

  return (
    <Row justify="center">
      <Col>
        <Table
          dataSource={orders}
          columns={columns}
          pagination={false}
          style={{ textAlign: 'center', color: 'red' }}
          rowKey="timestamp"
        />
      </Col>
    </Row>

  );
}
