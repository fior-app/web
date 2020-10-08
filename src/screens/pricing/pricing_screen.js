import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styles from "./pricing.module.css";

const PricingScreen = () => {
  const handlePayment = (type) => {
    const win = window.open(type === 'normal' ? 'https://sandbox.payhere.lk/pay/oe9d9f422' : 'https://sandbox.payhere.lk/pay/o891e7dc7', '_blank');
    win.focus();
  };

  return (
    <div className="landing_pricing_plan_bg">
      <div className="landing_pricing_plan">
        <h3 className="landing_pricing_main_h3">Pricing Plan</h3>
        <p className="landing_pricing_main_p">
          Unlock many more features and resources
        </p>

        {/* Pricing Plan Packages */}
        <div className="landing_pricing_packages row">
          {/* Free Package */}
          <div className="landing_package1">
            <h4>Free</h4>

            <div className="landing_pricing_content1">
              <div className="landing_pricing_description1 row">
                <img src="../../img/check.svg" alt="Check Mark" />
                <p className="landing_pricing_point">Create 2 groups</p>
              </div>
              <div className="landing_pricing_description row">
                <img src="../../assets/img/check.svg" alt="Check Mark" />
                <p className="landing_pricing_point">
                  Add maximum 5 members per group
                </p>
              </div>
            </div>
          </div>
          {/* End of Free Package */}

          {/* Standard Package */}
          <div className="landing_package2">
            <h4>Standard</h4>
            <p className="landing_price1">
              <span>$6</span>
              <br />
              (One-time payment)
            </p>

            <div className="landing_pricing_content2">
              <div className="landing_pricing_description1 row">
                <img src="../../assets/img/check.svg" alt="Check Mark" />
                <p className="landing_pricing_point">Create 10 groups</p>
              </div>
              <div className="landing_pricing_description row">
                <img src="../../assets/img/check.svg" alt="Check Mark" />
                <p className="landing_pricing_point">
                  Add maximum 10 members per group
                </p>
              </div>
            </div>
            <Button type="button" color="teal" onClick={() => handlePayment('normal')}>Choose Plan</Button>
          </div>
          {/* End of Standard Package */}

          <div className="landing_package3">
            <h4>Enterprise</h4>
            <p className="landing_price2">
              <span>$12</span>
              <br />
              (One-time payment)
            </p>

            <div className="landing_pricing_content3">
              <div className="landing_pricing_description2 row">
                <img src="../../assets/img/check.svg" alt="Check Mark" />
                <p className="landing_pricing_point1">Create 1 Organization</p>
              </div>
              <div className="landing_pricing_description3 row">
                <img src="../../assets/img/check.svg" alt="Check Mark" />
                <p className="landing_pricing_point1">
                  Get unlimited member access for the organization
                </p>
              </div>
              <div className="landing_pricing_description4 row">
                <img src="../../assets/img/check.svg" alt="Check Mark" />
                <p className="landing_pricing_point1">
                  Create 100 groups under the organization
                </p>
              </div>
              <div className="landing_pricing_description5 row">
                <img src="../../assets/img/check.svg" alt="Check Mark" />
                <p className="landing_pricing_point1">
                  Add maximum 20 members per group
                </p>
              </div>
            </div>
            <Button type="button" color="teal" onClick={() => handlePayment('enterprise')}>Choose Plan</Button>
          </div>
        </div>
        {/* End of Pricing Plan Packages */}

          <div className="landing_package4">
            <h3>Partnership</h3>
            <p className="landing_package4_description">
              Request a custom Organization plan and pay as you go
            </p>
            <Button type="button" basic>Start a Plan</Button>
          </div>
        <div className="landing_package4_bg">
        </div>
      </div>
    </div>
  );
};

export default PricingScreen;
