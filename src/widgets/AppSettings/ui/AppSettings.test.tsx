import { fireEvent, screen } from '@testing-library/react'

import { componentRender } from 'shared/config/tests/componentRender/componentRender'
import { AppSettings } from './AppSettings'

describe('widgets/AppSettings/ui/AppSettings', () => {
  test('AppSettings should be in the document', () => {
    componentRender(<AppSettings />, { route: '' })
    expect(screen.getByTestId('AppSettings'))
      .toBeInTheDocument()
  })
  test('AppSettings should go out when you click on the settings icon', () => {
    componentRender(<AppSettings />, { route: '' })
    const toggleButton = screen.getByTestId('Toggle-AppSettings')

    expect(screen.getByTestId('AppSettings'))
      .toBeInTheDocument()

    fireEvent.click(toggleButton)

    screen.debug()

    expect(screen.getByTestId('AppSettings'))
      .toHaveClass('open')
  })
})
