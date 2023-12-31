import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Evidently::Project
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-project.html}
 */
export type EvidentlyProjectProperties = {
  AppConfigResource?: AppConfigResourceObject;
  /**
   * Destinations for data.
   */
  DataDelivery?: DataDeliveryObject;
  /**
   * @maxLength `160`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `127`
   * @pattern `[-a-zA-Z0-9._]*`
   */
  Name: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Evidently::Project`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-project.html#aws-resource-evidently-project-return-values}
 */
export type EvidentlyProjectAttributes = {
  /**
   * @maxLength `2048`
   * @pattern `arn:[^:]*:[^:]*:[^:]*:[^:]*:project/[-a-zA-Z0-9._]*`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::Evidently::Project.AppConfigResourceObject`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-project-appconfigresourceobject.html}
 */
export type AppConfigResourceObject = {
  /**
   * @pattern `[a-z0-9]{4,7}`
   */
  ApplicationId: string;
  /**
   * @pattern `[a-z0-9]{4,7}`
   */
  EnvironmentId: string;
};
/**
 * Type definition for `AWS::Evidently::Project.DataDeliveryObject`.
 * Destinations for data.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-project-datadeliveryobject.html}
 */
export type DataDeliveryObject = {
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[-a-zA-Z0-9._/]+$`
   */
  LogGroup?: string;
  S3?: S3Destination;
};
/**
 * Type definition for `AWS::Evidently::Project.S3Destination`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-project-s3destination.html}
 */
export type S3Destination = {
  /**
   * @minLength `3`
   * @maxLength `63`
   * @pattern `^[a-z0-9][-a-z0-9]*[a-z0-9]$`
   */
  BucketName: string;
  /**
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `^[-a-zA-Z0-9!_.*'()/]*$`
   */
  Prefix?: string;
};
/**
 * Type definition for `AWS::Evidently::Project.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-project-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::Evidently::Project
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-project.html}
 */
export class EvidentlyProject extends $Resource<
  "AWS::Evidently::Project",
  EvidentlyProjectProperties,
  EvidentlyProjectAttributes
> {
  public static readonly Type = "AWS::Evidently::Project";
  public static readonly AttributeNames = ["Arn" as const];
  constructor(
    logicalId: string,
    properties: EvidentlyProjectProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EvidentlyProject.Type,
      properties,
      EvidentlyProject.AttributeNames,
      options,
    );
  }
}
