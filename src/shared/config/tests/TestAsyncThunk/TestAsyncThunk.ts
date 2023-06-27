import { StateSchema } from 'app/providers/StoreProvider'
import { AsyncThunkAction } from '@reduxjs/toolkit'

type ActionCreatorType<Return, Arg, Rejected> = (arg: Arg) =>
  AsyncThunkAction<Return, Arg, { rejectValue: Rejected }>

export class TestAsyncThunk<Return, Arg, Rejected> {
  dispatch: jest.MockedFn<any>

  getState: () => StateSchema

  actionCreator: ActionCreatorType<Return, Arg, Rejected>

  constructor(actionCreator: ActionCreatorType<Return, Arg, Rejected>) {
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn()
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg)
    return action(this.dispatch, this.getState, undefined)
  }
}
