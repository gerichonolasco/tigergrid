import React, { FC } from "react";
import { Link } from 'react-router-dom';

const LandingPage: FC = () => {
  const posts = [
    {
        title: "Stakeholder's Feedback",
        img: "../public/images/meeting.jpg",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        route: "/dataprivacySF"
    },
    {
        title: "Internal Auditor's Evaluation",
        img: "../public/images/audit.jpg",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        route: "/dataprivacyIAE"
    },
    {
        title: "QMS Evaluation",
        img: "../public/images/magnifying.jpg",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        route: "/dataprivacyQMS"
    },
    {
        title: "RIF Tracker",
        img: "../public/images/rif.jpg",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ];

  return (
    <>
      <div className="grid gap-2 lg:grid-cols-4 mt-2 mx-4">
        {posts.map((items, key) => (
          <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={key}>
            <img
              className="object-cover w-full h-48"
              src={items.img}
              alt="image"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-600">
                {items.title}
              </h4>
              <p className="mb-2 leading-normal">
                {items.content}
              </p>
              <div className="flex justify-center items-center">
                <Link to={items.route || '#'} className="px-4 py-2 text-sm text-blue-100 bg-yellow-500 rounded shadow">
                  Add Feedback
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default LandingPage;
