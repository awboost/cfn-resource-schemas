import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::ResilienceHubV2::System`.
 * Creates a system that represents a logical grouping of services.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehubv2-system.html}
 */
export type ResilienceHubV2SystemProperties = {
  /**
   * The description of the system.
   * @maxLength `500`
   */
  Description?: string;
  /**
   * The KMS key ID for encrypting system data.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^((arn:aws(-[^:]+)?:kms:[a-zA-Z0-9-]*:[0-9]{12}:((key/[a-zA-Z0-9-]{36})|(alias/[a-zA-Z0-9-_/]+)))|([a-zA-Z0-9-]{36})|(alias/[a-zA-Z0-9-_/]+))$`
   */
  KmsKeyId?: string;
  /**
   * The name of the system.
   * @pattern `^[A-Za-z0-9][A-Za-z0-9_\-]{1,59}$`
   */
  Name: string;
  /**
   * Whether the system is enabled to be shared with other members of the Organization. Only applicable if the system owner is a management account or delegated admin.
   */
  SharingEnabled?: boolean;
  /**
   * Tags assigned to the system.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ResilienceHubV2::System`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehubv2-system.html#aws-resource-resiliencehubv2-system-return-values}
 */
export type ResilienceHubV2SystemAttributes = {
  /**
   * The timestamp when the system was created.
   */
  CreatedAt: string;
  /**
   * The ARN of the system.
   * @pattern `^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$`
   */
  SystemArn: string;
  /**
   * The system ID.
   * @pattern `^\S{1,255}$`
   */
  SystemId: string;
  /**
   * The timestamp when the system was last updated.
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::ResilienceHubV2::System.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehubv2-system-tag.html}
 */
export type Tag = {
  /**
   * The tag key.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The tag value.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::ResilienceHubV2::System`.
 * Creates a system that represents a logical grouping of services.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehubv2-system.html}
 */
export class ResilienceHubV2System extends $Resource<
  "AWS::ResilienceHubV2::System",
  ResilienceHubV2SystemProperties,
  ResilienceHubV2SystemAttributes
> {
  public static readonly Type = "AWS::ResilienceHubV2::System";
  constructor(
    logicalId: string,
    properties: ResilienceHubV2SystemProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ResilienceHubV2System.Type, properties, options);
  }
}
