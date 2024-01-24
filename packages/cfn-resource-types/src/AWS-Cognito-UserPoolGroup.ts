import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Cognito::UserPoolGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolgroup.html}
 */
export type CognitoUserPoolGroupProperties = {
  /**
   * @maxLength `2048`
   */
  Description?: string;
  GroupName?: string;
  /**
   * @min `0`
   */
  Precedence?: number;
  RoleArn?: string;
  UserPoolId: string;
};
/**
 * Resource Type definition for AWS::Cognito::UserPoolGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolgroup.html}
 */
export class CognitoUserPoolGroup extends $Resource<
  "AWS::Cognito::UserPoolGroup",
  CognitoUserPoolGroupProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Cognito::UserPoolGroup";
  constructor(
    logicalId: string,
    properties: CognitoUserPoolGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CognitoUserPoolGroup.Type, properties, options);
  }
}
