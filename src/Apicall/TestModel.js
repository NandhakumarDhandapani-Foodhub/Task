
import {Network} from "./Network";

const TestModel = {
    state: {
        tests: [],
        error: null,
        isLoading: false,

    },
    reducers: {
        loading: (state, payload) => {
            return {...state, isLoading: payload.isLoading};
        },
        tests: (state, payload) => {
            return {...state, tests: payload.tests}
        },
        error: (state, payload) => {
            return {...state, error: payload.message}
        }
    },
    effects: (dispatch) => ({
        getAllTests: async () => {
            dispatch.tests.loading({isLoading: true});
            //const offset = (pageOne -1 ) * sizePage;
            Network
                .getTest()
                .then((response) => {
                    console.log(response)
                    dispatch.tests.loading({isLoading: false});
                    if(response.status === 200){
                        dispatch.tests.tests({
                            tests: response.data,
                        });
                    }else{
                        dispatch.tests.error({
                            message:'not available'
                        })
                    }
                })
                .catch((error) => {
                    dispatch.tests.error({
                        message: error.message

                    })

                })
        }
    })

}

export default TestModel