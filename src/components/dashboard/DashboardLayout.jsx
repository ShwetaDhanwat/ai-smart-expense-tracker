import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import SummaryCards from "./SummaryCards";
import ExpenseChart from "./ExpenseChart";
import RecentTransactions from "./RecentTransactions";
import AIInsights from "./AIInsights";

function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1 p-8">

        <Topbar />

        <SummaryCards />

        <div className="grid lg:grid-cols-3 gap-6 mt-8">

          <div className="lg:col-span-2">
            <ExpenseChart />
          </div>

          <AIInsights />

        </div>

        <RecentTransactions />

      </div>

    </div>
  );
}

export default DashboardLayout;