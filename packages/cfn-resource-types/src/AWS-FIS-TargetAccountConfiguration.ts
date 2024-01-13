import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::FIS::TargetAccountConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-targetaccountconfiguration.html}
 */
export type FISTargetAccountConfigurationProperties = {
  /**
   * The AWS account ID of the target account.
   * @maxLength `512`
   */
  AccountId: string;
  /**
   * The description of the target account.
   * @maxLength `512`
   */
  Description?: string;
  /**
   * The ID of the experiment template.
   */
  ExperimentTemplateId: string;
  /**
   * The Amazon Resource Name (ARN) of an IAM role for the target account.
   * @maxLength `1224`
   */
  RoleArn: string;
};
/**
 * Resource schema for AWS::FIS::TargetAccountConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-targetaccountconfiguration.html}
 */
export class FISTargetAccountConfiguration extends $Resource<
  "AWS::FIS::TargetAccountConfiguration",
  FISTargetAccountConfigurationProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::FIS::TargetAccountConfiguration";
  constructor(
    logicalId: string,
    properties: FISTargetAccountConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, FISTargetAccountConfiguration.Type, properties, options);
  }
}
