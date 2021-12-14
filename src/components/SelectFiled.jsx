import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
    handleCatogryChange,
    handleDifficltyChange,
    handleTypeChange,
} from "./../redux/action";

const Selectfiled = (props) => {
    const { label, options } = props;
    const [value, setValue] = useState("");

    const dispatch = useDispatch();
    const handleChange = (e) => {
        setValue(e.target.value);
        switch (label) {
            case "Category":
                dispatch(handleCatogryChange(e.target.value));
                break;
            case "Difficulty":
                dispatch(handleDifficltyChange(e.target.value));
                break;
            case "Type":
                dispatch(handleTypeChange(e.target.value));
                break;

            default:
                return;
        }
    };
    return (
        <Box mt={3} width="100%">
            <FormControl fullWidth size="small">
                <InputLabel>{label}</InputLabel>
                <Select value={value} label={label} onChange={handleChange}>
                    {options.map(({ id, name }) => {
                        return (
                            <MenuItem value={id} key={id}>
                                {name}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
        </Box>
    );
};

export default Selectfiled;
