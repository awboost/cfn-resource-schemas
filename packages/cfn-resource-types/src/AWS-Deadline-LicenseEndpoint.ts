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
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
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
 * Type definition for `AWS::Deadline::LicenseEndpoint.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-licenseendpoint-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `127`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `255`
   */
  Value: string;
};
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
