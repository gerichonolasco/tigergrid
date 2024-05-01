// AddFormButton.tsx
import React from "react";
import { Link } from "react-router-dom";

interface AddFormButtonProps {
	to: string; // The route to navigate to when the button is clicked
}

const AddFormButton: React.FC<AddFormButtonProps> = ({ to }) => {
	return (
		<Link
			to={to}
			className="px-4 py-2 mb-3 ml-1 mt-2 text-sm text-blue-100 bg-yellow-500 rounded text-white"
		>
			Add Form
		</Link>
	);
};

export default AddFormButton;
