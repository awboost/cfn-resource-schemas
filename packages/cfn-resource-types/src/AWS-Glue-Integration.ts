import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Glue::Integration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-integration.html}
 */
export type GlueIntegrationProperties = {
  /**
   * An optional set of non-secret key value pairs that contains additional contextual information about the data.
   */
  AdditionalEncryptionContext?: IntegrationAdditionalEncryptionContextMap;
  /**
   * @maxLength `2048`
   */
  DataFilter?: string;
  /**
   * @maxLength `1000`
   */
  Description?: string;
  /**
   * The configuration settings for the integration.
   */
  IntegrationConfig?: IntegrationConfig;
  /**
   * The name of the integration.
   * @minLength `1`
   * @maxLength `128`
   */
  IntegrationName: string;
  /**
   * An KMS key identifier for the key to use to encrypt the integration. If you don't specify an encryption key, the default AWS owned KMS key is used.
   */
  KmsKeyId?: string;
  /**
   * The Amazon Resource Name (ARN) of the database to use as the source for replication
   * @maxLength `512`
   * @pattern `arn:aws:.*:.*:[0-9]+:.*`
   */
  SourceArn: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The Amazon Resource Name (ARN) of the Glue data warehouse to use as the target for replication
   * @maxLength `512`
   * @pattern `arn:aws:.*:.*:[0-9]+:.*`
   */
  TargetArn: string;
};
/**
 * Attribute type definition for `AWS::Glue::Integration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-integration.html#aws-resource-glue-integration-return-values}
 */
export type GlueIntegrationAttributes = {
  /**
   * The time (UTC) when the integration was created.
   */
  CreateTime: string;
  /**
   * The Amazon Resource Name (ARN) of the integration.
   * @pattern `arn:aws:.*:.*:[0-9]+:.*`
   */
  IntegrationArn: string;
  /**
   * The status of the integration.
   */
  Status: string;
};
/**
 * Type definition for `AWS::Glue::Integration.IntegrationAdditionalEncryptionContextMap`.
 * An optional set of non-secret key value pairs that contains additional contextual information about the data.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-integration-integrationadditionalencryptioncontextmap.html}
 */
export type IntegrationAdditionalEncryptionContextMap = Record<string, string>;
/**
 * Type definition for `AWS::Glue::Integration.IntegrationConfig`.
 * The configuration settings for the integration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-integration-integrationconfig.html}
 */
export type IntegrationConfig = {
  /**
   * Enables continuous synchronization for on-demand data extractions.
   */
  ContinuousSync?: boolean;
  /**
   * Specifies the frequency at which CDC (Change Data Capture) pulls or incremental loads should occur.
   * @maxLength `128`
   */
  RefreshInterval?: string;
  /**
   * A collection of key-value pairs that specify additional properties for the integration source.
   */
  SourceProperties?: SourceProperties;
};
/**
 * Type definition for `AWS::Glue::Integration.SourceProperties`.
 * A collection of key-value pairs that specify additional properties for the integration source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-integration-sourceproperties.html}
 */
export type SourceProperties = Record<string, string>;
/**
 * Type definition for `AWS::Glue::Integration.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-integration-tag.html}
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
 * Resource Type definition for AWS::Glue::Integration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-integration.html}
 */
export class GlueIntegration extends $Resource<
  "AWS::Glue::Integration",
  GlueIntegrationProperties,
  GlueIntegrationAttributes
> {
  public static readonly Type = "AWS::Glue::Integration";
  constructor(
    logicalId: string,
    properties: GlueIntegrationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GlueIntegration.Type, properties, options);
  }
}
