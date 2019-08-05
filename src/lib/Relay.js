import React, { Component } from "react";
import PropTypes from "prop-types";

class Relay extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return null;
  }

  componentDidMount(){
    this.update();
  }
  
  componentDidUpdate(){
    this.update();
  }

  update(){
    let {data,updateHandler} = this.props;
    updateHandler(data);
    return null;
  }
}


Relay.propTypes = {
  data: PropTypes.object,
  updateHandler: PropTypes.func.isRequired,
};

export default Relay;
