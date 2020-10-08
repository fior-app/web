import React from "react";
import styles from "./pricing.module.css";

const PricingScreen = () => (
  <div className={styles.pricing_plan_bg}>
    <div className={styles.pricing_plan}>
      <h3 className={styles.pricing_main_h3}>Pricing Plan</h3>
      <p className={styles.pricing_main_p}>
        Unlock many more features and resources
      </p>

      {/* Pricing Plan Packages */}
      <div className={styles.pricing_packages}>
        {/* Free Package */}
        <div className={styles.pricing_package1}>
          <h4>Free</h4>

          <div className={styles.pricing_content1}>
            <div className={styles.pricing_description1}>
              <img src="../../img/check.svg" alt="Check Mark" />
              <p className={styles.pricing_point}>Create 2 groups</p>
            </div>
            <div className={styles.pricing_description}>
              <img src="../../assets/img/check.svg" alt="Check Mark" />
              <p className={styles.pricing_point}>
                Add maximum 5 members per group
              </p>
            </div>
          </div>
        </div>
        {/* End of Free Package */}

        {/* Standard Package */}
        <div className={styles.pricing_package2}>
          <h4>Standard</h4>
          <p className={styles.price1}>
            <span>$6</span>
            <br />
            (One-time payment)
          </p>

          <div className={styles.pricing_content2}>
            <div className={styles.pricing_description1}>
              <img src="../../assets/img/check.svg" alt="Check Mark" />
              <p className={styles.pricing_point}>Create 10 groups</p>
            </div>
            <div className={styles.pricing_description}>
              <img src="../../assets/img/check.svg" alt="Check Mark" />
              <p className={styles.pricing_point}>
                Add maximum 10 members per group
              </p>
            </div>
          </div>

          {/* <button type="button" className="secondary_btn">
            Choose Plan
          </button> */}
          <button class="ui teal button">Choose Plan</button>
        </div>
        {/* End of Standard Package */}

        <div className={styles.pricing_package3}>
          <h4>Enterprise</h4>
          <p className={styles.price2}>
            <span>$12</span>
            <br />
            (One-time payment)
          </p>

          <div className={styles.pricing_content3}>
            <div className={styles.pricing_description2}>
              <img src="../../assets/img/check.svg" alt="Check Mark" />
              <p className={styles.pricing_point1}>Create 1 Organization</p>
            </div>
            <div className={styles.pricing_description3}>
              <img src="../../assets/img/check.svg" alt="Check Mark" />
              <p className={styles.pricing_point1}>
                Get unlimited member access for the organization
              </p>
            </div>
            <div className={styles.pricing_description4}>
              <img src="../../assets/img/check.svg" alt="Check Mark" />
              <p className={styles.pricing_point1}>
                Create 100 groups under the organization
              </p>
            </div>
            <div className={styles.pricing_description5}>
              <img src="../../assets/img/check.svg" alt="Check Mark" />
              <p className={styles.pricing_point1}>
                Add maximum 20 members per group
              </p>
            </div>
          </div>

          <button class="ui white button">Choose Plan</button>
        </div>
      </div>
      {/* End of Pricing Plan Packages */}

      <div className={styles.pricing_package4_bg}>
        <div className={styles.pricing_package4}>
          <h3>Partnership</h3>
          <p className={styles.pricing_package4_description}>
            Request a custom Organization plan and pay as you go
          </p>
          {/* <button type="button" className="secondary_btn">
            Start a plan
          </button> */}
          <button class="ui teal button">Start a plan</button>
        </div>
      </div>
    </div>
  </div>
);

export default PricingScreen;
