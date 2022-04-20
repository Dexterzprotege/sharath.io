import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import comingsoon from "../images/comingsoon.png"
import Image from "../components/image"

export default function Blog() {
  return (
    <Layout>
      <SEO title="Blog" />
      <div className="container">
        {/* + Title */}
        <div className="row mt-4 justify-content-center">
          <div className="col-lg-7 col-sm-12 my-auto headline">
            <h1>Hi from Blog, content is coming soon!!</h1>
          </div>
        </div>
        <div className="col-lg-6 my-auto mx-auto">
          <Image
            fileName="comingsoon.png"
            alt="About page"
            className="about-img-wrapper"
          />
        </div>
      </div>
    </Layout>
  )
}
