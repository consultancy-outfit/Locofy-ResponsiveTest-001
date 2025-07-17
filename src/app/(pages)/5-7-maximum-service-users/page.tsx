import React from 'react'
import CommonImgMapPage from '@/components/common-img-map-page'
import { MaximumServiceUsersPage } from '@/assets';



const MaximumServiceUsers = () => {
  return (
    <CommonImgMapPage
      backRoute="/application-to-carry-on-new-regulated-activity"
      pageTitle="Maximum Service Users"
      image={MaximumServiceUsersPage}
    />

  )
}

export default MaximumServiceUsers;