import News from "./News/News";
import { ConfigProvider } from "antd";

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Typography: {
              colorText: "white",
              colorTextDescription: "grey",
              colorLink: "#1890ff",
            },
            Tag: {
              defaultBg: "black",
              colorBorder: "grey",
              borderRadiusSM: 12,
            },
            Card: {
              colorBgContainer: "black",
            },
          },
        }}
      >
        <News />
      </ConfigProvider>
    </>
  );
}

export default App;
