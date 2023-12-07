
const API_BASE_URL = 'http://localhost:9000';

export const fetchItems = async () => {
    const response = await fetch(`${API_BASE_URL}/shoppingItem/list`);
    return await response.json();
};

export const createItem = async (newItem) => {
    const response = await fetch(`${API_BASE_URL}/shoppingItem/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
    });
    return await response.json();
};

export const updateItem = async (updatedItem) => {
    const response = await fetch(`${API_BASE_URL}/shoppingItem/update?id=${updatedItem._id}&state=${updatedItem.state}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedItem),
    });
    return await response.json();
};

export const removeItem = async (itemId) => {
    const response = await fetch(`${API_BASE_URL}/shoppingItem/delete?id=${itemId}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error(`Failed to delete item with id ${itemId}`);
    }
};
