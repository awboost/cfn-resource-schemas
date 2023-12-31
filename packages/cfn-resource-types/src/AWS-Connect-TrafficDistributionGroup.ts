import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Connect::TrafficDistributionGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-trafficdistributiongroup.html}
 */
export type ConnectTrafficDistributionGroupProperties = {
  /**
   * A description for the traffic distribution group.
   * @minLength `1`
   * @maxLength `250`
   * @pattern `(^[\S].*[\S]$)|(^[\S]$)`
   */
  Description?: string;
  /**
   * The identifier of the Amazon Connect instance that has been replicated.
   * @minLength `1`
   * @maxLength `250`
   * @pattern `^arn:(aws|aws-us-gov):connect:[a-z]{2}-[a-z]+-[0-9]{1}:[0-9]{1,20}:instance/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
   */
  InstanceArn: string;
  /**
   * The name for the traffic distribution group.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `(^[\S].*[\S]$)|(^[\S]$)`
   */
  Name: string;
  /**
   * One or more tags.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Connect::TrafficDistributionGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-trafficdistributiongroup.html#aws-resource-connect-trafficdistributiongroup-return-values}
 */
export type ConnectTrafficDistributionGroupAttributes = {
  /**
   * If this is the default traffic distribution group.
   */
  IsDefault: boolean;
  /**
   * The status of the traffic distribution group.
   */
  Status:
    | "CREATION_IN_PROGRESS"
    | "ACTIVE"
    | "CREATION_FAILED"
    | "PENDING_DELETION"
    | "DELETION_FAILED"
    | "UPDATE_IN_PROGRESS";
  /**
   * The identifier of the traffic distribution group.
   * @pattern `^arn:(aws|aws-us-gov):connect:[a-z]{2}-[a-z]+-[0-9]{1}:[0-9]{1,20}:traffic-distribution-group/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
   */
  TrafficDistributionGroupArn: string;
};
/**
 * Type definition for `AWS::Connect::TrafficDistributionGroup.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-trafficdistributiongroup-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::Connect::TrafficDistributionGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-trafficdistributiongroup.html}
 */
export class ConnectTrafficDistributionGroup extends $Resource<
  "AWS::Connect::TrafficDistributionGroup",
  ConnectTrafficDistributionGroupProperties,
  ConnectTrafficDistributionGroupAttributes
> {
  public static readonly Type = "AWS::Connect::TrafficDistributionGroup";
  public static readonly AttributeNames = [
    "IsDefault" as const,
    "Status" as const,
    "TrafficDistributionGroupArn" as const,
  ];
  constructor(
    logicalId: string,
    properties: ConnectTrafficDistributionGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ConnectTrafficDistributionGroup.Type,
      properties,
      ConnectTrafficDistributionGroup.AttributeNames,
      options,
    );
  }
}
