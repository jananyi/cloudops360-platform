export const finopsMetrics = [
  {
    title: "Total Cloud Spend",
    value: "$48,320",
    change: "+12.4%",
    status: "warning",
  },
  {
    title: "Savings Opportunity",
    value: "$7,860",
    change: "16.2% potential",
    status: "success",
  },
  {
    title: "Idle Resources",
    value: "23",
    change: "Needs cleanup",
    status: "danger",
  },
  {
    title: "Active Anomalies",
    value: "8",
    change: "3 High Severity",
    status: "info",
  },
];

export const idleResources = [
  {
    resource: "i-0a123ec2",
    type: "EC2",
    savings: "$210/month",
  },
  {
    resource: "vol-23983",
    type: "EBS",
    savings: "$85/month",
  },
  {
    resource: "nat-gateway-01",
    type: "NAT Gateway",
    savings: "$740/month",
  },
];

export const costDrivers = [
  {
    service: "EC2",
    spend: "$18,000",
  },
  {
    service: "RDS",
    spend: "$9,500",
  },
  {
    service: "S3",
    spend: "$6,200",
  },
  {
    service: "CloudFront",
    spend: "$5,400",
  },
];

export const accountCosts = [
  { account: "Production", cost: 24000 },
  { account: "Development", cost: 11000 },
  { account: "QA", cost: 6000 },
  { account: "Sandbox", cost: 7320 },
];

export const finopsAnomalies = [
  {
    service: "Amazon EC2",
    account: "Production",
    region: "us-east-1",
    expected: "$4,350",
    actual: "$6,780",
    variance: "+55.8%",
    severity: "High",
  },
  {
    service: "Amazon RDS",
    account: "Analytics",
    region: "eu-west-1",
    expected: "$2,100",
    actual: "$3,280",
    variance: "+56.1%",
    severity: "High",
  },
  {
    service: "Amazon S3",
    account: "Data Lake",
    region: "ap-south-1",
    expected: "$1,840",
    actual: "$2,460",
    variance: "+33.7%",
    severity: "Medium",
  },
];

export const savingsRecommendations = [
  {
    recommendation: "Rightsize underutilized EC2 instances",
    category: "Compute",
    savings: "$3,200/month",
    effort: "Medium",
    priority: "High",
  },
  {
    recommendation: "Delete unattached EBS volumes",
    category: "Storage",
    savings: "$860/month",
    effort: "Low",
    priority: "Medium",
  },
  {
    recommendation: "Review idle NAT Gateway usage",
    category: "Networking",
    savings: "$2,350/month",
    effort: "Medium",
    priority: "High",
  },
];

export const monthlyBreakdown = [
  { month: "Jan", compute: "$14,200", storage: "$5,100", database: "$7,800", network: "$4,900" },
  { month: "Feb", compute: "$15,900", storage: "$5,400", database: "$8,200", network: "$5,200" },
  { month: "Mar", compute: "$18,100", storage: "$6,000", database: "$9,100", network: "$5,800" },
  { month: "Apr", compute: "$17,300", storage: "$5,800", database: "$8,900", network: "$5,400" },
  { month: "May", compute: "$19,800", storage: "$6,200", database: "$9,400", network: "$6,100" },
  { month: "Jun", compute: "$21,300", storage: "$6,500", database: "$9,800", network: "$6,720" },
];