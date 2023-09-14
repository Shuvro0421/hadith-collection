import { AiFillDelete } from 'react-icons/ai'
import Delete from '../Delete/Delete';
const BookMark = ({bookMark  , handleDelete}) => {
    return (
        <div className="bg-red-300 mt-2 p-2 rounded-lg flex items-center justify-between">
            <h1>{bookMark}</h1>
            <Delete bookMark={bookMark} handleDelete={handleDelete}></Delete>
        </div>
    );
};

export default BookMark;