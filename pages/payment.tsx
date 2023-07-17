import Reservation from "@/components/reservation/reservation";
import { Col, Row, Typography } from "antd";
import { useState } from "react";

type Props = {};

export default function Payment({}: Props) {
  const [dataTable, setDataTable] = useState([
    { id: 1, status: true, size: "3-5 Person" },
    { id: 9, status: true, size: "3-5 Person" },
    { id: 10, status: true, size: "3-5 Person" },
    { id: 11, status: true, size: "3-5 Person" },
  ]);
  const [dataBar, setDataBar] = useState([
    { id: 1, status: true, size: "1-2 Person" },
    { id: 2, status: true, size: "1-2 Person" },
    { id: 4, status: true, size: "1-2 Person" },
    { id: 5, status: true, size: "1-2 Person" },
  ]);
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
      <Reservation table={dataTable} bar={dataBar} />
    </>
  );
}
