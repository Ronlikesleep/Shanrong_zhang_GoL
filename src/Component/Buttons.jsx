import NextButton from "./NextButton";
import ResetButton from "./ResetButton";
import { Stack } from "@mui/material";
import AutoPlayButton from './AutoPlayButton';
export default function Buttons() {
    return (
        <Stack spacing={2} direction="row" className="button-stack">
            <NextButton />
            <ResetButton />
            <AutoPlayButton />
        </Stack>
    )
}