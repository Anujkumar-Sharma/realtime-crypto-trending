'use client'
import React from 'react'
import { store } from '@/store'
import { Provider } from 'react-redux'

const ProviderWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <Provider store={store}>
      <div className="mt-[60px]">{children}</div>
    </Provider>
  )
}

export default ProviderWrapper
