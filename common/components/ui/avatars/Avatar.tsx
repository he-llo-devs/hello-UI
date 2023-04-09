import Image from "next/image";
import { FC } from "react";

interface AvatarProps {
    avatarFallback: string;
	src?: string;
}

const Avatar: FC<AvatarProps> = ({ src = "", avatarFallback = "" }) => {
	return (
		<div className="c-avatar">
			{ src 
				? <Image src={src} alt=""/> 
				: <span>{ avatarFallback }</span>
			}
		</div>
	);
};
 
export default Avatar;