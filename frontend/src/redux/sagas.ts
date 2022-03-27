import { all, call, spawn } from 'redux-saga/effects';

import { watchUser } from 'auth/user.slice';

const DEVELOPMENT = process.env.NODE_ENV === 'development';

export default function* rootSaga() {
  const rootSagas = [watchUser];

  yield all(
    rootSagas.map(saga =>
      spawn(function* wrapSaga() {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (error) {
            if (DEVELOPMENT) {
              // eslint-disable-next-line no-console
              console.log(`Error in ${saga.name}`, error);
            }
          }
        }
      }),
    ),
  );
}
