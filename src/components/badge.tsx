import Link from "next/link";
import { FunctionComponent } from "react";

interface BadgeProps {
	value: string;
}

const Badge: FunctionComponent<BadgeProps> = (props) => {
  const category_name = props.value
	return (
		<>
			<div className="bg-[#4B6BFB] rounded-[6px] flex justify-center items-center gap-1 py-1 px-[10px] w-max">
				<Link href={`category/?name=${category_name}`}>
					<p className="text-white text-sm "> {category_name}</p>
				</Link>
			</div>
		</>
	);
};

export default Badge;
