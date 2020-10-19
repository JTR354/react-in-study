import { call, takeLatest, takeEvery, put } from 'redux-saga/effects'

function fetchData(data = String(Math.random()).slice(-6)) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 1000)
    })
}

function* fetchUser(action) {
    console.log(action, 1e9)
    // try {
    //     const user = yield call(fetchData, action.payload.userId);
    //     yield put({type: "GET_DATA", user: user});
    //  } catch (e) {
    //     yield put({type: "GET_DATA", message: e.message});
    //  }
}

function* mySaga () {
    yield takeLatest("GET_DATA", fetchUser);
}

export default mySaga