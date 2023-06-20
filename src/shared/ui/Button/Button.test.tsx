import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('shared/ui/Button', () => {
  test('button is expected to have text TEST', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST'))
      .toBeInTheDocument()
  })
  test('button is expected to have className - primary', () => {
    render(<Button variant={'primary'}>TEST</Button>)
    expect(screen.getByText('TEST'))
      .toHaveClass('primary')
  })
})
