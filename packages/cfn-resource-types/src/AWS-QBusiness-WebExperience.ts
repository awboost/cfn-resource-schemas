import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::QBusiness::WebExperience Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html}
 */
export type QBusinessWebExperienceProperties = {
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9-]{35}$`
   */
  ApplicationId: string;
  /**
   * @minLength `0`
   * @maxLength `1284`
   * @pattern `^arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}$`
   */
  RoleArn?: string;
  SamplePromptsControlMode?: WebExperienceSamplePromptsControlMode;
  /**
   * @minLength `0`
   * @maxLength `500`
   * @pattern `^[\s\S]*$`
   */
  Subtitle?: string;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
  /**
   * @minLength `0`
   * @maxLength `500`
   * @pattern `^[\s\S]*$`
   */
  Title?: string;
  /**
   * @minLength `0`
   * @maxLength `300`
   */
  WelcomeMessage?: string;
};
/**
 * Attribute type definition for `AWS::QBusiness::WebExperience`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html#aws-resource-qbusiness-webexperience-return-values}
 */
export type QBusinessWebExperienceAttributes = {
  CreatedAt: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^(https?|ftp|file)://([^\s]*)$`
   */
  DefaultEndpoint: string;
  Status: WebExperienceStatus;
  UpdatedAt: string;
  /**
   * @minLength `0`
   * @maxLength `1284`
   * @pattern `^arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}$`
   */
  WebExperienceArn: string;
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9-]*$`
   */
  WebExperienceId: string;
};
/**
 * Type definition for `AWS::QBusiness::WebExperience.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-webexperience-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::QBusiness::WebExperience.WebExperienceSamplePromptsControlMode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-webexperience-webexperiencesamplepromptscontrolmode.html}
 */
export type WebExperienceSamplePromptsControlMode = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::QBusiness::WebExperience.WebExperienceStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-webexperience-webexperiencestatus.html}
 */
export type WebExperienceStatus =
  | "CREATING"
  | "ACTIVE"
  | "DELETING"
  | "FAILED"
  | "PENDING_AUTH_CONFIG";
/**
 * Definition of AWS::QBusiness::WebExperience Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html}
 */
export class QBusinessWebExperience extends $Resource<
  "AWS::QBusiness::WebExperience",
  QBusinessWebExperienceProperties,
  QBusinessWebExperienceAttributes
> {
  public static readonly Type = "AWS::QBusiness::WebExperience";
  constructor(
    logicalId: string,
    properties: QBusinessWebExperienceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, QBusinessWebExperience.Type, properties, options);
  }
}
