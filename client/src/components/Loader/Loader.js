import React from 'react';
import Loader from "react-loader-spinner";

export default class App extends React.Component {
  render() {
    return (
      <Loader
        type="Oval"
        color="#FF6D6D"
        height={100}
        width={100}
      />
    );
  }
}