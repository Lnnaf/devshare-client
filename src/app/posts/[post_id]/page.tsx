import { FunctionComponent } from "react";
import { PostModel } from "@/model/post.model";
import { API_ENDPOINTS, fetchData } from "@/service/api/api.service";
import PostDetail from "@/app/components/post_detail";
interface PostProps {
	params: {
		post_id: number;
	};
}

const Post: FunctionComponent<PostProps> = async (props) => {
	const post_id = props.params.post_id;

	const post: PostModel = await fetchData(API_ENDPOINTS.POST_DETAIL, {
		post_id,
	});
	if (post) {
		return <PostDetail postData={post} />;
	} else {
		return <h5>Data not found</h5>;
	}
};

export default Post;
