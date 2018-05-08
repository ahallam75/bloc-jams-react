import React, { Component } from 'react';
import './PlayerBar.css';

 class PlayerBar extends Component {
   render() {
     return (
       <section className="player-bar">
         <section id="buttons">
           <button id="previous" onClick={this.props.handlePrevClick}>
             <span className="ion-skip-backward"></span>
           </button>
           <button id="play-pause" onClick={this.props.handleSongClick} >
             <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
           </button>
           <button id="next" onClick={this.props.handleNextClick}>
             <span className="ion-skip-forward"></span>
           </button>
         </section>
         <div><strong>Time</strong></div>
         <section id="time-control">
           <div className="current-time">{this.props.currentTime}</div>
           <input
             type="range"
             className="seek-bar"
             value={this.props.seekValue || 0}
             max="1"
             min="0"
             step="0.001"
             onChange={this.props.handleTimeChange}
           />
           <div className="total-time">{this.props.duration}</div>
         </section>
         <div id="Volume"><span className="icon ion-volume-low"></span><strong>Volume</strong><span className="icon ion-volume-high"></span></div>
         <section id="volume-control">
           <input
             type="range"
             className="seek-bar"
             id="seek-bar-volume"
             value={this.props.currentVolume || 0}
             max="1"
             min="0"
             step="0.001"
             onChange={this.props.handleVolumeChange}
           />
         </section>
       </section>
     );
   }
 }

 export default PlayerBar;
