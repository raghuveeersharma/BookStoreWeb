import Book from "../model/Book.js";


export const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
        console.log(`books access`);
    } catch (error) {
        res.status(404).json({ message: error.message });
        console.log(`error`, error);
    }
};

