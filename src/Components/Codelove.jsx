import React from "react";
import Button from "react-bootstrap/Button";
// import getStripe from "../lib/getStripe";
import { loadStripe } from '@stripe/stripe-js';

export default function Codelove() {
  async function handleDonation() {
    try {
      const apiKey = "pk_test_51NIupDI0Iae59SzotIPKqxrsfifbU10xyYhDjOxkCsUndV2OTg8aWGYvmgm4kROnSaRhfqJN8uN8yxH1P3kf8hJB00ziBUqPk8"; // Replace with your actual API key
      const price_id= "price_1NIuvOI0Iae59SzoXB9Q1Jm4"
  
      // Make sure apiKey is a string
      if (typeof apiKey !== 'string') {
        throw new Error('Invalid API key');
      }
  
      const stripe = await loadStripe(apiKey);
    // const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: price_id,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      successUrl: `http://localhost:3000/home`,
      cancelUrl: `http://localhost:3000/cancel`,
    });
    console.warn(error.message)
  }catch (error) {
    console.error('Error:', error);
  }
  }
  return (
    <div className="donation">
      <h1 className="codelovehead">Code Love = Donate Love</h1>
      <p className="codelovetext">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="codecards">
        <div className="code1">
          <p className="codetext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            volutpat elit ut quam viverra efficitur. Sed eu sem tristique,
            vestibulum nunc sed, pharetra libero. Vestibulum sed nisi nec mi
            lacinia feugiat. Duis at sapien ut sem imperdiet tincidunt.
            Vestibulum ante ipsum prim
          </p>
          <Button
          onClick={handleDonation}
            variant="danger"
            style={{
              position: "relative",
              left: 0,
              width: 300,
              backgroundColor: "#4176fa",
            }}
          >
            Donate Now
          </Button>
        </div>
        <div className="code2">
          <img
            className="circleimg"
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            beatae officiis fuga veritatis corrupti accusamus sint dolorum
            perspiciatis quam veniam in quisquam. .
          </p>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            nulla, vitae blanditiis recusandae tempore aliquid similique
            voluptate est magni! Ex?
          </p>
        </div>
        <div className="code3">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <hr />
          <img
            className="circleimg"
            src="data:image/png;base64,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"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            molestias quas illum aliquam qui ducimus sunt voluptates, blanditiis
            quis id ex neque aperiam dolorem, unde dignissimos impedit dolor sit
            illo doloribus ipsum eaque sequi? Veniam necessitatibus nihil est
            iusto perferendis?
          </p>
        </div>
      </div>
    </div>
  );
}
