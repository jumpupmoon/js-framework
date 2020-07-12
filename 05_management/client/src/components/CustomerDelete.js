import React, {useState} from 'react';
import {Dialog, DialogActions, DialogTitle, DialogContent, Button} from '@material-ui/core';

export default function CustomerDelete({id, callApi}) {
    const [open, setOpen] = useState(false);

    const deleteCustomer = (id) => {
        const url = '/api/customer/'+id;
        fetch(url, {
            method: 'delete'
        })
        callApi();
    }

    const openClose = () => {
        setOpen(m => !m);
    }

    return (
        <div>
            <Button variant="contained" color="secondary" onClick={openClose}>삭제</Button>
            <Dialog open={open} onClose={openClose}>
                <DialogTitle>삭제 경고</DialogTitle>
                <DialogContent>선택한 고객 정보가 삭제됩니다.</DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={() => deleteCustomer(id)}>삭제</Button>
                    <Button variant="outlined" color="primary" onClick={openClose}>닫기</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}