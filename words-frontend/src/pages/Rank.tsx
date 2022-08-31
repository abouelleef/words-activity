import { Container, Typography, Button as MuiButton, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { resetState, selectRank } from "../app/appSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

function Rank() {
  // Getting the rank from the redux store
  const rank = useAppSelector(selectRank);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleTryAgain = () => {
    dispatch(resetState());
    navigate("/practice", { replace: true });
  };

  return (
    <Container sx={{ maxWidth: "md" }}>
      <Box>
        <h1>Rank</h1>
        <Typography variant="body1">
          Your rank across your peers is {rank}
        </Typography>
        <MuiButton
          fullWidth
          sx={{ mt: 4 }}
          onClick={handleTryAgain}
          variant="contained"
        >
          Try Again
        </MuiButton>
      </Box>
    </Container>
  );
}

export default Rank;
