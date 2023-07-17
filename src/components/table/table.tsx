import { Space } from "antd";
import { useRouter } from "next/router";
import { GiTable } from "react-icons/gi";
import styles from "../../styles/Table.module.css";

type Props = {
  data?: {
    id: number;
    status: boolean;
    size: string;
  };
};

export default function Table({ data }: Props) {
  const route = useRouter();
  return (
    <div
      style={{ marginLeft: "15px" }}
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
      <Space direction="vertical">
        <div className="container_image" style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: -5,
              left: 15,
              zIndex: 9999,
            }}
            className={styles.circleNumTable}
          >
            {data?.id}
          </div>
        </div>

        <GiTable
          className={
            data?.status ? styles.circleTableOpen : styles.circleTableClose
          }
        />
        <span>{data?.size}</span>
      </Space>
    </div>
  );
}
