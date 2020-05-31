import React from 'react';
import style from './video.css';
import p1 from '../Banner/images/p1.jpg';

const Video = () => {
    return (
        <section className="video-section">
            <h1>Lorem Ipsum</h1>
            <div className="descricao-container">
                <div className="descricao">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Fermentum leo vel orci porta non pulvinar neque. Ut
                    sem viverra aliquet eget sit amet. Consectetur libero id
                    faucibus nisl tincidunt eget. Eget velit aliquet sagittis id consec
                    tetur. Pellentesque sit amet porttitor eget dolor morbi non arcu.
                    Morbi blandit cursus risus at ultrices mi. Enim diam vulputate ut
                    pharetra. Maecenas ultricies mi eget mauris pharetra et ultrices.
                Mi in nulla posuere sollicitudin. Suspendisse potenti nullam ac t.</p>
                </div>
                <div className="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4OLCrClb_So" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </section>
    );
}

export default Video;