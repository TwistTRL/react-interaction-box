import React, {Component} from "react";
import ReactDOM from "react-dom";
import {PlotInteractionBox} from "./lib";
import {INTERACTION_MODEL_DEFAULT,INTERACTION_MODEL_SELECTING,
        INTERACTION_MODEL_PANNING,INTERACTION_MODEL_BARE} from "./lib";

const TRANSITION_GRAPH = {INTERACTION_MODEL_DEFAULT,INTERACTION_MODEL_SELECTING,
                          INTERACTION_MODEL_PANNING,INTERACTION_MODEL_BARE};

class App extends Component {
  constructor(props){
    super(props);
    this.state = {width: 1000,
                  height: 400,
                  transitionGraph_: "INTERACTION_MODEL_BARE",
                  
                  hoveringDomX: null,
                   hoveringDomY: null,
                   hoveringClientX: null,
                   hoveringClientY: null,
                   panningStartDomX: null,
                   panningStartDomY: null,
                   panningStartClientX: null,
                   panningStartClientY: null,
                   panningEndDomX: null,
                   panningEndDomY: null,
                   panningEndClientX: null,
                   panningEndClientY: null,
                   selectingStartDomX: null,
                   selectingStartDomY: null,
                   selectingStartClientX: null,
                   selectingStartClientY: null,
                   selectingEndDomX: null,
                   selectingEndDomY: null,
                   selectingEndClientX: null,
                   selectingEndClientY: null,
                   clickDomX: null,
                   clickDomY: null,
                   clickClientX: null,
                   clickClientY: null,
                   doubleClickDomX: null,
                   doubleClickDomY: null,
                   doubleClickClientX: null,
                   doubleClickClientY: null
                  };
  }
  
  render() {
    let {width,height,transitionGraph_} = this.state;
    return(
      <>
        <div>
          width
          <input type="range" min={500} max={1000} value={width} onChange={(ev)=>this.setState({width:Number.parseInt(ev.target.value)})}/>
        </div>
        <div>
          height
          <input type="range" min={500} max={1000} value={height} onChange={(ev)=>this.setState({height:Number.parseInt(ev.target.value)})}/>
        </div>
        <div>
          transitionGraph
          <select value={transitionGraph_} onChange={(ev)=>this.setState({transitionGraph_:ev.target.value})}>
            <option value="INTERACTION_MODEL_BARE">BARE</option>
            <option value="INTERACTION_MODEL_SELECTING">SELECTING</option>
            <option value="INTERACTION_MODEL_PANNING">PANNING</option>
            <option value="INTERACTION_MODEL_DEFAULT">DEFAULT</option>
          </select>
        </div>
        <div>
          Additional arguments:
          <ul>
              <li>hoveringHandler: PropTypes.func.isRequired </li>
              <li>hoverEndHandler: PropTypes.func.isRequired</li>
              <li>clickHandler: PropTypes.func.isRequired</li>
              <li>doubleClickHandler: PropTypes.func.isRequired</li>
              <li>selectingHandler: PropTypes.func.isRequired</li>
              <li>selectedHandler: PropTypes.func.isRequired</li>
              <li>panningHandler:  PropTypes.func.isRequired</li>
              <li>pannedHandler: PropTypes.func.isRequired</li>
          </ul>
        </div>
        <PlotInteractionBox width={width}
                            height={height}
                            transitionGraph={TRANSITION_GRAPH[transitionGraph_]}
                            hoveringHandler={(positions)=>this.setState({ hoveringDomX: positions.domX,
                                                                          hoveringDomY: positions.domY,
                                                                          hoveringClientX: positions.clientX,
                                                                          hoveringClientY: positions.clientY,
                                                                          })}
                            hoverEndHandler={()=>this.setState({hoveringDomX: null,
                                                                hoveringDomY: null,
                                                                hoveringClientX: null,
                                                                hoveringClientY: null,
                                                                })}
                            clickHandler={(positions)=>this.setState({clickDomX: positions.domX,
                                                                      clickDomY: positions.domY,
                                                                      clickClientX: positions.clientX,
                                                                      clickClientY: positions.clientY,
                                                                      })}
                            doubleClickHandler={(positions)=>this.setState({doubleClickDomX: positions.domX,
                                                                            doubleClickDomY: positions.domY,
                                                                            doubleClickClientX: positions.clientX,
                                                                            doubleClickClientY: positions.clientY,
                                                                            })}
                            selectingHandler={(positions)=>this.setState({selectingStartDomX: positions.start.domX,
                                                                          selectingStartDomY: positions.start.domY,
                                                                          selectingStartClientX: positions.start.clientX,
                                                                          selectingStartClientY: positions.start.clientY,
                                                                          selectingEndDomX: positions.end.domX,
                                                                          selectingEndDomY: positions.end.domY,
                                                                          selectingEndClientX: positions.end.clientX,
                                                                          selectingEndClientY: positions.end.clientY,
                                                                          })}
                            selectedHandler={(positions)=>this.setState({ selectingStartDomX: null,
                                                                          selectingStartDomY: null,
                                                                          selectingStartClientX: null,
                                                                          selectingStartClientY: null,
                                                                          selectingEndDomX: null,
                                                                          selectingEndDomY: null,
                                                                          selectingEndClientX: null,
                                                                          selectingEndClientY: null,
                                                                          })}
                            panningHandler={(positions)=>this.setState({panningStartDomX: positions.start.domX,
                                                                        panningStartDomY: positions.start.domY,
                                                                        panningStartClientX: positions.start.clientX,
                                                                        panningStartClientY: positions.start.clientY,
                                                                        panningEndDomX: positions.end.domX,
                                                                        panningEndDomY: positions.end.domY,
                                                                        panningEndClientX: positions.end.clientX,
                                                                        panningEndClientY: positions.end.clientY,
                                                                        })}
                            pannedHandler={(positions)=>this.setState({ panningStartDomX: null,
                                                                        panningStartDomY: null,
                                                                        panningStartClientX: null,
                                                                        panningStartClientY: null,
                                                                        panningEndDomX: null,
                                                                        panningEndDomY: null,
                                                                        panningEndClientX: null,
                                                                        panningEndClientY: null,
                                                                        })}
                            >
          <div style={{width:"100%",height:"100%",backgroundColor:"grey"}}>
            asdasd
            asdasd
          </div>
        </PlotInteractionBox>
        <pre>
          {JSON.stringify(this.state,null,' ')}
        </pre>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
