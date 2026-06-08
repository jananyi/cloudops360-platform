export const kpiMetrics = [
  {
    title: "Monthly Cloud Spend",
    value: "$48,320",
    change: "+12.4% from last month",
    status: "warning",
  },
  {
    title: "Savings Identified",
    value: "$7,860",
    change: "16.2% optimization opportunity",
    status: "success",
  },
  {
    title: "Active Anomalies",
    value: "8",
    change: "3 high severity anomalies",
    status: "danger",
  },
  {
    title: "Compliance Score",
    value: "87%",
    change: "12 findings open",
    status: "info",
  },
];

export const spendTrend = [
  { month: "Jan", spend: 32000 },
  { month: "Feb", spend: 36000 },
  { month: "Mar", spend: 41000 },
  { month: "Apr", spend: 39000 },
  { month: "May", spend: 45000 },
  { month: "Jun", spend: 48320 },
];

export const serviceCosts = [
  { service: "EC2", cost: 18000 },
  { service: "RDS", cost: 9500 },
  { service: "S3", cost: 6200 },
  { service: "CloudFront", cost: 5400 },
  { service: "Lambda", cost: 3200 },
];

export const regionCosts = [
  { region: "us-east-1", cost: 21000 },
  { region: "eu-west-1", cost: 15000 },
  { region: "ap-south-1", cost: 12320 },
];

export const environments = [
  {
    name: "Production",
    health: "Healthy",
    services: 42,
    uptime: "99.98%",
  },
  {
    name: "QA",
    health: "Warning",
    services: 18,
    uptime: "99.21%",
  },
  {
    name: "Development",
    health: "Healthy",
    services: 27,
    uptime: "98.94%",
  },
];

export const anomalies = [
  {
    service: "Amazon EC2",
    account: "prod-core",
    region: "us-east-1",
    impact: "$2,430",
    severity: "High",
  },
  {
    service: "Amazon RDS",
    account: "analytics-prod",
    region: "eu-west-1",
    impact: "$1,180",
    severity: "High",
  },
  {
    service: "Amazon S3",
    account: "data-lake",
    region: "ap-south-1",
    impact: "$620",
    severity: "Medium",
  },
  {
    service: "CloudFront",
    account: "web-prod",
    region: "global",
    impact: "$410",
    severity: "Medium",
  },
];

export const optimizations = [
  {
    title: "Rightsize underutilized EC2 instances",
    savings: "$3,200/month",
    priority: "High",
  },
  {
    title: "Delete unattached EBS volumes",
    savings: "$860/month",
    priority: "Medium",
  },
  {
    title: "Enable S3 Intelligent-Tiering",
    savings: "$1,450/month",
    priority: "Medium",
  },
  {
    title: "Review idle NAT Gateway usage",
    savings: "$2,350/month",
    priority: "High",
  },
];

export const compliance = [
  {
    label: "Tag Compliance",
    value: "91%",
  },
  {
    label: "Public Resource Checks",
    value: "84%",
  },
  {
    label: "Security Group Hygiene",
    value: "79%",
  },
  {
    label: "Unused Resource Cleanup",
    value: "88%",
  },
];

export const recentActivity = [
  "Cost anomaly detected in EC2 production account",
  "S3 Intelligent-Tiering recommendation generated",
  "QA environment health changed to warning",
  "3 unattached EBS volumes identified",
  "Monthly cloud health summary refreshed",
];