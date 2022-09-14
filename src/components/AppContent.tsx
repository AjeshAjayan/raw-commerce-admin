import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { CContainer } from '@coreui/react'

const AppContent = () => {
  return (
    <CContainer lg>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
