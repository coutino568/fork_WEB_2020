import { call, takeEvery, put, delay, select } from 'redux-saga/effects';
import * as actions from '../actions/petOwners';
import * as types from '../types/petOwners';
import * as selectors from '../reducers';


//agregar un pet owner
function* addStarted(action){
	console.log("SAGA de add started");
    
}

export function* watchAddStarted() {
    yield takeEvery(
        types.PET_OWNER_ADD_STARTED,
        addStarted,
    )
}
//remover un pet owner

function* removeStarted(action){
	console.log("SAGA de removeStarted");
}

export function* watchRemoveStarted() {
    yield takeEvery(
        types.PET_OWNER_REMOVE_STARTED,
        removeStarted,
    )
}

// traer  un pet owner
function* fetchStarted(action){
	console.log("SAGA de fetchStarted");
}

export function* watchFetchStarted() {
    yield takeEvery(
        types.PET_OWNERS_FETCH_STARTED,
        fetchStarted,
    );
}