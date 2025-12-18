
import React, { useState } from 'react'
import { faHeart, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SeriesCard = ({ web, onLikeClicked }) => {
    const [like, setLike] = useState(false);
    return (
        <>
            <div className='card-box'>
                <img src={web.image} />
                <h2>{web.title}</h2>
                <p>{web.subtitle}</p>
                <div className='like' style={{ cursor: "pointer" }}
                    onClick={() => {
                        setLike(!like);
                        onLikeClicked(web);
                    }}>
                    <FontAwesomeIcon icon={faHeart} style={{ color: like ? "red" : "grey" }} />
                </div>
                <div className='bottomArea'>
                    <a href={web.link} target='_blank'><button>Watch Now</button></a>
                </div>
            </div>
        </>
    )
}
export default SeriesCard;