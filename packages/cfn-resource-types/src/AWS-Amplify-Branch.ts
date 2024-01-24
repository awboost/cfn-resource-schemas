import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::Amplify::Branch resource creates a new branch within an app.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-branch.html}
 */
export type AmplifyBranchProperties = {
  /**
   * @minLength `1`
   * @maxLength `20`
   * @pattern `d[a-z0-9]+`
   */
  AppId: string;
  Backend?: Backend;
  BasicAuthConfig?: BasicAuthConfig;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `(?s).+`
   */
  BranchName: string;
  /**
   * @minLength `1`
   * @maxLength `25000`
   * @pattern `(?s).+`
   */
  BuildSpec?: string;
  /**
   * @maxLength `1000`
   * @pattern `(?s).*`
   */
  Description?: string;
  EnableAutoBuild?: boolean;
  EnablePerformanceMode?: boolean;
  EnablePullRequestPreview?: boolean;
  EnvironmentVariables?: EnvironmentVariable[];
  /**
   * @maxLength `255`
   * @pattern `(?s).*`
   */
  Framework?: string;
  /**
   * @maxLength `20`
   * @pattern `(?s).*`
   */
  PullRequestEnvironmentName?: string;
  Stage?:
    | "EXPERIMENTAL"
    | "BETA"
    | "PULL_REQUEST"
    | "PRODUCTION"
    | "DEVELOPMENT";
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Amplify::Branch`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-branch.html#aws-resource-amplify-branch-return-values}
 */
export type AmplifyBranchAttributes = {
  /**
   * @maxLength `1000`
   * @pattern `(?s).*`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::Amplify::Branch.Backend`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-branch-backend.html}
 */
export type Backend = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   */
  StackArn?: string;
};
/**
 * Type definition for `AWS::Amplify::Branch.BasicAuthConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-branch-basicauthconfig.html}
 */
export type BasicAuthConfig = {
  EnableBasicAuth?: boolean;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  Password: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  Username: string;
};
/**
 * Type definition for `AWS::Amplify::Branch.EnvironmentVariable`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-branch-environmentvariable.html}
 */
export type EnvironmentVariable = {
  /**
   * @maxLength `255`
   * @pattern `(?s).*`
   */
  Name: string;
  /**
   * @maxLength `5500`
   * @pattern `(?s).*`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Amplify::Branch.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-branch-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Value: string;
};
/**
 * The AWS::Amplify::Branch resource creates a new branch within an app.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-branch.html}
 */
export class AmplifyBranch extends $Resource<
  "AWS::Amplify::Branch",
  AmplifyBranchProperties,
  AmplifyBranchAttributes
> {
  public static readonly Type = "AWS::Amplify::Branch";
  constructor(
    logicalId: string,
    properties: AmplifyBranchProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AmplifyBranch.Type, properties, options);
  }
}
