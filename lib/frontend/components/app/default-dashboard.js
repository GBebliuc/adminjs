"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Dashboard = exports.DashboardHeader = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _designSystem = require("@adminjs/design-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const pageHeaderPaddingY = 74;
const pageHeaderPaddingX = 250;

const DashboardHeader = () => {
  return /*#__PURE__*/_react.default.createElement(_designSystem.Box, {
    position: "relative",
    overflow: "hidden"
  }, /*#__PURE__*/_react.default.createElement(_designSystem.Box, {
    bg: "grey100",
    py: pageHeaderPaddingY,
    px: ['default', 'lg', pageHeaderPaddingX]
  }, /*#__PURE__*/_react.default.createElement(_designSystem.Text, {
    textAlign: "center",
    color: "white"
  }, /*#__PURE__*/_react.default.createElement(_designSystem.H2, null, "Administration Panel"))));
};

exports.DashboardHeader = DashboardHeader;

const boxes = () => [];

const Card = (0, _styledComponents.default)(_designSystem.Box).withConfig({
  displayName: "default-dashboard__Card",
  componentId: "sc-1be5kmo-0"
})(["display:", ";color:", ";text-decoration:none;border:1px solid transparent;&:hover{border:1px solid ", ";box-shadow:", ";}"], ({
  flex
}) => flex ? 'flex' : 'block', ({
  theme
}) => theme.colors.grey100, ({
  theme
}) => theme.colors.primary100, ({
  theme
}) => theme.shadows.cardHover);
Card.defaultProps = {
  variant: 'white',
  boxShadow: 'card'
};

const Dashboard = () => {
  return /*#__PURE__*/_react.default.createElement(_designSystem.Box, null, /*#__PURE__*/_react.default.createElement(DashboardHeader, null), /*#__PURE__*/_react.default.createElement(_designSystem.Box, {
    mt: ['xl', 'xl', '-100px'],
    mb: "xl",
    mx: [0, 0, 0, 'auto'],
    px: ['default', 'lg', 'xxl', '0'],
    position: "relative",
    flex: true,
    flexDirection: "row",
    flexWrap: "wrap",
    width: [1, 1, 1, 1024]
  }, boxes().map((box, index) =>
  /*#__PURE__*/
  // eslint-disable-next-line react/no-array-index-key
  _react.default.createElement(_designSystem.Box, {
    key: index,
    width: [1, 1 / 2, 1 / 2, 1 / 3],
    p: "lg"
  }, /*#__PURE__*/_react.default.createElement(Card, {
    as: "a"
  }, /*#__PURE__*/_react.default.createElement(_designSystem.Text, {
    textAlign: "center"
  }, /*#__PURE__*/_react.default.createElement(_designSystem.Illustration, {
    variant: box.variant,
    width: 100,
    height: 70
  }), /*#__PURE__*/_react.default.createElement(_designSystem.H5, {
    mt: "lg"
  }, "Administration panel"), /*#__PURE__*/_react.default.createElement(_designSystem.Text, null, box.subtitle)))))));
};

exports.Dashboard = Dashboard;
var _default = Dashboard;
exports.default = _default;