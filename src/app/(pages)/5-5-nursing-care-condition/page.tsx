import React from 'react'
import CommonImgMapPage from '@/components/common-img-map-page'
import { NursingCareConditionPage } from '@/assets';



const NursingCareCondition = () => {
  return (
    <CommonImgMapPage
      backRoute="/application-to-carry-on-new-regulated-activity"
      pageTitle="Nursing Care Condition"
      image={NursingCareConditionPage}
    />

  )
}

export default NursingCareCondition;