import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Config::ConformancePack`.
 * A conformance pack is a collection of AWS Config rules and remediation actions that can be easily deployed as a single entity in an account and a region or across an entire AWS Organization.
 * @see {@link https://docs.aws.amazon.com/config/latest/developerguide/conformance-packs.html}
 */
export type ConfigConformancePackProperties = {
  /**
   * A list of ConformancePackInputParameter objects.
   * @minLength `0`
   * @maxLength `60`
   */
  ConformancePackInputParameters?: ConformancePackInputParameter[];
  /**
   * Name of the conformance pack which will be assigned as the unique identifier.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `[a-zA-Z][-a-zA-Z0-9]*`
   */
  ConformancePackName: string;
  /**
   * AWS Config stores intermediate files while processing conformance pack template.
   * @minLength `0`
   * @maxLength `63`
   */
  DeliveryS3Bucket?: string;
  /**
   * The prefix for delivery S3 bucket.
   * @minLength `0`
   * @maxLength `1024`
   */
  DeliveryS3KeyPrefix?: string;
  /**
   * The tags for the conformance pack.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * A string containing full conformance pack template body. You can only specify one of the template body or template S3Uri fields.
   * @minLength `1`
   * @maxLength `51200`
   */
  TemplateBody?: string;
  /**
   * Location of file containing the template body which points to the conformance pack template that is located in an Amazon S3 bucket. You can only specify one of the template body or template S3Uri fields.
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `s3://.*`
   */
  TemplateS3Uri?: string;
  /**
   * The TemplateSSMDocumentDetails object contains the name of the SSM document and the version of the SSM document.
   */
  TemplateSSMDocumentDetails?: {
    /**
     * @minLength `3`
     * @maxLength `128`
     */
    DocumentName?: string;
    /**
     * @minLength `1`
     * @maxLength `128`
     */
    DocumentVersion?: string;
  };
};
/**
 * Attribute type definition for `AWS::Config::ConformancePack`.
 * @see {@link https://docs.aws.amazon.com/config/latest/developerguide/conformance-packs.html}
 */
export type ConfigConformancePackAttributes = {
  /**
   * Amazon Resource Name (ARN) of the conformance pack.
   */
  ConformancePackArn: string;
};
/**
 * Type definition for `AWS::Config::ConformancePack.ConformancePackInputParameter`.
 * Input parameters in the form of key-value pairs for the conformance pack.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-conformancepack-conformancepackinputparameter.html}
 */
export type ConformancePackInputParameter = {
  /**
   * Key part of key-value pair with value being parameter value
   * @minLength `0`
   * @maxLength `255`
   */
  ParameterName: string;
  /**
   * Value part of key-value pair with key being parameter Name
   * @minLength `0`
   * @maxLength `4096`
   */
  ParameterValue: string;
};
/**
 * Type definition for `AWS::Config::ConformancePack.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-conformancepack-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::Config::ConformancePack`.
 * A conformance pack is a collection of AWS Config rules and remediation actions that can be easily deployed as a single entity in an account and a region or across an entire AWS Organization.
 * @see {@link https://docs.aws.amazon.com/config/latest/developerguide/conformance-packs.html}
 */
export class ConfigConformancePack extends $Resource<
  "AWS::Config::ConformancePack",
  ConfigConformancePackProperties,
  ConfigConformancePackAttributes
> {
  public static readonly Type = "AWS::Config::ConformancePack";
  constructor(
    logicalId: string,
    properties: ConfigConformancePackProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConfigConformancePack.Type, properties, options);
  }
}
