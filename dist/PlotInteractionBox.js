"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.INTERACTION_MODEL_BARE = exports.INTERACTION_MODEL_PANNING = exports.INTERACTION_MODEL_SELECTING = exports.INTERACTION_MODEL_DEFAULT = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DragOverlay = _interopRequireDefault(require("./DragOverlay"));

var _CountDown = _interopRequireDefault(require("./CountDown"));

var _MODE_CLICKING, _MODE_AUTOSELECTING, _INTERACTION_MODEL_DE, _MODE_CLICKING2, _INTERACTION_MODEL_SE, _MODE_CLICKING3, _INTERACTION_MODEL_PA, _INTERACTION_MODEL_BA;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MODE_HOVERING = "hovering";
var MODE_CLICKING = "clicking";
var MODE_AUTOSELECTING = "autoSelecting";
var MODE_SELECTING = "selecting";
var MODE_PANNING = "panning";
var ACTION_MOUSEDOWN = "mouseDown";
var ACTION_MOUSEMOVE = "mouseMove";
var ACTION_MOUSEUP = "mouseUp";
var ACTION_TIMEOUT = "timeout";
var INTERACTION_MODEL_DEFAULT = (_INTERACTION_MODEL_DE = {}, _defineProperty(_INTERACTION_MODEL_DE, MODE_HOVERING, _defineProperty({}, ACTION_MOUSEDOWN, MODE_CLICKING)), _defineProperty(_INTERACTION_MODEL_DE, MODE_CLICKING, (_MODE_CLICKING = {}, _defineProperty(_MODE_CLICKING, ACTION_TIMEOUT, MODE_AUTOSELECTING), _defineProperty(_MODE_CLICKING, ACTION_MOUSEMOVE, MODE_SELECTING), _defineProperty(_MODE_CLICKING, ACTION_MOUSEUP, MODE_HOVERING), _MODE_CLICKING)), _defineProperty(_INTERACTION_MODEL_DE, MODE_AUTOSELECTING, (_MODE_AUTOSELECTING = {}, _defineProperty(_MODE_AUTOSELECTING, ACTION_TIMEOUT, MODE_PANNING), _defineProperty(_MODE_AUTOSELECTING, ACTION_MOUSEMOVE, MODE_SELECTING), _MODE_AUTOSELECTING)), _defineProperty(_INTERACTION_MODEL_DE, MODE_SELECTING, _defineProperty({}, ACTION_MOUSEUP, MODE_HOVERING)), _defineProperty(_INTERACTION_MODEL_DE, MODE_PANNING, _defineProperty({}, ACTION_MOUSEUP, MODE_HOVERING)), _INTERACTION_MODEL_DE);
exports.INTERACTION_MODEL_DEFAULT = INTERACTION_MODEL_DEFAULT;
var INTERACTION_MODEL_SELECTING = (_INTERACTION_MODEL_SE = {}, _defineProperty(_INTERACTION_MODEL_SE, MODE_HOVERING, _defineProperty({}, ACTION_MOUSEDOWN, MODE_CLICKING)), _defineProperty(_INTERACTION_MODEL_SE, MODE_CLICKING, (_MODE_CLICKING2 = {}, _defineProperty(_MODE_CLICKING2, ACTION_TIMEOUT, MODE_SELECTING), _defineProperty(_MODE_CLICKING2, ACTION_MOUSEMOVE, MODE_SELECTING), _defineProperty(_MODE_CLICKING2, ACTION_MOUSEUP, MODE_HOVERING), _MODE_CLICKING2)), _defineProperty(_INTERACTION_MODEL_SE, MODE_SELECTING, _defineProperty({}, ACTION_MOUSEUP, MODE_HOVERING)), _INTERACTION_MODEL_SE);
exports.INTERACTION_MODEL_SELECTING = INTERACTION_MODEL_SELECTING;
var INTERACTION_MODEL_PANNING = (_INTERACTION_MODEL_PA = {}, _defineProperty(_INTERACTION_MODEL_PA, MODE_HOVERING, _defineProperty({}, ACTION_MOUSEDOWN, MODE_CLICKING)), _defineProperty(_INTERACTION_MODEL_PA, MODE_CLICKING, (_MODE_CLICKING3 = {}, _defineProperty(_MODE_CLICKING3, ACTION_TIMEOUT, MODE_PANNING), _defineProperty(_MODE_CLICKING3, ACTION_MOUSEMOVE, MODE_PANNING), _defineProperty(_MODE_CLICKING3, ACTION_MOUSEUP, MODE_HOVERING), _MODE_CLICKING3)), _defineProperty(_INTERACTION_MODEL_PA, MODE_PANNING, _defineProperty({}, ACTION_MOUSEUP, MODE_HOVERING)), _INTERACTION_MODEL_PA);
exports.INTERACTION_MODEL_PANNING = INTERACTION_MODEL_PANNING;
var INTERACTION_MODEL_BARE = (_INTERACTION_MODEL_BA = {}, _defineProperty(_INTERACTION_MODEL_BA, MODE_HOVERING, _defineProperty({}, ACTION_MOUSEDOWN, MODE_CLICKING)), _defineProperty(_INTERACTION_MODEL_BA, MODE_CLICKING, _defineProperty({}, ACTION_MOUSEUP, MODE_HOVERING)), _INTERACTION_MODEL_BA);
exports.INTERACTION_MODEL_BARE = INTERACTION_MODEL_BARE;

var PlotInteractionBox =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(PlotInteractionBox, _PureComponent);

  function PlotInteractionBox(props) {
    var _this;

    _classCallCheck(this, PlotInteractionBox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PlotInteractionBox).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleMouseMove_Hovering", function (ev) {
      var hoveringHandler = _this.props.hoveringHandler;

      var myEV = _this.getCustomEventObject(ev);

      hoveringHandler(myEV);
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseOut_Hovering", function (ev) {
      var hoverEndHandler = _this.props.hoverEndHandler;
      hoverEndHandler();
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseDown_Hovering", function (ev) {
      var hoverEndHandler = _this.props.hoverEndHandler;
      ev.preventDefault();

      var myEV = _this.getCustomEventObject(ev);

      _this.initialMouseDownPosition = myEV;
      hoverEndHandler();

      _this.transition(ACTION_MOUSEDOWN);
    });

    _defineProperty(_assertThisInitialized(_this), "clickTimeout", function () {
      _this.transition(ACTION_TIMEOUT);
    });

    _defineProperty(_assertThisInitialized(_this), "autoSelectingTimeout", function () {
      _this.transition(ACTION_TIMEOUT);
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseMove_Clicking", function (ev) {
      var _assertThisInitialize = _assertThisInitialized(_this),
          initialMouseDownPosition = _assertThisInitialize.initialMouseDownPosition;

      var myEV = _this.getCustomEventObject(ev);

      if (Math.abs(myEV.domX - initialMouseDownPosition.domX) < 10 || Math.abs(myEV.domY - initialMouseDownPosition.domX) < 10) {
        return;
      } else {
        _this.transition(ACTION_MOUSEMOVE);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseUp_Clicking", function (ev) {
      var _this$props = _this.props,
          clickHandler = _this$props.clickHandler,
          doubleClickHandler = _this$props.doubleClickHandler;

      var _assertThisInitialize2 = _assertThisInitialized(_this),
          prevClickTimeStamp = _assertThisInitialize2.prevClickTimeStamp;

      var myEV = _this.getCustomEventObject(ev);

      if (prevClickTimeStamp === null || prevClickTimeStamp + 200 < ev.timeStamp) {
        _this.prevClickTimeStamp = ev.timeStamp;
        clickHandler(myEV);
      } else {
        _this.prevClickTimeStamp = null;
        doubleClickHandler(myEV);
      }

      _this.transition(ACTION_MOUSEUP);
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseMove_AutoSelecting", function (ev) {
      var selectingHandler = _this.props.selectingHandler;

      var _assertThisInitialize3 = _assertThisInitialized(_this),
          initialMouseDownPosition = _assertThisInitialize3.initialMouseDownPosition;

      var myEV = _this.getCustomEventObject(ev);

      if (Math.abs(myEV.domX - initialMouseDownPosition.domX) < 10 || Math.abs(myEV.domY - initialMouseDownPosition.domX) < 10) {
        return;
      } else {
        selectingHandler({
          start: initialMouseDownPosition,
          end: myEV
        });

        _this.transition(ACTION_MOUSEMOVE);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseUp_AutoSelecting", function (ev) {
      _this.transition(ACTION_MOUSEUP);
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseMove_Selecting", function (ev) {
      var selectingHandler = _this.props.selectingHandler;

      var _assertThisInitialize4 = _assertThisInitialized(_this),
          initialMouseDownPosition = _assertThisInitialize4.initialMouseDownPosition;

      var myEV = _this.getCustomEventObject(ev);

      selectingHandler({
        start: initialMouseDownPosition,
        end: myEV
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseUp_Selecting", function (ev) {
      var selectedHandler = _this.props.selectedHandler;

      var _assertThisInitialize5 = _assertThisInitialized(_this),
          initialMouseDownPosition = _assertThisInitialize5.initialMouseDownPosition;

      var myEV = _this.getCustomEventObject(ev);

      selectedHandler({
        start: initialMouseDownPosition,
        end: myEV
      });

      _this.transition(ACTION_MOUSEUP);
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseMove_Panning", function (ev) {
      var panningHandler = _this.props.panningHandler;

      var _assertThisInitialize6 = _assertThisInitialized(_this),
          initialMouseDownPosition = _assertThisInitialize6.initialMouseDownPosition;

      var myEV = _this.getCustomEventObject(ev);

      panningHandler({
        start: initialMouseDownPosition,
        end: myEV
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseUp_Panning", function (ev) {
      var pannedHandler = _this.props.pannedHandler;

      var _assertThisInitialize7 = _assertThisInitialized(_this),
          initialMouseDownPosition = _assertThisInitialize7.initialMouseDownPosition;

      var myEV = _this.getCustomEventObject(ev);

      pannedHandler({
        start: initialMouseDownPosition,
        end: myEV
      });

      _this.transition(ACTION_MOUSEUP);
    });

    _this.state = {
      mode: MODE_HOVERING
    };
    _this.ref = _react.default.createRef();
    _this.initialMouseDownPosition = null;
    _this.prevClickTimeStamp = null;
    return _this;
  }

  _createClass(PlotInteractionBox, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          width = _this$props2.width,
          height = _this$props2.height,
          children = _this$props2.children;
      var style = {
        width: width,
        height: height
      };

      switch (this.state.mode) {
        case MODE_HOVERING:
          return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
            ref: this.ref,
            style: style,
            onMouseMove: this.handleMouseMove_Hovering,
            onMouseOut: this.handleMouseOut_Hovering,
            onMouseDown: this.handleMouseDown_Hovering
          }, children));

        case MODE_CLICKING:
          return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
            ref: this.ref,
            style: style
          }, children), _react.default.createElement(_DragOverlay.default, {
            mouseMoveHandler: this.handleMouseMove_Clicking,
            mouseUpHandler: this.handleMouseUp_Clicking,
            cursor: "point"
          }), _react.default.createElement(_CountDown.default, {
            timeout: 200,
            callback: this.clickTimeout
          }));

        case MODE_AUTOSELECTING:
          return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
            ref: this.ref,
            style: style
          }, children), _react.default.createElement(_DragOverlay.default, {
            mouseMoveHandler: this.handleMouseMove_AutoSelecting,
            mouseUpHandler: this.handleMouseUp_AutoSelecting,
            cursor: "nesw-resize"
          }), _react.default.createElement(_CountDown.default, {
            timeout: 500,
            callback: this.autoSelectingTimeout
          }));

        case MODE_SELECTING:
          return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
            ref: this.ref,
            style: style
          }, children), _react.default.createElement(_DragOverlay.default, {
            mouseMoveHandler: this.handleMouseMove_Selecting,
            mouseUpHandler: this.handleMouseUp_Selecting,
            cursor: "nesw-resize"
          }));

        case MODE_PANNING:
          return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
            ref: this.ref,
            style: style
          }, children), _react.default.createElement(_DragOverlay.default, {
            mouseMoveHandler: this.handleMouseMove_Panning,
            mouseUpHandler: this.handleMouseUp_Panning,
            cursor: "grabbing"
          }));

        default:
          throw new Error("ProgrammerTooDumbError");
      }
    }
  }, {
    key: "transition",
    value: function transition(action) {
      var transitionGraph = this.props.transitionGraph;
      var mode = this.state.mode;
      var nextMode = transitionGraph[mode][action];

      if (nextMode) {
        this.setState({
          mode: nextMode
        });
      }
    }
  }, {
    key: "getCustomEventObject",
    value: function getCustomEventObject(ev) {
      var _this$ref$current$get = this.ref.current.getBoundingClientRect(),
          left = _this$ref$current$get.left,
          top = _this$ref$current$get.top;

      var clientX = ev.clientX,
          clientY = ev.clientY;
      var domX = clientX - left;
      var domY = clientY - top;
      return {
        domX: domX,
        domY: domY,
        clientX: clientX,
        clientY: clientY
      };
    }
  }]);

  return PlotInteractionBox;
}(_react.PureComponent);

PlotInteractionBox.propTypes = {
  width: _propTypes.default.number.isRequired,
  height: _propTypes.default.number.isRequired,
  children: _propTypes.default.node,
  transitionGraph: _propTypes.default.object.isRequired,
  hoveringHandler: _propTypes.default.func.isRequired,
  hoverEndHandler: _propTypes.default.func.isRequired,
  clickHandler: _propTypes.default.func.isRequired,
  doubleClickHandler: _propTypes.default.func.isRequired,
  selectingHandler: _propTypes.default.func.isRequired,
  selectedHandler: _propTypes.default.func.isRequired,
  panningHandler: _propTypes.default.func.isRequired,
  pannedHandler: _propTypes.default.func.isRequired
};
var _default = PlotInteractionBox;
exports.default = _default;