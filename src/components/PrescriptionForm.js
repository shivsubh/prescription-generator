import { Button, Form, Input, Select, DatePicker, Layout } from "antd";
import React from "react";
import "antd/dist/antd.css";
const { Option } = Select;
const { TextArea } = Input;
const { Header, Content } = Layout;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 2,
    },
    sm: {
      span: 4,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const config = {
  rules: [
    {
      type: "object",
      required: true,
      message: "Please select time!",
    },
  ],
};

const PrescriptionForm = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    const url = new URL(window.location.origin);
    url.search = new URLSearchParams({
      ...values,
      date: values.date.format("DD-MM-YYYY"),
    });
    window.open(url, "_blank").focus();
  };

  return (
    <Layout>
      <Header
        style={{
          color: "#fff",
          textAlign: "center",
          fontWeight: "bolder",
          fontSize: "2rem",
        }}
      >
        Doctor Prescription Generator
      </Header>
      <Content>
        <Form
          style={{ padding: "3rem" }}
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item
            name="username"
            label="Patient Name"
            rules={[
              {
                type: "uername",
                message: "The input is not valid username!",
              },
              {
                required: true,
                message: "Please input your username",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Patient's Age"
            name="age"
            rules={[{ required: true }]}
          >
            <Input type={"number"} name="age" />
          </Form.Item>

          <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) =>
              prevValues.gender !== currentValues.gender
            }
          >
            {({ getFieldValue }) =>
              getFieldValue("gender") === "other" ? (
                <Form.Item
                  name="customizeGender"
                  label="Customize Gender"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              ) : null
            }
          </Form.Item>

          <Form.Item name="date" label="DatePicker" {...config}>
            <DatePicker />
          </Form.Item>

          <Form.Item
            label="Medical Notes"
            name="notes"
            rules={[{ required: true }]}
          >
            <TextArea rows={4} name="notes" />
          </Form.Item>

          <Form.Item
            label="Details Of Medicines"
            name="medicines"
            rules={[{ required: true }]}
          >
            <TextArea rows={4} name="medicines" />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Generate Prescription
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default PrescriptionForm;
