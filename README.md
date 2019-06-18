# react-plot-interaction-box

An interactive box component designed to overlay plots to capture mouse interactions.

This is essential because under the current design. A plot is composed of multiple canvases. The order of the layer would inevitably interfere with mouse interactions. The top layer captures all the mouse events and the layers below are not able to capture any events.

This component mitigate this problem by providing mouse interactions to other components as long as they receive respective props. The limitations are, of course, other components cannot capture complicated mouse interactions that is not designed into this react-plot-interaction-box component. Deal with it.

## Demo
https://twisttrl.github.io/react-plot-interaction-box

## Examples

* PlotInteractionBox

PlotInteractionBox captures the interactions and notify their changes through callbacks.

Callbacks are not desirable sometimes; it may create multiple round trips to the state/store to update the affected components:

<PlotInteractionBox> ==\[through state\]==> <SomeDataPointSelector> ==\[through state\]==> <DataPointPlot>

```
<PlotInteractionBox width={width}
                    height={height}
                    transitionGraph={TRANSITION_GRAPH[transitionGraph_]}
                    hoveringHandler={({domX,domY,clientX,clientY})=>...}
                    hoverEndHandler={()=>...)}
                    clickHandler={({domX,domY,clientX,clientY})=>...}
                    doubleClickHandler={({domX,domY,clientX,clientY})=>...}
                    selectingHandler={({start.domX,start.domY,start.clientX,start.clientY,
                                        end.domX,end.domY,end.clientX,end.clientY})=>...}
                    selectedHandler={({start.domX,start.domY,start.clientX,start.clientY,
                                        end.domX,end.domY,end.clientX,end.clientY})=>...}
                    panningHandler={({start.domX,start.domY,start.clientX,start.clientY,
                                        end.domX,end.domY,end.clientX,end.clientY})=>...}
                    pannedHandler={({start.domX,start.domY,start.clientX,start.clientY,
                                        end.domX,end.domY,end.clientX,end.clientY})=>...}
  <div style={{width:"100%",height:"100%",backgroundColor:"grey"}}>
  </div>
</PlotInteractionBox>
```

* PlotInteractionProvider

`PlotInteractionProvider` builds upon `PlotInteractionBox`. It (indirectly) maps callbacks into props. It can be used to avoid round trips to state/store.
<PlotInteractionProvider> ====> <SomeDataPointSelector> ==\[through state\]==> <DataPointPlot>

```
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
```

* Relay

Relay can be useful when you use <PlotInteractionProvider>, but want to update mouse interactions in state/store. It is mainly provided for convinience.

```
<Relay  data={interactions}
        updateHandler={console.log}
        />
```

## Design
In designing this compoennts, I looked at dygraph.js. In dygraph.js, mouse event is captures by a top layer canvas. The mouse interactions are then passed to the rest of the plot plugins.
Hence, this interaction box is born, to mirror the design of degraph.js.
Plot interactions are complex. To enable some levels of customizability, we defined `mode`s and `action`s. There are 4 `mode`s and they transition between one another based on `action`s. Users can disable (skip) certain `mode`s by customize the way they transition.

## Modes
* hovering
* clicking
* autoselecting
* selecting
* panning

## Actions
* mousemove
* mousedown
* mouseup
* timeout

## Transitions between modes
TODO
