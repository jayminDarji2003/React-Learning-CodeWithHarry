import React from "react";

function Alert(props) {
  return (
    <div style={{height: '50px'}}>
      {props.alert && (
      <div
        className={`alert alert-success alert-dismissible fade show`}
        role="alert"
      >
        {props.alert.msg} <strong>{props.alert.type}</strong>
      </div>
      )}
    </div>
  );
}

export default Alert;
