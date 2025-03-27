import { createSlice } from '@reduxjs/toolkit'

//백엔드 에서 보내줄때는 statusCode, data, errMsg ?

//프런트에서 쓰기 위해 보여주는 값들
export const reducerUtils = {
    init: (defaultType = null) => ({
        data: defaultType,
        loading: false,
        error: false,
        errorMsg: '',
    }),

    loading: (prevData = null) => ({
        data: prevData,
        loading: true,
        error: false,
        errorMsg: '',
    }),

    success: (data = null) => ({
        data: data,
        loading: false,
        error: false,
        errorMsg: '',
    }),

    error: (prevData = null, errorMsg) => ({
        data: prevData,
        loading: false,
        error: true,
        errorMsg: errorMsg,
    }),
}


//비동기 요청에서 state 만 추출
const makeAsyncRequestState = (requests) => {
    return requests.reduce((acc, { state, initialState }) => {
        acc[state] = reducerUtils.init(initialState)
        return acc
    }, {})
}

// 최종 리덕스 제작기
export const reduxMaker = (
    prefix,
    asyncRequest = [],
    localState = {},
    localReducers = {},
) => {
    const final = {}
    const allInitialState = {
        ...localState,
        ...makeAsyncRequestState(asyncRequest),
    }

    console.log(allInitialState)
    //
    // final[`${prefix}Slice`] = createSlice({
    //     name: prefix,
    //     initialState: allInitialState,
    //     reducers: {
    //         initializeAll: () => {
    //             return allInitialState
    //         },
    //         initialize: (state, action) => {
    //             const itemName = action.payload
    //             if (
    //                 state[itemName] !== undefined &&
    //                 allInitialState[itemName] !== undefined
    //             ) {
    //                 state[itemName] = allInitialState[itemName]
    //             }
    //         },
    //
    //         ...apiReducers(prefix, asyncRequest),
    //         ...localReducers,
    //     },
    //     extraReducers: extraReducers(prefix, asyncRequest),
    // })
    //
    // //사가 만들기
    // final[`${prefix}Saga`] = function* () {
    //     for (const reducerName in asyncRequest) {
    //         yield takeLatest(
    //             `${prefix}/${reducerName}`,
    //             createRequestSaga(
    //                 prefix,
    //                 reducerName,
    //                 asyncRequest[reducerName][1],
    //             ),
    //         )
    //     }
    // }
    //
    // //액션 만들기
    // final[`${prefix}Action`] = final[`${prefix}Slice`].actions

    return final
}
