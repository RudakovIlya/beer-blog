import 'app/styles/index.scss'
import { Story } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/AuthByUserName'
import { profileReducer } from 'entities/Profile'
import { ReducerList } from 'shared/hooks/useDynamicModuleLoader/useDynamicModuleLoader'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice'
import { articleDetailsCommentReducer } from 'pages/ArticlesDetailsPage/model/slice/articleDetailsCommentSlice'
import { addCommentFormReducer } from 'features/AddCommentForm/model/slice/addCommentFormSlice'

const defaultAsyncReducers: ReducerList = {
  login: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  articleDetailsComments: articleDetailsCommentReducer,
  addCommentForm: addCommentFormReducer,
}

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducerList,
) => {
  return (StoryComponent: Story) => {
    return (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    )
  }
}
