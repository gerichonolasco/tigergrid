// FormItem.tsx
import React from "react";

interface FormItemProps {
	title: string;
	img: string;
	content: string;
	route?: string;
	showOnUserSide: boolean;
	toggleShowOnUserSide: (index: number) => void;
}

const FormItem: React.FC<FormItemProps> = ({
	title,
	img,
	content,
	route,
	showOnUserSide,
	toggleShowOnUserSide,
}) => {
	return (
		<div className="w-full rounded-lg shadow-md lg:max-w-sm">
			<img className="object-cover w-full h-48" src={img} alt="image" />
			<div className="p-4">
				<h4 className="text-xl font-semibold text-blue-600">{title}</h4>
				<p className="mb-2 leading-normal">{content}</p>
				<div className="flex justify-center items-center">
					<button
						className={`flex items-center justify-center px-4 py-2 text-sm rounded shadow mr-2 ${
							showOnUserSide ? "bg-green-500" : "bg-red-500"
						}`}
						onClick={() => toggleShowOnUserSide(index)}
					>
						{showOnUserSide
							? "Show on User Side"
							: "Hide from User Side"}
					</button>
					{route && (
						<Link
							to={route}
							className="px-4 py-2 text-sm text-blue-100 bg-yellow-500 rounded shadow text-white"
						>
							View
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default FormItem;
