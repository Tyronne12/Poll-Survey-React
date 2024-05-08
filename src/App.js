import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import './App.css';
import slark from './assets/images/sk.png';
import luna from './assets/images/luna.png';
import lich from './assets/images/lich.png';
import es from './assets/images/es2.png';
import bgmusic from './assets/sounds/bgmusic.mp3';
import ready from "./assets/sounds/ready3.mp3";
import close from "./assets/images/power.jpg";
import eshead from "./assets/images/es3.png";
import lunahead from "./assets/images/lunahead.png";
import lichhead from "./assets/images/lichhead2.png";
import skhead from "./assets/images/skhead.png";

function App() {

    const [isClicked, setIsClicked] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isShown, setIsShown] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [voteES, setESVotes] = useState(0);
    const [voteLuna, setLunaVotes] = useState(0);
    const [voteLich, setLichVotes] = useState(0);
    const [voteSlark, setSlarkVotes] = useState(0);
    const [isVoted, setIsVoted] = useState(false);


    const showStats = (selectedHero) => {
        setSelectedOption(selectedHero);
        setIsClicked(true);
        setIsPlaying(false);
    }

    const returnHome = () => {
        setIsClicked(false);
        setIsPlaying(true);
        setIsShown(false);
    }

    const seeResult = () => {

        if(selectedOption == 'EARTH SPIRIT'){
            setESVotes(voteES + 10);
            console.log(`ES: ${voteES}`);

        }

        if(selectedOption == 'LUNA'){
            setLunaVotes(voteLuna + 10);
            console.log(`LUNA: ${voteLuna}`);
        }

        if(selectedOption == 'LICH'){
            setLichVotes(voteLich + 10);
            console.log(`LICH: ${voteLich}`);
        }

        if(selectedOption == 'SAND KING'){
            setSlarkVotes(voteSlark + 10);
            console.log(`SLARK: ${voteSlark}`);
        }
        setIsShown(true);
        setIsClicked(false);
        setIsPlaying(true);
        setIsVoted(true);
    }

    const viewResult = () =>{
        setIsShown(true);
        setIsVoted(false);
    }

    useEffect(() => {
        const audio = document.getElementById('background-music');
        const ready = document.getElementById('background-ready');

        if (isPlaying) {
          audio.play();

        } else {
          audio.pause();
          ready.play(); 
        }
      }, [isPlaying]);
    
    const barStylesES = {
        position: 'relative',
        height: '95%',
        width: `${voteES}%`, 
        backgroundColor: 'green',
    };
    
    const barStylesLuna = {
        position: 'relative',
        height: '95%',
        width: `${voteLuna}%`, 
        backgroundColor: 'blue',
    };
    
    const barStylesLich = {
        position: 'relative',
        height: '95%',
        width: `${voteLich}%`, 
        backgroundColor: 'rgb(99, 121, 151)'
    };

    const barStylesSK = {
        position: 'relative',
        height: '95%',
        width: `${voteSlark}%`, 
        backgroundColor: '#996633',
    };
    
    
    return (
        <div className="main-container">
            <audio id="background-music" autoPlay loop={true} src={bgmusic} style={{ display: 'none' }} />
            <audio id="background-ready" autoPlay loop={false} src={ready} style={{ display: 'none' }} />
            {isClicked ? (
                <div className="modal">
                    <div className="vote">
                        <h4>YOU HAVE SELECTED</h4>
                        <h2>{selectedOption}</h2>
                    </div>
                    <div className="see-result">
                        <div className="see-result-btn" onClick={seeResult}><h1>VOTE</h1></div>
                    </div>
                    <div className="close" onClick={returnHome}>
                        <p className="icon">i</p>
                        <p>Decline</p>
                    </div>
                </div> 
            ) : null}
            {isShown ? (
                <div className="result">
                    <div className="result-header" >
                        <div className="close" onClick={returnHome}>
                        {isVoted ? (
                            <h2 className="header-text">You have successfully voted {selectedOption}!</h2>
                        ) : (
                            <h1 className="header-text">Hero Current Standing</h1>
                        )}
                            <img className="close-btn" src={close}/>
                        </div>
                    </div>
                    <div className="vote-container">
                        <div className="bar">
                            <div className="vote-bar" style={barStylesES}></div>
                            <h5 className="rating">{voteES}%</h5>
                            <img className="hero-icon" src={eshead}/>
                        </div>
                        <div className="bar">
                            <div className="vote-bar" style={barStylesLuna}></div>
                            <h5 className="rating">{voteLuna}%</h5>
                            <img className="hero-icon" src={lunahead}/>
                        </div>
                        <div className="bar">
                            <div className="vote-bar" style={barStylesLich}></div>
                            <h5 className="rating">{voteLich}%</h5>
                            <img className="hero-icon" src={lichhead}/>
                        </div>
                        <div className="bar">
                            <div className="vote-bar" style={barStylesSK}></div>
                            <h5 className="rating">{voteSlark}%</h5>
                            <img className="hero-icon" src={skhead}/>
                        </div>
                        <div >
                            <div className="vote-bar"></div>
                        </div>
                    </div>
                </div> 
            ) : null}
                <div className="sub-container">
                    <div className="card-container">
                        <div className="card" onClick={() => showStats('EARTH SPIRIT')} id="es">
                            <img className="hero" src={es} alt="ES"/>
                        </div>
                        <div className="card" onClick={() => showStats('LUNA')} id="luna">
                            <img className="hero" src={luna} alt="luna"/>
                        </div>
                        <div  className="card" onClick={() => showStats('LICH')} id="lich">
                            <img className="hero" src={lich} alt="lich"/>
                        </div>
                        <div  className="card" onClick={() => showStats('SAND KING')} id="slark">
                            <img className="hero" src={slark} alt="slark" id="sk"/>
                        </div>
                    </div>
                    <div className="app-title">
                        <h2 className="qatext">WHICH HERO WOULD LIKE TO HAVE THE NEXT ARCANA?</h2>
                        <h3 className="view" onClick={viewResult}>View Standing</h3>
                    </div>
                </div>
        </div>
    )
}

export default App;
