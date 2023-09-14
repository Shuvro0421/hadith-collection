import { AiFillDelete } from 'react-icons/ai'

const Delete = ({handleDelete , bookMark}) => {
    return (
        <div>
            <button onClick={()=> handleDelete(bookMark)} className='hover:text-red-900'><AiFillDelete></AiFillDelete></button>
        </div>
    );
};

export default Delete;