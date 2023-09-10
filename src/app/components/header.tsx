import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

interface Props {}

const Header: FunctionComponent<Props> = () => {
	return (
		<header>
			<nav className="h-14 flex">
				<div className="lg:w-1/4 h-14"></div>
				<div className="xl:w-10/12 w-full h-14 flex">
					{/* logo */}
					<div>
						{/* <Image
							src="/icons/menu-dark.svg"
							alt=""
							width={30}
							height={30}
						/> */}
					</div>
					<div className="w-3/12">LOGO</div>
					<div className="flex w-6/12 justify-center items-center">
						<Link href="/post">
							<p className="flex-1 text-center drop-shadow-2xl shadow-black">
								POST
							</p>
						</Link>

						<div className="flex-1 text-center">Trends </div>
						<div className="flex-1 text-center">Contact</div>
					</div>
					<div className="flex w-3/12 justify-center items-center">
						<div className="flex relative">
							<input
								className="focus:outline-none rounded-[5px] bg-[#F4F4F5] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] gap-3 py-1 ps-1 pr-2"
								type="text"
								placeholder="search ..."
								data-np-intersection-state="value"
							/>
							<button className="absolute inset-y-0 right-0 flex items-center pr-2">
								<Image
									src="/icons/search.svg"
									alt=""
									width={15}
									height={15}
								/>
							</button>
						</div>
					</div>
				</div>
				<div className="lg:w-1/4 h-14 "></div>
			</nav>
		</header>
	);
};

export default Header;
