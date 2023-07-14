const data = [
  {
    id: 1,
    track_id: 6,
    pid: 0,
    cid: 0,
    name: "Registration",
    type: "registration",
    customer_counts: 23552,
    customer_percent: "100%",
  },
  {
    id: 2,
    track_id: 6,
    pid: 1,
    cid: 0,
    name: "Day 1",
    type: "filter",
    customer_counts: 21297,
    customer_percent: "90%",
  },
  {
    id: 3,
    track_id: 6,
    pid: 1,
    cid: 0,
    name: "Deposit",
    type: "deposit",
    customer_counts: 2357,
    customer_percent: "10%",
  },
  {
    id: 4,
    track_id: 6,
    pid: 1,
    cid: 6,
    name: "welcome",
    type: "media_sms",
    customer_counts: 23551,
    customer_percent: "100%",
  },
  {
    id: 5,
    track_id: 6,
    pid: 1,
    cid: 6,
    name: "welcome 1",
    type: "media_email",
    customer_counts: 23551,
    customer_percent: "100%",
  },
  {
    id: 6,
    track_id: 6,
    pid: 1,
    cid: 0,
    name: "Day 2",
    type: "filter",
    customer_counts: 20521,
    customer_percent: "87%",
  },
  {
    id: 7,
    track_id: 6,
    pid: 6,
    cid: 9,
    name: "Day 2 welcome offer",
    type: "media_sms",
    customer_counts: 20521,
    customer_percent: "100%",
  },
  {
    id: 8,
    track_id: 6,
    pid: 6,
    cid: 9,
    name: "Day 2 welcome offer",
    type: "media_email",
    customer_counts: 20521,
    customer_percent: "100%",
  },
  {
    id: 9,
    track_id: 6,
    pid: 1,
    cid: 0,
    name: "Day 3",
    type: "filter",
    customer_counts: 19758,
    customer_percent: "97%",
  },
  {
    id: 10,
    track_id: 6,
    pid: 9,
    cid: 0,
    name: "Day 2 welcome offer",
    type: "media_sms",
    customer_counts: 20521,
    customer_percent: "100%",
  },
  {
    id: 11,
    track_id: 6,
    pid: 9,
    cid: 0,
    name: "Day 2 welcome offer",
    type: "media_email",
    customer_counts: 20521,
    customer_percent: "100%",
  },
];

const getName = (value) => {
  if (!value) return "";
  return value?.length > 9 ? `${value.slice(0, 10)}...` : value;
};

const nodeTypes = {
  filter: "Filter",
  registration: "Registration",
  deposit: "Deposit",
  media_email: "Send Email",
  media_sms: "Send SMS",
  default: "N/A",
};

const getNodeType = (type) => {
  if (!type) return nodeTypes?.default;

  return nodeTypes[type] || nodeTypes?.default;
};

const symbols = {
  filter: "fas fa-filter",
  registration: "fas fa-sign-out-alt",
  deposit: "fas fa-briefcase",
  media_email: "fas fa-at",
  media_sms: "fas fa-envelope",
  default: "fas fa-circle",
};

const getNodeSymbolByType = (type) => {
  if (!type) return symbols?.default;

  return symbols[type] || symbols?.default;
};

const theme = {
  filter: "#C39BD3",
  registration: "#58D68D",
  deposit: "#EC7063",
  media: "#F4D03F",
  default: "#515A5A",
};

const getNodeThemeByType = (type) => {
  if (!type) return theme?.default;

  if (type === "media_sms" || type === "media_email") return theme?.media;

  return theme[type] || theme?.default;
};
