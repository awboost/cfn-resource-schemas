import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::CodeDeploy::Application resource creates an AWS CodeDeploy application
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-application.html}
 */
export type CodeDeployApplicationProperties = {
  /**
   * A name for the application. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the application name.
   */
  ApplicationName?: string;
  /**
   * The compute platform that CodeDeploy deploys the application to.
   */
  ComputePlatform?: string;
  /**
   * The metadata that you apply to CodeDeploy applications to help you organize and categorize them. Each tag consists of a key and an optional value, both of which you define.
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::CodeDeploy::Application.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-application-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * The AWS::CodeDeploy::Application resource creates an AWS CodeDeploy application
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-application.html}
 */
export class CodeDeployApplication extends $Resource<
  "AWS::CodeDeploy::Application",
  CodeDeployApplicationProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::CodeDeploy::Application";
  constructor(
    logicalId: string,
    properties: CodeDeployApplicationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CodeDeployApplication.Type, properties, options);
  }
}
