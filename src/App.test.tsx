import { render, screen } from '@testing-library/react'

import { App } from 'App'

describe('App', () => {
  it('should be able render correctly', () => {
    render(<App />)

    expect(screen.getByText('Vite + TypeScript')).toBeInTheDocument()
  })
})
