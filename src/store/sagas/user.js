import test from 'tape'
import { fork, put, takeEvery, call, take, cancel, select, actionChannel, spawn, race , all, takeLatest, throttle} from "@redux-saga/core/effects";
import axios from "axios";
import { buffers, eventChannel, END, channel } from 'redux-saga'
import { cloneableGenerator } from '@redux-saga/testing-utils';


const delay = (ms) => new Promise(res => setTimeout(res, ms))

console.log("saga startted...");

let value={}



 function* addItems(action) {
    // yield call(delay, 1000) 
    // axios.get('https://jsonplaceholder.typicode.com/users/1')
    // console.log("calledsss...01");

    // const test = yield call((() => axios.get('https://jsonplaceholder.typicode.com/users')
    // .then((response) => {
    //    return(response.data);
    // })))
    // console.log(test);
    // const value = test
    console.log("calling....01");
    value = (action ? action.value : {} )
    console.log(value);
    yield put({ type: "users/increaseItems", value: value })
   
    // yield call(fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(response => response.json())
    // .then(json => console.log(json)))
}


function* addNewItems(action) {
    console.log("calleding...");
    yield put({ type: "users/increaseItems", value: action })
    // yield call(fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(response => response.json())
    // .then(json => console.log(json)))
}



function* deleteItems(action) {
    console.log("called...");
    yield put({ type: "users/decreaseItems", payload: action.value })
    // yield call(fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(response => response.json())
    // .then(json => console.log(json)))
}

function* timeDelay(){
    yield delay(5000);
    console.log("Calling...02");
}


const helloWorld = (secs) => {
    return eventChannel(emitter => {
      const queue = [];
      console.log('start')
  
      setTimeout(() => {
  
        emitter('hoge')
      }, 2000)
  
      return () => {
        console.log('canceled')
      }
    })
  }

  const fetchApi = "https://jsonplaceholder.typicode.com/todos/1"


  function* fetchPostsWithTimeout() {
    const {posts, timeout} = yield race({
      posts: yield call(() =>
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {return response.json()})
    ),
      timeout: yield delay(1)
    })
  
    if (posts)
       console.log("success");
    else
       console.log("failed..");
  }


export function* userAddItems() {
    // let tempList = yield select(state => {return state});
    // let test =  tempList.users.searchList[0].quantity + 1
    // console.log( test );
    // const {value} = yield take('increaseUserItems')
    // yield call(addItems, value);
    // yield takeEvery("decreaseUserItems", deleteItems)

    // yield call(helloWorld)
    // const requestChan = yield actionChannel('increaseUserItems',buffers.sliding(1))
    // while(true){
    //     const {value} = yield take(requestChan)
    //     console.log(value);
    //     yield spawn(addItems)
    //     yield call(timeDelay)
    //     yield fork(addNewItems, value)
    // }

    const {value} = yield take('increaseUserItems')
    yield call(fetchPostsWithTimeout);




    // yield takeEvery('*', function* logger(action) {
    //     const state = yield select()
    
    //     console.log('action', action)
    //     console.log('state after', state)
    //   })
  
}


export function* rootSagaa() {
  // const action = 1;
  // const gen = addItems();
  // console.log(gen.next());
  //   // yield fork(addItems)
  //   // yield fork(timeDelay)
  //   yield all([
  //     addItems(action),
  //     timeDelay()
  //   ])
  //   // code after all-effect
  //   console.log(gen.next());
  // yield takeLatest('increaseUserItems',addItems)
      const requestChan = yield actionChannel('increaseUserItems',buffers.sliding(0))
    while(true){
        const {value} = yield take(requestChan)
        console.log(value);
        yield fork(timeDelay)
        yield fork(addItems,value)
        yield fork(addNewItems, value)
    }
      //  const {value} = yield take('increaseUserItems')
      //  yield fork(timeDelay)
      //  yield fork(addItems)
      //  yield fork(addNewItems, value)

  }

  test('addItems Saga test', (assert) => {
    const gene = cloneableGenerator(addItems)()
    const clone = gene.clone()
    console.log(clone);
    const gen = addItems()
    assert.deepEqual(
      gene.next().value,
      put({ type: 'users/increaseItems', value }),
      "fetchProducts should yield an Effect put({ type: 'users/increaseItems', value })"
    )
  })

  // function countdown(secs) {
  //   console.log(secs);
  //   return eventChannel(emitter => {
  //       const iv = setInterval(() => {
  //         secs -= 1
  //         console.log(secs);
  //         if (secs > 0) {
  //           emitter(secs)
  //         } else {
  //           // this causes the channel to close
  //           emitter(END)
  //         }
  //       }, 100000);
  //       // The subscriber must return an unsubscribe function
  //       return () => {
  //         clearInterval(iv)
  //       }
  //     }
  //   )
  // }


  // export function* rootSagas() {
  //   const value = 10;
  //   const chan = yield call(countdown, value)
  //   try {    
  //     while (true) {
  //       // take(END) will cause the saga to terminate by jumping to the finally block
  //       let seconds = yield take(chan)
  //       console.log(`countdown: ${seconds}`)
  //     }
  //   } finally {
  //     console.log('countdown terminated')
  //   }
  // }


  // export default function* rootSaga() {
  //   // create a channel to queue incoming requests
  //   const chan = yield call(channel)
  
  //   // create 3 worker 'threads'
  //   for (var i = 0; i < 3; i++) {
  //     yield fork(handleRequest, chan)
  //   }
  
  //   while (true) {
  //     const {payload} = yield take('REQUEST')
  //     yield put(chan, payload)
  //   }
  // }
  
  // function* handleRequest(chan) {
  //   while (true) {
  //     console.log("time");
  //     const payload = yield take(chan);
  //     yield console.log(payload);
  //     // process the request
  //   }
  // }

  function* testArray(){
    const result = yield all([ call(apiOne) , call(apiTwo) ]) 
    console.log(result);
  }

  const apiOne = async () => {
    console.log("apiOne");
     try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = response.json();
      delay(3000);
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  const apiTwo = async () => {
    console.log("apiTwo");
    try {
     const response = await fetch('https://jsonplaceholder.typicode.com/tod');
     const data = response.json();
     console.log(data);
     return data;
   } catch (e) {
     console.log(e);
   }
 }


  export default function* rootSaga() {
    yield fork(watchAndLog)
  }

  // function* game() {
  //   let finished
  //   while (!finished) {
  //     // has to finish in 60 seconds
  //     const {score, play, timeout} = yield race({
  //       play: call(apiOne),
  //       score: call(apiTwo),
  //       timeout: delay(100000)
  //     })
  //     console.log(score,play);
  
  //     if (!timeout) {
  //       finished = true
  //       console.log("finished.....");
  //     }
  //   }
  // }

// function* task1(){
//   yield delay(3000);
//   console.log("task1");
// }
  
// function* main() {
//   try {
//     const data = yield spawn(task1)
//     const datas = yield fork(apiTwo)
//     yield delay(1000)
//   } catch (e) {
//     console.log(e);
//     // handle fetchAll errors
//   }
// }

function* watchAndLog() {
  // for (let i = 0; i < 3; i++)  {
  //   const action = yield take('*')
  //   const state = yield select()

  //   console.log('action', action)
  //   console.log('state after', state)
  // }
  // console.log("Success..");
  yield takeEvery('increaseUserItems',addItems)

}
