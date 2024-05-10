import style from './blog.module.css'
import {useState, useRef, useEffect, useReducer} from 'react'
import { db } from '../FirebaseInit';
import { collection, addDoc, doc, setDoc, onSnapshot } from "firebase/firestore"; 
import { getDocs, deleteDoc  } from 'firebase/firestore';




// const initalState = []
function blogsReducer(state, action){

    switch(action.type){
        
        case "ADD" :
            return [action.payload, ...state]
        case "DELETE" :
            return state.filter((blog, i) => i !== action.payload)
    }
    return state;
}

export default function Blog(){

    const [formData, setformData] = useState({id : null,title :'', content:''});

    const [blogs, setBlogs] = useState([]);
    // const [blogs, dispatch] = useReducer(blogsReducer, []);

    const titleRef = useRef(null);

    useEffect(()=>{
        titleRef.current.focus()
    },[])

    useEffect(()=>{
        // NOT PROVIDE REAL TIME DATA
        /*(async function (){
            const snapShot = await getDocs(collection(db, 'blogs'));
            const myData = snapShot.docs.map((doc)=>{
                return {
                    id : doc.id,
                    ...doc.data()
                }
            })
            console.log(myData);
            setBlogs([...myData, ...blogs]) 
        })()*/

        // USING onSnapShot() => provide real time data from database
        (async function(){
            const snap = onSnapshot(collection(db, 'blogs'), (snapshot)=>{
                const myData = snapshot.docs.map((doc)=>{
                    return {
                        id : doc.id,
                        ...doc.data()
                    }
                })
                console.log(myData);
                setBlogs([...myData, ...blogs])
            })
        })()
    },[])

    useEffect(()=>{
        if(blogs.length>0 && blogs[0].title){
            document.title = blogs[0].title;
        }else{
            document.title = 'No blog here';
        }
    },[blogs])

    const handleSubmit = async (e)=>{
        e.preventDefault();

        // setBlogs([
        //     { title:formData.title, content:formData.content },
        //     ...blogs
        // ])
        // dispatch({type : "ADD", payload : { title:formData.title, content:formData.content }})

        
        // 1.Through addDoc
        // Add a new document with a generated id. 
        // Store Data in Firebase
        
        /*const docRef = await addDoc(collection(db, "blogs"), {
            title: formData.title,
            content: formData.content,
            createdAt : new Date()
        });*/
        // console.log("Document written with ID: ", docRef.id);

        // 2. setDoc
        const dbData = {
            title: formData.title,
            content: formData.content,
            createdAt : new Date()
        }
        const docRef = doc(collection(db, 'blogs'));
        await setDoc(docRef, dbData)


        setformData({title :'', content:''})
        titleRef.current.focus();
    }

    const handleDelete = (id)=>{
        // setBlogs(blogs.filter((blog, index)=> index !== id))
        // dispatch({type : "DELETE", payload : id})
        // console.log(id);

        (async ()=>{
            console.log('hi');
            try {
                await deleteDoc(doc(db, "blogs", id));
            } catch (error) {
                console.log(error);
            }
        })()

        
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
                            <button onClick={()=> handleDelete(blog.id)}>Delete</button>
                        </div>
                    )
                })}
            </main>
        </>
    )

} 