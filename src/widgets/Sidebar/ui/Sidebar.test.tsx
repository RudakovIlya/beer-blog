import { render, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'

describe('widgets/Sidebar/ui/Sidebar', () => {
  test('button is expected to have text TEST', () => {
    render(<Sidebar />)
    expect(screen.getByTestId('sidebar'))
      .toBeInTheDocument()
  })
})
