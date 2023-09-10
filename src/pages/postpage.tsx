import PostLink from "@/app/components/post_link";
import axios from "axios";
import Link from "next/link";
import { FunctionComponent } from "react";

interface PostsPageProps {}

const PostsPage: FunctionComponent<PostsPageProps> = async () => {

	const getData = async () => {
		const res = await axios.get("http://localhost:8080/api/v1/user/get-activated");
		
		if (res.status != 200) {
			throw new Error("Failed to fetch data");
		}
		return res.data.data;
	}
	const data = await getData()
	return (
		<div>
      <h1>Post Page</h1>
      <ul>
        {data.map((item: User) => (
          <li key={item.id}>
            <h1>{item.displayName}</h1>
						<h1>{item.username}</h1>
						<h1>{item.email}</h1>
						<h1>{item.joinDate}</h1>
						<h1>{item.birthday}</h1>
					<PostLink post_id={item.id}/>
          </li>
        ))}
      </ul>
    </div>
	);
};

export default PostsPage;
