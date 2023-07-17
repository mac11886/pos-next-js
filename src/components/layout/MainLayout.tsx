import { Layout } from "antd";
import ContentLayout from "./ContentLayout";
import FooterLayout from "./FooterLayout";
import HeaderLayout from "./HeaderLayout";

type Props = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: Props) => {
  return (
    <Layout>
      <HeaderLayout />
      <ContentLayout children={children} />
      <FooterLayout />
    </Layout>
  );
};

export default MainLayout;
