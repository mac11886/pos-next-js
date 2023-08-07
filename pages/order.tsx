import Cart from "@/components/cart/cart";
import FriedRice from "@/components/fried-rice/friedRice";
import Table from "@/components/table/table";
import MenuViewmodel from "@/viewmodel/menu/menuViewmodel";
import { SearchOutlined } from "@ant-design/icons";
import { Col, Input, Row, Space, theme, Typography } from "antd";
import { useRouter } from "next/router";
import { SetStateAction, useEffect, useState } from "react";
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";
import styles from "../src/styles/Order.module.css";
const { getDesignToken, useToken } = theme;

type Props = {};

function Order({}: Props) {
  const {
    category,
    getAllMenu,
    getDrinkMenu,
    getALaCarteMenu,
    getDessertMenu,
  } = MenuViewmodel();

  const route = useRouter();
  const { token } = useToken();
  const [clickMenu, setClickMenu] = useState("All");
  const table = {
    id: Number(route.query.numTable),
    status: true,
    size: "",
    type: "table",
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
  const [searchQuery, setSearchQuery] = useState("");
  const filterData = category?.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleSearchChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchQuery(e.target.value);
  };
  useEffect(() => {
    getAllMenu();
  }, []);
  return (
    <>
      <div>
        <Row>
          <Col span={16}>
            <Row>
              <Space
                direction="horizontal"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
                // size={100}
              >
                <Table data={table} isOrder={true} />

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
              <Input
                onChange={handleSearchChange}
                placeholder="Search Food name"
                prefix={<SearchOutlined />}
                style={{
                  width: 200,
                  border: `1px solid ${token.colorPrimary}`,
                  borderRadius: "100px",
                }}
              />
              {menu?.map((m, i) => {
                return (
                  <Typography.Text
                    style={{ paddingLeft: "10px", paddingRight: "10px" }}
                    className={m.name == clickMenu ? styles.menuGreen : ""}
                    onClick={() => {
                      setClickMenu(m.name);
                      if (m.name == "Drink") {
                        getDrinkMenu();
                      } else if (m.name == "A La Carte") {
                        getALaCarteMenu();
                      } else if (m.name == "Dessert") {
                        getDessertMenu();
                      } else {
                        getAllMenu();
                      }
                    }}
                  >
                    {m.name}
                  </Typography.Text>
                );
              })}
            </Row>
            <Row>
              <div
                style={{
                  overflowY: "auto",
                  height: "450px",
                  width: "100%",
                }}
              >
                {filterData?.map((m, i) => {
                  return (
                    <FriedRice
                      img={m.img_url.toString()}
                      name={m.name.toString()}
                      price={m.price.toString()}
                    />
                  );
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
