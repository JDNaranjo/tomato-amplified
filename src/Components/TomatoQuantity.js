import React, { useState } from 'react';

import { Card } from 'antd';
import "antd/dist/antd.css";

import Amplify from 'aws-amplify';
import { MqttOverWSProvider } from '@aws-amplify/pubsub/lib/Providers';
import { PubSub, Auth } from 'aws-amplify';

const TomatoQuantity = () => {

  const [quantity, setQuantity] = useState("0");

  Amplify.configure({
    Auth: {
      identityPoolId: "us-east-1:73acf2f3-8a1e-4a81-8644-822f680087bf",
      region: "us-east-1",
      userPoolId: "us-east-1_WQTMxak9r",
      userPoolWebClientId: "1t4mqglm54mmcpp16rp6ns0cvh"
    }
  });
  
  Amplify.addPluggable(new MqttOverWSProvider({
    aws_pubsub_endpoint: `ayedcd8eu2d2s-ats.iot.us-east-1.amazonaws.com`,
  }));

  PubSub.subscribe('projectfinal/icesi/edificioL/lab501/quantity_of_tomatoes/').subscribe({
    next: data => console.error(data),
    error: error => console.error(error),
    close: () => console.log('Done'),
  });

  return (
    <div className="Sensor">
      <Card title="Tomatoes quantity" style={{ width: 300, marginTop: "5%", marginLeft: "5%"}}>
        <p>{quantity}</p>
        <p></p>
      </Card>
    </div>
  );
}

export default TomatoQuantity;