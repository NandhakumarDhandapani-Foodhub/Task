import React from 'react';
import {useEffect, useState} from 'react'
import {useDispatch} from "react-redux";
import {useSelector} from 'react-redux';
import {DataGrid} from '@mui/x-data-grid';
import {useFormik} from 'formik'
import  Button from '@mui/material/Button';
import EditIcon from "@material-ui/icons/Edit";

import {Modal} from "antd";
import TestForm from "./Component/TestForm";

//--------------------------

const Tests = () => {

    const formik = useFormik({
        initialValues: {
            id: "",
            name: "",
            email: "",
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    //-------------

    const toggleModal = (value) => {
        if(!value) {
            formik.resetForm();
            setIsEdit(false)
        }
        setIsModalVisible(value)
    };

    //------------------

    const dispatch = useDispatch();
    const [pageOne, setPageOne] = useState(1);
    const [sizePage, setSizePage] = useState(8);
    const [isEdit,setIsEdit] = useState(false);
    const [open, setOpen] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const {tests} = useSelector((state) => ({
        tests: state.tests
    }))
    console.log(tests, 'test')

    useEffect((pageOne, sizePage) => {
        dispatch.tests.getAllTests()
    }, [pageOne, sizePage])

    // const handleShow = (data) => {
    //     console.log(data.name,'data')
    //         if(data !== null && data !== undefined (data)){
    //             toggleModal(open);
    //             setIsEdit(true);
    //             formik.setValues({
    //                 id:data.id,
    //                 name:data.name,
    //                 email:data.email
    //             })
    //         }
    // }

    const handleShow = (data, row) => {
        console.log(data)
        // formik.setValues({
        //     id: data.id,
        //     name: data.name,
        //     email: data.email
        // });
        // setIsEdit(true);
        // toggleModal(true)
    }

    const columns = [
        {
            field: 'id',
            headerName: 'Id',
            width: 100
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 100
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200
        },
        {
            field: 'body',
            headerName: 'Body',
            width: 200
        },
        {
            field: "edit",
            headerName: "Edit",
            sortable: false,
            width: 130,
            disableClickEventBubbling: true,
            renderCell: (text,row) => {
                return (
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<EditIcon />}
                        onClick={ handleShow()}
                    >
                        Show
                    </Button>
                );
            }
        },
    ]



    return (
        <>
            <div style={{height: 400, width: '100%'}}>
                <DataGrid
                    rows={tests.tests}
                   columns={columns}
               />

                <Modal
                    title={'Pop Up'}
                    modalVisible={isModalVisible}
                >
                    <TestForm formik={formik} />
                </Modal>
            </div>


        </>
    )
}

export default Tests