"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PlotInteractionBox = _interopRequireDefault(require("./PlotInteractionBox"));

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

var PlotInteractionProvider =
/*#__PURE__*/
function (_Component) {
  _inherits(PlotInteractionProvider, _Component);

  function PlotInteractionProvider(props) {
    var _this;

    _classCallCheck(this, PlotInteractionProvider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PlotInteractionProvider).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleHovering", function (hoveringPosition) {
      _this.setState({
        hoveringPosition: hoveringPosition
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleHoverEnd", function () {
      _this.setState({
        hoveringPosition: null
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (clickPosition) {
      _this.setState({
        clickPosition: clickPosition
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDoubleClick", function (doubleClickPosition) {
      _this.setState({
        doubleClickPosition: doubleClickPosition
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelecting", function (selectingPositions) {
      _this.setState({
        selectingPositions: selectingPositions
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelected", function (selectedPositions) {
      _this.setState({
        selectedPositions: selectedPositions,
        selectingPositions: null
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handlePanning", function (panningPositions) {
      _this.setState({
        panningPositions: panningPositions
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handlePanned", function (pannedPositions) {
      _this.setState({
        pannedPositions: pannedPositions,
        panningPositions: null
      });
    });

    _this.state = {
      hoveringPosition: null,
      clickPosition: null,
      doubleClickPosition: null,
      selectingPositions: null,
      selectedPositions: null,
      panningPositions: null,
      pannedPositions: null
    };
    return _this;
  }

  _createClass(PlotInteractionProvider, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          render = _this$props.render,
          width = _this$props.width,
          height = _this$props.height,
          transitionGraph = _this$props.transitionGraph;
      return _react.default.createElement(_PlotInteractionBox.default, {
        width: width,
        height: height,
        transitionGraph: transitionGraph,
        hoveringHandler: this.handleHovering,
        hoverEndHandler: this.handleHoverEnd,
        clickHandler: this.handleClick,
        doubleClickHandler: this.handleDoubleClick,
        selectingHandler: this.handleSelecting,
        selectedHandler: this.handleSelected,
        panningHandler: this.handlePanning,
        pannedHandler: this.handlePanned
      }, render(this.state));
    }
  }]);

  return PlotInteractionProvider;
}(_react.Component);

PlotInteractionProvider.propTypes = {
  width: _propTypes.default.number.isRequired,
  height: _propTypes.default.number.isRequired,
  render: _propTypes.default.func.isRequired,
  transitionGraph: _propTypes.default.object.isRequired
};
var _default = PlotInteractionProvider;
exports.default = _default;