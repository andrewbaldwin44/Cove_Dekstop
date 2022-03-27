import { createSagaSlice, updateStateWithPayload } from 'redux/utils';
import { userWatchers } from 'auth/user.saga';

interface IUserState {
  email: string | null;
  displayName?: string;
  photoURL?: string;
}

const initialState: IUserState = {
  email: null,
};

const userSlice = createSagaSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: updateStateWithPayload<IUserState>(),
    clearUser: () => initialState,
  },
  sagas: userWatchers,
});

export const userActions = userSlice.actions;
export const watchUser = userSlice.watcher;

export default userSlice.reducer;
