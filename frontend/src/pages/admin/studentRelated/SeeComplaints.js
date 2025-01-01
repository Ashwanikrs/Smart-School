import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Paper, Box, Checkbox
} from '@mui/material';
import { getAllComplaints } from '../../../redux/ComplaintRelated/ComplaintHandle';
import TableTemplate from '../../../components/TableTemplate';

const SeeComplaints = () => {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };  const dispatch = useDispatch();
  const { ComplaintsList, loading, error, response } = useSelector((state) => state.Complaint);
  const { currentUser } = useSelector(state => state.user)

  useEffect(() => {
    dispatch(getAllComplaints(currentUser._id, "Complaint"));
  }, [currentUser._id, dispatch]);

  if (error) {
    console.log(error);
  }

  const ComplaintColumns = [
    { id: 'user', label: 'User', minWidth: 170 },
    { id: 'Complaintt', label: 'Complaintt', minWidth: 100 },
    { id: 'date', label: 'Date', minWidth: 170 },
  ];

  const ComplaintRows = ComplaintsList && ComplaintsList.length > 0 && ComplaintsList.map((Complaint) => {
    const date = new Date(Complaint.date);
    const dateString = date.toString() !== "Invalid Date" ? date.toISOString().substring(0, 10) : "Invalid Date";
    return {
      user: Complaint.user.name,
      Complaintt: Complaint.Complaintt,
      date: dateString,
      id: Complaint._id,
    };
  });

  const ComplaintButtonHaver = ({ row }) => {
    return (
      <>
        <Checkbox {...label} />
      </>
    );
  };

  return (
    <>
      {loading ?
        <div>Loading...</div>
        :
        <>
          {response ?
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
              No Complaints Right Now
            </Box>
            :
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
              {Array.isArray(ComplaintsList) && ComplaintsList.length > 0 &&
                <TableTemplate buttonHaver={ComplaintButtonHaver} columns={ComplaintColumns} rows={ComplaintRows} />
              }
            </Paper>
          }
        </>
      }
    </>
  );
};

export default SeeComplaints;