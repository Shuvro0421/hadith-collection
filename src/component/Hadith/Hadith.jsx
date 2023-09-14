import { BsFillBookmarkFill } from 'react-icons/bs'

const Hadith = ({singleHadith , handleMarkRead }) => {
    const {hadith , reference} = singleHadith;
    return (
        <div>
            <div className="card lg:h-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>{hadith}</p>
                    <div className="">
                        <div className='flex text-sm justify-between font-semibold text-red-600 items-center'>
                            <div className="border-2 border-red-300 rounded-full p-2">{reference}</div>
                            <div onClick={() => handleMarkRead(reference)} className="text-xl text-red-500 hover:text-red-800 cursor-pointer"><BsFillBookmarkFill></BsFillBookmarkFill></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hadith;