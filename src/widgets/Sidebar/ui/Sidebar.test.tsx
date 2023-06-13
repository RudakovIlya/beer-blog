import { fireEvent, screen } from '@testing-library/react'
import { renderWithTranslation } from 'shared/lib/renderWithTranslation/renderWithTranslation'
import { Sidebar } from './Sidebar'

describe('widgets/Sidebar/ui/Sidebar', () => {
  test('Sidebar should be in the document', () => {
    renderWithTranslation(<Sidebar />)
    expect(screen.getByTestId('sidebar'))
      .toBeInTheDocument()
  })
  test('Sidebar', () => {
    renderWithTranslation(<Sidebar />)
    const sidebarToggleButton = screen.getByTestId('sidebar-toggle-button')

    expect(screen.getByTestId('sidebar'))
      .toBeInTheDocument()

    fireEvent.click(sidebarToggleButton)

    screen.debug()

    expect(screen.getByTestId('sidebar'))
      .toHaveClass('collapsed')
  })
})
