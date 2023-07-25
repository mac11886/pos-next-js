import { Table } from "@/repositories/table/interface";
import { Space, Typography } from "antd";
import { useRouter } from "next/router";
import { GiTable } from "react-icons/gi";
import styles from "../../styles/Table.module.css";

type Props = {
  data?: Table;
  isOrder: boolean;
};

export default function Table({ data, isOrder }: Props) {
  const route = useRouter();
  return (
    <div
      style={{ marginLeft: isOrder ? "0px" : "15px" }}
      onClick={() => {
        if (data?.status) {
          if (route.pathname == "/") {
            route.push(`/order?numTable=${data.id}`);
          } else if (route.pathname == "/payment") {
            route.push(`/paid?numTable=${data.id}`);
          }
        }
      }}
    >
      <Space
        direction="vertical"
        className={isOrder ? styles.space_order : styles.space_table_home}
      >
        <div className="container_image" style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: isOrder ? -5 : -10,
              left: isOrder ? 15 : 25,
              zIndex: 100,
            }}
            className={
              isOrder ? styles.circleNumTableOrder : styles.circleNumTable
            }
          >
            <Typography.Text
              style={{ fontSize: isOrder ? "18px" : "24px", color: "white" }}
            >
              {data?.id}
            </Typography.Text>
          </div>
        </div>
        <GiTable
          className={
            data?.status
              ? isOrder
                ? styles.circleTableOpenOrder
                : styles.circleTableOpen
              : styles.circleTableClose
          }
        />
        <span style={{ marginLeft: "16px" }}>{data?.size}</span>
      </Space>
    </div>
  );
}
