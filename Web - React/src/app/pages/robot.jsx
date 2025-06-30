import '../../styles/routes_styles/general.routes.styles.css'
import '../../styles/routes_styles/robot.css'
import "../../styles/Charts.css"
import { PieChart } from '../components/PieChart.tsx'
import { BarChart } from '../components/BarChart.tsx'

export function Robot(){
  return (
  <div className="main-box">
    <div className="wrapper">
        <div className="one chart-style chart-view-sm">
          <PieChart />
        </div>
        <div className="two chart-style chart-view-sm">
          <BarChart />
        </div>
    </div>
  </div>
  )}
