import React, { Component } from 'react';
import { Player, ControlBar } from 'video-react';

export default class VideoPlayer extends Component {

    constructor(props) {
        super(props);
      }

  render() {

    const { src } = this.props;

    return (
        <Player autoPlay src={src}>
            <ControlBar autoHide={false} className="my-class" />
        </Player>
    );
  }
}
