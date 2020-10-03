import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      charsLeft: props.maxChars
    };
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
    this.setState({charsLeft: this.props.maxChars - this.state.message.length})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" />
      </div>
    );
  }
}

export default TwitterMessage;
