import { FunctionComponent } from "react";
import Image from "next/image";
import Badge from "./badge";
import { PostModel } from "@/model/post.model";
interface PostOutstandingProps {
	data: PostModel;
}

const PostOutstanding: FunctionComponent<PostOutstandingProps> = (props) => {
	const post = props.data;
	console.log(post.categories);

	return (
		<>
			<div className="flex relative">
				<Image
					className="rounded-[12px] w-full h-[400px]"
					src="/big-thumb.jpeg"
					alt=""
					width={4096}
					height={2734}
				/>
				<div className="absolute drop-shadow w-5/12 h-max bg-white rounded-[12px] inset-y-0 ms-10 mt-60 items-center">
					<div className="mx-6 my-8">
						<div className="flex">
							{post.categories.map((category) => (
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
						<p className="mt-1 text-3xl font-semibold leading-10 ">
							{post.title}
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
								<p>{post.author.displayName}</p>
							</div>
							<div className="ms-10">
								<p>{post.createdDate}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PostOutstanding;
