import { FunctionComponent } from "react";
import PostsPage from "../components/posts_list";
import PostOutstanding from "@/components/post_outstanding";
import { API_ENDPOINTS, fetchData } from "@/service/api/api.service";
import PostDetail from "@/components/post_detail";
import { PostModel } from "@/model/post.model";
import PostLink from "@/components/post_link";

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = async () => {
	const getPostsNewest = async () => {
		return await fetchData(API_ENDPOINTS.POSTS_NEWEST);
	};
	const getPostMostViewed = async () => {
		return await fetchData(API_ENDPOINTS.POST_OUTSTANDING_CATEGORY, {
			"category_name" : ""
		});
	};

	const posts = await getPostsNewest();
	const postsOutstanding = await getPostMostViewed();
	return (
		<div className="mt-10">
			<div className="hidden md:block">
				<PostOutstanding data={postsOutstanding} />
			</div>

			<div className="md:mt-20 xl:mt-28">
				{/* {posts.map((item: PostModel) => (
					<div key={item.id}>
						<PostDetail postData={item} />
						<PostLink post_id={item.id} />
					</div>
				))} */}

				<PostsPage posts={posts} pageTitle="Lastest post" />
			</div>
		</div>
	);
};

export default HomePage;
