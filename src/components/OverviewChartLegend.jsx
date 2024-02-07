import "./OverviewChartLegend.css"

const OverviewChartLegend = () => (
  <>
    <div className="legend-container">
      <div className="legend-container-section">
        <div className="legend-container-section-header">
          <div className="legend-container-section-header-circle"></div>
          <p>Skateboards</p>
        </div>
        <p>$3.569 ( 33% )</p>
      </div>
      <div className="legend-container-section">
        <div className="legend-container-section-header">
          <div className="legend-container-section-header-circle"></div>
          <p>Cloth</p>
        </div>
        <p>$2.988 ( 25% )</p>
      </div>
      <div className="legend-container-section">
        <div className="legend-container-section-header">
          <div className="legend-container-section-header-circle"></div>
          <p>Accesories</p>
        </div>
        <p>$1.04 ( 15% )</p>
      </div>
    </div>
  </>
);

export default OverviewChartLegend;
