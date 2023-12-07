import React, {useState} from 'react';
import {Button} from "@mui/material";

const ShoppingItem = ({item, remove, edit, updateState}) => {
    const capitalizedName = item.content.charAt(0).toUpperCase() + item.content.slice(1);
    const [isChecked, setIsChecked] = useState(item.state === "CHECKED");

    const changeState = () => {
        const newCheckedState = !isChecked;
        setIsChecked(newCheckedState);

        const updatedItemState = {
            id: item ? item._id : Date.now().toString(),
            content: item.content,
            count: item.count,
            state: newCheckedState ? "CHECKED" : "UNCHECKED",
        };

        updateState(updatedItemState);
    }

    return (
        <div className={"item"}>
            <label>
                <input className={"item_state"} type={"checkbox"} defaultChecked={isChecked}
                       onChange={changeState}/>
            </label>
            <div className={"item_content"}>{capitalizedName} ({item.count}) {item.unit}</div>
            <div className={"item_buttons"}>
                <Button
                    onClick={() => edit()}
                    style={ {display: "block", margin: "10px auto", position: 'static'}}
                >
                    Edit
                </Button>
                <Button
                    onClick={() => remove(item)}
                    style={ {display: "block", margin: "10px auto", position: 'static'}}
                >
                    Delete
                </Button>
            </div>
        </div>
    );
};

export default ShoppingItem;