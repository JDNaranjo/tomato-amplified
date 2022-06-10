import React, { useState } from 'react';

import { Card, Row } from 'antd';
import "antd/dist/antd.css";

import Amplify from 'aws-amplify';
import { MqttOverWSProvider } from '@aws-amplify/pubsub/lib/Providers';
import { PubSub, Auth } from 'aws-amplify';

const TomatoQuantity = () => {

  const [quantity, setQuantity] = useState("2");

  Amplify.configure({
    Auth: {
      identityPoolId: "us-east-1:73acf2f3-8a1e-4a81-8644-822f680087bf",
      region: "us-east-1",
      userPoolId: "us-east-1_WQTMxak9r",
      userPoolWebClientId: "mcg069s7aq3432dq1d38tdotc"
    }
  });
  
  Amplify.addPluggable(new MqttOverWSProvider({
    aws_pubsub_endpoint: `ayedcd8eu2d2s-ats.iot.us-east-1.amazonaws.com`,
  }));

  PubSub.subscribe('projectfinal/icesi/edificioL/lab501/quantity_of_tomatoes/').subscribe({
    next: data => console.log(data),
    error: error => console.error(error),
    close: () => console.log('Done'),
  });

  return (
    <div className="Sensor">
      <Row>
        <Card title="Planta #1" style={{ width: 300, marginTop: "5%", marginLeft: "5%"}}>
          <p>La planta tiene de alto:</p>
          <p>22.7 cm</p>
        </Card>
        <Card title="Planta #2" style={{ width: 300, marginTop: "5%", marginLeft: "5%"}}>
          <p>La planta tiene de alto:</p>
          <p>34.1 cm</p>
        </Card>
        <Card title="Planta #3" style={{ width: 300, marginTop: "5%", marginLeft: "5%"}}>
          <p>La planta tiene de alto:</p>
          <p>13.3 cm</p>
        </Card>
      </Row>
      <Row>
        <Card title="Planta #4" style={{ width: 300, marginTop: "5%", marginLeft: "5%"}}>
          <p>La planta tiene de alto:</p>
          <p>26.8 cm</p>
        </Card>
        <Card title="Planta #5" style={{ width: 300, marginTop: "5%", marginLeft: "5%"}}>
          <p>La planta tiene de alto:</p>
          <p>30.9 cm</p>
        </Card>
        <Card title="Planta #6" style={{ width: 300, marginTop: "5%", marginLeft: "5%"}}>
          <p>La planta tiene de alto:</p>
          <p>19.0 cm</p>
        </Card>
      </Row>
    </div>
  );
}

export default TomatoQuantity;