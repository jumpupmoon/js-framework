import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {post} from 'axios';
import {Dialog, DialogActions, DialogTitle, DialogContent, TextField, Button} from '@material-ui/core';

export default function CustomerAdd({callApi}) {
    const {register, handleSubmit} = useForm();
    const [open, setOpen] = useState(false);

    const onSubmit = data => {
        post('/api/customer', data)
            .then(res => {
                openClose();
                callApi();
            })
            .catch(res => console.log(res))
    };

    const openClose = () => {
        setOpen(m => !m);
    }

    return (
        <div>
            <Button variant="contained" color="primary" onClick={openClose}>고객 추가하기</Button>
            <Dialog open={open} onClose={openClose}>
                    <DialogTitle>고객 추가</DialogTitle>
                    <DialogContent>
                        <div><TextField label="이름" type="text" name="userName" inputRef={register} /></div>
                        <div><TextField label="생년월일" type="text" name="birthday" inputRef={register} /></div>
                        <div><TextField label="성별" type="text" name="gender" inputRef={register} /></div>
                        <div><TextField label="직업" type="text" name="job" inputRef={register} /></div>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={handleSubmit(onSubmit)}>추가</Button>
                        <Button variant="outlined" color="primary" onClick={openClose}>닫기</Button>
                    </DialogActions>
            </Dialog>
        </div>
    )
}