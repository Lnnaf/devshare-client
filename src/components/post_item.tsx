import { PostModel } from "@/model/post.model";
import Image from "next/image";
import { FunctionComponent, Suspense } from "react";
import Badge from "./badge";
import { getRelativeTime } from "@/utils/time.utils";
import { LoadingSkeleton } from "./loading";

interface PostItemProps {
	post: PostModel;
}

const PostItem: FunctionComponent<PostItemProps> = (props) => {
	const post = props.post;
	return (
		<>
			<div className="drop-shadow flex p-4 flex-col justify-center gap-4 border rounded-lg border-gray-300 bg-white my-2">
				<Image
					src={post.thumbImageUrl}
					alt=""
					width={500}
					height={500}
					className="w-full"
				/>
				<div className="">
					<div className="flex">
						{post.categories.map((category) => (
							<>
								<div className="mr-1 mb-1">
									<Badge
										key={category.id}
										value={category.name}
									/>
								</div>
							</>
						))}
					</div>
				</div>
				<div className="h-32 sm:h-14 md:h-28 lg:h-48">
					<p className="mt-1 text-lg font-semibold leading-10">
						{post.title}
					</p>
				</div>
				<div className="flex mt-1 items-center">
					<div className="flex items-center">
					<Suspense fallback={<LoadingSkeleton />}>
						<Image
							className="avatar-sm mr-2"
							alt=""
							src="/avatar.jpg"
							width={256}
							height={256}
						/>
						</Suspense>
						<p>{post.author.displayName}</p>
					</div>
					<div className="ms-10">
						<p>{getRelativeTime(post.createdDate)}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default PostItem;
