import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';


class TrackList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            trackIsPlaying: false,
            trackPlaying: ''
        }
    }

    switchTrackState = (state, currentTrack) => {
        this.setState({
            trackIsPlaying: state,
            trackPlaying: currentTrack
        })
    }

    render() {
        return (
            <div className="TrackList">
                {
                    this.props.tracks.map(track => {
                        return <Track track={track}
                                        key={track.id}
                                        onAdd={this.props.onAdd}
                                        onRemove={this.props.onRemove}
                                        isRemoval={this.props.isRemoval}
                                        trackIsPlaying={this.state.trackIsPlaying}
                                        trackPlaying={this.state.trackPlaying}
                                        switchTrackState={this.switchTrackState}
                                        />
                    })
                }
            </div>
        )
    }
}

export default TrackList;