import React from 'react';
import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from '@mui/material';
import { Student } from '../../types/Students';

interface Props {
  data: Student[];
}

const StudentsTable: React.FC<Props> = ({ data }) => {
  return (
    <Box
      sx={{
        width: {
          xs: '100%',     // Mobile
          md: '90%',      // Tablet
          lg: '76%',      // Desktop
        },
        mx: 'auto',
        backgroundColor: '#fff',
        borderRadius: 2,
        overflowX: 'auto',
      }}
    >
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: 'rgba(255,214,0,0.9)' }}>
            <TableCell sx={{ fontWeight: 600 }}>Student Name</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Student ID</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Grade</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Quarter Grade</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.studentId}</TableCell>
              <TableCell>{student.grade}</TableCell>
              <TableCell>{student.quarterGrade}</TableCell>
              <TableCell>
                <Typography
                  fontWeight={600}
                  color={student.status === 'Pass' ? 'green' : 'red'}
                >
                  {student.status}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default StudentsTable;
