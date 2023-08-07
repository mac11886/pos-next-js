import { Col, Image, Row, Space, Typography } from "antd";
import { AiFillPlusSquare } from "react-icons/ai";
import styles from "../fried-rice/FriedRice.module.css";

type Props = {
  img: string;
  name: string;
  price: string;
};

export default function FriedRice({ img, name, price }: Props) {
  return (
    <Row style={{ width: "100%", marginTop: "5px" }}>
      <Col style={{ display: "flex", justifyContent: "center" }} span={4}>
        <Image
          src={img}
          width={70}
          height={70}
          style={{ borderRadius: "10px" }}
        />
      </Col>
      <Col span={15}>
        <Space direction="vertical" className={styles.space_menu}>
          <Typography.Text>{name}</Typography.Text>
          <Typography.Text>{price} ฿</Typography.Text>
          <Typography.Text style={{ color: "#b2cc53", fontWeight: "bold" }}>
            + Add Note
          </Typography.Text>
        </Space>
      </Col>
      <Col
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
        span={4}
      >
        <AiFillPlusSquare
          style={{ color: "#b2cc53", width: "50px", height: "50px" }}
        />
      </Col>
    </Row>
  );
}
