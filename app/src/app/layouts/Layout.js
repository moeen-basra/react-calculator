import React from 'react'
import Header from '../sections/header'

export default function ({children}) {
  return <>
    <Header/>
    {children}
  </>
}
