import { PostModel } from "@/model/post.model";

function getPostWithHighestViews(posts: PostModel[]): PostModel | null {
	if (posts.length === 0) {
		return null; // Return null if the array is empty
	}

	return posts.reduce((prevPost, currentPost) => {
		return currentPost.viewed > prevPost.viewed ? currentPost : prevPost;
	});
}

export {getPostWithHighestViews}
