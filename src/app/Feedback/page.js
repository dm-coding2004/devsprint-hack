import React from 'react'
import FeedbackForm from './components/FeedbackForm'
import FeedbackFooter from './components/FeedbackFooter'
import Header from '../components/Header'

function page() {
  return (
  <>
 <Header/>
  <FeedbackForm/>
  <FeedbackFooter/>
  </>
  )
}

export default page