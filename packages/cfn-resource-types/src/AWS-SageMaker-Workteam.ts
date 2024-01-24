import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SageMaker::Workteam
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-workteam.html}
 */
export type SageMakerWorkteamProperties = {
  Description?: string;
  MemberDefinitions?: MemberDefinition[];
  NotificationConfiguration?: NotificationConfiguration;
  Tags?: Tag[];
  WorkforceName?: string;
  WorkteamName?: string;
};
/**
 * Attribute type definition for `AWS::SageMaker::Workteam`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-workteam.html#aws-resource-sagemaker-workteam-return-values}
 */
export type SageMakerWorkteamAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::SageMaker::Workteam.CognitoMemberDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-workteam-cognitomemberdefinition.html}
 */
export type CognitoMemberDefinition = {
  CognitoClientId: string;
  CognitoUserGroup: string;
  CognitoUserPool: string;
};
/**
 * Type definition for `AWS::SageMaker::Workteam.MemberDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-workteam-memberdefinition.html}
 */
export type MemberDefinition = {
  CognitoMemberDefinition?: CognitoMemberDefinition;
  OidcMemberDefinition?: OidcMemberDefinition;
};
/**
 * Type definition for `AWS::SageMaker::Workteam.NotificationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-workteam-notificationconfiguration.html}
 */
export type NotificationConfiguration = {
  NotificationTopicArn: string;
};
/**
 * Type definition for `AWS::SageMaker::Workteam.OidcMemberDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-workteam-oidcmemberdefinition.html}
 */
export type OidcMemberDefinition = {
  OidcGroups: string[];
};
/**
 * Type definition for `AWS::SageMaker::Workteam.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-workteam-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::SageMaker::Workteam
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-workteam.html}
 */
export class SageMakerWorkteam extends $Resource<
  "AWS::SageMaker::Workteam",
  SageMakerWorkteamProperties,
  SageMakerWorkteamAttributes
> {
  public static readonly Type = "AWS::SageMaker::Workteam";
  constructor(
    logicalId: string,
    properties: SageMakerWorkteamProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SageMakerWorkteam.Type, properties, options);
  }
}
