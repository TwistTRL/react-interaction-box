import React, { Component } from "react";
import PropTypes from "prop-types";

class Relay extends Component {
  constructor(props){
    super(props);
    this.lastData = null;
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
    if (data === this.lastData ){
      //pass
    }
    else {
      this.lastData = data;
      updateHandler(data);
    }
    return null;
  }
}


Relay.propTypes = {
  data: PropTypes.object.isRequired,
  updateHandler: PropTypes.func.isRequired,
};

export default Relay;
