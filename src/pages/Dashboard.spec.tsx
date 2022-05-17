import { screen, render } from '@testing-library/react'
import Dashboard from '@/pages/Dashboard'

describe('Dashboard Page', () => {
  it('should render the Dashboard page', () => {
    render(<Dashboard />)

    expect(screen.getByText('Dashboard')).toBeInTheDocument()
  })
})