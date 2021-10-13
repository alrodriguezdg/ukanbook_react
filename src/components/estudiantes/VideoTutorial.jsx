import React from 'react'

function videoTutorial() {
    return (
        <div class="col-md-10 row-content">
            <h3>
                Videotutorial
            </h3>
            <div class="video-container mt-1">
                <iframe src="https://www.youtube.com/embed/ZxwbC4yOC_A" title="YouTube video player" frameborder="0" allowfullscreen class="videotutorial"></iframe>
            </div>
        </div>
    )
}

export default videoTutorial