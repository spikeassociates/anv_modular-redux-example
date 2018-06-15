import React from "react";
import { Redirect } from "react-router-dom";

// Not Found Page
const NotFound = () => (
  <div>
    <Redirect to="/404" />
    <h4>Page not found</h4>
  </div>
);

export default NotFound;
