import React from "react";
import { Box } from "@mui/system";
import { FormControl, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { handleAmountChange } from "../redux/action";

const TextFiledCop = () => {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(handleAmountChange(e.target.value));
    };
    return (
        <Box mt={3} width="100%">
            <FormControl fullWidth>
                <TextField
                    onChange={handleChange}
                    variant="outlined"
                    label="Amount Of Questions"
                    type="number"
                    size="small"
                />
            </FormControl>
        </Box>
    );
};

export default TextFiledCop;
