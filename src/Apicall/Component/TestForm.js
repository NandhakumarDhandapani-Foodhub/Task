import React from 'react'
import {Card, Form, Input} from "antd";


const TestForm = ({formik}) => {
    return (
        <>
            <Card>
                <Form>
                    <Form.Item label={'front'}>
                        <Input
                            //onChange={formik.handleChange}
                            value={formik.values.tests}
                            placeholder={'input'}
                        />
                        type={'name'}

                    </Form.Item>

                    <Form.Item label={'front'}>
                        <Input
                            //onChange={formik.handleChange}
                            value={formik.values.tests}
                            placeholder={'input'}
                        />
                        type={'name'}

                    </Form.Item>

                    <Form.Item label={'front'}>
                        <Input
                            //onChange={formik.handleChange}
                            value={formik.values.tests}
                            placeholder={'input'}
                        />
                        type={'name'}

                    </Form.Item>
                </Form>
            </Card>

        </>
    )
}

export default TestForm;