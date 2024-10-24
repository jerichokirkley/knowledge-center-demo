import React from 'react';
import { Typography, Grid, Paper, LinearProgress, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LessonCard from './LessonCard';
import ChatAssistant from './ChatAssistant';

function MainPage() {
  return (
    <div className="main-page">
      <Typography variant="h4" gutterBottom>
        FUSE Knowledge Center
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search the FUSE Knowledge Center"
        InputProps={{
          endAdornment: (
            <IconButton>
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
      <Typography variant="subtitle1" gutterBottom>
        YOUR LESSON PROGRESS
      </Typography>
      <LinearProgress variant="determinate" value={60} /> {/* Example progress */}
      <Typography variant="caption">3 / 25</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper>
            <Typography variant="h6">Getting Started</Typography>
            <LessonCard title="Welcome to FedEx Office" completed={true} />
            <LessonCard title="Intro to FUSE" completed={true} />
            <LessonCard title="Navigating Around" completed={false} />
            {/* Add more LessonCard components as needed */}
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <ChatAssistant />
        </Grid>
      </Grid>
    </div>
  );
}

export default MainPage;