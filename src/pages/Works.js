import React from 'react'
import './Works.css'
function Works() {
  return (
    <div id="works">
        <h1>Works</h1>
        <div className='projects'>
            <div className='projBox'>
                <h3>CodeCollab</h3>
                <p>Used SocketIO, NodeJS, ReactJS and PeerJS to develop a collaborative code editor along with feature of video chatting.</p>
            </div>
            <div className='projBox'>
                <h3>TripPlan.ai</h3>
                <p>Used ChatGPT API and ReactJS to develop a GPT based personalised travel planner.</p>
            </div><div className='projBox'>
                <h3>SnipURL</h3>
                <p>Inspired by bit.ly and tinyurl , I made this app using Express,EJS adn MongoDB.</p>
            </div><div className='projBox'>
                <h3>Exercise App</h3>
                <p>Used ReactJS and ExerciseDB API to develop a Exercise search app.</p>
            </div>
        </div>
    </div>
  )
}

export default Works