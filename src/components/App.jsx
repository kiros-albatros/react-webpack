import "../styles/index.scss";
import React from "react";
import Recipes from "./Recipes";
import pic from "../images/pic2.jpg";
import { Layout, DatePicker, Space, Button } from 'antd';
import styled from 'styled-components';

const ButtonS = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const App = () => {
  return (
    <>
      <Layout>
        <section className="hero"></section>
        <main>
          <section>
            <h1>Hello its React bla</h1>
            <ButtonS>custom btn</ButtonS>
            <Button type="primary">Primary Button</Button>
          </section>
        </main>
        <Space direction="vertical">
          <DatePicker onChange={onChange} />
          <DatePicker onChange={onChange} picker="week" />
          <DatePicker onChange={onChange} picker="month" />
          <DatePicker onChange={onChange} picker="quarter" />
          <DatePicker onChange={onChange} picker="year" />
        </Space>
        <img src={pic} />
        <Recipes />
      </Layout>
    </>
  );
};

export default App;
