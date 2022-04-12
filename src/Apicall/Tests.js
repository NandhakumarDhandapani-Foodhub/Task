import React from 'react';
import {useEffect, useState} from 'react'
import {useDispatch} from "react-redux";
import {useSelector} from 'react-redux';
import {Button} from "antd";
import {Link} from 'react-router-dom';
import {useHistory} from "react-router-dom";
import {DataGrid} from "@mui/x-data-grid";

const Tests = () => {


    const history = useHistory()
    const dispatch = useDispatch();


    const [pageOne, setPageOne] = useState(1);
    const [sizePage, setSizePage] = useState(8);
    const [dis, setDis] = useState([])

    const {tests} = useSelector((state) => ({
        tests: state.tests
    }))

    useEffect((pageOne, sizePage) => {
        dispatch.tests.getAllTests()
    }, [pageOne, sizePage])

    const setDisplay = (record) => {
        console.log(record, 'rec calling');
        setDis(record)
        dispatch.tests.getDisplay(record)
    }

    const columns = [
        {field: 'id', headerName: 'Id', width: 100},
        {field: 'name', headerName: 'Name', width: 100},
        {field: 'email', headerName: 'Email', width: 200},
        {field: 'body', headerName: 'Body', width: 200},
        {
            field: "edit", headerName: "Edit", sortable: false,
            width: 130,
            disableClickEventBubbling: true,
            renderCell: (record) => {
                return (
                    <Link to={{
                        pathname: "/show",
                        state: record.id
                    }}
                    >
                        <Button
                            variant="contained"
                            type='primary'
                            onClick={() => setDisplay(record)}
                        >
                            Show
                        </Button>
                    </Link>
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
            </div>
        </>
    )
}

export default Tests