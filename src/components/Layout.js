import React from "react";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";

import { createGlobalStyle } from "styled-components";
import futuraStd from "../fonts/FuturaStd-Medium.otf";
import futuraStdBold from "../fonts/FuturaStd-Bold.otf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'FuturaStd';
    src: url('${futuraStd}');
  }
  @font-face {
    font-family: 'FuturaStd';
    font-weight: bold;
    src: url('${futuraStdBold}');
  }
  html, body {
    padding: 0;
    margin: 0;
  }
  * {
    box-sizing: border-box;
    font-family: FuturaStd;
    font-weight: normal;
    font-size: 16px;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
  }
  span, p, h1, h2, h3, h4, h5, h6, label, i, button {
    color: inherit;
    margin: 0px;
  }
  ul {
    list-style-type: none;
  }
  ul, li {
    margin: 0;
    padding: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    border: none;
    outline: none;
  }
`;

const TemplateWrapper = ({ children }) => (
  <div>
    <GlobalStyle />
    <Helmet title="Wassup PARIS" />
    <Navbar />
    {children}
  </div>
);

export default TemplateWrapper;
