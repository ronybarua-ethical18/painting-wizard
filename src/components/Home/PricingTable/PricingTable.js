import React from 'react';
import SinglePricing from '../../Home/SinglePricing/SinglePricing';
import './PricingTable.css'
const PricingTable = () => {
    const pricingTables = [
        {
            title:'Residential Painting',
            price:'330',
            bg:''
        },{
            title:'Commercial Painting',
            price:'550',
            bg:'primary'
        },{
            title:'Full Service',
            price:'750',
            bg:''
        }
    ];
    return (
        <div className="pricing-table">
            <h3  className="text-center section-title mb-5"><span className="brand-color">Pricing</span> <span className="title-color">Table</span></h3>
            <div className="row">
                {
                    pricingTables.map(pricing => <SinglePricing pricing={pricing}></SinglePricing>)
                }
            </div>
        </div>
    );
};

export default PricingTable;