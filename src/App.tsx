import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from "react-router-dom";


import TestingSystem from "./testing-system/TestingSystem";
import InfrastructureVersion from "./testing-system/infrastructure/InfrastructureVersion";
import TestPlan from "./testing-system/test-plan/TestPlan";
import TestPlanList from "./testing-system/plan-list/TestPlanList";
import ResultList from "./testing-system/test-result/ResultList";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<TestingSystem />} />
          <Route path="testing-system" element={<TestingSystem />} />
          <Route
            path="/testing-system/infrastructure"
            element={<InfrastructureVersion />}
          />
          <Route path="/testing-system/test-plan" element={<TestPlan />} />
          <Route path="/testing-system/plan-list" element={<TestPlanList />} />
          <Route path="/testing-system/result-list" element={<ResultList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
