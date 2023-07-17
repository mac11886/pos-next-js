import Cart from "@/components/cart/cart";
import FriedRice from "@/components/fried-rice/friedRice";
import Table from "@/components/table/table";
import { Col, Input, Row, Space, Typography } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";
import styles from "../src/styles/Order.module.css";

const { Search } = Input;
type Props = {};

function Order({}: Props) {
  const route = useRouter();
  const [clickMenu, setClickMenu] = useState("All");
  const table = {
    id: Number(route.query.numTable),
    status: true,
    size: "",
  };
  const menu = [
    {
      name: "All",
    },
    {
      name: "Best Seller",
    },
    {
      name: "A La Carte",
    },
    {
      name: "Set Combo",
    },
    {
      name: "Dessert",
    },
    {
      name: "Drink",
    },
  ];
  console.log(route.query);
  const onSearch = (value: string) => console.log(value);

  return (
    <>
      <div>
        <Row>
          <Col span={16}>
            <Row>
              <Space
                direction="horizontal"
                style={
                  {
                    //   width: "100%",
                    //   border: "1px solid",
                    //   display: "flex",
                    //   justifyContent: "space-evenly",
                  }
                }
                size={100}
              >
                <Table data={table} />
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
                  Number of Guest 3{" "}
                </Typography.Text>
                <Space direction="horizontal">
                  <AiFillMinusSquare
                    style={{ color: "#b2cc53", width: "30px", height: "30px" }}
                  />
                  <AiFillPlusSquare
                    style={{ color: "#b2cc53", width: "30px", height: "30px" }}
                  />
                </Space>
              </Space>
            </Row>
            <Row
              style={{
                borderTop: "1px solid #dadada",
                borderBottom: "1px solid #dadada",
                display: "flex",
                alignItems: "center",
                padding: "5px 5px",
              }}
            >
              <Search
                placeholder="search food name"
                onSearch={onSearch}
                style={{ width: 200 }}
              />
              {menu?.map((m, i) => {
                return (
                  <Typography.Text
                    style={{ paddingLeft: "10px", paddingRight: "10px" }}
                    className={m.name == clickMenu ? styles.menuGreen : ""}
                    onClick={() => {
                      setClickMenu(m.name);
                    }}
                  >
                    {m.name}
                  </Typography.Text>
                );
              })}
            </Row>
            <Row>
              {/* <InfiniteScroll
                endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}>
                    <List>

                    </List>
                </InfiniteScroll> */}
              <div
                style={{
                  overflowY: "auto",
                  height: "450px",
                  width: "100%",
                }}
              >
                {Array.from(Array(10)).map((m, i) => {
                  return <FriedRice />;
                })}
              </div>
            </Row>
          </Col>
          <Col span={8}>
            <Cart />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Order;
