import { faEnvelope, faLocation, faLocationArrow, faLocationPin, faMapLocation, faMapMarker, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer className="container page-footer font-small blue pt-4">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-3 col-12 mt-md-0 mt-3">
                            <p style={{
                                textAlign: "left",
                                fontSize: 14,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                maxLines: 6,
                                display: "-webkit-box",
                                WebkitLineClamp: 6,
                                WebkitBoxOrient: "vertical"
                            }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis est corrupti aliquam vitae ipsum modi iste, quisquam ea velit veniam. Sint ipsa facilis amet, facere deserunt itaque molestias hic excepturi!. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore culpa pariatur eum? Natus cumque excepturi impedit nemo aut! Dolorem quod perspiciatis corporis sint possimus numquam a veritatis quos aliquid. Quam?</p>

                            <div className="social-icons w-100 mb-2 d-flex justify-content-between">
                                <Link>
                                    <img src='/assets/images/socialmedia/fb.png' />
                                </Link>
                                <Link>
                                    <img src='/assets/images/socialmedia/insta.png' />
                                </Link>
                                <Link>
                                    <img src='/assets/images/socialmedia/linkedin.png' />
                                </Link>
                                <Link>
                                    <img src='/assets/images/socialmedia/x.png' />
                                </Link>
                                <Link>
                                    <img src='/assets/images/socialmedia/pintrest.png' />
                                </Link>
                            </div>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0" />

                        <div className="footer-link col-12 col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase text-brown">ONLINE SHOPPING</h5>
                            <ul className="list-unstyled">
                                <li><a href="#!">Men’s T-Shirts</a></li>
                                <li><a href="#!">Women’s Wear</a></li>
                                <li><a href="#!">Winter Collections</a></li>
                                <li><a href="#!">Hooded T-Shirts</a></li>
                                <li><a href="#!">Streetwear Collections</a></li>
                            </ul>
                        </div>

                        <div className="footer-link col-12 col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase text-brown">CUSTOMER POLICIES</h5>
                            <ul className="list-unstyled">
                                <li><a href="#!">About Us</a></li>
                                <li><a href="#!">Terms & Conditions</a></li>
                                <li><a href="#!">Shipping & Returns Policy</a></li>
                                <li><a href="#!">Cancellation & Refund Policy</a></li>
                                <li><a href="#!">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="footer-link col-12 col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase text-brown">STORE INFORMATION</h5>
                            <ul className="list-unstyled gap-3">
                                <li>
                                    <a href="#!" style={{
                                        display: "flex",
                                        alignItems: "start",
                                        justifyContent: "space-evenly"
                                    }}>
                                        <FontAwesomeIcon
                                            fontSize={18}
                                            style={{
                                                marginTop: 3,
                                            }}
                                            icon={faMapMarkerAlt} />
                                        <span className='ms-2' style={{
                                            textAlign: "left"
                                        }}>
                                            Lorem Ipsum is simply dummy text of the
                                            printing and typesetting industry.
                                        </span>
                                    </a>
                                </li>
                                <li><a href="#!">
                                    <FontAwesomeIcon
                                        fontSize={18} style={{
                                            marginTop: 3,
                                        }}
                                        icon={faPhone} />
                                    <span className='ms-2'>
                                        Call Us: 1234567890
                                    </span>
                                </a>
                                </li>
                                <li><a href="#!">
                                    <FontAwesomeIcon icon={faEnvelope}
                                        fontSize={18} style={{
                                            marginTop: 3,
                                        }}
                                    />
                                    <span className='ms-2'>
                                        Email Us: info@yourmail.com
                                    </span>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </footer>
            <div className="footer-copyright text-center py-3 mt-3" style={{
                background: "#20050A",
                color: "#fff",
            }}>© 2024-2025 Powered by
                <a href="#" className='text-decoration-none text-white playfair'> Fashion<strong>Mart</strong></a>
            </div>
        </>
    )
}

export default Footer
