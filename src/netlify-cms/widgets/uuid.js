/* global createClass, h, CMS */
const uuidv4 = require("uuid/v4");

const UuidControl = createClass({
  componentDidMount: function() {
    if (!this.props.value) {
      this.props.onChange(uuidv4());
    }
  },

  render: function() {
    const value = this.props.value;
    return h("input", {
      type: "text",
      value: value ? value : "",
      id: this.props.forID,
      disabled: true
    });
  }
});

CMS.registerWidget("uuid", UuidControl);
