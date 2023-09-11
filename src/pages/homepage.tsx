import { FunctionComponent } from "react";
import PostsPage from "./postpage";
import PostOutstanding from "@/app/components/post_outstanding";
import { API_ENDPOINTS, fetchData } from "@/service/api/api.service";
import PostDetail from "@/app/components/post_detail";
import { PostModel } from "@/model/post.model";
import PostLink from "@/app/components/post_link";

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = async () => {
	const getPostsNewest = async () => {
		return await fetchData(API_ENDPOINTS.POSTS_NEWEST);
	};
	const getPostMostViewed = async () => {
		return await fetchData(API_ENDPOINTS.POST_OUTSTANDING);
	};

	const posts = await getPostsNewest();
	const postsOutstanding = await getPostMostViewed();
	return (
		<div className="mt-10">
			<div className="hidden md:block">
				<PostOutstanding data={postsOutstanding} />
			</div>

			<div className="md:mt-60 xl:mt-52">
				{posts.map((item: PostModel) => (
					<div key={item.id}>
						<PostDetail postData={item} />
						<PostLink post_id={item.id} />
					</div>
				))}
			</div>
		</div>
	);
};

export default HomePage;
