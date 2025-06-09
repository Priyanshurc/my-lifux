import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// Destructure the props for easy access
export default function BasicButtons({ textLabel, containedLabel, outlinedLabel }) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">{textLabel}</Button>
      <Button variant="contained">{containedLabel}</Button>
      <Button variant="outlined">{outlinedLabel}</Button>
    </Stack>
  );
}
