import React, {Component} from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import VerticalCrosshair, {VerticalCrosshairSelector} from "react-plot-vertical-crosshair";

import {PlotInteractionBox,PlotInteractionProvider, Relay} from "./lib";
import {INTERACTION_MODEL_DEFAULT,INTERACTION_MODEL_SELECTING,
        INTERACTION_MODEL_PANNING,INTERACTION_MODEL_BARE} from "./lib";
// CSS
import "./index.css";

const TRANSITION_GRAPH = {INTERACTION_MODEL_DEFAULT,INTERACTION_MODEL_SELECTING,
                          INTERACTION_MODEL_PANNING,INTERACTION_MODEL_BARE};

class PlotInteractionBoxBundle extends Component {
  constructor(props){
    super(props);
    this.state = {width: 1000,
                  height: 400,
                  transitionGraph_: "INTERACTION_MODEL_BARE",
                  interactions: {
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
                    }
                  };
  }
  render() {
    let {width,height,transitionGraph_,interactions} = this.state;
    return(
      <>
        <fieldset>
          <legend>Props</legend>
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
        </fieldset>
        <fieldset>
          <legend>Result</legend>
          <PlotInteractionBox width={width}
                              height={height}
                              transitionGraph={TRANSITION_GRAPH[transitionGraph_]}
                              hoveringHandler={(positions)=>this.setState( {interactions:{...interactions,
                                                                                          hoveringDomX: positions.domX,
                                                                                          hoveringDomY: positions.domY,
                                                                                          hoveringClientX: positions.clientX,
                                                                                          hoveringClientY: positions.clientY,
                                                                                          }
                                                                            })
                                                }
                              hoverEndHandler={()=>this.setState( {interactions:{ ...interactions,
                                                                                  hoveringDomX: null,
                                                                                  hoveringDomY: null,
                                                                                  hoveringClientX: null,
                                                                                  hoveringClientY: null,
                                                                                  }
                                                                  })
                                                }
                              clickHandler={(positions)=>this.setState( {interactions:{ ...interactions,
                                                                                        clickDomX: positions.domX,
                                                                                        clickDomY: positions.domY,
                                                                                        clickClientX: positions.clientX,
                                                                                        clickClientY: positions.clientY,
                                                                                        }
                                                                        })
                                                }
                              doubleClickHandler={(positions)=>this.setState({interactions:{...interactions,
                                                                                            doubleClickDomX: positions.domX,
                                                                                            doubleClickDomY: positions.domY,
                                                                                            doubleClickClientX: positions.clientX,
                                                                                            doubleClickClientY: positions.clientY,
                                                                                            }
                                                                              })
                                                  }
                              selectingHandler={(positions)=>this.setState({interactions:{...interactions,
                                                                                          selectingStartDomX: positions.start.domX,
                                                                                          selectingStartDomY: positions.start.domY,
                                                                                          selectingStartClientX: positions.start.clientX,
                                                                                          selectingStartClientY: positions.start.clientY,
                                                                                          selectingEndDomX: positions.end.domX,
                                                                                          selectingEndDomY: positions.end.domY,
                                                                                          selectingEndClientX: positions.end.clientX,
                                                                                          selectingEndClientY: positions.end.clientY,
                                                                                          }
                                                                            })
                                                }
                              selectedHandler={(positions)=>this.setState({ interactions:{...interactions,
                                                                                          selectingStartDomX: null,
                                                                                          selectingStartDomY: null,
                                                                                          selectingStartClientX: null,
                                                                                          selectingStartClientY: null,
                                                                                          selectingEndDomX: null,
                                                                                          selectingEndDomY: null,
                                                                                          selectingEndClientX: null,
                                                                                          selectingEndClientY: null,
                                                                                          }
                                                                            })
                                                }
                              panningHandler={(positions)=>this.setState({interactions:{...interactions,
                                                                                        panningStartDomX: positions.start.domX,
                                                                                        panningStartDomY: positions.start.domY,
                                                                                        panningStartClientX: positions.start.clientX,
                                                                                        panningStartClientY: positions.start.clientY,
                                                                                        panningEndDomX: positions.end.domX,
                                                                                        panningEndDomY: positions.end.domY,
                                                                                        panningEndClientX: positions.end.clientX,
                                                                                        panningEndClientY: positions.end.clientY,
                                                                                        }
                                                                          })
                                              }
                              pannedHandler={(positions)=>this.setState({ interactions:{...interactions,
                                                                                        panningStartDomX: null,
                                                                                        panningStartDomY: null,
                                                                                        panningStartClientX: null,
                                                                                        panningStartClientY: null,
                                                                                        panningEndDomX: null,
                                                                                        panningEndDomY: null,
                                                                                        panningEndClientX: null,
                                                                                        panningEndClientY: null,
                                                                                        }
                                                                          })
                                              }
                              >
            <div style={{width:"100%",height:"100%",backgroundColor:"grey"}}>
            </div>
          </PlotInteractionBox>
        </fieldset>
        <fieldset>
          <legend>Comment</legend>
          The mouse interaction goes to the state and then updates the following display.
          <pre>
            {JSON.stringify(this.state.interactions,null,' ')}
          </pre>
        </fieldset>
        <fieldset>
          <legend>Code snippet</legend>
          <pre>
            {
`<PlotInteractionBox width={width}
                    height={height}
                    transitionGraph={TRANSITION_GRAPH[transitionGraph_]}
                    hoveringHandler={(positions)=>this.setState( {interactions:{...interactions,
                                                                                hoveringDomX: positions.domX,
                                                                                hoveringDomY: positions.domY,
                                                                                hoveringClientX: positions.clientX,
                                                                                hoveringClientY: positions.clientY,
                                                                                }
                                                                  })
                                      }
                    hoverEndHandler={()=>this.setState( {interactions:{ ...interactions,
                                                                        hoveringDomX: null,
                                                                        hoveringDomY: null,
                                                                        hoveringClientX: null,
                                                                        hoveringClientY: null,
                                                                        }
                                                        })
                                      }
                    clickHandler={(positions)=>this.setState( {interactions:{ ...interactions,
                                                                              clickDomX: positions.domX,
                                                                              clickDomY: positions.domY,
                                                                              clickClientX: positions.clientX,
                                                                              clickClientY: positions.clientY,
                                                                              }
                                                              })
                                      }
                    doubleClickHandler={(positions)=>this.setState({interactions:{...interactions,
                                                                                  doubleClickDomX: positions.domX,
                                                                                  doubleClickDomY: positions.domY,
                                                                                  doubleClickClientX: positions.clientX,
                                                                                  doubleClickClientY: positions.clientY,
                                                                                  }
                                                                    })
                                        }
                    selectingHandler={(positions)=>this.setState({interactions:{...interactions,
                                                                                selectingStartDomX: positions.start.domX,
                                                                                selectingStartDomY: positions.start.domY,
                                                                                selectingStartClientX: positions.start.clientX,
                                                                                selectingStartClientY: positions.start.clientY,
                                                                                selectingEndDomX: positions.end.domX,
                                                                                selectingEndDomY: positions.end.domY,
                                                                                selectingEndClientX: positions.end.clientX,
                                                                                selectingEndClientY: positions.end.clientY,
                                                                                }
                                                                  })
                                      }
                    selectedHandler={(positions)=>this.setState({ interactions:{...interactions,
                                                                                selectingStartDomX: null,
                                                                                selectingStartDomY: null,
                                                                                selectingStartClientX: null,
                                                                                selectingStartClientY: null,
                                                                                selectingEndDomX: null,
                                                                                selectingEndDomY: null,
                                                                                selectingEndClientX: null,
                                                                                selectingEndClientY: null,
                                                                                }
                                                                  })
                                      }
                    panningHandler={(positions)=>this.setState({interactions:{...interactions,
                                                                              panningStartDomX: positions.start.domX,
                                                                              panningStartDomY: positions.start.domY,
                                                                              panningStartClientX: positions.start.clientX,
                                                                              panningStartClientY: positions.start.clientY,
                                                                              panningEndDomX: positions.end.domX,
                                                                              panningEndDomY: positions.end.domY,
                                                                              panningEndClientX: positions.end.clientX,
                                                                              panningEndClientY: positions.end.clientY,
                                                                              }
                                                                })
                                    }
                    pannedHandler={(positions)=>this.setState({ interactions:{...interactions,
                                                                              panningStartDomX: null,
                                                                              panningStartDomY: null,
                                                                              panningStartClientX: null,
                                                                              panningStartClientY: null,
                                                                              panningEndDomX: null,
                                                                              panningEndDomY: null,
                                                                              panningEndClientX: null,
                                                                              panningEndClientY: null,
                                                                              }
                                                                })
                                    }
                    >
  <div style={{width:"100%",height:"100%",backgroundColor:"grey"}}>
  </div>
</PlotInteractionBox>
`
            }
          </pre>
        </fieldset>
      </>
    );
  }
}

class PlotInteractionProviderBundle extends Component {
  constructor(props) {
    super(props);
    this.state = {width: 1000,
                  height: 400,
                  transitionGraph_: "INTERACTION_MODEL_BARE"
                  }
  }
  render(){
    let {width,height,transitionGraph_} = this.state;
    return (
      <>
        <fieldset>
          <legend>Props</legend>
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
                <li>render</li>
            </ul>
          </div>
        </fieldset>
        <fieldset>
          <legend>Result</legend>
          <PlotInteractionProvider  width={width}
                                    height={height}
                                    transitionGraph={TRANSITION_GRAPH[transitionGraph_]}
                                    render={(interactions) =>
            <>
              <div style={{width:"100%",height:"100%",backgroundColor:"lightgrey"}}>
                <pre>
                  {JSON.stringify(interactions,null,' ')}
                </pre>
              </div>
              <Relay  data={interactions}
                      updateHandler={console.log}
                      />
            </>
                                    }/>
        </fieldset>
        <fieldset>
          <legend>Comment</legend>
          <p>The render props allows the interactions to be passed to other components without a round trip into the state.dataPointSelection and prevent unnecessary rerender.</p>
          <small>Actually, the round trip takes place in PlotInteractionProvider.</small>
        </fieldset>
      </>
    )
  }
}

class PlotInteractionProviderwithVerticalCrosshairBundle extends Component {
  constructor(props) {
    super(props);
    this.state = {crosshairX:null};
  }
  
  render() {
    let {crosshairX} = this.state;
    let width = 400;
    let height = 400; 
    let minX = 0;
    let maxX = 400;
    
    return (
      <div style={{position:"relative",width:width,height:height}}>
        <div style={{ position:"absolute",
                      backgroundImage:"linear-gradient(to bottom right, rgba(0,0,0,0), lightblue)",
                      width:width,height:height
                      }}>
        </div>
        <div style={{ position:"absolute",
                      backgroundImage:"linear-gradient(to bottom right, pink, rgba(0,0,0,0))",
                      width:width,height:height
                      }}>
        </div>
        <div style={{ position:"absolute",
                      width:width,height:height
                      }}>
          <VerticalCrosshair  width={width} height={height}
                              minX={minX}
                              maxX={maxX}
                              X={crosshairX}
                              />
        </div>
        <div style={{ position:"absolute",
                      width:width,height:height
                      }}>
          <PlotInteractionProvider  width={width} height={height}
                                    transitionGraph={INTERACTION_MODEL_BARE}
                                    render={(positions)=>
            <VerticalCrosshairSelector  width={width}
                                        minX={minX}
                                        maxX={maxX}
                                        hoveringPosition={positions.hoveringPosition}
                                        selectHandler={(X)=>{
                                          this.setState({crosshairX:X});
                                        }}
                                        />
                                    }/>
        </div>
      </div>
    );
  }
}

const App = (props)=>{
  return (
    <Router>
      <nav className="app">
        <Link to="/PlotInteractionBox">PlotInteractionBox</Link>
        <Link to="/PlotInteractionProvider">PlotInteractionProvider</Link>
        <Link to="/PlotInteractionProvider_with_VerticalCrosshair">PlotInteractionProvider with VerticalCrosshair</Link>
      </nav>
      <Route path="/PlotInteractionBox" exact component={PlotInteractionBoxBundle}/>
      <Route path="/PlotInteractionProvider" exact component={PlotInteractionProviderBundle}/>
      <Route path="/PlotInteractionProvider_with_VerticalCrosshair" exact component={PlotInteractionProviderwithVerticalCrosshairBundle}/>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
