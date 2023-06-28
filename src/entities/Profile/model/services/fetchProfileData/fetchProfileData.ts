import { createAppAsyncThunk } from 'shared/lib'
import { Profile } from '../../types/profile'

export const fetchProfileData = createAppAsyncThunk<Profile, void>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    try {
      const { data } = await extra.api.get<Profile>('profile')
      return data
    } catch (e) {
      return rejectWithValue('error')
    }
  },
)
