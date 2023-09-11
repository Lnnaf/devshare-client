import { PostModel } from "@/model/post.model";
import { FunctionComponent } from "react";

interface PostDetailProps {
	postData: PostModel;
}

const PostDetail: FunctionComponent<PostDetailProps> = (props) => {
	const post = props.postData;
	return (
		<>
			<h1>This is post {post.id}</h1>
			<h1>{post.title}</h1>
			<h1>{post.content}</h1>
			<h1>{post.createdDate}</h1>
			<h1>{post.modifiedDate}</h1>
			<h1>{post.shortDescription}</h1>
			<h1>author {post.author.displayName}</h1>
			<h1>last edit {post.modifiedBy.displayName}</h1>
		</>
	);
};

export default PostDetail;
