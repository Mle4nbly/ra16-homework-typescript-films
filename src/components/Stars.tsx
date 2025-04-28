import { Star } from "./Star";

import { StarsModel } from "../models/starsModel";

const Stars = ({ count = 0 }: StarsModel) => {
  if (count < 1 || count > 5) {
    return null;
  }

  const stars = Array.from({ length: count }, (_, index) => (
    <Star key={index}></Star>
  ));

  return <ul className="card-body-stars">{stars}</ul>;
};

export default Stars;
