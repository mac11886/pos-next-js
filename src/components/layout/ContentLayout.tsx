import { Layout } from "antd";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function ContentLayout({ children }: Props) {
  return (
    <Layout.Content
      style={{ height: "calc(100vh - 100px - 50px)", overflow: "auto" }}
    >
      {children}
    </Layout.Content>
  );
}
