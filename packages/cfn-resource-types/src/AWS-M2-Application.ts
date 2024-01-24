import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::M2::Application`.
 * Represents an application that runs on an AWS Mainframe Modernization Environment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-application.html}
 */
export type M2ApplicationProperties = {
  Definition: Definition;
  /**
   * @minLength `0`
   * @maxLength `500`
   */
  Description?: string;
  EngineType: EngineType;
  /**
   * The ID or the Amazon Resource Name (ARN) of the customer managed KMS Key used for encrypting application-related resources.
   * @maxLength `2048`
   */
  KmsKeyId?: string;
  /**
   * @pattern `^[A-Za-z0-9][A-Za-z0-9_\-]{1,59}$`
   */
  Name: string;
  /**
   * @pattern `^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]|):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+=,@.-]{0,1023}$`
   */
  RoleArn?: string;
  Tags?: TagMap;
};
/**
 * Attribute type definition for `AWS::M2::Application`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-application.html#aws-resource-m2-application-return-values}
 */
export type M2ApplicationAttributes = {
  /**
   * @pattern `^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+=,@.-]{0,1023}$`
   */
  ApplicationArn: string;
  /**
   * @pattern `^\S{1,80}$`
   */
  ApplicationId: string;
};
/**
 * Type definition for `AWS::M2::Application.Definition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-m2-application-definition.html}
 */
export type Definition =
  | {
      /**
       * @pattern `^\S{1,2000}$`
       */
      S3Location: string;
    }
  | {
      /**
       * @minLength `1`
       * @maxLength `65000`
       */
      Content: string;
    };
/**
 * Type definition for `AWS::M2::Application.EngineType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-m2-application-enginetype.html}
 */
export type EngineType = "microfocus" | "bluage";
/**
 * Type definition for `AWS::M2::Application.TagMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-m2-application-tagmap.html}
 */
export type TagMap = Record<string, string>;
/**
 * Resource type definition for `AWS::M2::Application`.
 * Represents an application that runs on an AWS Mainframe Modernization Environment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-application.html}
 */
export class M2Application extends $Resource<
  "AWS::M2::Application",
  M2ApplicationProperties,
  M2ApplicationAttributes
> {
  public static readonly Type = "AWS::M2::Application";
  constructor(
    logicalId: string,
    properties: M2ApplicationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, M2Application.Type, properties, options);
  }
}
