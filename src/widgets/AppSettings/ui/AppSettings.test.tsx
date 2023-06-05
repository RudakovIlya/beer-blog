import { fireEvent, screen } from '@testing-library/react'

import { renderWithTranslation } from 'shared/lib/renderWithTranslation/renderWithTranslation'
import { AppSettings } from './AppSettings'

describe('widgets/AppSettings/ui/AppSettings', () => {
  test('button is expected to have text TEST', () => {
    renderWithTranslation(<AppSettings />)
    expect(screen.getByTestId('AppSettings'))
      .toBeInTheDocument()
  })
  test('button is expected to have text TEST1', () => {
    renderWithTranslation(<AppSettings />)
    const toggleButton = screen.getByTestId('Toggle-AppSettings')
    expect(screen.getByTestId('AppSettings'))
      .toBeInTheDocument()
    fireEvent.click(toggleButton)
    screen.debug()
    expect(screen.getByTestId('AppSettings'))
      .toHaveClass('open')
  })
})
