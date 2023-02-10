export const getNestedObject = (nestedObj: object, pathArr: string[]) => {
  return pathArr.reduce(
    (obj: any, key: string) =>
      obj && obj[key] !== "undefined" ? obj[key] : undefined,
    nestedObj
  );
};

export const getElectoralTack = (reportState: any) => {
  return reportState[2].Track;
};

export const buildInsightsData = (data: any) => {
  // Business Logic

  // if publicInfoTrack has any elements then this insight is "OFF TRACK"
  const publicInfoPath = ["personal", "publicInfo", "courtAndInsolvencies"];
  const publicInfoTrack = [...getNestedObject(data, publicInfoPath)];

  // where overview.balance.amount is 50% or more of overview.limit.amount then this insight is "OFF TRACK".
  const electoralPath = ["personal", "electoralRoll"];
  const electoralTrack = [...getNestedObject(data, electoralPath)];

  // if there is an entry with a true value on the current property, then this insight is "ON TRACK"
  const accountsOverviewPath = ["accounts", "0", "overview"];
  const accountsOverview = {
    ...getNestedObject(data, accountsOverviewPath),
  };

  return [
    {
      Header: "Public information",
      Body: "Bankruptcies and individual voluntary arrangements can damage your score",
      Impact: "High Impact",
      // personal => publicInfo => courtAndInsolvencies.length > 0
      Track: publicInfoTrack.length > 0 ? "off" : "on",
      LearnMore: false,
    },
    {
      Header: "Credit utilisation",
      Body: "Using more than 50% of your available credit can damage your score",
      Impact: "Medium Impact",
      // accounts => overview => balance.amount > limit.amount /2
      Track:
        accountsOverview.balance.amount > accountsOverview.limit.amount / 2
          ? "off"
          : "on",
      LearnMore: false,
    },
    {
      Header: "Electoral roll",
      Body: "Being on the electoral roll can improve your score",
      Impact: "Medium Impact",
      // personal => electoralRoll.length > 0
      Track: electoralTrack.length > 0 ? "off" : "on",
      LearnMore: true,
    },
  ];
};
