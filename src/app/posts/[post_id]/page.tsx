import { FunctionComponent } from "react";
import { useRouter } from 'next/router';
interface PostProps {
  params : {
    post_id: number
  }
}
 
const Post: FunctionComponent<PostProps> = (props) => {
  return ( <>
  <h1>This is post {props.params.post_id}</h1>
  </> );
}
 
export default Post;