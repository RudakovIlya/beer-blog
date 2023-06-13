import { fireEvent, screen } from '@testing-library/react'

import { renderWithTranslation } from 'shared/lib/renderWithTranslation/renderWithTranslation'
import { AppSettings } from './AppSettings'

describe('widgets/AppSettings/ui/AppSettings', () => {
  test('AppSettings should be in the document', () => {
    renderWithTranslation(<AppSettings />)
    expect(screen.getByTestId('AppSettings'))
      .toBeInTheDocument()
  })
  test('AppSettings should go out when you click on the settings icon', () => {
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
