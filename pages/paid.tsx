import TableComponent from "@/components/table/table";
import {
  Button,
  Card,
  Col,
  InputNumber,
  Row,
  Space,
  Table,
  Typography,
} from "antd";
import { useRouter } from "next/router";
import { FaMoneyBill } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import styles from "../src/styles/Paid.module.css";
const { Column, ColumnGroup } = Table;

type Props = {};

interface DataType {
  key: React.Key;
  no: number;
  foodList: string;
  price: string;
  unit: number;
  amount: string;
  edit: string;
}

const data: DataType[] = [
  {
    key: "1",
    no: 1,
    foodList: "Fried rice with pork(Large)",
    unit: 3,
    price: "200 ฿",
    amount: "600 ฿",
    edit: "X",
  },
  {
    key: "2",
    no: 2,
    foodList: "Fried rice with pork(Large)",
    unit: 3,
    price: "200 ฿",
    amount: "600 ฿",
    edit: "X",
  },
  {
    key: "3",
    no: 3,
    foodList: "Fried rice with pork(Large)",
    unit: 3,
    price: "200 ฿",
    amount: "600 ฿",
    edit: "X",
  },
  {
    key: "3",
    no: 3,
    foodList: "Fried rice with pork(Large)",
    unit: 3,
    price: "200 ฿",
    amount: "600 ฿",
    edit: "X",
  },
  {
    key: "3",
    no: 3,
    foodList: "Fried rice with pork(Large)",
    unit: 3,
    price: "200 ฿",
    amount: "600 ฿",
    edit: "X",
  },
  {
    key: "3",
    no: 3,
    foodList: "Fried rice with pork(Large)",
    unit: 3,
    price: "200 ฿",
    amount: "600 ฿",
    edit: "X",
  },
  {
    key: "3",
    no: 3,
    foodList: "Fried rice with pork(Large)",
    unit: 3,
    price: "200 ฿",
    amount: "600 ฿",
    edit: "X",
  },
  {
    key: "3",
    no: 3,
    foodList: "Fried rice with pork(Large)",
    unit: 3,
    price: "200 ฿",
    amount: "600 ฿",
    edit: "X",
  },
];

export default function Paid({}: Props) {
  const route = useRouter();
  const table = {
    id: Number(route.query.numTable),
    status: true,
    size: "",
  };
  return (
    <Row>
      <Col span={16}>
        <Card style={{ margin: "10px", padding: "10px" }}>
          <Space direction="horizontal" size={100}>
            <TableComponent data={table} />
            <Space direction="vertical">
              <Typography.Text style={{ fontWeight: "bold" }}>
                Date:
              </Typography.Text>
              <Typography.Text>28/10/2022</Typography.Text>
            </Space>
            <Space direction="vertical">
              <Typography.Text style={{ fontWeight: "bold" }}>
                Time:
              </Typography.Text>
              <Typography.Text>14:00</Typography.Text>
            </Space>
            <Typography.Text style={{ fontWeight: "bold" }}>
              Number of Guest 3
            </Typography.Text>
          </Space>

          <Table dataSource={data} pagination={false} scroll={{ y: 240 }}>
            <ColumnGroup title="">
              <Column title="No" dataIndex="no" key="no" width={65} />
              <Column
                title={<p style={{ textAlign: "center" }}>FoodList</p>}
                dataIndex="foodList"
                key="foodList"
                width={270}
                render={(_: any, record: DataType) => (
                  <Space direction="vertical" className={styles.note_menu}>
                    <Typography.Text>{record.foodList}</Typography.Text>
                    <Typography.Text style={{ color: "#dadada" }}>
                      Note: Lorem ipsum dolor sit amet
                    </Typography.Text>
                  </Space>
                )}
              />
            </ColumnGroup>
            <Column title="Price" dataIndex="price" key="price" />
            <Column title="Unit" dataIndex="unit" key="unit" />
            <Column title="Amount" dataIndex="amount" key="amount" />
            <Column
              title="Edit"
              dataIndex="edit"
              key="edit"
              render={(_: any, record: DataType) => <ImCross />}
            />
          </Table>
          <Row style={{ borderTop: "1px solid", borderBottom: "1px solid" }}>
            <Col span={15}>
              <Space direction="vertical">
                <Typography.Text>Subtotal</Typography.Text>
                <Typography.Text>Discord</Typography.Text>
                <Typography.Text>Subtotal</Typography.Text>
              </Space>
            </Col>
            <Col span={4}>
              <Space
                direction="vertical"
                style={{
                  textAlign: "right",
                }}
              >
                <Typography.Text>2,400฿</Typography.Text>
                <InputNumber
                  min={0}
                  max={10}
                  defaultValue={0}
                  style={{
                    width: 200,
                  }}
                  //   className={styles.right_aligned_input}
                />
                <Typography.Text>2,400฿</Typography.Text>
              </Space>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col span={15}>
              <Typography.Text>Cash</Typography.Text>
            </Col>
            <Col span={4}>
              <InputNumber
                min={0}
                max={10}
                defaultValue={0}
                style={{ width: 200, textAlign: "right" }}
              />
              <Button
                type="primary"
                style={{
                  width: "200px",
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                  alignContent: "center",
                  backgroundColor: "#b2cc53",
                  marginTop: "10px",
                }}
              >
                <Space direction="horizontal">
                  <FaMoneyBill style={{ textAlign: "center" }} />
                  <Typography.Text style={{ color: "white" }}>
                    Paid
                  </Typography.Text>
                </Space>
              </Button>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={8}>Receipt</Col>
    </Row>
  );
}
