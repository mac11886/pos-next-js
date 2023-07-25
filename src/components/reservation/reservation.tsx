import { Table } from "@/repositories/table/interface";
import { RightOutlined } from "@ant-design/icons";
import { Col, Row, Typography } from "antd";
import TableComponent from "../table/table";

type Props = {
  table?: Table[] | null;
  bar?: Table[] | null;
};

function Reservation({ table, bar }: Props) {
  return (
    <div style={{ marginLeft: "40px", marginRight: "40px", marginTop: "15px" }}>
      <Row style={{ borderBottom: "1px solid #dadada" }}>
        <Col span={20}>
          <Typography.Text style={{ fontWeight: "bold", fontSize: "18px" }}>
            Table
          </Typography.Text>
        </Col>
        <Col span={4} style={{ textAlign: "right" }}>
          <RightOutlined />
        </Col>
      </Row>
      <Row>
        {table?.map((m, i) => {
          return <TableComponent key={i} data={m} isOrder={false} />;
        })}
      </Row>
      <Row style={{ borderBottom: "1px solid #dadada" }}>
        <Col span={20}>
          <Typography.Text style={{ fontWeight: "bold", fontSize: "18px" }}>
            Bar
          </Typography.Text>
        </Col>
        <Col span={4} style={{ textAlign: "right" }}>
          <RightOutlined />
        </Col>
      </Row>
      <Row>
        {bar?.map((m, i) => {
          return <TableComponent key={i} data={m} isOrder={false} />;
        })}
      </Row>
    </div>
  );
}

export default Reservation;
