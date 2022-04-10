import {render, screen, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {createMemoryHistory} from 'history'
import React from 'react'
import {Router} from 'react-router-dom'

import '@testing-library/jest-dom'

import App from '../App/App.js'

test('full app rendering/navigating',  () => {
  //const history = createMemoryHistory()
  render(
      <App />
  )

  expect(screen.getByText(/Dashboard/i)).toBeInTheDocument()

  fireEvent.click(screen.getByText(/issues/i))
  expect(screen.getByText(/All issues/i)).toBeInTheDocument()
})

// test('landing on a bad page', () => {
//   const history = createMemoryHistory()
//   history.push('/some/bad/route')
//   render(
//     <Router history={history}>
//       <App />
//     </Router>,
//   )

//   expect(screen.getByText(/no match/i)).toBeInTheDocument()
// })

// test('rendering a component that uses useLocation', () => {
//   const history = createMemoryHistory()
//   const route = '/some-route'
//   history.push(route)
//   render(
//     <Router history={history}>
//       <LocationDisplay />
//     </Router>,
//   )

//   expect(screen.getByTestId('location-display')).toHaveTextContent(route)
// })