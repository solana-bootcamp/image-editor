import PropTypes from "prop-types";
var nodesCommonPropTypes = {
  definitions: {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rotation: PropTypes.number,
    scaleX: PropTypes.number,
    scaleY: PropTypes.number,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    shadowOffsetX: PropTypes.number,
    shadowOffsetY: PropTypes.number,
    shadowBlur: PropTypes.number,
    shadowColor: PropTypes.string,
    shadowOpacity: PropTypes.number,
    opacity: PropTypes.number,
  },
  defaults: {
    rotation: 0,
    scaleX: 1,
    scaleY: 1,
    stroke: void 0,
    strokeWidth: void 0,
    shadowOffsetX: void 0,
    shadowOffsetY: void 0,
    shadowBlur: void 0,
    shadowColor: void 0,
    shadowOpacity: void 0,
    opacity: 1,
  },
};
export default nodesCommonPropTypes;
