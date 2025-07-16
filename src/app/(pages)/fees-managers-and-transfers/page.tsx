import React from 'react'
import CommonImgMapPage from '@/components/common-img-map-page'
import { feesManagersAndTransfers } from '@/assets';



const FeesManagersAndTransfers = () => {
  return (
    <CommonImgMapPage
      backRoute="/application-to-carry-on-new-regulated-activity"
      pageTitle="Fees, Managers & Transfers"
      image={feesManagersAndTransfers}
    />

  )
}

export default FeesManagersAndTransfers