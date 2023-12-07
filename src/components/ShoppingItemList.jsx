import React from 'react';
import ShoppingItem from "./ShoppingItem";

const ShoppingItemList = ({items, remove, edit, updateState}) => {
    if (!items.length) {
        return (
            <h2 style={{ textAlign: "center", margin: "5px" }}>
                There are no items yet!
            </h2>
        );
    }

    return (
        <div className={"items"}>
            {items.map( (item) => (
                <ShoppingItem key={item._id} item={item} remove={remove} edit={() => edit(item)} updateState={updateState}/>
            ))}
        </div>
    );
};

export default ShoppingItemList;