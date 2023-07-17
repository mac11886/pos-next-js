import { Collapse, CollapseProps, Row } from "antd";
import Table from "../table/table";

type Props = {
  table?: {
    id: number;
    status: boolean;
    size: string;
  }[];
  bar?: {
    id: number;
    status: boolean;
    size: string;
  }[];
};

function Reservation({ table, bar }: Props) {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Table",
      children: (
        <>
          <Row>
            {table?.map((m, i) => {
              return <Table key={i} data={m} />;
            })}
          </Row>
        </>
      ),
    },
    {
      key: "2",
      label: "Bar",
      children: (
        <>
          <Row>
            {bar?.map((m, i) => {
              return <Table key={i} data={m} />;
            })}
          </Row>
        </>
      ),
    },
  ];
  return (
    <>
      <Collapse
        defaultActiveKey={["1"]}
        items={items}
        expandIconPosition={"end"}
      />
    </>
  );
}

export default Reservation;
