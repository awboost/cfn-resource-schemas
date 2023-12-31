import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SSM::Parameter
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-parameter.html}
 */
export type SSMParameterProperties = {
  /**
   * The regular expression used to validate the parameter value.
   */
  AllowedPattern?: string;
  /**
   * The corresponding DataType of the parameter.
   */
  DataType?: "text" | "aws:ec2:image";
  /**
   * The information about the parameter.
   */
  Description?: string;
  /**
   * The name of the parameter.
   */
  Name?: string;
  /**
   * The policies attached to the parameter.
   */
  Policies?: string;
  /**
   * A key-value pair to associate with a resource.
   */
  Tags?: Record<string, string>;
  /**
   * The corresponding tier of the parameter.
   */
  Tier?: "Standard" | "Advanced" | "Intelligent-Tiering";
  /**
   * The type of the parameter.
   */
  Type: "String" | "StringList" | "SecureString";
  /**
   * The value associated with the parameter.
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::SSM::Parameter
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-parameter.html}
 */
export class SSMParameter extends $Resource<
  "AWS::SSM::Parameter",
  SSMParameterProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::SSM::Parameter";
  constructor(
    logicalId: string,
    properties: SSMParameterProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SSMParameter.Type, properties, options);
  }
}
