"use client"
import React from "react";
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import LoginForm from "@/components/Auth/LoginForm";
import { Typography } from 'antd';
const { Title } = Typography;
const { Header, Content, Footer } = Layout;

export default function Page() {
  const items = new Array(4).fill(null).map((_, index) => ({
    key: index + 1,
    label: `nav ${index + 1}`,
  }));

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (

    <Layout style={{height: "100%"}}>
    <Content
      style={{
        padding: '0 48px',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
    <Title level={1} className="pb-5">VYFAC</Title>
      <div
        style={{
          background: colorBgContainer,
          minHeight: 500,
          borderRadius: borderRadiusLG,
        }}
        className="min-w-[30%] shadow-lg hover:shadow-2xl px-16 py-10"
      >
        <Title level={3} className="pb-5">Sign in to your account</Title>
        <LoginForm/>
      </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >

      VYFAC Design ©{new Date().getFullYear()}
    </Footer>
  </Layout>
  );
}
