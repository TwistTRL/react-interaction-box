# react-plot-interaction-box
An interactive box component designed to overlay plots to capture mouse interactions.
This is essential because under the current design, a plot is composed of multiple canvases. The order of the layer would inevitably interfere with mouse interactions. The top layer captures all the mouse events and the layers below are not able to capture any events.

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

