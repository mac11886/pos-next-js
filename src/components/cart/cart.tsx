import { ReconciliationOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row, Space, Typography } from "antd";
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";
import styles from "../cart/Cart.module.css";
type Props = {};

export default function Cart({}: Props) {
  return (
    <div
      style={{
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        alignContent: "center",
        // alignItems: "center",
        width: "auto",
      }}
    >
      <Space direction="vertical">
        <Typography.Text style={{ textAlign: "center" }}>Order</Typography.Text>
        <div
          style={{
            borderTop: "2px solid",
            borderBottom: "2px solid",
            overflowY: "auto",
          }}
        >
          <Row style={{ margin: "5px", height: "400px" }}>
            {Array.from(Array(10)).map((m, i) => {
              return (
                <>
                  <Col span={12}>
                    <Space direction="vertical" className={styles.note}>
                      <Typography.Text style={{ fontWeight: "bold" }}>
                        Fried rice with pork(Large)
                      </Typography.Text>
                      <Typography.Text
                        style={{ color: "#dadada", textAlign: "left" }}
                      >
                        Note:Lorem ipsum dolor
                      </Typography.Text>
                    </Space>
                    <Space direction="horizontal">
                      <AiFillMinusSquare
                        style={{
                          color: "#ffffff",
                          width: "30px",
                          height: "30px",
                        }}
                      />
                      <Typography.Text
                        style={{
                          display: "block",
                          height: "30px",
                          width: "80px",
                          backgroundColor: "white",
                          border: "1px solid #b2cc53",
                          fontSize: "16px",
                        }}
                      >
                        3
                      </Typography.Text>
                      <AiFillPlusSquare
                        style={{
                          color: "#b2cc53",
                          width: "30px",
                          height: "30px",
                        }}
                      />
                    </Space>
                  </Col>
                  <Col span={12} style={{ textAlign: "end" }}>
                    <Space direction="vertical">
                      <Typography.Text style={{}}>200 ฿</Typography.Text>
                      <Typography.Text style={{ fontWeight: "bold" }}>
                        600 ฿
                      </Typography.Text>
                    </Space>
                  </Col>
                </>
              );
            })}
          </Row>
        </div>
        <Row>
          <Col span={12}>
            <Typography.Text>Fried rice with pork (Large)</Typography.Text>
          </Col>
          <Col span={12}>
            <Typography.Text>200 ฿</Typography.Text>
          </Col>
        </Row>
        <Card>
          <Row>
            <Col span={8}>
              <Typography.Text>Total</Typography.Text>
            </Col>
            <Col span={16}>
              <Typography.Text style={{ fontWeight: "bold" }}>
                3,800 ฿
              </Typography.Text>
            </Col>
          </Row>
          <Button
            type="primary"
            icon={<ReconciliationOutlined />}
            size="middle"
            style={{ width: "100%", backgroundColor: "#b2cc53" }}
          >
            Send to Order
          </Button>
        </Card>
      </Space>
    </div>
  );
}
