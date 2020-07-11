import React, {useState, useEffect} from 'react';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import {Table, TableHead, TableBody, TableRow, TableCell, Paper, CircularProgress} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.uint * 3,
    overfloxX: 'auto'
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin: theme.spacing.uint * 2
  }
}));

export default function App() {
  const classes = useStyles;
  const [customers, setCustomers] = useState();
  const [completed, setCompleted] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(progress, 20);
    callApi()
      .then(res => setCustomers(res))
      .catch(err => console.log(err));

    return () => {
      clearInterval(timer);
      setCustomers();
    }
  }, []);

  const callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  const progress = () => {
    setCompleted(c => c >= 100 ? 0 : c +1);
  }

  return (
    <div>
      <Paper className={classes.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers ? customers.map((c, i) => 
              <Customer
                key={c.id}
                id={c.id}
                image={"http://placeimg.com/64/64/"+i}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            ) : 
              <TableRow>
                <TableCell colSpan="6" align="center">
                  <CircularProgress className={classes.progress} variant="determinate" value={completed} />
                </TableCell>
              </TableRow>
            }
          </TableBody>
        </Table>
      </Paper>
      <CustomerAdd />
    </div>
  );
}
