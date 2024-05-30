import React from "react";
import Banner from "./banner";
import Card from "./card";
import Browse from "./browse";
import TopListing from "./topListing";

function Index() {
  return (
    <div>
      {/* banner section  */}
      <Banner />
      {/* card section  */}
      <Card />
      {/* Browse section  */}
      <Browse />
    </div>
  );
}

export default Index;
