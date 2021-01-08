import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/styles.css';

function Home(props) {

    return (
        <div className="main">
            <div className="even-columns">
                <div className="col" style={{backgroundColor: "grey", border: "black"}}>
                    <img style={{maxWidth: "100%", maxHeight: "100%"}} src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Mona_Lisa-restored.jpg" />
                    <div>
                    here is some content
                    </div>
                </div>
                <div className="col" style={{backgroundColor: "grey"}}>
                    <img style={{width: "100px", height: "100px"}} src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Mona_Lisa-restored.jpg" />
                </div>
                <div className="col" style={{backgroundColor: "grey"}}>
                    <img style={{width: "100px", height: "100px"}} src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Mona_Lisa-restored.jpg" />
                </div>
            </div>
        </div>
    );
}

export default Home;
