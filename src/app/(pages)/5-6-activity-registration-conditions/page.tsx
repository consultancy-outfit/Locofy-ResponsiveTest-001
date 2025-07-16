import React from 'react'
import CommonImgMapPage from '@/components/common-img-map-page'
import { ActivityRegistrationConditionsPage } from '@/assets';



const ActivityRegistrationConditions = () => {
  return (
    <CommonImgMapPage
      backRoute="/application-to-carry-on-new-regulated-activity"
      pageTitle="5.6 Activity Registration Conditions"
      image={ActivityRegistrationConditionsPage}
    />

  )
}

export default ActivityRegistrationConditions;