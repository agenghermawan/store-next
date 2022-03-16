import type { NextPage } from "next";
import React from "react";
import Navbar from "../component/navbar";
import Banner from "../component/SmallComponent/Index/Banner/Banner";
import FeaturedGames from "../component/SmallComponent/Index/FeaturedGames";
import Footer from "../component/SmallComponent/Index/Footer";
import Reached from "../component/SmallComponent/Index/Reached";
import Step from "../component/SmallComponent/Index/Step/step";
import Story from "../component/SmallComponent/Index/Story";

const Home: NextPage = () => (
  <>
    <Navbar />
    <Banner />
    <Step />
    <FeaturedGames />
    <Reached />
    <Story />
    <Footer />
  </>
);

export default Home;
