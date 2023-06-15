import { screen } from '@testing-library/react'
import { componentRender } from 'shared/config/tests/componentRender/componentRender'
import { LangSwitcher } from './LangSwitcher'

describe('features/LangSwitcher/ui/LangSwitcher', () => {
  test('button is expected to have text TEST', () => {
    componentRender(<LangSwitcher />)
    expect(screen.getByTestId('LangSwitcher'))
      .toBeInTheDocument()
  })
})
