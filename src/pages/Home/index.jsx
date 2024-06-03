import React from "react";
import Banner from "./banner";
import Card from "./card";
import Browse from "./browse";
import TopListing from "./topListing";
import RecentListing from "./recentListing";
import Question from "./question";
import ImageSection from "./image";
import TestimonialCarousel from "./carousel";

function Index() {
  return (
    <div>
      {/* banner section  */}
      <Banner />
      {/* card section  */}
      <Card />
      {/* Browse section  */}
      <Browse />
      {/* topListing  */}
      <TopListing />
      {/* question section  */}
      <Question />
      {/* RECENT LISTING  */}
      <RecentListing />
      {/* image section  */}
      <ImageSection />
      {/* Carousel */}
      <TestimonialCarousel />
    </div>
  );
}

export default Index;
