import { ReportAPI, InsightDetailsAPI } from "./constant";

import { buildInsightsData } from "@/utils/helper";

export const fetchReport = (setReportState: any) => {
  const url = ReportAPI;

  // Fetch Report Data
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setReportState(buildInsightsData(data));
    })
    .catch((error) => console.warn("fetch error: Report", error));
};

const getInsightDetailsURL = (id: number) => {
  let url = InsightDetailsAPI;
  url = url.replace(/<ID>/i, id.toString());
  return url;
};

export const fetchInsightDetails = (id: number, setInsightDetailState: any) => {
  const url = getInsightDetailsURL(id);

  // Fetch Insight Details  Data
  fetch(url)
    .then((response) => response.json())
    .then((data) => setInsightDetailState(data))
    .catch((error) => console.warn("fetch error: Insight Details", error));
};
