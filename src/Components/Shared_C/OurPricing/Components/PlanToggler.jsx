import React from 'react';

function PlanToggler({ priceDuration, handleTogglerPriceDuration, className }) {
  return (
    <div className={`plane-toggler bg-white p-2 w-[200px] flex items-center gap-2 rounded-md ${className}`}>
      {/* Monthly Button */}
      <button
        type='button'
        onClick={handleTogglerPriceDuration}
        title='Monthly'
        className={`w-full py-2 rounded-md transition ${priceDuration === "MONTHLY" ? "bg-primary-color text-white" : "sm:hover:bg-primary-color sm:hover:text-white"}`}
        aria-label='Monthly Button'
      >
        Monthly
      </button>
      {/* Yearly Button */}
      <button
        type='button'
        onClick={handleTogglerPriceDuration}
        className={`w-full py-2 rounded-md transition ${priceDuration === "YEARLY" ? "bg-primary-color text-white" : "sm:hover:bg-primary-color sm:hover:text-white"}`}
        title='Yearly'
        aria-label='Yearly Button'
      >
        Yearly
      </button>
    </div>
  )
}

export default PlanToggler;