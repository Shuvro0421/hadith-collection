import { useState } from "react";
import { useEffect } from "react";
import Hadith from "../Hadith/Hadith";
import Reading from "../Reading/Reading";
const Main = () => {
    const [hadiths, setHadith] = useState([]);
    const [bookMarks , setBookMarks] = useState([]);

    useEffect(() => {
        fetch('hadith.json').then(response => response.json()).then(data => setHadith(data))
    }, [])

    const handleMarkRead = (reference) => {
        const newBookMarks = [...bookMarks , reference];
        setBookMarks(newBookMarks);
        
    }
    const handleDelete = (bookmarkToDelete) => {
        const newBookMarks = bookMarks.filter((bookmark) => bookmark !== bookmarkToDelete);
        setBookMarks(newBookMarks);
    };
    

    return (
        <div className="flex px-5 gap-5">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 mb-5 grid-cols-1 gap-4 border-2 rounded-lg p-5">
                <Reading bookMarks={bookMarks} handleDelete={handleDelete}></Reading>
                {
                    hadiths.map((singleHadith , idx) => <Hadith key={idx} singleHadith={singleHadith} handleMarkRead={handleMarkRead}></Hadith>)
                }

            </div>
            <div>

            </div>
        </div>
    );
};

export default Main;