import React from 'react'
import FAQ from '../../components/FAQ/FAQ'
import Reviews from '../../components/Reviews/Reviews'
import './Features.css'

const Features = () => {
  return (
    <div>
      {/* <Testimonials /> */}
      <FAQ />

      <div className="reviews-container-div">
        <Reviews />
      </div>
    </div>
  )
}

export default Features