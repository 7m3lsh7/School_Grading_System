'use client';

import React, { useState } from 'react';
import { Box, Container, Stack, TextField, Typography } from '@mui/material';
import ThreeLines from '../../../components/TeacherComponents/HeaderTitle';
import StudentsTable from '../../../components/TeacherComponents/StudentsTable';
import { headerLines } from '../../../data/HeaderTitle';
import { studentsData } from '../../../data/Students';

export default function StudentsPage() {
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState<'None' | 'Pass' | 'Fail'>('None');

  const filteredData = studentsData.filter((student) => {
    const matchesSearch = student.name.toLowerCase().includes(search.toLowerCase());
    if (filterStatus === 'None') return matchesSearch;
    if (filterStatus === 'Pass') return matchesSearch && student.status === 'Pass';
    if (filterStatus === 'Fail') return matchesSearch && student.status !== 'Pass';
    return true;
  });

  const passCount = studentsData.filter((s) => s.status === 'Pass').length;
  const failCount = studentsData.filter((s) => s.status !== 'Pass').length;

  // دالة لتبديل الفلتر عند الضغط على نفس المستطيل
  const handleFilterClick = (status: 'Pass' | 'Fail') => {
    setFilterStatus((prev) => (prev === status ? 'None' : status));
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        backgroundImage: `url('/Images/Background.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: 4,
      }}
    >
      <Container maxWidth={false}>
        {/* Header + Pass/Fail + Search */}
        <Box
          sx={{
            backgroundColor: 'rgba(255 255 255 / 13%)',
            borderRadius: 2,
            p: 3,
            mb: 4,
          }}
        >
          {/* Header + Pass/Fail */}
          <Stack direction="row" spacing={3} alignItems="center">
            {/* ThreeLines */}
            <Box sx={{ flex: 1 }}>
              <ThreeLines lines={headerLines} />
            </Box>

            {/* Pass / Fail Filters*/}
            <Stack spacing={1} ml="auto">
              <Box
                onClick={() => handleFilterClick('Pass')}
                sx={{
                  backgroundColor: filterStatus === 'Pass' ? 'rgba(255,214,0,1)' : 'rgba(255,214,0,0.9)',
                  px: 2,
                  py: 0.5,
                  borderRadius: 1,
                  textAlign: 'center',
                  cursor: 'pointer',
                  minWidth: 60,
                }}
              >
                <Typography fontWeight={600} fontSize={14}>
                  Pass
                </Typography>
                <Typography fontWeight={600} fontSize={14}>
                  {passCount}
                </Typography>
              </Box>
              <Box
                onClick={() => handleFilterClick('Fail')}
                sx={{
                  backgroundColor: filterStatus === 'Fail' ? 'rgba(255,214,0,1)' : 'rgba(255,214,0,0.9)',
                  px: 2,
                  py: 0.5,
                  borderRadius: 1,
                  textAlign: 'center',
                  cursor: 'pointer',
                  minWidth: 60,
                }}
              >
                <Typography fontWeight={600} fontSize={14}>
                  Fail
                </Typography>
                <Typography fontWeight={600} fontSize={14}>
                  {failCount}
                </Typography>
              </Box>
            </Stack>
          </Stack>

          {/* Search */}
          <Box sx={{ mt: 3, width: { xs: '100%', md: '50%' }, mx: 'auto' }}>
            <TextField
              placeholder="Search students by name..."
              fullWidth
              size="small"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#fff',
                  borderRadius: 1,
                  height: 50,
                  '& fieldset': { border: 'none' },
                  '&:hover fieldset': { border: 'none' },
                  '&.Mui-focused fieldset': { border: 'none' },
                },
              }}
            />
          </Box>
        </Box>

        {/* Background + Table */}
        <Box
          sx={{
            backgroundColor: 'rgba(255 255 255 / 13%)',
            borderRadius: 2,
            p: 2,
          }}
        >
          <StudentsTable data={filteredData} />
        </Box>
      </Container>
    </Box>
  );
}
