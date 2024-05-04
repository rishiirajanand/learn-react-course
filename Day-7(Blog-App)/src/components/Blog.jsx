import AddBlogs from './AddBlogs';
import style from './blog.module.css'
import {useState} from 'react'


export default function Blog(){

    // const [title, setTitle] = useState('');
    // const [content, setContent] = useState('');
    const [formData, setformData] = useState({title :'', content:''});

    const [blogs, setBlogs] = useState([]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        setBlogs([
            { title:formData.title, content:formData.content },
            ...blogs
        ])
        setformData({title :'', content:''})
    }

    const handleDelete = (id)=>{
        setBlogs(blogs.filter((blog, index)=> index !== id))
    }

    return(
        <>
            <main>
                <h1>Write a BLog</h1>
                <div className={style.blogContainer}>

                    <form onSubmit={handleSubmit}>
                        <p>
                            <span>Title</span>
                            <input 
                                type="text" 
                                name="title" 
                                id="title" 
                                placeholder='Enter blog title'
                                value={formData.title}
                                onChange={(e)=>setformData({title: e.target.value,content: formData.content})}
                            />
                        </p>
                        <hr />
                        <p>
                            <span>Content</span>
                            <textarea name="content" rows='7' 
                                value={formData.content}
                                onChange={(e)=>setformData({title: formData.title,content: e.target.value})}
                            ></textarea>
                        </p>
                        <hr />

                        <button type="submit">ADD</button>
                    </form>

                </div>
                <hr />
                <span className={style.blogTitle}>Blogs</span>


                {blogs.map( (blog, index)=> {
                    return (
                        <div key={index} className={style.addBlogContainer}>
                            <div>
                                <h3>{blog.title}</h3>
                                <p>{blog.content}</p>
                            </div>
                            <button onClick={()=> handleDelete(index)}>Delete</button>
                        </div>
                    )
                })}
            </main>
        </>
    )

} 