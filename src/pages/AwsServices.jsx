import React from "react";
import "./AwsServices.css";
import * as FaIcons from "react-icons/fa";

const services = [
  {
    name: "Amazon EC2",
    icon: "FaServer",
    freeTier: "12 Months Free",
    description: "Scalable virtual servers in the cloud to run applications.",
    features: ["✔ Elastic Compute", "✔ Auto Scaling", "✔ Flexible Instance Types"],
  },
  {
    name: "Amazon Lambda",
    icon: "FaBolt",
    freeTier: "12 Months Free",
    description: "Run code without thinking about servers or clusters.",
    features: ["✔ Elastic Compute", "✔ Auto Scaling", "✔ Flexible Instance Types"],
  },
  {
    name: "Amazon S3",
    icon: "FaCloud",
    freeTier: "12 Months Free",
    description: "Object storage service for storing and retrieving any amount of data, at any time.",
    features: ["✔ High Durability (99.999999999%)", "✔ Versioning Support", "✔ Lifecycle Policies"],
  },
  {
    name: "Amazon EFS",
    icon: "FaCube",
    freeTier: "12 Months Free",
    description: "Simple, scalable, shared file storage for Amazon EC2 instances.",
    features: ["✔ Scalable Storage", "✔ Highly Available", "✔ Easy Integration"],
  },
  {
    name: "Elastic Load Balancing",
    icon: "FaCube",
    freeTier: "12 Months Free",
    description: "Automatic distribution of incoming application traffic across multiple Amazon EC2 instances.",
    features: ["✔ Scalable Storage", "✔ Highly Available", "✔ Easy Integration"],
  },
  {
    name: "Amazon RDS",
    icon: "FaDatabase",
    freeTier: "12 Months Free",
    description: "Managed relational database service that supports multiple engines like MySQL, PostgreSQL, and SQL Server.",
    features: ["✔ Automated Backups", "✔ Multi-AZ Deployments", "✔ Read Replicas"],
  },
  {
    name: "Amazon DynamoDB",
    icon: "FaDatabase",
    freeTier: "12 Months Free",
    description: "Serverless, NoSQL, fully managed database with single-digit millisecond performance at any scale.",
    features: ["✔ Automated Backups", "✔ Multi-AZ Deployments", "✔ Read Replicas"],
  },
  {
    name: "Amazon API Gateway",
    icon: "FaCode",
    freeTier: "12 Months Free",
    description: "Publish, maintain, monitor, and secure APIs at any scale.",
    features: ["✔ Secure API Management", "✔ Multi-Region Support", "✔ Cost-Effective Scaling"],
  },
  {
    name: "Amazon Pinpoint",
    icon: "FaMobileAlt",
    freeTier: "12 Months Free",
    description: "  Targeted push notifications for mobile apps.",
    features: ["✔ Real-Time Messaging", "✔ Audience Segmentation", "✔ Campaign Analytics"],
  },
  {
    name: "AWS Amplify Hosting",
    icon: "FaRocket",
    freeTier: "12 Months Free",
    description: "Fast, secure, and reliable hosting for modern web apps.",
    features: ["✔ Continuous Deployment", "✔ Easy Integration", "✔ Scalable Infrastructure"],
  },
  {
    name: "AWS AppSync",
    icon: "FaAws",
    freeTier: "12 Months Free",
    description: "Connect apps to data with secure, serverless GraphQL APIs.",
    features: ["✔ Real-Time Sync", "✔ Built-in Security", "✔ Serverless Architecture"],
  },
  {
    name: "Amazon CloudWatch",
    icon: "FaChartLine",
    freeTier: "Always Free",
    description: " Monitoring for AWS cloud resources and applications.",
    features: ["✔ Real-Time Monitoring", "✔ Built-in Security", "✔ Flexible Dashboards"],
  },
  {
    name: "AWS CloudFormation",
    icon: "FaChartBar",
    freeTier: "Always Free",
    description: "Model and provision all your cloud infrastructure resources with code to enable configuration compliance and faster troubleshooting.",
    features: ["✔ Automated Templates", "✔ Built-in Security", "✔ Improved Troubleshooting"],
  },
  {
    name: "AWS CloudTrail",
    icon: "FaFileAlt",
    freeTier: "Always Free",
    description: "Log, continuously monitor, and retain account activity related to actions across your AWS infrastructure.",
    features: ["✔ Real-Time Logging", "✔ Audit Trail", "✔ Simplified Compliance"],
  },
  // Add more services here as needed
];

const AwsServices = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">🚀 AWS Free Tier Services</h1>

      <div className="row g-4">
        {services.map((service, index) => {
          const Icon = FaIcons[service.icon];
          return (
            <div className="col-md-4" key={index}>
              <div className="card h-100 shadow">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h6>Free Tier</h6>
                    <span>{service.freeTier}</span>
                  </div>
                  <h5 className="card-title">
                    {service.name} <Icon />
                  </h5>
                  <p className="card-text">{service.description}</p>
                  <ul className="list-unstyled">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AwsServices;
