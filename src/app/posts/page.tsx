import { FunctionComponent } from "react";
import PostsPage from "@/pages/postpage";

interface HelloPageProps {}

const HelloPage: FunctionComponent<HelloPageProps> = () => {
	return (
		<PostsPage/>
	);
};

export default HelloPage;
