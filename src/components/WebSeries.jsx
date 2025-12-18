import React, { useState } from 'react'
import DATA from '../data/data'
import SeriesCard from './SeriesCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Web_Series = () => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState(DATA);
    const [liked, setLiked] = useState([]);

    const handleFilter = (value) => {
        let val = value;
        if (val == "all") {
            setData(DATA);
        } else if (val == "favourite") {
            setData(liked);
        } else {
            let filteredData = DATA.filter((a) => a.subtitle.toLowerCase() == val);
            setData(filteredData);
        }
    }
    const handleSearch = (e) => {
        let val = e.target.value;
        if (val != "" && val != null) {
            let filteredData = DATA.filter((a) => a.title.toLowerCase().includes(val));
            setData(filteredData);
        } else {
            setData(DATA);
        }
    }

    const addToFavorites = (web) => {
        if (!liked.includes(web)) {
            setLiked([...liked, web]);
        } else {
            setLiked(liked.filter((a) => a.id != web.id));
        }
    }
    return (
        <>
            <nav className='navbar navbar-expand-lg bg-light'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='#'>Web Series</a>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent'
                        aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center'>
                            <li className='nav-item'>
                                <a className='nav-link active' aria-current='page' href='#'>Home</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>About</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>Contact</a>
                            </li>

                            <li className='nav-item'>
                                <a className='btn btn-sm btn-outline-danger' href='#'>Watch Now</a>
                            </li>

                            <li className='nav-item'>
                                <div className='d-flex align-items-center position-relative btn btn-sm btn-outline-danger ms-3' onClick={() => handleFilter("favourite")}>
                                    <span className='badge bg-danger' style={{
                                        position: "absolute",
                                        top: "-10px",
                                        right: "-10px",
                                        fontSize: "12px"
                                    }}>{liked.length}</span>
                                    <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
                                    <span className='ms-2'>Favourites</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <h2 className='head'>Web Series and Shows</h2>
            <div className='px-5'>
                <label htmlFor="">Filter by Platform</label>
                <select className='form-control' onChange={(e) => handleFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="favourite">Favourite Shows</option>
                    <option value="amazon prime">Amazon Prime</option>
                    <option value="netflix">Netflix</option>
                </select>
                <input className='form-control mt-3' placeholder='Search here...' onChange={handleSearch} />
            </div>
            <div className='flex-box'>
                {data.map((web) => (
                    <SeriesCard key={web.id} web={web} onLikeClicked={addToFavorites} />
                ))}
            </div>
        </>
    )
}

export default Web_Series