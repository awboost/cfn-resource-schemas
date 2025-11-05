import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Glue::IntegrationResourceProperty
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-integrationresourceproperty.html}
 */
export type GlueIntegrationResourcePropertyProperties = {
  /**
   * The connection ARN of the source, or the database ARN of the target.
   * @pattern `arn:aws:.*:.*:[0-9]+:.*`
   */
  ResourceArn: string;
  /**
   * The resource properties associated with the integration source.
   */
  SourceProcessingProperties?: {
    /**
     * The IAM role to access the Glue connection.
     * @maxLength `128`
     */
    RoleArn: string;
  };
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The resource properties associated with the integration target.
   */
  TargetProcessingProperties?: {
    /**
     * The Glue network connection to configure the Glue job running in the customer VPC.
     * @maxLength `128`
     */
    ConnectionName?: string;
    /**
     * The ARN of an Eventbridge event bus to receive the integration status notification.
     * @maxLength `128`
     */
    EventBusArn?: string;
    /**
     * The ARN of the KMS key used for encryption.
     * @maxLength `128`
     * @pattern `arn:aws:kms:.*:[0-9]+:.*`
     */
    KmsArn?: string;
    /**
     * The IAM role to access the Glue database.
     * @maxLength `128`
     * @pattern `arn:aws:iam:.*:[0-9]+:.*`
     */
    RoleArn: string;
  };
};
/**
 * Attribute type definition for `AWS::Glue::IntegrationResourceProperty`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-integrationresourceproperty.html#aws-resource-glue-integrationresourceproperty-return-values}
 */
export type GlueIntegrationResourcePropertyAttributes = {
  /**
   * The integration resource property ARN.
   * @pattern `arn:aws:glue:.*:[0-9]+:.*`
   */
  ResourcePropertyArn: string;
};
/**
 * Type definition for `AWS::Glue::IntegrationResourceProperty.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-integrationresourceproperty-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Resource Type definition for AWS::Glue::IntegrationResourceProperty
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-integrationresourceproperty.html}
 */
export class GlueIntegrationResourceProperty extends $Resource<
  "AWS::Glue::IntegrationResourceProperty",
  GlueIntegrationResourcePropertyProperties,
  GlueIntegrationResourcePropertyAttributes
> {
  public static readonly Type = "AWS::Glue::IntegrationResourceProperty";
  constructor(
    logicalId: string,
    properties: GlueIntegrationResourcePropertyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GlueIntegrationResourceProperty.Type, properties, options);
  }
}
