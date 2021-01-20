import React from "react"
import navBrand from '../../assets/img.png'
import {Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Nav() {
    return (
        <Navbar variant="dark" className="w-100 pb-5">
            <Link to={'main'} className="mx-auto">
                <img
                    alt=""
                    src={navBrand}
                    width="auto"
                    height="auto"
                    className="d-inline-block align-top"
                />{' '}
            </Link>
        </Navbar>
    )
}