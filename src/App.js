import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "./styles/App.css";
import ShoppingItemList from "./components/ShoppingItemList";
import {useEffect, useState} from "react";
import MyModal from "./components/UI/modal/MyModal";
import ItemForm from "./components/ItemForm";
import {Button} from "@mui/material";
import { fetchItems, createItem, updateItem, removeItem } from './services/ItemService';

function App() {
    const [items, setItems] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        fetchItems().then((res) => setItems(res));
    }, []);

    const handleCreateItem = (newItem) => {
        createItem(newItem).then((createdItem) => {
            console.log(`Item with id ${createdItem._id} added on the server`);
            setItems([...items, createdItem]);
            setModalVisible(false);
        }).catch((error) => {
            console.error("Error creating item:", error);
        });
    };

    const handleUpdateItem = (updatedItem) => {
        updateItem(updatedItem).then((updatedItem) => {
            console.log(`Item with id ${updatedItem._id} updated on the server`);
            setItems((prevItems) =>
                prevItems.map((item) => (item._id === updatedItem._id ? updatedItem : item))
            );
            setModalVisible(false);
            setSelectedItem(null);
        }).catch((error) => {
            console.error("Error updating item:", error);
        });
    };

    const handleRemoveItem = (item) => {
        removeItem(item._id).then(() => {
            console.log(`Item with id ${item._id} deleted on the server`);
            setItems((prevItems) => prevItems.filter((i) => i._id !== item._id));
        }).catch((error) => {
            console.error("Error deleting item:", error);
        });
    };

    const handleOpenEditModal = (item) => {
        setSelectedItem(item);
        setModalVisible(true);
    };

  return (
    <div className="App">
        <h1>Shopping List</h1>
        <MyModal visible={modalVisible} setVisible={setModalVisible}>
            <ItemForm create={handleCreateItem} update={handleUpdateItem} item={selectedItem} />
        </MyModal>
        <Button
            variant="contained"
            onClick={() => {
                setSelectedItem(null);
                setModalVisible(true);
            }}
            style={ {display: "block", margin: "10px auto", position: 'static'}}
        >
            Add Item
        </Button>
        <hr style={{ margin: "15px 0px", width: "100%" }} />
        <ShoppingItemList items={items} remove={handleRemoveItem} edit={handleOpenEditModal} updateState={handleUpdateItem} />
    </div>
  );
}

export default App;
