import { screen } from '@testing-library/react'
import { componentRender } from 'shared/config/tests/componentRender/componentRender'
import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { userEvent } from '@storybook/testing-library'
import { Counter } from './Counter'

describe('Counter', () => {
  let state: DeepPartial<StateSchema>
  beforeEach(() => {
    state = {
      counter: { value: 10 },
    }
  })
  test('should be title with text value 10', () => {
    componentRender(<Counter />, {
      initialState: state,
    })
    expect(screen.getByTestId('value-title'))
      .toHaveTextContent('10')
  })
  test('increment title value', () => {
    componentRender(<Counter />, {
      initialState: state,
    })
    userEvent.click(screen.getByTestId('increment-btn'))
    expect(screen.getByTestId('value-title'))
      .toHaveTextContent('11')
  })
  test('decrement title value', () => {
    componentRender(<Counter />, {
      initialState: state,
    })
    userEvent.click(screen.getByTestId('decrement-btn'))
    expect(screen.getByTestId('value-title'))
      .toHaveTextContent('9')
  })
})
