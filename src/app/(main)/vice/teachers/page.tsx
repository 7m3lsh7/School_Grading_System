'use client';

import React from 'react';
import { Box, Container, Typography, Stack, Button, Card, MenuItem, Select, FormControl, InputLabel, IconButton, Dialog, DialogTitle, DialogContent, TextField, RadioGroup, FormControlLabel, Radio, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

export default function ViceTeachersPage() {
    const [openAddSubject, setOpenAddSubject] = React.useState(false);
    const [openAddTeacher, setOpenAddTeacher] = React.useState(false);

    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundImage: 'url(/images/background1.png)', // Assuming same background as main dashboard
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                py: 4,
            }}
        >
            <Container maxWidth="lg">
                <Stack spacing={4}>
                    {/* Header */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h4" fontWeight="bold" sx={{ color: '#fff' }}>
                            Teacher Assignment Dashboard
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#ffc107',
                                color: '#000',
                                fontWeight: 'bold',
                                '&:hover': { backgroundColor: '#ffca2c' }
                            }}
                        >
                            List Teacher
                        </Button>
                    </Box>

                    {/* Main Content Area - No wrapper background */}
                    <Box
                        sx={{
                            py: 2,
                            color: '#fff',
                        }}
                    >
                        <Stack spacing={4}>

                            {/* Step 1: Select Teacher */}
                            <Card sx={{ py: 3, px: 4, borderRadius: '16px', backgroundColor: '#fff' }}>
                                <Stack spacing={2}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Box sx={{
                                            width: 28, height: 28,
                                            backgroundColor: '#ffc107',
                                            borderRadius: '4px',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontWeight: 700, fontSize: '14px', color: '#fff'
                                        }}>
                                            1
                                        </Box>
                                        <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>Select Teacher</Typography>
                                    </Box>

                                    <Divider sx={{ my: 1 }} />

                                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                        <FormControl fullWidth size="small" sx={{ maxWidth: 300 }}>
                                            <InputLabel>Select Teacher</InputLabel>
                                            <Select label="Select Teacher" defaultValue="">
                                                <MenuItem value={1}>Ahmed Mohamed</MenuItem>
                                                <MenuItem value={2}>Sarah Smith</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <Button
                                            onClick={() => setOpenAddTeacher(true)}
                                            variant="contained"
                                            startIcon={<AddIcon />}
                                            sx={{
                                                backgroundColor: '#ffc107',
                                                color: '#000',
                                                fontSize: '13px',
                                                fontWeight: 600,
                                                textTransform: 'none',
                                                borderRadius: '8px',
                                                '&:hover': { backgroundColor: '#ffca2c' }
                                            }}
                                        >
                                            Add New Teacher
                                        </Button>
                                    </Box>
                                </Stack>
                            </Card>

                            {/* Step 2: Subject Assignment */}
                            <Card sx={{ py: 3, px: 4, borderRadius: '16px', backgroundColor: '#fff' }}>
                                <Stack spacing={2}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Box sx={{
                                            width: 28, height: 28,
                                            backgroundColor: '#ffc107',
                                            borderRadius: '4px',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontWeight: 700, fontSize: '14px', color: '#fff'
                                        }}>
                                            2
                                        </Box>
                                        <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>Subject Assignment</Typography>
                                    </Box>

                                    <Divider sx={{ my: 1 }} />

                                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                        <FormControl fullWidth size="small" sx={{ maxWidth: 200 }}>
                                            <InputLabel>Academic Year</InputLabel>
                                            <Select label="Academic Year" defaultValue="">
                                                <MenuItem value="2024">2024-2025</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl fullWidth size="small" sx={{ maxWidth: 200 }}>
                                            <InputLabel>Subject</InputLabel>
                                            <Select label="Subject" defaultValue="">
                                                <MenuItem value="math">Mathematics</MenuItem>
                                                <MenuItem value="science">Science</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <IconButton
                                            onClick={() => setOpenAddSubject(true)}
                                            sx={{
                                                backgroundColor: '#ffc107',
                                                color: '#000',
                                                borderRadius: '4px',
                                                '&:hover': { backgroundColor: '#ffca2c' }
                                            }}
                                        >
                                            <AddIcon />
                                        </IconButton>
                                    </Box>
                                </Stack>
                            </Card>

                            {/* Step 3: Assign Classes */}
                            <Card sx={{ py: 3, px: 4, borderRadius: '16px', backgroundColor: '#fff' }}>
                                <Stack spacing={2}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Box sx={{
                                            width: 28, height: 28,
                                            backgroundColor: '#ffc107',
                                            borderRadius: '4px',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontWeight: 700, fontSize: '14px', color: '#fff'
                                        }}>
                                            3
                                        </Box>
                                        <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>Assign Classes</Typography>
                                    </Box>

                                    <Divider sx={{ my: 1 }} />

                                    <Box sx={{ display: 'flex', gap: 2 }}>
                                        {['J1', 'J2', 'J3'].map((cls) => (
                                            <Box
                                                key={cls}
                                                sx={{
                                                    width: 36, height: 36,
                                                    borderRadius: '4px',
                                                    backgroundColor: '#ffc107',
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    fontWeight: 700, fontSize: '13px', color: '#000',
                                                    cursor: 'pointer',
                                                    '&:hover': { transform: 'scale(1.05)' },
                                                    transition: '0.2s'
                                                }}
                                            >
                                                {cls}
                                            </Box>
                                        ))}
                                    </Box>
                                </Stack>
                            </Card>

                            {/* Footer Action */}
                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        backgroundColor: '#ffc107',
                                        color: '#000',
                                        px: 6, py: 1.5,
                                        fontWeight: 'bold',
                                        '&:hover': { backgroundColor: '#ffca2c' }
                                    }}
                                >
                                    Assign Teacher
                                </Button>
                            </Box>

                        </Stack>
                    </Box>
                </Stack>

                {/* Add New Teacher Modal */}
                <Dialog
                    open={openAddTeacher}
                    onClose={() => setOpenAddTeacher(false)}
                    PaperProps={{
                        sx: {
                            borderRadius: '16px',
                            minWidth: '500px',
                            p: 1
                        }
                    }}
                >
                    <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold' }}>
                        Add New Teacher
                        <IconButton onClick={() => setOpenAddTeacher(false)} size="small">
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent>
                        <Stack spacing={3} sx={{ mt: 1 }}>
                            <Box>
                                <TextField
                                    fullWidth
                                    placeholder="Teacher name"
                                    sx={{ backgroundColor: '#f5f5f5', borderRadius: 1 }}
                                    variant="outlined"
                                    size="small"
                                />
                            </Box>
                            <Box>
                                <TextField
                                    fullWidth
                                    placeholder="Email"
                                    sx={{ backgroundColor: '#f5f5f5', borderRadius: 1 }}
                                    variant="outlined"
                                    size="small"
                                />
                            </Box>
                            <Box>
                                <TextField
                                    fullWidth
                                    placeholder="Phone"
                                    sx={{ backgroundColor: '#f5f5f5', borderRadius: 1 }}
                                    variant="outlined"
                                    size="small"
                                />
                            </Box>
                            <Box>
                                <TextField
                                    fullWidth
                                    placeholder="Qualifications"
                                    sx={{ backgroundColor: '#f5f5f5', borderRadius: 1 }}
                                    variant="outlined"
                                    size="small"
                                />
                            </Box>

                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        backgroundColor: '#ffc107',
                                        color: '#000',
                                        fontWeight: 'bold',
                                        py: 1.5,
                                        '&:hover': { backgroundColor: '#ffca2c' }
                                    }}
                                >
                                    Save Teacher
                                </Button>
                            </Box>
                        </Stack>
                    </DialogContent>
                </Dialog>

                {/* Add New Subject Modal */}
                <Dialog
                    open={openAddSubject}
                    onClose={() => setOpenAddSubject(false)}
                    PaperProps={{
                        sx: {
                            borderRadius: '16px',
                            minWidth: '500px',
                            p: 1
                        }
                    }}
                >
                    <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold' }}>
                        Add New Subject
                        <IconButton onClick={() => setOpenAddSubject(false)} size="small">
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent>
                        <Stack spacing={3} sx={{ mt: 1 }}>
                            <Box>
                                <Typography variant="caption" sx={{ color: 'text.secondary', mb: 1, display: 'block' }}>Subject Custom Name</Typography>
                                <TextField
                                    fullWidth
                                    placeholder="Subject name"
                                    sx={{ backgroundColor: '#f5f5f5', borderRadius: 1 }}
                                    variant="outlined"
                                    size="small"
                                />
                            </Box>

                            <FormControl>
                                <Typography variant="caption" sx={{ color: 'text.secondary', mb: 1, display: 'block' }}>Subject Type</Typography>
                                <RadioGroup defaultValue="academic">
                                    <FormControlLabel
                                        value="academic"
                                        control={<Radio sx={{ color: '#ffc107', '&.Mui-checked': { color: '#ffc107' } }} />}
                                        label="Academic Subject"
                                        sx={{
                                            '& .MuiTypography-root': { fontSize: '0.9rem' }
                                        }}
                                    />
                                    <FormControlLabel
                                        value="competency"
                                        control={<Radio sx={{ color: '#ffc107', '&.Mui-checked': { color: '#ffc107' } }} />}
                                        label="Competency (Jadarat)"
                                        sx={{
                                            '& .MuiTypography-root': { fontSize: '0.9rem' }
                                        }}
                                    />
                                </RadioGroup>
                            </FormControl>

                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        backgroundColor: '#ffc107',
                                        color: '#000',
                                        fontWeight: 'bold',
                                        py: 1.5,
                                        '&:hover': { backgroundColor: '#ffca2c' }
                                    }}
                                >
                                    Save Subject
                                </Button>
                            </Box>
                        </Stack>
                    </DialogContent>
                </Dialog>
            </Container>
        </Box>
    );
}
