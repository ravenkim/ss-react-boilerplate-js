

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