import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

export default function uses() {
  return (
    <Layout>
      <SEO title="Uses" />
      <section className="about">
        <div className="container">
          {/* + Title */}
          <div className="row mt-4 justify-content-center">
            <div className="col-lg-7 col-sm-12 my-auto headline">
              <h1>This is what is use~</h1>
            </div>
          </div>
          {/* - Title */}

          <div className="row my-4 justify-content-center">
            {/* + Card */}
            <div className="col-lg-7 my-auto">
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="card-title">
                    <h2>Daily usage</h2>
                    {/* <h3>an introduction</h3> */}
                  </div>

                  <div className="card-text">
                    <ul>
                      <li><u>Computer:</u> MacBook Pro (2.8 GHz Quad-Core Intel Core i7, 16 GB 2133 MHz LPDDR3)</li>
                      <li><u>OS:</u> macOS Monterey (Version: 12.1 21C52)</li>
                      <li><u>Display:</u> Acer Curved Full HD Monitor - ED322Q</li>
                      <li><u>Keyboard and mouse:</u> Logitech MK345</li>
                      <li><u>Audio:</u> Bose QuietComfort Earbuds</li>
                    </ul>
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
}
