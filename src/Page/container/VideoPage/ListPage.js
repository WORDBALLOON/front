import React, { Component, state } from "react";
import axios from "axios";

import Header from "../../component/Header.js";
import Navi from "../../component/Navi.js";

import "./ListPage.css";

class ListPage extends Component {
  searchword = localStorage.getItem("searchword");
  state = {
    ItemList: [],
  };

  loadItem = async () => {
    console.log("loadItem 들어옴");

    let body = {
      searchword: this.searchword,
    };

    axios
      .post("http://localhost:5050/api/searchword/title", body)
      .then((response) => {
        console.log("axios 들어옴");
        console.log(response);
        this.setState({
          ItemList: response.data,
        });
      });
  };

  componentDidMount() {
    this.loadItem();
  }

  render() {
    const { ItemList } = this.state;
    console.log("ItemList 확인");
    console.log(ItemList);
    return (
      <div>
        <Header />
        <Navi />
        <div className="ListPage">
          {/*<ListItemBox Itemcard={ItemList} />*/}
          <p>{this.searchword} 에 대한 검색 결과 :</p>
          <ul className="ListItemBox">
            {ItemList &&
              ItemList.map((itemdata) => {
                return (
                  <table className="itemtable">
                    <tr>
                      <td rowSpan="4" align="center">
                        <img
                          width="250px"
                          height="150px"
                          src={itemdata.thumbnail}
                          id="item_image"
                          alt=""
                        />
                      </td>
                      <td id="item_title">{itemdata.videotitle}</td>
                    </tr>
                    <tr>
                      <td id="item_uploader">{itemdata.uploader}</td>
                    </tr>
                    <tr>
                      <td id="item_temp"></td>
                    </tr>
                    <tr>
                      <td id="item_view">조회수 : {itemdata.view}</td>
                    </tr>
                  </table>
                );
              })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ListPage;
