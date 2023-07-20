import { ListTable } from "@/repositories/table/interface";
import { Collapse, CollapseProps, Row } from "antd";
import Table from "../table/table";

type Props = {
  table?: ListTable | null;
  bar?: ListTable | null;
};

function Reservation({ table, bar }: Props) {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Table",
      children: (
        <>
          <Row>
            {table?.table.map((m, i) => {
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
            {bar?.table.map((m, i) => {
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
