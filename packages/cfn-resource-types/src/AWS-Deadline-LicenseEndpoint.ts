import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Deadline::LicenseEndpoint Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-licenseendpoint.html}
 */
export type DeadlineLicenseEndpointProperties = {
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  SecurityGroupIds: string[];
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  SubnetIds: string[];
  /**
   * @minLength `1`
   * @maxLength `32`
   */
  VpcId: string;
};
/**
 * Attribute type definition for `AWS::Deadline::LicenseEndpoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-licenseendpoint.html#aws-resource-deadline-licenseendpoint-return-values}
 */
export type DeadlineLicenseEndpointAttributes = {
  /**
   * @pattern `^arn:(aws[a-zA-Z-]*):deadline:[a-z0-9-]+:[0-9]{12}:license-endpoint/le-[0-9a-z]{32}`
   */
  Arn: string;
  DnsName: string;
  /**
   * @pattern `^le-[0-9a-f]{32}$`
   */
  LicenseEndpointId: string;
  Status: LicenseEndpointStatus;
  /**
   * @minLength `0`
   * @maxLength `1024`
   */
  StatusMessage: string;
};
/**
 * Type definition for `AWS::Deadline::LicenseEndpoint.LicenseEndpointStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-licenseendpoint-licenseendpointstatus.html}
 */
export type LicenseEndpointStatus =
  | "CREATE_IN_PROGRESS"
  | "DELETE_IN_PROGRESS"
  | "READY"
  | "NOT_READY";
/**
 * Definition of AWS::Deadline::LicenseEndpoint Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-licenseendpoint.html}
 */
export class DeadlineLicenseEndpoint extends $Resource<
  "AWS::Deadline::LicenseEndpoint",
  DeadlineLicenseEndpointProperties,
  DeadlineLicenseEndpointAttributes
> {
  public static readonly Type = "AWS::Deadline::LicenseEndpoint";
  constructor(
    logicalId: string,
    properties: DeadlineLicenseEndpointProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DeadlineLicenseEndpoint.Type, properties, options);
  }
}
