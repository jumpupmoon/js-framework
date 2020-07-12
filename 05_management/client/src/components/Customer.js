import React from 'react';
import {TableRow, TableCell} from '@material-ui/core'
import CustomerDelete from './CustomerDelete';

export default function Customer({id, name, image, birthday, gender, job, callApi}) {
    return (
        <TableRow>
            <TableCell>{id}</TableCell>
            <TableCell><img src={image} alt="profile" /></TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{birthday}</TableCell>
            <TableCell>{gender}</TableCell>
            <TableCell>{job}</TableCell>
            <TableCell><CustomerDelete id={id} callApi={callApi} /> </TableCell>
        </TableRow>
    )
}