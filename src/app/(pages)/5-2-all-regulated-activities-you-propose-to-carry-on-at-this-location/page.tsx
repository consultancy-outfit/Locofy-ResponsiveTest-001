import React from 'react'
import CommonImgMapPage from '@/components/common-img-map-page'
import { AllRegulatedActivitiesYouProposePage } from '@/assets';



const AllRegulatedActivitiesYouPropose = () => {
  return (
    <CommonImgMapPage
      backRoute="/application-to-carry-on-new-regulated-activity"
      pageTitle="All regulated activities you propose to carry on at this location"
      image={AllRegulatedActivitiesYouProposePage}
    />

  )
}

export default AllRegulatedActivitiesYouPropose;