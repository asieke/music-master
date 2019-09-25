import React, { Component } from 'react';

class Search extends Component {
  state = { artistQuery: '' };

  updateArtistQuery = event => {
    this.setState({artistQuery: event.target.value })
  }

  handleKeyPress = event => {
    if(event.key === 'Enter'){
      this.searchArtist();
    }
  }

  searchArtist = () => {
    console.log("BOOM");
    this.props.searchArtist(this.state.artistQuery);
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <input 
          onChange={this.updateArtistQuery}
          onKeyPress={this.handleKeyPress}
          placeholder='Search for an artist' 
        />
        <button onClick={this.searchArtist}>Search</button>   
      </div>
    )
  }
}

export default Search;