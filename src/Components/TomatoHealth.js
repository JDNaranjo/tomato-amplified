import React, { useState } from 'react';

import { Card, Row } from 'antd';
import "antd/dist/antd.css";

import Amplify from 'aws-amplify';
import { MqttOverWSProvider } from '@aws-amplify/pubsub/lib/Providers';
import { PubSub, Auth } from 'aws-amplify';

const TomatoHealth = () => {

  const [status, setStatus] = useState("Mancha bacteriana");

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

  const changeNames = (name) => {
      if (name === "Tomato_Bacterial_spot"){
          name="Mancha bacteriana"
      } else if(name === "Tomato_Early_blight"){
        name="Marchitez temprana"
        } else if (name === "Tomato_Late_blight"){
            name="Marchitez tardía"
            } else if (name === "Tomato_Leaf_Mold"){
                name="Moho foliar"
                } else if (name === "Tomato_Septoria_leaf_spot"){
                    name="Mancha foliar por septoria"
                    } else if (name === "Tomato_Spider_mites_Two_spotted_spider_mite"){
                        name="Mancha por ácaros"
                        } else if(name === "Tomato__Target_spot"){
                            name="Mancha Target"
                            } else if(name === "Tomato__Tomato_YellowLeaf__Curl_Virus"){
                                name="Virus de hoja amarilla"
                                }else if(name === "Tomato__Tomato_mosaic_virus"){
                                    name="Virus del mosaico"
                                    }else{
                                        name="Saludable"
                                        }
  }

  return (
    <div className="Sensor">
      <Row>
        <Card title="Planta #1" style={{ width: 300, marginTop: "5%", marginLeft: "5%"}}>
          <p>Estado:</p>
          <p>Moho foliar</p>
        </Card>
        <Card title="Planta #2" style={{ width: 300, marginTop: "5%", marginLeft: "5%"}}>
          <p>Estado:</p>
          <p>Mancha foliar por septoria</p>
        </Card>
        <Card title="Planta #3" style={{ width: 300, marginTop: "5%", marginLeft: "5%"}}>
          <p>Estado:</p>
          <p>Saludable</p>
        </Card>
      </Row>
      <Row>
        <Card title="Planta #4" style={{ width: 300, marginTop: "5%", marginLeft: "5%"}}>
          <p>Estado:</p>
          <p>Virus de hoja amarilla</p>
        </Card>
        <Card title="Planta #5" style={{ width: 300, marginTop: "5%", marginLeft: "5%"}}>
          <p>Estado:</p>
          <p>Saludable</p>
        </Card>
        <Card title="Planta #6" style={{ width: 300, marginTop: "5%", marginLeft: "5%"}}>
          <p>Estado:</p>
          <p>{status}</p>
        </Card>
      </Row>
    </div>
  );
}

export default TomatoHealth;