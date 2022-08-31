import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { selectCurrentWord } from "../app/appSlice";
import { useAppSelector } from "../app/hooks";

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress sx={{ height: 6 }} variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35, textAlign: "center" }}>
        <Typography variant="h6" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function Progress() {
  const currentWordIndex = useAppSelector(selectCurrentWord);

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgressWithLabel value={(currentWordIndex + 1) * 10} />
    </Box>
  );
}
