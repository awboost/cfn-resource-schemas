import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Config::OrganizationConformancePack.
 * @see {@link https://docs.aws.amazon.com/config/latest/developerguide/conformance-pack-organization-apis.html}
 */
export type ConfigOrganizationConformancePackProperties = {
  /**
   * A list of ConformancePackInputParameter objects.
   * @minLength `0`
   * @maxLength `60`
   */
  ConformancePackInputParameters?: ConformancePackInputParameter[];
  /**
   * AWS Config stores intermediate files while processing conformance pack template.
   * @minLength `0`
   * @maxLength `63`
   */
  DeliveryS3Bucket?: string;
  /**
   * The prefix for the delivery S3 bucket.
   * @minLength `0`
   * @maxLength `1024`
   */
  DeliveryS3KeyPrefix?: string;
  /**
   * A list of AWS accounts to be excluded from an organization conformance pack while deploying a conformance pack.
   * @minLength `0`
   * @maxLength `1000`
   */
  ExcludedAccounts?: string[];
  /**
   * The name of the organization conformance pack.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[a-zA-Z][-a-zA-Z0-9]*`
   */
  OrganizationConformancePackName: string;
  /**
   * A string containing full conformance pack template body.
   * @minLength `1`
   * @maxLength `51200`
   */
  TemplateBody?: string;
  /**
   * Location of file containing the template body.
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `s3://.*`
   */
  TemplateS3Uri?: string;
};
/**
 * Type definition for `AWS::Config::OrganizationConformancePack.ConformancePackInputParameter`.
 * Input parameters in the form of key-value pairs for the conformance pack.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconformancepack-conformancepackinputparameter.html}
 */
export type ConformancePackInputParameter = {
  /**
   * @minLength `0`
   * @maxLength `255`
   */
  ParameterName: string;
  /**
   * @minLength `0`
   * @maxLength `4096`
   */
  ParameterValue: string;
};
/**
 * Resource Type definition for AWS::Config::OrganizationConformancePack.
 * @see {@link https://docs.aws.amazon.com/config/latest/developerguide/conformance-pack-organization-apis.html}
 */
export class ConfigOrganizationConformancePack extends $Resource<
  "AWS::Config::OrganizationConformancePack",
  ConfigOrganizationConformancePackProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Config::OrganizationConformancePack";
  constructor(
    logicalId: string,
    properties: ConfigOrganizationConformancePackProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ConfigOrganizationConformancePack.Type,
      properties,
      options,
    );
  }
}
