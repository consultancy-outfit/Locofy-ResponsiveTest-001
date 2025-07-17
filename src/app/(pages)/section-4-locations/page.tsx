import React from 'react'
import CommonImgMapPage from '@/components/common-img-map-page'
import { Section4LocationsPage } from '@/assets';



const Section4Locations = () => {
  return (
    <CommonImgMapPage
      backRoute="/application-to-carry-on-new-regulated-activity"
      pageTitle="Locations"
      image={Section4LocationsPage}
    />

  )
}

export default Section4Locations