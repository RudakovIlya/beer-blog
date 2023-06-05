import { screen } from '@testing-library/react'

import { renderWithTranslation } from 'shared/lib/renderWithTranslation/renderWithTranslation'
import { LangSwitcher } from './LangSwitcher'

describe('features/LangSwitcher/ui/LangSwitcher', () => {
  test('button is expected to have text TEST', () => {
    renderWithTranslation(<LangSwitcher />)
    expect(screen.getByTestId('LangSwitcher')).toBeInTheDocument()
  })
})
