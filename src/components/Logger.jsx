import React, { Component } from "react";
import { toast } from "react-toastify";

const Logger = (WrappedComponent) => {
  return class extends Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} mounted`);
      toast.info(`Component ${WrappedComponent.name} mounted`)
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default Logger;
