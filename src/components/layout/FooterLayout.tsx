import { Col, Row, Space, Typography } from "antd";
import { useRouter } from "next/router";
import { HiOutlineCash } from "react-icons/hi";
import { MdOutlineTableBar } from "react-icons/md";
import styles from "./FooterLayout.module.css";

const FooterLayout = () => {
  const route = useRouter();
  return (
    <Row
      style={{
        bottom: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50px",
        borderTop: "2px solid  #dadada",
      }}
    >
      <Col
        span={12}
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingRight: "40px",
        }}
        onClick={() => {
          console.log("go to table");
          route.push("/");
        }}
      >
        <Space direction="vertical" className={styles.footer_layout}>
          <MdOutlineTableBar style={{ textAlign: "center" }} />
          <Typography.Text style={{ fontSize: "10px", color: "black" }}>
            Table
          </Typography.Text>
        </Space>
      </Col>
      <Col
        span={12}
        style={{
          paddingLeft: "40px",
        }}
        onClick={() => {
          console.log("go to payment");
          route.push("/payment");
        }}
      >
        <Space direction="vertical" className={styles.footer_layout}>
          <HiOutlineCash style={{ textAlign: "center" }} />
          <Typography.Text style={{ fontSize: "10px", color: "black" }}>
            Payment
          </Typography.Text>
        </Space>
      </Col>
    </Row>
  );
};

export default FooterLayout;
