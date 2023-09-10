import Link from "next/link";
import { FunctionComponent } from "react";

interface PostLinkProps {
	post_id: number;
}

const PostLink: FunctionComponent<PostLinkProps> = (props) => {
	return (
		<Link href={`/post/${props.post_id}`}>
			<p>View Post {props.post_id}</p>
		</Link>
	);
};

export default PostLink;
