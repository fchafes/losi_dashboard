import "./SummaryPage.css"
import Button from 'react-bootstrap/Button';
import sales from "/sales.png";
import customers from "/customers.png";
import revenue from "/revenue.png";
import SalesChart from "../components/SalesChart";
import DailyChart from "../components/DailyChart";
import OverviewChart from "../components/OverviewChart";

const SummaryPage = () => {

  return (
    <>
    <div className="summary-container">
      <div className="summary-chart">
        <div className="sales-left-panel">
          <div className="left-panel-header">
            <h2>Sales stats</h2>
            <Button variant="outline-dark" size="sm">View All</Button>
          </div>
          <div className="left-panel-body">
            <div className="left-panel-body-stats">
              <SalesChart />
            </div>
          </div>
        </div>
        <div className="sales-right-panel">
          <div className="right-panel-header">
            <div className="right-panel-header-smallBox">
              <div className="smallBox-top">
                <img src={sales} alt="" />
                <p>...</p>
              </div>
              <div className="smallBox-bottom">
                <h4>Total Sales</h4>
                <p>$29.067</p>
              </div>
            </div>
            <div className="right-panel-header-smallBox">
              <div className="smallBox-top">
                <img src={customers} alt="" />
                <p>...</p>
              </div>
              <div className="smallBox-bottom">
                <h4>Total Orders</h4>
                <p>$29.067</p>
              </div>
            </div>
            <div className="right-panel-header-smallBox">
              <div className="smallBox-top">
                <img src={revenue} alt="" />
                <p>...</p>
              </div>
              <div className="smallBox-bottom">
                <h4>Total Income</h4>
                <p>$29.067</p>
              </div>
            </div>
          </div>
          <div className="right-panel-body">
            <h4>Today's earnings</h4>
            <DailyChart />
          </div>
        </div>
      </div>
      <div className="summary-chart">
        <div className="sales-left-panel">
          <div className="left-panel-header">
            <h2>Recent orders</h2>
            <Button variant="outline-dark" size="sm">View All</Button>
          </div>
          <div className="left-panel-body">
            <div className="left-panel-body-stats">
              <img src="/chart_3.png" alt="" />
            </div>
          </div>
        </div>
        <div className="orders-right-panel">
          <div className="orders-right-panel-header">
          <h2>Overview</h2>
          </div>
          <div className="orders-right-panel-body">
            <OverviewChart />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SummaryPage;
