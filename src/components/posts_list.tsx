import Badge from "@/components/badge";
import PostDetail from "@/components/post_detail";
import PostItem from "@/components/post_item";
import PostLink from "@/components/post_link";
import PostOutstanding from "@/components/post_outstanding";
import { PostModel } from "@/model/post.model";
import { API_ENDPOINTS, fetchData } from "@/service/api/api.service";
import Image from "next/image";
import { FunctionComponent } from "react";

interface PostsPageProps {
	posts: PostModel[];
	pageTitle?: string;
}

const PostsPage: FunctionComponent<PostsPageProps> = (props) => {
	const posts = props.posts;
	const pageTitle = props.pageTitle;
	return (
		<>
			<div>
				<p className="font-semibold text-lg">{pageTitle}</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{posts && posts.length > 0 ? (
					posts.map((post) => <PostItem key={post.id} post={post} />)
				) : (
					<p> Not found data</p>
				)}
			</div>
		</>
	);
};

export default PostsPage;
