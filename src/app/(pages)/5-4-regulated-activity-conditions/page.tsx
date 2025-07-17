import React from 'react'
import CommonImgMapPage from '@/components/common-img-map-page'
import { RegulatedActivityConditionsPage } from '@/assets';



const RegulatedActivityConditions = () => {
  return (
    <CommonImgMapPage
      backRoute="/application-to-carry-on-new-regulated-activity"
      pageTitle="Regulated Activity Conditions"
      image={RegulatedActivityConditionsPage}
    />

  )
}

export default RegulatedActivityConditions;