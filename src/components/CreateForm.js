import React from "react";

class CreateForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={this.props.values.title}
            onChange={this.props.onChange}
          />
        </label>
        <label>
          URL:
          <input
            type="text"
            name="url"
            value={this.props.values.url}
            onChange={this.props.onChange}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    );
  }
}
export default CreateForm;
