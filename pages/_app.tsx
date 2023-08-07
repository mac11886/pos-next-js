import MainLayout from "@/components/layout/MainLayout";
import "@/styles/globals.css";
import { _getStorage } from "@/util/local-storage";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const route = useRouter();

  const getToken = _getStorage("token");
  console.log("token", getToken);
  if (!getToken) {
    typeof window !== "undefined" && route.push("/login");
  }
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#b2cc53" } }}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ConfigProvider>
  );
}
