import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::Config::ConformancePack`.
 * A conformance pack is a collection of AWS Config rules and remediation actions that can be easily deployed as a single entity in an account and a region or across an entire AWS Organization.
 * @see {@link https://docs.aws.amazon.com/config/latest/developerguide/conformance-packs.html}
 */
export type ConfigConformancePackProperties = {
  /**
   * A list of ConformancePackInputParameter objects.
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
   * @maxLength `63`
   */
  DeliveryS3Bucket?: string;
  /**
   * The prefix for delivery S3 bucket.
   * @maxLength `1024`
   */
  DeliveryS3KeyPrefix?: string;
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
 * Type definition for `AWS::Config::ConformancePack.ConformancePackInputParameter`.
 * Input parameters in the form of key-value pairs for the conformance pack.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-conformancepack-conformancepackinputparameter.html}
 */
export type ConformancePackInputParameter = {
  /**
   * Key part of key-value pair with value being parameter value
   * @maxLength `255`
   */
  ParameterName: string;
  /**
   * Value part of key-value pair with key being parameter Name
   * @maxLength `4096`
   */
  ParameterValue: string;
};
/**
 * Resource type definition for `AWS::Config::ConformancePack`.
 * A conformance pack is a collection of AWS Config rules and remediation actions that can be easily deployed as a single entity in an account and a region or across an entire AWS Organization.
 * @see {@link https://docs.aws.amazon.com/config/latest/developerguide/conformance-packs.html}
 */
export class ConfigConformancePack extends $Resource<
  "AWS::Config::ConformancePack",
  ConfigConformancePackProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Config::ConformancePack";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ConfigConformancePackProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ConfigConformancePack.Type,
      properties,
      ConfigConformancePack.AttributeNames,
      options,
    );
  }
}
