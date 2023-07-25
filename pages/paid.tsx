import TableComponent from "@/components/table/table";
import { FireTwoTone } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  InputNumber,
  Modal,
  Row,
  Space,
  Table,
  Typography,
} from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsReceipt } from "react-icons/bs";
import { FaMoneyBill } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import styles from "../src/styles/Paid.module.css";
const { Column, ColumnGroup } = Table;
const { confirm } = Modal;

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
  const [isReceiptBtn, setIsReceiptBtn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const route = useRouter();
  const table = {
    id: Number(route.query.numTable),
    status: true,
    size: "",
    type: "table",
  };
  const handleFirstBtnClick = () => {
    setIsReceiptBtn(true);
  };
  const showModal = () => {
    // setIsModalOpen(true);
    // Modal.success({
    //   content: "print receipt",
    // });
    confirm({
      title: "print reciept",
      icon: <FireTwoTone />,
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  return (
    <Row>
      <Col span={16}>
        <Card style={{ marginLeft: "10px", marginRight: "10px" }}>
          <Space direction="horizontal" size={100}>
            <TableComponent data={table} isOrder={true} />
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
                onClick={handleFirstBtnClick}
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
      <Col span={8}>
        <Card style={{ margin: "5px" }}>
          <Space
            direction="horizontal"
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <BsReceipt />
            <Typography.Text style={{ fontWeight: "bold" }}>
              logoipsum
            </Typography.Text>
          </Space>
          <Typography.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography.Text>
          <Row style={{ borderBottom: "1px solid" }}>
            <Col span={12}>
              <Typography.Text style={{ fontWeight: "bold" }}>
                Date:
              </Typography.Text>
              <Typography.Text>28/10/2022</Typography.Text>
            </Col>
            <Col span={12}>
              <Typography.Text style={{ fontWeight: "bold" }}>
                Time:
              </Typography.Text>
              <Typography.Text>13:08pm</Typography.Text>
            </Col>
          </Row>
          <div
            style={{
              borderBottom: "1px solid",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            {Array.from(Array(5)).map((m, i) => {
              return (
                <>
                  <Row>
                    <Col span={16}>
                      <Space direction="vertical" className={styles.note_menu}>
                        <Typography.Text>
                          Fried rice with pork(Large)
                        </Typography.Text>
                        <Typography.Text style={{ color: "#dadada" }}>
                          Note: Lorem ipsum dolor sit amet
                        </Typography.Text>
                      </Space>
                    </Col>
                    <Col span={4}>
                      <Typography.Text>3</Typography.Text>
                    </Col>
                    <Col span={4}>
                      <Typography.Text>600 ฿</Typography.Text>
                    </Col>
                  </Row>
                </>
              );
            })}
          </div>
          <Row>
            <Col span={12} style={{ textAlign: "right" }}>
              <Space direction="vertical">
                <Typography.Text>Subtotal</Typography.Text>
                <Typography.Text>Discout</Typography.Text>
                <Typography.Text>Service Charge</Typography.Text>
                <Typography.Text>Tax</Typography.Text>
                <Typography.Text style={{ fontWeight: "bold" }}>
                  Total
                </Typography.Text>
                <Typography.Text>Cash</Typography.Text>
                <Typography.Text>Change</Typography.Text>
              </Space>
            </Col>
            <Col span={12} style={{ paddingLeft: "50px" }}>
              <Space direction="vertical">
                <Typography.Text>2,400 ฿</Typography.Text>
                <Typography.Text>0</Typography.Text>
                <Typography.Text>10 %</Typography.Text>
                <Typography.Text>7 %</Typography.Text>
                <Typography.Text style={{ fontWeight: "bold" }}>
                  2,808 ฿
                </Typography.Text>
                <Typography.Text>3,000 ฿</Typography.Text>
                <Typography.Text>192 ฿</Typography.Text>
              </Space>
            </Col>
          </Row>
        </Card>
        <Button
          type="primary"
          style={{
            width: "100%",
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
            alignContent: "center",
            backgroundColor: isReceiptBtn ? "#b2cc53" : "gray",
            marginTop: "10px",
          }}
          disabled={!isReceiptBtn}
          onClick={showModal}
        >
          <Space direction="horizontal">
            <BsReceipt style={{ textAlign: "center" }} />
            <Typography.Text style={{ color: "white" }}>
              Print Reciept
            </Typography.Text>
          </Space>
        </Button>
      </Col>
    </Row>
  );
}
