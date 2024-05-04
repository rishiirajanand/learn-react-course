import { useState } from 'react'
import styles from './AddBlogs.module.css'
export default function AddBlogs(props){

    const [title, setTitle] = useState()
    return(
        <>
            <div className={styles.addBlogContainer}>
                <h2></h2>
            </div>
        </>
    )
}