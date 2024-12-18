import React from "react";
import "./AwsServices.css";
import {
  FaServer,
  FaDatabase,
  FaCloud,
  FaCode,
  FaRocket,
  FaMobileAlt,
  FaCube,
  FaChartBar,
} from "react-icons/fa";

const AwsServices = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">🚀 AWS Free Tier Services</h1>

      <div className="row g-4">
        {/* Amazon EC2 Card */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h6>Free Tier</h6>
                <span>12 Months Free</span>
              </div>
              <h5 className="card-title">
                Amazon EC2 <FaServer />
              </h5>
              <p className="card-text">
                Scalable virtual servers in the cloud to run applications.
              </p>
              <ul className="list-unstyled">
                <li>✔ Elastic Compute</li>
                <li>✔ Auto Scaling</li>
                <li>✔ Flexible Instance Types</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Amazon Lambda Card */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h6>Free Tier</h6>
                <span>12 Months Free</span>
              </div>
              <h5 className="card-title">
                Amazon Lambda <FaServer />
              </h5>
              <p className="card-text">
                Run code without thinking about servers or clusters
              </p>
              <ul className="list-unstyled">
                <li>✔ Elastic Compute</li>
                <li>✔ Auto Scaling</li>
                <li>✔ Flexible Instance Types</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Amazon S3 Card */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h6>Free Tier</h6>
                <span>12 Months Free</span>
              </div>
              <h5 className="card-title">
                Amazon S3 <FaCloud />
              </h5>
              <p className="card-text">
                Object storage service for storing and retrieving any amount of
                data, at any time.
              </p>
              <ul className="list-unstyled">
                <li>✔ High Durability (99.999999999%)</li>
                <li>✔ Versioning Support</li>
                <li>✔ Lifecycle Policies</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Amazon EFS Card */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h6>Free Tier</h6>
                <span>12 Months Free</span>
              </div>
              <h5 className="card-title">
                Amazon EFS <FaCube />
              </h5>
              <p className="card-text">
                Simple, scalable, shared file storage for Amazon EC2 instances.
              </p>
              <ul className="list-unstyled">
                <li>✔ Scalable Storage</li>
                <li>✔ Highly Available</li>
                <li>✔ Easy Integration</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Elastic Load Balancing */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h6>Free Tier</h6>
                <span>12 Months Free</span>
              </div>
              <h5 className="card-title">
                Elastic Load Balancing <FaCube />
              </h5>
              <p className="card-text">
                Automatic distribution of incoming application traffic across
                multiple Amazon EC2 instances.
              </p>
              <ul className="list-unstyled">
                <li>✔ Scalable Storage</li>
                <li>✔ Highly Available</li>
                <li>✔ Easy Integration</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Amazon RDS Card */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h6>Free Tier</h6>
                <span>12 Months Free</span>
              </div>
              <h5 className="card-title">
                Amazon RDS <FaDatabase />
              </h5>
              <p className="card-text">
                Managed relational database service that supports multiple
                engines like MySQL, PostgreSQL, and SQL Server.
              </p>
              <ul className="list-unstyled">
                <li>✔ Automated Backups</li>
                <li>✔ Multi-AZ Deployments</li>
                <li>✔ Read Replicas</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Amazon DynamoDB Card */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h6>Free Tier</h6>
                <span>12 Months Free</span>
              </div>
              <h5 className="card-title">
                Amazon DynamoDB <FaDatabase />
              </h5>
              <p className="card-text">
                Serverless, NoSQL, fully managed database with single-digit
                millisecond performance at any scale.
              </p>
              <ul className="list-unstyled">
                <li>✔ Automated Backups</li>
                <li>✔ Multi-AZ Deployments</li>
                <li>✔ Read Replicas</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Amazon API Gateway Card */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h6>Free Tier</h6>
                <span>12 Months Free</span>
              </div>
              <h5 className="card-title">
                Amazon API Gateway <FaCode />
              </h5>
              <p className="card-text">
                Publish, maintain, monitor, and secure APIs at any scale.
              </p>
              <ul className="list-unstyled">
                <li>✔ Secure API Management</li>
                <li>✔ Multi-Region Support</li>
                <li>✔ Cost-Effective Scaling</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Amazon Pinpoint Card */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h6>Free Tier</h6>
                <span>12 Months Free</span>
              </div>
              <h5 className="card-title">
                Amazon Pinpoint <FaMobileAlt />
              </h5>
              <p className="card-text">
                Targeted push notifications for mobile apps.
              </p>
              <ul className="list-unstyled">
                <li>✔ Real-Time Messaging</li>
                <li>✔ Audience Segmentation</li>
                <li>✔ Campaign Analytics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* AWS Amplify Hosting Card */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h6>Free Tier</h6>
                <span>12 Months Free</span>
              </div>
              <h5 className="card-title">
                AWS Amplify Hosting <FaRocket />
              </h5>
              <p className="card-text">
                Fast, secure, and reliable hosting for modern web apps.
              </p>
              <ul className="list-unstyled">
                <li>✔ Continuous Deployment</li>
                <li>✔ Easy Integration</li>
                <li>✔ Scalable Infrastructure</li>
              </ul>
            </div>
          </div>
        </div>

        {/* AWS AppSync Card */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h6>Free Tier</h6>
                <span>12 Months Free</span>
              </div>
              <h5 className="card-title">
                AWS AppSync <FaChartBar />
              </h5>
              <p className="card-text">
                Connect apps to data with secure, serverless GraphQL APIs.
              </p>
              <ul className="list-unstyled">
                <li>✔ Real-Time Sync</li>
                <li>✔ Built-in Security</li>
                <li>✔ Serverless Architecture</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Amazon CloudWatch Card */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h6>Free Tier</h6>
                <span>Always Free</span>
              </div>
              <h5 className="card-title">
                Amazon CloudWatch <FaChartBar />
              </h5>
              <p className="card-text">
                Monitoring for AWS cloud resources and applications.
              </p>
              <ul className="list-unstyled">
                <li>✔ Real-Time Sync</li>
                <li>✔ Built-in Security</li>
                <li>✔ Serverless Architecture</li>
              </ul>
            </div>
          </div>
        </div>

        {/* AWS CloudFormation Card */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h6>Free Tier</h6>
                <span>Always Free</span>
              </div>
              <h5 className="card-title">
                AWS CloudFormation <FaChartBar />
              </h5>
              <p className="card-text">
                Model and provision all your cloud infrastructure resources with
                code to enable configuration compliance and faster
                troubleshooting.
              </p>
              <ul className="list-unstyled">
                <li>✔ Real-Time Sync</li>
                <li>✔ Built-in Security</li>
                <li>✔ Serverless Architecture</li>
              </ul>
            </div>
          </div>
        </div>

        {/* AWS CloudTrail Card */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h6>Free Tier</h6>
                <span>Always Free</span>
              </div>
              <h5 className="card-title">
                AWS CloudTrail <FaChartBar />
              </h5>
              <p className="card-text">
                Log, continuously monitor, and retain account activity related
                to actions across your AWS infrastructure.
              </p>
              <ul className="list-unstyled">
                <li>✔ Real-Time Sync</li>
                <li>✔ Built-in Security</li>
                <li>✔ Serverless Architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwsServices;
