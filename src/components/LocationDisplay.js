import React from "react";
import { useLocation } from "react-router";
const LocationDisplay = () => {
  let location = useLocation();
  return <h1 data-testid="location-display">{location.pathname}</h1>;
};
export { LocationDisplay };
