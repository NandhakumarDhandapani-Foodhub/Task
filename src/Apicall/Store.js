import {init} from '@rematch/core';
import TestModel from "./TestModel";

const models = {
    tests: TestModel,
}
const store = init({
    name: 'store',
    models
})

export default store;