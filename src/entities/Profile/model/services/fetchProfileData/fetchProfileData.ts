import { createAppAsyncThunk } from 'shared/lib'
import { Profile } from '../../types/profile'

export const fetchProfileData = createAppAsyncThunk<Profile, string>(
  'profile/fetchProfileData',
  async (userId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    try {
      const { data } = await extra.api.get<Profile>(`profile/${userId}`)
      if (!data) {
        throw new Error()
      }
      return data
    } catch (e) {
      return rejectWithValue('error')
    }
  },
)
