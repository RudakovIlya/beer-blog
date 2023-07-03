import { createAppAsyncThunk } from 'shared/lib'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { Profile } from '../../types/profile'

export const updateProfileData = createAppAsyncThunk<Profile, void>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const { getState, extra, rejectWithValue } = thunkAPI
    const formData = getProfileForm(getState())
    try {
      const { data } = await extra.api.put<Profile>('profile', formData)
      return data
    } catch (e) {
      return rejectWithValue('error')
    }
  },
)
