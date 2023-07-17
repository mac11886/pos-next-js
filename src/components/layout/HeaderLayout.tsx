import { AppleOutlined } from "@ant-design/icons";
import { Col, Row, Typography } from "antd";
import { useRouter } from "next/router";
import { RxAvatar } from "react-icons/rx";

const HeaderLayout = () => {
  const router = useRouter();

  let title = "Table";
  if (router.pathname == "/") {
    title = "Table";
  } else if (router.pathname == "/order") {
    title = "< Order";
  } else if (router.pathname == "/payment") {
    title = "Payment";
  } else if (router.pathname == "/paid") {
    title = "< Paid";
  }
  return (
    <Row style={{ height: "100px" }} className="header_color">
      <Col
        span={8}
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingLeft: "40px",
        }}
      >
        <Typography.Text
          style={{ fontSize: "24px", color: "white" }}
          onClick={() => {
            if (router.pathname == "/") {
              router.push("/");
            } else if (router.pathname == "/order") {
              router.push("/");
            }
          }}
        >
          {title}
        </Typography.Text>
      </Col>

      <Col
        span={8}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Row>
          <Col span={24} style={{ textAlign: "center" }}>
            <AppleOutlined style={{ fontSize: "40px", color: "white" }} />
            <Typography.Text style={{ fontSize: "20px", color: "white" }}>
              Lorem ipsum dolor sit amet.
            </Typography.Text>
          </Col>
          <Col span={24} style={{ textAlign: "center" }}>
            <Typography.Text style={{ color: "black" }}>
              Branch: Bangkok
            </Typography.Text>
          </Col>
        </Row>
      </Col>

      <Col
        span={8}
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingRight: "30px",
        }}
      >
        <RxAvatar style={{ fontSize: "40px", color: "white" }} />
        <Typography.Text style={{ fontSize: "20px", color: "white" }}>
          Kunlachart
        </Typography.Text>
      </Col>
    </Row>
  );
};

export default HeaderLayout;
