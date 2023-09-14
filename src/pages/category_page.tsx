import Badge from "@/components/badge";
import { PostModel } from "@/model/post.model";
import { API_ENDPOINTS, fetchData } from "@/service/api/api.service";
import { getRelativeTime } from "@/utils/time.utils";
import Image from "next/image";
import { FunctionComponent } from "react";
import PostsPage from "../components/posts_list";

interface CategoryPageProps {
	category_name: string;
}

const CategoryPage: FunctionComponent<CategoryPageProps> = async (props) => {
	const category_name = props.category_name;
	const _posts: PostModel[] = await fetchData(
		API_ENDPOINTS.POSTS_BY_CATEGORY,
		{
			category_name: category_name,
		}
	);
	const firstPost: PostModel = await fetchData(
		API_ENDPOINTS.POST_OUTSTANDING_CATEGORY,
		{
			category_name: category_name,
		}
	);
  const isLessThanTwoPost = _posts.length < 2;
	const posts = isLessThanTwoPost ? _posts : _posts.filter((post) => post.id != firstPost?.id)
	const isCategoryNotValid = posts == null;
 
    
	return (
		<>
			<div>
				<div className="flex justify-center items-center">
					<p className="my-10 text-xl font-semibold leading-10">
						{isCategoryNotValid ? "" : category_name.toUpperCase()}
					</p>
				</div>
				{isCategoryNotValid || posts.length < 1 || isLessThanTwoPost ? (
					<></>
				) : (
					<div className="mb-10 flex relative">
						<div
							className="text-white rounded-[12px] w-full h-[400px] bg-slate-300 bg-cover bg-center bg-no-repeat"
							style={{
								backgroundImage: `url('${firstPost.thumbImageUrl}')`,
							}}
						>
              <div className="absolute inset-0 bg-black opacity-50 rounded-[12px]"></div>
							<div className="mx-6 sm:mt-3 md:mt-48 absolute sm:top-1/2 md:top-1/4 lg:top-1/4 top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 w-full">
								<div className="flex">
									{firstPost.categories.map((category) => (
										<>
											<div className="mr-1">
												<Badge
													key={category.id}
													value={category.name}
												/>
											</div>
										</>
									))}
								</div>
								<p className="mt-1 text-2xl font-semibold leading-10 ">
									{firstPost.title}
								</p>
								<div className="flex mt-1 items-center">
									<div className="flex items-center">
										<Image
											className="avatar-sm mr-2"
											alt=""
											src="/avatar.jpg"
											width={256}
											height={256}
										/>
										<p>{firstPost.author.displayName}</p>
									</div>
									<div className="ms-10">
										<p>{getRelativeTime(firstPost.createdDate)}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}

				<div>
					<PostsPage posts={posts} />
				</div>
			</div>
		</>
	);
};

export default CategoryPage;
