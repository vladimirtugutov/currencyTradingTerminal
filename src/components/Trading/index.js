import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import dayjs from 'dayjs';

import {
  Row, Col, Button, Select, Modal, Form, Input,
} from 'antd';
import { DollarOutlined, EuroOutlined } from '@ant-design/icons';
import * as actions from '../../store/actions/orders';

const { Option } = Select;

const getTime = (format) => {
  const currTime = new Date();
  return dayjs(currTime).format(format);
};

export default function Trading(priceData) {
  const { currencyPrice } = priceData;
  const dispatch = useDispatch();
  const [time, setTime] = useState(getTime('HH:mm:ss'));
  const [instrument, setInstrument] = useState('USD/RUB_TOM');
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [type, setType] = useState('');

  const purchasePrice = (currencyPrice[instrument] * 1.005).toFixed(4);
  const sellPrice = (currencyPrice[instrument] * 0.995).toFixed(4);

  const showModal = (transactionType) => {
    setType(transactionType);
    setModalIsVisible(true);
  };
  const handleCancel = () => {
    setModalIsVisible(false);
  };
  const onFinish = (values) => {
    if (values) {
      const data = {
        side: type,
        price: type === 'BUY' ? purchasePrice : sellPrice,
        volume: Number(values.volume),
        instrument,
        timestamp: getTime('YYYY.MM.DD HH:mm:ss.SSS'),
      };
      dispatch(actions.pushOrder(data));
      handleCancel();
    }
  };

  useEffect(() => {
    let cleanupFunction = false;
    setTimeout(() => {
      if (!cleanupFunction) { setTime(getTime('HH:mm:ss')); }
    }, 1000);
    return () => { cleanupFunction = true; };
  }, [time]);

  return (
    <>
      <Modal
        onCancel={handleCancel}
        visible={modalIsVisible}
        destroyOnClose
        footer={[]}
      >
        <h2>
          Make order
        </h2>
        <br />
        <div style={{ fontSize: '180%' }}>
          <span style={{ color: type === 'BUY' ? 'green' : 'red' }}>
            {type}
          </span>
          {' '}
          {type === 'BUY' ? purchasePrice : sellPrice}
          {' '}
          {instrument}
        </div>
        <br />
        <Form
          onFinish={onFinish}
        >
          <Form.Item
            name="volume"
            rules={[
              {
                required: true,
                message: 'Enter volume!',
              },
            ]}
          >
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <p style={{ marginTop: 10, marginRight: 10, fontSize: '180%' }}>
                Volume
              </p>
              <p>
                <Input prefix={instrument.includes('USD') ? <DollarOutlined /> : <EuroOutlined />} size="large" />
              </p>
            </div>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" style={{ width: '47%' }}>
              OK
            </Button>
            {' '}
            <Button type="default" onClick={handleCancel} size="large" style={{ width: '47%' }}>
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Row justify="center" style={{ fontSize: '300%' }}>
        <Col>
          {time}
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col>
          <Select defaultValue="USD/RUB_TOM" onChange={(value) => setInstrument(value)} style={{ fontSize: '180%' }}>
            <Option value="USD/RUB_TOM">USD/RUB TOM</Option>
            <Option value="USD/RUB_SPOT">USD/RUB SPOT</Option>
            <Option value="EUR/RUB_TOM">EUR/RUB TOM</Option>
            <Option value="EUR/RUB_SPOT">EUR/RUB SPOT</Option>
          </Select>
        </Col>
      </Row>
      <br />
      <Row gutter={20} justify="center" style={{ fontSize: '180%', fontWeight: 'bold' }}>
        <Col onClick={() => showModal('BUY')} style={{ textAlign: 'center', color: 'green' }}>
          <div>BUY</div>
          <div>{purchasePrice}</div>
        </Col>
        <Col onClick={() => showModal('SELL')} style={{ textAlign: 'center', color: 'red' }}>
          <div>SELL</div>
          <div>{sellPrice}</div>
        </Col>
      </Row>
    </>

  );
}
