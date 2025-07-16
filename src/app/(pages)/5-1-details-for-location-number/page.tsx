import React from 'react'
import CommonImgMapPage from '@/components/common-img-map-page'
import { DetailsForLocationNumberPage } from '@/assets';



const DetailsForLocationNumber = () => {
  return (
    <CommonImgMapPage
      backRoute="/application-to-carry-on-new-regulated-activity"
      pageTitle="5.1 Details for Location number"
      image={DetailsForLocationNumberPage}
    />

  )
}

export default DetailsForLocationNumber