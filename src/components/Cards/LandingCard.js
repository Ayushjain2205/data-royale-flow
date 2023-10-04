import React from "react";
import Link from "next/link";

const LandingCard = ({ type }) => {
  let href, imageSrc, title;

  switch (type) {
    case "explore":
      href = "/explore";
      imageSrc = "/images/explore-card.svg";
      title = "Explore";
      break;
    case "create":
    default:
      href = "/create";
      imageSrc = "/images/create-card.svg";
      title = "Create";
      break;
  }

  return (
    <Link href={href}>
      <div className="card ring ring-indigo-50 w-96 bg-base-100  transform transition-transform duration-300 hover:scale-105">
        <figure className="px-10 pt-10">
          <img src={imageSrc} alt={title} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="text-[32px] font-bold">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default LandingCard;
