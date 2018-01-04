import { call, put, select, takeLatest } from 'redux-saga/effects';
// import { reposLoaded, repoLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import makeSelectTodos from 'containers/Todos/selectors';
import { ADD_TODO } from './constants';

/**
 * Github repos request/response handler
 */
export function* getTodos() {
  // Select username from store
  const todos = yield select(makeSelectTodos());
  const requestURL = 'http://localhost:1337/todos';

  console.log('todos', todos);
  const data = {
    text: 'foo',
    completed: false,
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    // Call our request helper (see 'utils/request')
    // const repos = yield call(request, requestURL, options);
    // console.log('repos', repos);
    // yield put(reposLoaded(repos, username));
  } catch (err) {
    // yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  // yield takeLatest('', getTodos);
}
