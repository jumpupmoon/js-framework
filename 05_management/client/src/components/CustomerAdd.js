import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {post} from 'axios';

export default function CustomerAdd() {
    const {register, handleSubmit} = useForm();

    const onSubmit = data => {
        addCustomer(data)
            .then(res => console.log(res.data));
        window.location.reload();
    };

    const addCustomer = (data) => {
        const url = '/api/customer';
        const config = {
            heders: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, data, config);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>고객 추가</h1>
            <div>프로필 이미지: <input type="file" name="file" ref={register} /></div>
            <div>이름 : <input type="text" name="userName" ref={register} /></div>
            <div>생년월일 : <input type="text" name="birthday" ref={register} /></div>
            <div>성별 : <input type="text" name="gender" ref={register} /></div>
            <div>직업 : <input type="text" name="job" ref={register} /></div>
            <div><button type="submit">추가하기</button></div>
        </form>
    )
}