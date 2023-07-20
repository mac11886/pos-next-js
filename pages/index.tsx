import Reservation from "@/components/reservation/reservation";
import TableViewmodel from "@/viewmodel/table/tableViewModel";
import { Col, Row, Typography } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import styles from "../src/styles/Table.module.css";
export default function Home() {
  const { table, getTableData, bar, getBarData } = TableViewmodel();
  const route = useRouter();
  // const [dataTable, setDataTable] = useState([
  //   { id: 1, status: true, size: "3-5 Person" },
  //   { id: 2, status: false, size: "3-5 Person" },
  //   { id: 4, status: false, size: "3-5 Person" },
  //   { id: 5, status: true, size: "3-5 Person" },
  //   { id: 6, status: true, size: "3-5 Person" },
  //   { id: 7, status: false, size: "3-5 Person" },
  //   { id: 8, status: true, size: "3-5 Person" },
  //   { id: 9, status: false, size: "3-5 Person" },
  //   { id: 10, status: false, size: "3-5 Person" },
  //   { id: 11, status: true, size: "3-5 Person" },
  //   { id: 12, status: true, size: "3-5 Person" },
  //   { id: 13, status: true, size: "3-5 Person" },
  //   { id: 14, status: true, size: "3-5 Person" },
  //   { id: 15, status: true, size: "3-5 Person" },
  //   { id: 16, status: true, size: "3-5 Person" },
  // ]);
  useEffect(() => {
    return () => {
      getTableData();
      getBarData();
    };
  }, []);
  // const [dataBar, setDataBar] = useState([
  //   { id: 1, status: true, size: "1-2 Person" },
  //   { id: 2, status: false, size: "1-2 Person" },
  //   { id: 4, status: false, size: "1-2 Person" },
  //   { id: 5, status: true, size: "1-2 Person" },
  //   { id: 6, status: true, size: "1-2 Person" },
  //   { id: 7, status: false, size: "1-2 Person" },
  // ]);
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
      {console.log("Table ", table)}
      <Reservation table={table} bar={bar} />
    </>
  );
}
