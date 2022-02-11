import { useState, useEffect } from 'react';

import {
  Row, Col, Card,
} from 'antd';
import Trading from '../Trading';
import Archive from '../Archive';

const tabList = [
  {
    key: 'trading',
    tab: 'Trading',
  },
  {
    key: 'archive',
    tab: 'Archive',
  },
];

export default function CommonCard() {
  const [activeTabKey, setActiveTabKey] = useState('trading');
  const currencyPriceInitial = {
    'USD/RUB_TOM': 74.78,
    'USD/RUB_SPOT': 74.96,
    'EUR/RUB_TOM': 85.11,
    'EUR/RUB_SPOT': 85.35,
  };
  const [currencyPrice, setCurrencyPrice] = useState(currencyPriceInitial);
  const contentList = {
    trading: <Trading currencyPrice={currencyPrice} />,
    archive: <Archive />,
  };

  const onTab1Change = (key) => {
    setActiveTabKey(key);
  };
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  useEffect(() => {
    setTimeout(() => {
      const newCurrencyPrice = { ...currencyPrice };
      Object.keys(newCurrencyPrice).forEach((k) => {
        const change = getRandomArbitrary(-0.02, 0.02);
        newCurrencyPrice[k] = currencyPrice[k] + change;
      });
      setCurrencyPrice(newCurrencyPrice);
      console.log(newCurrencyPrice);
    }, 5000);
  }, [currencyPrice]);
  return (
    <Row justify="center" style={{ marginTop: 200 }}>
      <Col>
        <Card
          style={{
            width: 700,
            margin: '20px',
            borderRadius: '20px',
            overflow: 'hidden',
            borderColor: 'black',
          }}
          tabList={tabList}
          activeTabKey={activeTabKey}
          onTabChange={(key) => {
            onTab1Change(key);
          }}
        >
          {contentList[activeTabKey]}
        </Card>
      </Col>
    </Row>

  );
}
