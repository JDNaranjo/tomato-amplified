import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";

const { Meta } = Card;

function App() {
  return (
    <div>
      <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300, margin: "auto", position: "absolute", top:"35%", left:"40%"}}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );
}

export default App;
