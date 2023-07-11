import { createAppAsyncThunk } from 'shared/lib'
import { validateProfile } from '../validateProfile/validateProfile'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { Profile, ValidateProfileError } from '../../types/profile'

export const updateProfileData = createAppAsyncThunk<Profile, void, { rejectValue: ValidateProfileError[] }>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const {
      getState,
      extra,
      rejectWithValue,
    } = thunkAPI
    const formData = getProfileForm(getState())
    const errors = validateProfile(formData)

    if (errors.length) {
      return rejectWithValue(errors)
    }

    try {
      const { data } = await extra.api.put<Profile>(`profile/${formData?.id}`, formData)
      if (!data) {
        throw new Error()
      }
      return data
    } catch (e) {
      return rejectWithValue([ValidateProfileError.SERVER_ERROR])
    }
  },
)
