import React from "react";
// import ContactUs from '../../../Components/ContactUs/ContactUs';
import CunstomDonationSection from "../../../Components/CustomDonationSection/CunstomDonationSection";
import JoinRecentEvent from "../../../Components/JoinRecentEvent/JoinRecentEvent";
import PoorFundActiveMember from "../../../Components/PoorFundActiveMember/PoorFundActiveMember";
import PopularCatagories from "../../../Components/PopularCatagories/PopularCatagories";
import Volunteers from "../../../Components/Volunteers/Volunteers";
import HeroSection from "../../HeroSection/HeroSection";
import FirstSection from "../../FirstSection/FirstSection";
import "./style.css";
import TrustedPartners from "../../../Components/TrustedPartners/TrustedPartners";

const Home = () => {
  return (
    <div className="">
      <HeroSection></HeroSection>
      <FirstSection></FirstSection>
      <CunstomDonationSection></CunstomDonationSection>
      <PopularCatagories></PopularCatagories>
      <PoorFundActiveMember></PoorFundActiveMember>
      <JoinRecentEvent></JoinRecentEvent>
      <TrustedPartners />
      <Volunteers></Volunteers>
    </div>
  );
};

export default Home;
