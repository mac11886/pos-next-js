import Reservation from "@/components/reservation/reservation";
import PaymentViewmodel from "@/viewmodel/payment/paymentViewmodel";
import { Col, Row, Typography } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

type Props = {};

export default function Payment({}: Props) {
  const { table, getTablePaymentData, bar, getBarPaymentData } =
    PaymentViewmodel();
  const route = useRouter();
  useEffect(() => {
    getTablePaymentData();
    getBarPaymentData();
    return () => {};
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "10px",
        }}
      >
        <Row>
          <Col span={24} style={{ textAlign: "center" }}>
            <Typography.Text
              style={{ fontSize: "24px", color: "black", textAlign: "center" }}
            >
              Select Table to Pay
            </Typography.Text>
          </Col>
        </Row>
      </div>
      <Reservation table={table} bar={bar} />
    </>
  );
}
