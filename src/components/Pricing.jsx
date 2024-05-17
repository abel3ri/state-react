import { useState } from "react";
import axios from "axios";

const fetchPricingData = async () => {
  const pricingData = (
    await axios.get("https:thereal3ri.github.io/pricing.json")
  ).data;

  return pricingData;
};
export default function Pricing() {
  let [pricing, setPricig] = useState({});
  fetchPricingData().then((data) => {
    pricing = data;
  });

  return (
    <>
      <div className="Pricing">
        <h1>"Pricing"</h1>
      </div>
    </>
  );
}
