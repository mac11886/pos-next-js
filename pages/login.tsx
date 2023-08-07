import LoginViewmodel from "@/viewmodel/auth/loginViewmodel";
import { Button, Card, Checkbox, Form, Input, Space } from "antd";

type Props = {};

export default function Login({}: Props) {
  const { login } = LoginViewmodel();
  const onFinish = (values: any) => {
    login(values.username, values.password);
    console.log("Success:", values);
    console.log("Username:", values.username);
    console.log("Password:", values.password);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };
  return (
    <div style={{ justifyContent: "center", display: "flex" }}>
      <Card
        style={{
          justifyContent: "center",
          display: "flex",
          backgroundColor: "white",
          width: "40%",
          alignItems: "center",
          borderColor: "black",
          boxShadow: "10px",
        }}
      >
        <Space direction="vertical" style={{ textAlign: "center" }}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item<FieldType>
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </Card>
    </div>
  );
}
