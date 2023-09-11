import { FunctionComponent } from "react";

interface BadgeProps {
  value: string
}
 
const Badge: FunctionComponent<BadgeProps> = (props) => {
  return ( 
  <>
    <div className="bg-[#4B6BFB] rounded-[6px] flex justify-center items-center gap-1 py-1 px-[10px] w-max">
      <p className="text-white text-sm "> { props.value }</p>
    </div>
  </> );
}
 
export default Badge;