# Shopping List App

This React-based shopping list application serves as the final project for the evening programming course offered by [Unicorn a.s](https://unicorn.com/en/). It empowers users with the ability to manage their shopping list seamlessly, offering features such as item creation, editing, and deletion.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)

## Introduction

Developed as the culmination of the evening programming course by Unicorn a.s., this application showcases practical skills in building a responsive and dynamic web application using React. It provides an intuitive user interface for efficient management of a shopping list, allowing users to effortlessly add, edit, and remove items.

## Features

- **Add Item:** Users can seamlessly add items to their shopping list, specifying details such as content, count/weight, and state (checked or unchecked).

- **Edit Item:** The application supports the editing of existing items, enabling users to modify content, count/weight, and state according to their needs.

- **Delete Item:** Removing items from the shopping list is straightforward, providing a clean and streamlined user experience.

- **Real-time Updates:** Leveraging backend server interactions, the application ensures real-time updates when creating, updating, or deleting items.

- **Backend Server:** The app interacts with the [ShoppingItemAPI](https://github.com/goryllaz/ShoppingItemAPI) server located at [http://localhost:3000](http://localhost:3000) for managing shopping items.

## Installation

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/VelikanovDev/Shopping-List-App
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the [development server](https://github.com/goryllaz/ShoppingItemAPI):
    ```bash
    npm start
    ```

2. Start the Shopping List App:
    ```bash
    npm start
    ```
3. Open your browser and go to http://localhost:3000 to utilize the Shopping List App.

## Project Structure

- **components:** Contains React components used to build the user interface.
- **services:** Provides functions to interact with the backend server ([ShoppingItemAPI](https://github.com/goryllaz/ShoppingItemAPI)), including fetching, creating, updating, and deleting items.
- **styles:** Contains CSS files for styling the application.

## Dependencies

- [React](https://react.dev/)
- [Material-UI (MUI)](https://v4.mui.com/)
- [Fontsource (Roboto)](https://fontsource.org/)
- [MUI Icons](https://v4.mui.com/)
