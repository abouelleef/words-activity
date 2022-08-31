import Progress from "../components/Progress";
import { useGetWordsQuery } from "../services/wordsApi";
import { Container, Typography, Button as MuiButton } from "@mui/material";
import Button from "../components/Button";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  getNextWord,
  increaseScore,
  selectCurrentWord,
  selectScore,
  setRank,
} from "../app/appSlice";
import { useNavigate } from "react-router-dom";
import { useGetRankMutation } from "../services/rankApi";
import Spinner from "../components/Spinner";

function Practice() {
  const pos = ["adverb", "verb", "adjective", "noun"] as const;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Getting the current word index from the redux store
  const currentWordIndex = useAppSelector(selectCurrentWord);

  // Getting the current score from the redux store
  const currentScore = useAppSelector(selectScore);

  // local component state to track if a question is answered or not
  const [isAnswered, setIsAnswered] = useState(false);

  // local component state to track the selected answer
  const [selected, setSelected] = useState<string | null>(null);

  // RTK Query auto generated hook to get the words list
  const { data, isLoading, error, refetch } = useGetWordsQuery(undefined);

  // RTK Query auto generated hook to send the score and get the rank from the server
  const [getRank] = useGetRankMutation();

  const handleAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Getting the type of word of selected answer
    const selectedAnswer = e.currentTarget.innerText.toLowerCase();
    setSelected(selectedAnswer);
    setIsAnswered(true);

    // if the answer were correct, increase the score by 1 in the redux store
    if (data![currentWordIndex].pos === selectedAnswer) {
      dispatch(increaseScore());
    }
  };

  const handleNext = async (e: React.MouseEvent) => {
    // if it the last question will preform the following actions:
    // 1- sumbit the score to the server using the mutation hook then dispatcing the result to the redux store
    // 2- nagivating to the rank page,
    // 3- refetch the word list to get a brand new words list from the server
    // in case of the player returned to play again
    // 4- reseting the local state of the component

    if (data && currentWordIndex === data.length - 1) {
      await getRank(currentScore)
        .unwrap()
        .then((rank) => dispatch(setRank(rank)))
        .catch((error) => console.error("rejected", error));
      refetch();
      navigate("/rank", { replace: true });
      return;
    }
    setIsAnswered(false);
    setSelected(null);
    dispatch(getNextWord());
  };

  if (isLoading) return <Spinner />;

  if (error) {
    return <p>error</p>;
  }

  return (
    <Container sx={{ maxWidth: "md" }}>
      <div>
        <h1>Practice</h1>

        <Progress />
        <div>
          <p>What part of speech does the following word belong to?</p>
          <Typography
            align="center"
            variant="h3"
            textTransform="capitalize"
            gutterBottom
          >
            {data![currentWordIndex].word}
          </Typography>
        </div>
        {pos.map((pos, i) => (
          <Button
            color={
              !isAnswered
                ? "primary"
                : data![currentWordIndex].pos === pos
                ? "success"
                : "error"
            }
            key={i}
            disabled={isAnswered && selected !== pos}
            variant={isAnswered ? "contained" : "outlined"}
            onClick={handleAnswer}
          >
            {pos}
          </Button>
        ))}

        <MuiButton
          variant="contained"
          sx={{ mt: 1 }}
          onClick={handleNext}
          disabled={!isAnswered}
        >
          next
        </MuiButton>
      </div>
    </Container>
  );
}

export default Practice;
