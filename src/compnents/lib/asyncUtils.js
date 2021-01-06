

export const reducerUtils = {
    intital: (data = null) => ({
        data,
        loading: false,
        error:null
    }),
    loading: (prevState = null) => ({
        data: prevState,
        loading:true,
        error: null
    }),
    success: data => ({
        data,
        loading: false,
        error: null
    }),
    error: error => ({
        data:null,
        loading: false,
        error
    })
}