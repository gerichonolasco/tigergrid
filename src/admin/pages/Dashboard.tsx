// Dashboard.tsx
import React, { FC, useEffect, useState } from "react";
import FormItem from "../components/Dashboard/FormItem";
import AddFormButton from "../components/Dashboard/AddFormButton"; // Import the AddFormButton component

const Dashboard: FC = () => {
	const [posts, setPosts] = useState<Post[]>([]);

	const toggleShowOnUserSide = (index: number) => {
		const updatedPosts = [...posts];
		updatedPosts[index].showOnUserSide =
			!updatedPosts[index].showOnUserSide;
		setPosts(updatedPosts);
	};

	return (
		<>
			<div className="relative overflow-x-auto">
				<AddFormButton to="/admin/addform" />{" "}
			</div>
			<div className="grid gap-2 lg:grid-cols-4">
				{posts.map((item, index) => (
					<FormItem
						key={index}
						title={item.title}
						img={item.img}
						content={item.description}
						route={item.route}
						showOnUserSide={item.visible}
						toggleShowOnUserSide={() => toggleShowOnUserSide(index)}
					/>
				))}
			</div>
		</>
	);
};

export default Dashboard;
