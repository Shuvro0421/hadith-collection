import BookMark from "../BookMark/BookMark";

const Reading = ({ bookMarks, handleDelete }) => {
    
    
  // Use filter to keep only unique bookmarks
  const uniqueBookMarks = bookMarks.filter(
    (bookMark, index, array) => array.indexOf(bookMark) === index
  );
  

  return (
    <div className="bg-red-100 text-red-500 rounded-lg p-2 overflow-auto h-96">
      <h1 className="dancing text-xl">Read Hadith: {uniqueBookMarks.length}</h1>
      {uniqueBookMarks.map((bookMark, idx) => (
        <BookMark key={idx} handleDelete={handleDelete} bookMark={bookMark} />
      ))}
    </div>
  );
};

export default Reading;
