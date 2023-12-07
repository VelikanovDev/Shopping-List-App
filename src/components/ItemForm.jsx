import React, { useEffect, useState } from 'react';
import MyInput from "./UI/input/MyInput";
import { Button } from "@mui/material";

const ItemForm = ({ create, update, item }) => {
    const initialItemState = { content: '', count: '', state: 'UNCHECKED'};
    const [newItem, setNewItem] = useState(initialItemState);
    const [inputError, setInputError] = useState(false);

    useEffect(() => {
        if (item) {
            setNewItem({
                content: item.content,
                count: item.count,
                state: item.state,
            });
        }
    }, [item]);

    const createOrUpdateItem = (e) => {
        e.preventDefault();

        if (!newItem.content || !newItem.count) {
            setInputError(true);
            return;
        }

        const updatedItem = {
            id: item ? item._id : Date.now().toString(),
            content: newItem.content,
            count: newItem.count,
            state: newItem.state,
            unit: newItem.unit
        };

        if (item) {
            update(updatedItem);
        } else {
            create(updatedItem);
        }

        setNewItem(initialItemState);
        setInputError(false);
    };

    return (
        <form>
            {inputError && <div style={{ color: 'red', marginBottom: '10px' }}>Please fill in all fields to add an item</div>}
            <MyInput
                type="text"
                placeholder="Content"
                value={newItem.content}
                onChange={(e) => setNewItem({ ...newItem, content: e.target.value })}
            />
            <MyInput
                type="number"
                placeholder="Count / Weight"
                value={newItem.count}
                onChange={(e) => setNewItem({ ...newItem, count: e.target.value })}
            />
            <Button
                variant="contained"
                onClick={createOrUpdateItem}
                style={{ display: "block", margin: "10px auto" }}
            >
                {item ? 'Update Item' : 'Add Item'}
            </Button>
        </form>
    );
};

export default ItemForm;
