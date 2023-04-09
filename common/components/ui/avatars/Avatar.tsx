import Image, { ImageLoader, StaticImageData } from "next/image";
import { FC } from "react";

interface AvatarProps {
    avatarFallback: string;
	src?: string | StaticImageData;
}

const Avatar: FC<AvatarProps> = ({ src = "", avatarFallback = "" }) => {
	return (
		<div className="c-avatar">
			{ src 
				? <Image src={src} alt="" className="c-avatar-picture"/>				
				: <span>{ avatarFallback }</span>
			}
		</div>
	);
};
 
export default Avatar;