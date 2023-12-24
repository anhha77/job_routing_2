import React from "react";
import { useSearchParams } from "react-router-dom";

function JobsFilterPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get("query");
  console.log(value);

  return <div>{value}</div>;
}

export default JobsFilterPage;
