import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::SqlHaStandbyDetectedInstance
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-sqlhastandbydetectedinstance.html}
 */
export type EC2SqlHaStandbyDetectedInstanceProperties = {
  /**
   * The ID of the EC2 instance to enable for SQL Server high availability standby detection.
   * @pattern `^i-[0-9a-f]{8,17}$`
   */
  InstanceId: string;
  /**
   * The ARN of the AWS Secrets Manager secret containing SQL Server access credentials to the EC2 instance. If not specified, AWS Systems Manager agent will use default local user credentials.
   * @pattern `^(?=.{20,2048}$)arn:aws[a-z-]*:secretsmanager:[a-z0-9-]+:\d{12}:secret:[a-zA-Z0-9/_+=.@-]+$`
   */
  SqlServerCredentials?: string;
};
/**
 * Attribute type definition for `AWS::EC2::SqlHaStandbyDetectedInstance`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-sqlhastandbydetectedinstance.html#aws-resource-ec2-sqlhastandbydetectedinstance-return-values}
 */
export type EC2SqlHaStandbyDetectedInstanceAttributes = {
  /**
   * The SQL Server high availability status of the EC2 instance.
   */
  HaStatus: HaStatus;
  /**
   * The timestamp when the EC2 instance's SQL Server high availability status was last updated.
   */
  LastUpdatedTime: string;
  /**
   * The SQL Server license type of the EC2 instance.
   */
  SqlServerLicenseUsage: SqlServerLicenseUsage;
};
/**
 * Type definition for `AWS::EC2::SqlHaStandbyDetectedInstance.HaStatus`.
 * The SQL Server high availability status of the EC2 instance.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-sqlhastandbydetectedinstance-hastatus.html}
 */
export type HaStatus = "processing" | "active" | "standby" | "invalid";
/**
 * Type definition for `AWS::EC2::SqlHaStandbyDetectedInstance.SqlServerLicenseUsage`.
 * The SQL Server license type of the EC2 instance.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-sqlhastandbydetectedinstance-sqlserverlicenseusage.html}
 */
export type SqlServerLicenseUsage = "full" | "waived";
/**
 * Resource Type definition for AWS::EC2::SqlHaStandbyDetectedInstance
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-sqlhastandbydetectedinstance.html}
 */
export class EC2SqlHaStandbyDetectedInstance extends $Resource<
  "AWS::EC2::SqlHaStandbyDetectedInstance",
  EC2SqlHaStandbyDetectedInstanceProperties,
  EC2SqlHaStandbyDetectedInstanceAttributes
> {
  public static readonly Type = "AWS::EC2::SqlHaStandbyDetectedInstance";
  constructor(
    logicalId: string,
    properties: EC2SqlHaStandbyDetectedInstanceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2SqlHaStandbyDetectedInstance.Type, properties, options);
  }
}
