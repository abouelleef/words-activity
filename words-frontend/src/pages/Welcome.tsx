import { Container, Typography, Button as MuiButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/practice", { replace: true });
  };

  return (
    <Container sx={{ maxWidth: "md" }}>
      <h1>Welcome to words activity</h1>
      <Typography gutterBottom variant="body1">
        In English language, words can be categorized according to their
        syntactic functions, which is known as "Part of Speech". <br />
        Examples of part of speech: (noun, verb, adjective, ...) <br />
        Check this{" "}
        <a href="https://en.wikipedia.org/wiki/Part_of_speech">link</a> for more
        information.
      </Typography>
      <br />
      <Typography gutterBottom variant="body1">
        In this activity, you will be prompted with a multiple-choice question
        to select. the correct answer.
        <br />
        If you choose the correct answer, the choice button colour will change.
        green, otherwise it will turn red.
      </Typography>
      <br />
      <Typography gutterBottom variant="body1">
        At the end of the activity, you will be redirected to the rank page to
        see your rank against your peers.
      </Typography>

      <MuiButton
        onClick={handleStart}
        sx={{ mt: 4 }}
        fullWidth
        variant="contained"
      >
        let's start
      </MuiButton>
    </Container>
  );
}
