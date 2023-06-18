import { CounterSchema } from 'entities/Counter'
import { UserSchema } from 'entities/User'

export interface StateSchema {
  user: UserSchema
  counter: CounterSchema
}
