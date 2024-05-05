import React from 'react';
import FooterSection from '../components/FooterSection';
import './TermAndCondition.css'

const TermsAndConditions = () => {
  return (
    <>
    <div className="termsAndConditions fadeIn">
      <h1 className="termsAndConditionsHeading">Terms Of Service<hr/></h1>
      <div className="serviceLeadingSection">
        <h4><span className="sn blue">1.</span><span className="st blue">Acceptance of Terms:</span></h4>
        <p className="spl">By accessing or using the digital billboard services provided by Oretes Consulting Pvt. Ltd, you agree to be bound by these terms and conditions.</p>                               
      </div>
      <div className="serviceLeadingSection">
        <h4><span className="sn orange">2.</span><span className="st orange">Scope of Services</span></h4>
        <p className="spl">Oretes provides digital billboard advertising services, including but not limited to the display of advertisements on digital screens owned or managed by Oretes.
          repudiandae numquam earum dolorem hic quis ipsa, a quisquam placeat.</p>
      </div>
      <div className="serviceLeadingSection">
        <h4><span className="sn lightGreen">3.</span><span className="st lightGreen">Advertisement Content:</span></h4>
        <p className="spl">Advertisements must comply with all applicable laws and regulations. Oretes reserves the right to reject or remove any advertisement that is deemed inappropriate, offensive, or violates any laws or regulations.</p>     
      </div> 
      <div className="serviceLeadingSection">
        <h4><span className="sn lightGreen">4.</span><span className="st lightGreen">Payment Terms:</span></h4>
        <p className="spl">Payment for advertising services must be made in advance. We offers various payment plans, and payment terms will be outlined in the agreement between Oretes and the advertiser..</p>     
      </div>
      <div className="serviceLeadingSection">
        <h4><span className="sn lightGreen">5.</span><span className="st lightGreen">Changes to Terms: </span></h4>
        <p className="spl">We reserves the right to modify or update these terms and conditions at any time without prior notice. It is the responsibility of the advertiser to regularly review these terms for any changes.</p>     
      </div>
      </div>
      
          <div>
      <FooterSection/>
      </div>
    </>
  );
};

export default TermsAndConditions;
