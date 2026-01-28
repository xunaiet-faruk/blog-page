import React from 'react';

const Outlinebar = ({ book }) => {
    console.log(book);
    return (
        <div className='bg-gray-400 text-black font-bold w-96 
          h-screen'>
                <h1>Reading Time : </h1>
            <h1>BookMark Blogs : {book.length}</h1>
            <div className='pt-5'>
              {
                book.map(item =><div>
                    <div className='bg-yellow-300 text-cyan-600 p-2 text-xl mb-2'>
                    {item.title}
                    </div>
                    </div>)
              }
            </div>
        </div>
    );
};

export default Outlinebar;