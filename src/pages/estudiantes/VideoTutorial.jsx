import React from 'react'
import HeaderEstudiante from '../../components/estudiantes/HeaderEstudiantes'
import SidebarEst from '../../components/estudiantes/SidebarEstudiantes';
import VideoTutorialComponent from '../../components/estudiantes/VideoTutorial'

function VideoTutorial() {
    return (
        <div className="IndexEst">
            <HeaderEstudiante />
            <div className="row est">
                <SidebarEst />
                <VideoTutorialComponent />
            </div>
        </div>
    )
}

export default VideoTutorial
