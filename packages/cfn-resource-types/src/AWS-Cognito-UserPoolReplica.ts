import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Cognito::UserPoolReplica
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolreplica.html}
 */
export type CognitoUserPoolReplicaProperties = {
  /**
   * @minLength `5`
   * @maxLength `32`
   */
  RegionName: string;
  UserPoolId: string;
  UserPoolTagsAtCreate?: Record<string, string>;
};
/**
 * Resource Type definition for AWS::Cognito::UserPoolReplica
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolreplica.html}
 */
export class CognitoUserPoolReplica extends $Resource<
  "AWS::Cognito::UserPoolReplica",
  CognitoUserPoolReplicaProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Cognito::UserPoolReplica";
  constructor(
    logicalId: string,
    properties: CognitoUserPoolReplicaProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CognitoUserPoolReplica.Type, properties, options);
  }
}
