import { fork, all } from 'redux-saga/effects';

import { watchLoginStarted } from './auth';
import { watchSayHappyBirthday } from './happyBirthday';
import { watchAddStarted ,watchRemoveStarted , watchFetchStarted} from './PetOwners';


function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    fork(watchSayHappyBirthday),
    fork(watchFetchStarted),
    fork(watchAddStarted),
    fork(watchRemoveStarted),

  ]);
}


export default mainSaga;
