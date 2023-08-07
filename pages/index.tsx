import Reservation from "@/components/reservation/reservation";
import TableViewmodel from "@/viewmodel/table/tableViewmodel";
import { Col, Row, Typography } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import styles from "../src/styles/Table.module.css";
export default function Home() {
  const { table, getTableData, bar, getBarData } = TableViewmodel();
  const route = useRouter();
  useEffect(() => {
    return () => {
      getTableData();
      getBarData();
    };
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
              style={{
                fontSize: "25px",
                color: "black",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Select Table to Order
            </Typography.Text>
          </Col>
          <Col span={24} style={{ textAlign: "center" }}>
            <FaCircle
              style={{ color: "#b2cc53" }}
              className={styles.avaliable}
            />
            <Typography.Text
              style={{ fontSize: "18px", color: "black", textAlign: "center" }}
            >
              Available
            </Typography.Text>
            <FaCircle
              style={{ color: "#dadada" }}
              className={styles.avaliable}
            />
            <Typography.Text
              style={{
                fontSize: "18px",
                color: "black",
                textAlign: "center",
              }}
            >
              Unavailable
            </Typography.Text>
          </Col>
        </Row>
      </div>
      <Reservation table={table} bar={bar} />
    </>
  );
}
