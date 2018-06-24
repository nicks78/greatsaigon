import React, { Component } from 'react';

const SocialMedia = () => {
    return (
        <ul style={{listStyleType: 'none', display: 'flex', justifyContent: 'space-around', marginBottom: '5px'}} className="uk-container uk-container-small">
            <li>
                <a href="#" className="socialIcons"><i className="fab fa-facebook-f fa-lg fa-fw fa-border"></i></a>
            </li>
            <li>
                <a href="https://www.instagram.com/greatsaigon/?hl=fr" target="_blank"className="socialIcons"><i className="fab fa-instagram fa-lg fa-fw fa-border"></i></a>
            </li>
            <li>
                <a href="https://www.youtube.com/channel/UCXYdZcHyI-SAsZeT3eUVqxA/videos" target="_blank" className="socialIcons"><i className="fab fa-youtube fa-lg fa-fw fa-border"></i></a>
            </li>
            <style jsx global>{`
                a.socialIcons {
                    text-decoration: none;
                    color: #a6a6a6;
                }

                a.socialIcons > i {
                    width: 1.3em;
                    line-height: 1.3em;
                }

                a.socialIcons:hover {
                    text-decoration: none;
                    color: #fff;
                }

                .fa-border {
                    border-color: #a6a6a6;
                    border-radius: 1.2em;
                }

                .fa-border:hover {
                    border-color: #fff;
                }

            `}</style>
        </ul>
    )
}

export default SocialMedia;