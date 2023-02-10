// Base Import
import { useEffect, useState } from "react";

// Hooks
import useLocalStorage from "@/hooks/useLocalStorage";

// Utils
import { fetchInsightDetails, fetchReport } from "@/utils/fetch";

// Styles
import "@/styles/App.css";

// Components
import Card from "@/components/core/Card";
import Pill from "@/components/core/Pill";
import H1 from "@/components/core/Headings/H1";
import H3 from "@/components/core/Headings/H3";
import P from "@/components/core/Paragraph";
import Drawer from "@/components/core/Drawer";

// Containers
import HorizontalScrollCards from "@/components/containers/HorizontalScrollCards";
import { getElectoralTack } from "@/utils/helper";

// Main Export Function
function App() {
  const [hideDrawer, setHideDrawer] = useState(true);
  const [reportState, setReportState] = useLocalStorage("report", "");
  const [insightDetailState, setInsightDetailState] = useLocalStorage(
    "insight",
    ""
  );

  // Side Effects
  useEffect(() => {
    !reportState && fetchReport(setReportState);
    !insightDetailState && fetchInsightDetails(1, setInsightDetailState);
  }, [insightDetailState, reportState, setInsightDetailState, setReportState]);

  if (!reportState || !setReportState) return <div> ...Loading</div>;
  // React Render DOM Elements
  return (
    <div className="p-lg">
      <header>
        <H1 className="py-xl">Insights</H1>
      </header>
      <HorizontalScrollCards>
        {reportState?.map((report: any, index: number) => (
          <Card key={index}>
            <div className="flex pb-xl gap-lg">
              <Pill pillType={report?.Track} />
              <Pill>{report?.Impact}</Pill>
            </div>
            <H3>{report?.Header}</H3>
            <P>{report?.Body}</P>
            {report?.LearnMore && (
              <button
                className="text-sm mt-xl font-bold text-cs-cta hover:text-cs-cta-hover"
                onClick={() => setHideDrawer(false)}
              >
                Learn more
              </button>
            )}
          </Card>
        ))}
      </HorizontalScrollCards>

      <Drawer
        hide={hideDrawer}
        data={insightDetailState}
        onClose={() => setHideDrawer(true)}
        track={getElectoralTack(reportState)}
      />
    </div>
  );
}

export default App;
