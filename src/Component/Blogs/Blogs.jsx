import { CiBookmark } from "react-icons/ci";


const Blogs = ({ blog, handleBook, handleMarkread }) => {
   

    const { title, cover, author, reading_time } = blog
    return (
        <div>
            <div className="card bg-cyan-200  text-black w-[60%]  shadow-sm">
                <figure>
                    <img className="w-full"
                        src={cover}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="flex justify-between">
                        <div>
                            <h2 className="card-title">{author}</h2>
                        </div>
                       <div className="flex gap-2">
                            <p><span className="text-red-500 font-bold">{reading_time}</span>Min Read</p> 
                            <CiBookmark onClick={() =>handleBook(blog)} className="text-2xl hover:text-amber-400 cursor-pointer" />
                       </div>
                    </div>

                    <p className="text-start text-xl text-gray-600">{title}</p>
                    
                    <div className="card-actions justify-start">
                        <button onClick={() =>handleMarkread(reading_time)} className="border-b-2 border-amber-300 btn rounded-2xl hover:btn-dash">Mark Read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;