import React, {useEffect} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {auth} from '../_action/user_action'

export default function (SpecificComponent, option, adminRoute = null) {
    // option => null 누구나 / true 로그인 유저 / false 비회원 전용

    function AuthenticationCheck(props) {
        const dispatch = useDispatch();
        
        useEffect(() => {
            dispatch(auth())
            .then(response => {
                // 로그인하지 않은 상태
                if(!response.payload.isAuth) {
                    if(option) {
                        props.history.push('/login');
                    }
                // 로그인 상태
                } else {
                    if(adminRoute && !response.payload.isAdmin) {
                        props.history.push('/');
                    } else {
                        if(option === false) props.history.push('/');
                    }
                }

            })
            
        }, [])

        return (
            <SpecificComponent />
        ) 
    }

    return AuthenticationCheck
}