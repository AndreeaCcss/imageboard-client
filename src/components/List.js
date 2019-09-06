import React from "react";
import CreateFormContainer from "./CreateFormContainer";
import LoginFormContainer from "./LoginFormContainer";
import SignUpFormContainer from "./SignUpFormContainer";

class List extends React.Component {
  render() {
    return (
      <div>
        {this.props.user.length === 0 ? (
          <div>
            Login:
            <LoginFormContainer />
            Sign Up:
            <SignUpFormContainer />
          </div>
        ) : (
          <div>
            <p>Add Image</p>
            <CreateFormContainer />
            {this.props.images
              ? this.props.images.map(image => (
                  <div key={image.id}>
                    <h3>{image.title}</h3>
                    <img src={image.url} alt={image.title} />
                  </div>
                ))
              : null}
          </div>
        )}
      </div>
    );
  }
}

export default List;
