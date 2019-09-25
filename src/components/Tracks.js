import React, { Component } from 'react';

class Tracks extends Component {

  state = { playing: false, audio: null, playingPreviewURL: null };

  playAudio = previewURL => () => {
    const audio = new Audio(previewURL);

    if(!this.state.playing){
      audio.play();
      this.setState({playing: true, audio, playingPreviewURL: previewURL});

    } else {
      this.state.audio.pause();

      if(this.state.playingPreviewURL === previewURL){
        this.setState({ playing: false });
      } else {
        audio.play();
        this.setState({audio, playingPreviewURL: previewURL});
      }

    }
  }

  render() {
   
    const { tracks } = this.props;
    if(!tracks) return null;

    console.log('My Tracks', tracks);
    
    

    return (
      <div>
        {
          tracks.map(track => {
            const { id, name, album, preview_url } = track;
            return(
              <div key={id} onClick={this.playAudio(preview_url)}>
                <img src={album.images[0].url} />
                <p>{name}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Tracks;