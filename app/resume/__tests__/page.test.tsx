import { render, screen } from '@testing-library/react'
import ResumePage from '../page'

describe('Resume Page', () => {
  it('renders without crashing', () => {
    render(<ResumePage />)
  })

  it('renders the CV cards', () => {
    render(<ResumePage />)
    // Check if CV text is present
    const cvElements = screen.getAllByText(/CV/i)
    expect(cvElements.length).toBeGreaterThan(0)
  })
})
