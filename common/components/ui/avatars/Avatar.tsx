import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface AvatarProps {
    avatarFallback: string;
	src?: string | StaticImageData;
	alt?: string;
	quality?: number;
	className?: string;
}

const Avatar: FC<AvatarProps & Record<string, unknown>> = (props) => {
	const { 
		avatarFallback = "", 
		className = "",
		quality = 80,
		alt = "",
		src = "",
		...rest 
	} = props;

	return (
		<div className="c-avatar">
			{ src 
				? <Image src={src} fill={true} alt={alt} quality={quality} className={`c-avatar-picture ${className}`} {...rest}/>				
				: <span>{ avatarFallback }</span>
			}
		</div>
	);
};
 
export default Avatar;