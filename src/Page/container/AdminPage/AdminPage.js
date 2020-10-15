import React, { Component } from "react";

import Header from "../../component/Header.js";
import Navi from "../../component/Navi.js";

import "./AdminPage.css";

class AdminPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navi />
        <div class="AdminPage">
          <p>Admin1페이지</p>
          <p>영상처리 목록 리스트</p>
        </div>
      </div>
    );
  }
}
export default AdminPage;
