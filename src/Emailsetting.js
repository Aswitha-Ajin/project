import React from "react";
import "./CSS/emailbody.css";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import FilterListIcon from '@mui/icons-material/FilterList';
import { IconButton } from "@mui/material";

const Emailsetting = () => {
    return (

        <>

            <div className="emailsetting">
                <div className="emailsettingLeft">
                    <IconButton>
                        <CheckBoxOutlineBlankIcon />
                    </IconButton>
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RefreshIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="emailsettingRight">
                    <p>1-50 of 5,00</p>
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardIcon />
                    </IconButton>
                    <IconButton>
                        <FilterListIcon />
                    </IconButton>


                </div>
            </div>

        </>
    );
}
export default Emailsetting;