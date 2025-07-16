import React from 'react'
import CommonImgMapPage from '@/components/common-img-map-page'
import { Section3ApplicationDetailsPage } from '@/assets';



const Section3ApplicationDetails = () => {
  return (
    <CommonImgMapPage
      backRoute="/application-to-carry-on-new-regulated-activity"
      pageTitle="Section 3: Application details"
      image={Section3ApplicationDetailsPage}
    />

  )
}

export default Section3ApplicationDetails