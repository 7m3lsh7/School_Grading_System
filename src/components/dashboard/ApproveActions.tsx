import { Stack, Button } from "@mui/material";

export default function ApproveActions() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="warning">
        Approve
      </Button>

      <Button variant="contained" color="inherit">
        Unlock
      </Button>
    </Stack>
  );
}