import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

interface Post {
  title: string;
  img: string;
  content: string;
  route?: string;
  showOnUserSide: boolean; // New property to indicate whether to show on user side
}

const Dashboard: FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      title: "Stakeholder's Feedback",
      img: "/images/meeting.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      route: "/admin/sfanalytics",
      showOnUserSide: true,
    },
    {
      title: "Internal Auditor's Evaluation",
      img: "/images/audit.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      route: "/admin/iaeanalytics",
      showOnUserSide: true,
    },
    {
      title: "QMS Evaluation",
      img: "/images/magnifying.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      route: "/admin/unitoria",
      showOnUserSide: true,
    },
    {
      title: "RIF Tracker",
      img: "/images/rif.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      showOnUserSide: true,
    },
  ]);

  // Function to toggle the showOnUserSide property of a post
  const toggleShowOnUserSide = (index: number) => {
    const updatedPosts = [...posts];
    updatedPosts[index].showOnUserSide = !updatedPosts[index].showOnUserSide;
    setPosts(updatedPosts);
  };

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <Link to="/admin/addform">
          <button className="px-4 py-2 mb-3 ml-1 mt-2 text-sm text-blue-100 bg-yellow-500">
            Add Form
          </button>
        </Link>
      </div>
      <div className="grid gap-2 lg:grid-cols-4">
        {posts.map((item, index) => (
          <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={index}>
            <img
              className="object-cover w-full h-48"
              src={item.img}
              alt="image"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-600">
                {item.title}
              </h4>
              <p className="mb-2 leading-normal">{item.content}</p>
              <div className="flex justify-center items-center">
                {/* Toggle button with checkmark or X icon */}
                <button
                  className={`flex items-center justify-center px-4 py-2 text-sm rounded shadow mr-2 ${
                    item.showOnUserSide ? "bg-green-500" : "bg-red-500"
                  }`}
                  onClick={() => toggleShowOnUserSide(index)}
                >
                  {item.showOnUserSide ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15.707 4.293a1 1 0 010 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  {item.showOnUserSide
                    ? "Show on User Side"
                    : "Hide from User Side"}
                </button>
                {/* View button */}
                {item.route && (
                  <Link
                    to={item.route}
                    className="px-4 py-2 text-sm text-blue-100 bg-yellow-500 rounded shadow"
                  >
                    View
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
