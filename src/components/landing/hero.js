import React from "react"

import Image from "../image"
import Links from "../links"

import { Link } from "react-scroll"
import {navigate} from 'gatsby'; 

export default function Hero() {
  const editPage = () => {
    navigate('/about'); //navigate to edit page
  }

  return (
    <section className="hero" style={{ marginTop: '2rem' }} id="hero">
      <div className="container h-50">
        <div className="row h-50 justify-content-around">
          {/* + Hero section: Left side */}
          <div className="col-lg-5 my-auto">
            <div className="hero-introduction">
              <h1>
                <span className="wave" role="img" aria-label="Hand wave">
                  👋
                </span>
              </h1>
              <h1>Hi. I'm Sharath</h1>
              <p>
                I work as a Systems Development at Amazon and I previously interned at Amazon as well. I like to build some cool front-end stuff. Looking forward to meet you!
              </p>
              <Link
                className="main-button btn btn-primary shadow-sm"
                smooth={true}
                onClick={() => editPage()}
              >
                Get to know me
              </Link>
            </div>
          </div>
          {/* - Hero section: Left side */}

          {/* + Hero section: Right side */}
          <div className="col-lg-4 my-auto">
            <div className="hero-bio">
              <div className="card shadow-sm mb-5">
                <div className="card-body">
                  <div className="icon">
                    <Image
                      fileName="photo.png"
                      style={{ width: "8rem", height: "8rem" }}
                      alt="Hero Icon"
                    />
                  </div>
                  <h3 className="card-title">@Dexterzprotege</h3>
                  <h4>
                    <span
                      className="mr-1"
                      role="img"
                      aria-label="pin"
                      alt="pin emoji"
                    >
                      📍
                    </span>
                    Hyderabad, IN
                    <br />
                  </h4>
                  <p className="card-text">
                    Full-time Software Dev,
                    <br />
                    Competitive Programming,
                    <br />
                    Front-end aficionado
                  </p>
                  <Links />
                </div>
              </div>
            </div>
          </div>
          {/* - Hero section: Right side */}
        </div>
      </div>
    </section>
  )
}
