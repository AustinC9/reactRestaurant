import Axios from "axios";
import React, { Component } from "react";
//import capmeme from "./capmeme.jpg";

export class Appetizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //menu: 0,
      menuData: {},
    };
  }
  componentDidMount() {
    let apiURL = `https://entree-f18.herokuapp.com/v1/menu/10`;
    let self = this;
    Axios.get(apiURL, self)
      .then(function (response) {
        //console.log("line 16", response.data);
        //return response.data
        self.setState({ menuData: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
    //console.log(axiosData)
    //this.setState({menuData: axiosData})

    // .then(function () {

    // });
  }
  render() {
    //console.log(this.state.menuData);
    return (
    
        (Object.keys(this.state.menuData).length > 0) ?
      <div className="container container-fluid">
          <ul>
              {this.state.menuData.menu_items.map((menu_item,i) =>
              <div key={i}>
                  <h4>{menu_item.description.split(' with ')[0]}</h4>
                  <li>{menu_item.description}</li>
                  <p>{(menu_item.description.length)/2}</p>
              </div>)}
          </ul>
      </div>
        : <div>Menu Loading
        {/* <img src={capmeme} alt="Anthony" /> */}
        </div>
    );
    
  }
}

export default Appetizer;