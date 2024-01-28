import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, theme } from '@/styles'

import '@/assets/imports/constructionTechniques'
import '@/assets/imports/constructionTechniquesB'
import '@/assets/imports/projectPark'
import '@/assets/imports/projectSchool'
import '@/assets/imports/urbanism'
import '@/assets/imports/installations'

import Router from './routes'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  )
}

export default App
