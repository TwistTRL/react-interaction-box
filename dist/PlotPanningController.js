"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _plotUtils = require("plot-utils");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PlotHorizontalPanningController =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(PlotHorizontalPanningController, _PureComponent);

  function PlotHorizontalPanningController(props) {
    var _this;

    _classCallCheck(this, PlotHorizontalPanningController);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PlotHorizontalPanningController).call(this, props));
    _this.lastEvent = null;
    _this.snapshot = {};
    return _this;
  }

  _createClass(PlotHorizontalPanningController, [{
    key: "render",
    value: function render() {
      return null;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.pan();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.pan();
    }
  }, {
    key: "pan",
    value: function pan() {
      var _this$props = this.props,
          panningPositions = _this$props.panningPositions,
          panHandler = _this$props.panHandler,
          minX = _this$props.minX,
          maxX = _this$props.maxX,
          width = _this$props.width;
      var snapshot = this.snapshot; // Do not process stale panningPositions

      if (panningPositions === this.lastEvent) {
        return;
      } // Panning stops


      if (panningPositions === null) {
        this.lastEvent = null;
        return;
      } // Panning ongoing


      if (!this.lastEvent) {
        //Start of panning, store snapshot
        snapshot.minX = minX;
        snapshot.maxX = maxX;
        snapshot.width = width;
        snapshot.initialDataX = (0, _plotUtils.fromDomXCoord_Linear)(width, minX, maxX, panningPositions.start.domX);
      }

      var curDataX = (0, _plotUtils.fromDomXCoord_Linear)(snapshot.width, snapshot.minX, snapshot.maxX, panningPositions.end.domX);
      var deltaX = curDataX - snapshot.initialDataX;
      panHandler(snapshot.minX - deltaX, snapshot.maxX - deltaX);
      this.lastEvent = panningPositions;
    }
  }]);

  return PlotHorizontalPanningController;
}(_react.PureComponent);

var _default = PlotHorizontalPanningController;
exports.default = _default;