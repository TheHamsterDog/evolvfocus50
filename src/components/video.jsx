const Video = () => {
    return (
        <div className="video">
            <div className="video-iframe">
                <iframe className="video-iframe-iframe" width="555" height="416" src="https://www.youtube.com/embed/yK20u4fQroA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="video-content">
                <h2 class="video-header">
                    Get your hands on this powerful, yet easy-to-implement approach that is backed by science, psychology, and industry experts.
                </h2>
                <p className="video-paragraph">
                    Focus 50 is the <u>only</u> course in the world that combines life-transforming research from Neuroscience, Positive Psychology, and the Pareto principle to bring you closer to your life goals. Using the power of science and psychology, Focus 50 transforms the way you Think, Choose, Act & React, aligning them to your life goals.
                </p>
            </div>
        </div>);
}

export default Video;