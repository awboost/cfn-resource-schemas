import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: CognitoUserPoolGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CognitoUserPoolGroup.Type,
      properties,
      CognitoUserPoolGroup.AttributeNames,
      options,
    );
  }
}
