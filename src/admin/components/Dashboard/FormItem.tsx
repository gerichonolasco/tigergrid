import React, { FC } from "react";

interface Props {
  title: string;
  img: string;
  content: string;
  showOnUserSide: boolean;
  toggleShowOnUserSide: () => void;
}

const FormItem: FC<Props> = ({
  title,
  img,
  content,
  showOnUserSide,
  toggleShowOnUserSide
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      {img && <img src={img} alt={title} className="mb-2" />}
      <p>{content}</p>
      <button onClick={toggleShowOnUserSide}>
        {showOnUserSide ? "Hide" : "View"}
      </button>
    </div>
  );
};

export default FormItem;
