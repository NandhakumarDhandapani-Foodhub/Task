import React from 'react'
import {Form} from "antd";


const TestForm = ({formik}) => {
    return (
        <>
           <Form>
               <Form.Item
                label = {'front'}
               >
                   type={'name'}
                   onChange={formik.handleChange}
               </Form.Item>
           </Form>

        </>
    )
}

export default TestForm;