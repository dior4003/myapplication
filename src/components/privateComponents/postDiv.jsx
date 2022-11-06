import Post from './posts'
import { PostJson } from '../hooks/fsdb/localDB'

const PostDiv =()=>{

    return(
        <>
            {PostJson.map((post ,index)=>(
                <div className="w-50 d-flex p-5 m-3 justify-content-center h-75">
                    <Post  num={index+1} post={post}  key={post.id}/>
                </div>
            ))}
        </>
    )
}
export default PostDiv