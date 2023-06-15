import { fireEvent, screen } from '@testing-library/react'
import { componentRender } from 'shared/config/tests/componentRender/componentRender'
import { Sidebar } from './Sidebar'

describe('widgets/Sidebar/ui/Sidebar', () => {
  test('Sidebar should be in the document', () => {
    componentRender(<Sidebar />)
    expect(screen.getByTestId('sidebar'))
      .toBeInTheDocument()
  })
  test('Sidebar', () => {
    componentRender(<Sidebar />)
    const sidebarToggleButton = screen.getByTestId('sidebar-toggle-button')

    expect(screen.getByTestId('sidebar'))
      .toBeInTheDocument()

    fireEvent.click(sidebarToggleButton)

    screen.debug()

    expect(screen.getByTestId('sidebar'))
      .toHaveClass('collapsed')
  })
})
