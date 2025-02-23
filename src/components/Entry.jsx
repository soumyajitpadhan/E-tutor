import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Category from './Category'
import TopCourses from './TopCourses'
import FeatureCourses from './FeatureCourses'
import RecentCourses from './RecentCourses'
import CTA from './CTA'
import TopInstructor from './TopInstructor'
import TrustedCompanies from './TrustedCompanies'
import Footer from './Footer'

const Entry = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Category />
      <TopCourses />
      <FeatureCourses />
      <RecentCourses />
      <CTA />
      <TopInstructor />
      <TrustedCompanies />
      <Footer />
    </div>
  )
}

export default Entry