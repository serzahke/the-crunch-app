"use client"

const FeatureList = () => {
  return (
    <div role="tablist" className="tabs tabs-bordered">
        <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Performance Management"/>
        <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Workforce Management"/>
        <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Inventory Management"/>
      </div>
  )
}

export default FeatureList