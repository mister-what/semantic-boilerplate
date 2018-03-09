import {
  spawn,
  take
} from "redux-saga/effects";


function* topLevelTask() {
  while (true) {
    const action = yield take("*");
    console.log(JSON.stringify(action));
  }
}

export function* indexSaga() {
  yield spawn(topLevelTask);
}
