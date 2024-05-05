import AddBlogs from './AddBlogs';
import style from './blog.module.css'
import {useState, useRef, useEffect} from 'react'


export default function Blog(){

    const [formData, setformData] = useState({title :'', content:''});
    const [blogs, setBlogs] = useState([]);
    const titleRef = useRef(null);

    useEffect(()=>{
        titleRef.current.focus()
    },[])

    useEffect(()=>{
        if(blogs.length>0 && blogs[0].title){
            document.title = blogs[0].title;
        }else{
            document.title = 'No blog here';
        }
    },[blogs])

    const handleSubmit = (e)=>{
        e.preventDefault();
        setBlogs([
            { title:formData.title, content:formData.content },
            ...blogs
        ])
        setformData({title :'', content:''})
        titleRef.current.focus();
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
                                required

                                value={formData.title}
                                onChange={(e)=>setformData({title: e.target.value,content: formData.content})}
                                ref={titleRef}
                            />
                        </p>
                        <hr />
                        <p>
                            <span>Content</span>
                            <textarea name="content" rows='7' required
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