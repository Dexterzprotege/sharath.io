import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Image from "../components/image"
import Content from '../components/landing/content'

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <section className="about">
      <div className="container">
        {/* + Title */}
        <div className="row mt-4 justify-content-center">
          <div className="col-lg-7 col-sm-12 my-auto headline">
            <h1>Something about me~</h1>
          </div>
        </div>
        {/* - Title */}

        <div className="row my-4 justify-content-center">
          {/* + Card */}
          <div className="col-lg-7 my-auto">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="card-title">
                  <h2>
                    Hi there!
                    <span role="img" aria-label="Happy face">
                      😊
                    </span>
                  </h2>
                  <h3>an introduction</h3>
                </div>

                <div className="card-text">
                  I am a Computer Science undergrad and have great passion for computers and anything tech. I really enjoy competitive programming, 
                  and try to participate as much as I can (although it is kinda difficult to manage these days). ReactJS is my accomplice and I also enjoy building stuff with AWS Tech.
                  I am a jack of all trades and master in none. Currently I am into Docker and Virtualization, trying to learn some stuff. My primary interests are on Front-end web Development
                  and AWS Techonologies and Data analytics.
                </div>
              </div>
            </div>
          </div>
          {/* - Card */}

          {/* <Content/> */}
          {/* + Image */}
          {/* <div className="col-lg-6 my-auto mx-auto">
            <Image
              fileName="about.jpg"
              alt="About page"
              className="about-img-wrapper"
            />
          </div> */}
          {/* - Image */}

          {/* + Card */}
          <div className="col-lg-7 my-auto">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="card-title">
                  <h2>More about me</h2>
                  <h3>above and beyond</h3>
                </div>

                <div className="card-text">
                  In my free time, I enjoy participating in Quizzing other Trivia competitions (You know I am something of a Nerd myself 😉).
                  I also like to watch Anime and currently hooked on watching Shingeki no Kyujin and Jojo's bizzare adventure.
                  At my very liesure time, I also write some poems and haikus, I have collected all of my work 
                  <a href="https://gazings.blogspot.com/" target="_blank"> here.</a> (It is going to be embarrasing).
                  Recently, I have started an habit of book reading and currently I am reading "No Mud, No Lotus".
                  Hit me up, if you have anything in common and want to discuss!
                </div>
              </div>
            </div>
          </div>
          {/* - Card */}
        </div>
      </div>
    </section>
  </Layout>
)
export default AboutPage
