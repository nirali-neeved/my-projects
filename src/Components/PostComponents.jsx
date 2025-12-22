import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

const PostComponets=()=>{
    const [posts,setPosts]=useState([])
    const [search,setSearch]=useState("")
    const [currentpage,setCurrentpage]=useState(1)
    const postperpages=10

    useEffect(()=>{
        const fetchpost=async()=>{
            const res=await axios.get("https://jsonplaceholder.typicode.com/posts")
            setPosts(res.data)
        }
        fetchpost()
    },[])

    const serachposts=posts.filter(post=>post.title.toLowerCase().includes(search.toLowerCase()))

    const lastindex=currentpage*postperpages
    const firstindex=lastindex-postperpages
    const currentpost=serachposts.slice(firstindex,lastindex)
    const totalpages=Math.ceil(serachposts.length/postperpages)

    return(<>
        <div>
            <input
                type="text"
                placeholder="Search"
                onChange={(e)=>{setSearch(e.target.value)
                setCurrentpage(1)
                }}
            />

            <div>
                {currentpost.map(post=>(
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <Link to={`/postscomponents/${post.id}`}>More details</Link>
                    </div>
                ))}
            </div>

            <div>
                {Array.from({length:totalpages},(_,i)=>(
                    <button key={i+1} onClick={()=>setCurrentpage(i+1)}>{i+1}</button>
                ))}
            </div>
        </div>
    </>)
}

export default PostComponets