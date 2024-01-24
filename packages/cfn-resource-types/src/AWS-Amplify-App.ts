import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::Amplify::App resource creates Apps in the Amplify Console. An App is a collection of branches.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html}
 */
export type AmplifyAppProperties = {
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  AccessToken?: string;
  AutoBranchCreationConfig?: AutoBranchCreationConfig;
  BasicAuthConfig?: BasicAuthConfig;
  /**
   * @minLength `1`
   * @maxLength `25000`
   * @pattern `(?s).+`
   */
  BuildSpec?: string;
  /**
   * @minLength `0`
   * @maxLength `25000`
   * @pattern `(?s).*`
   */
  CustomHeaders?: string;
  CustomRules?: CustomRule[];
  /**
   * @maxLength `1000`
   * @pattern `(?s).*`
   */
  Description?: string;
  EnableBranchAutoDeletion?: boolean;
  EnvironmentVariables?: EnvironmentVariable[];
  /**
   * @minLength `1`
   * @maxLength `1000`
   * @pattern `(?s).*`
   */
  IAMServiceRole?: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `(?s).+`
   */
  Name: string;
  /**
   * @maxLength `1000`
   * @pattern `(?s).*`
   */
  OauthToken?: string;
  Platform?: "WEB" | "WEB_DYNAMIC" | "WEB_COMPUTE";
  /**
   * @pattern `(?s).*`
   */
  Repository?: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Amplify::App`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#aws-resource-amplify-app-return-values}
 */
export type AmplifyAppAttributes = {
  /**
   * @minLength `1`
   * @maxLength `20`
   * @pattern `d[a-z0-9]+`
   */
  AppId: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `(?s).+`
   */
  AppName: string;
  /**
   * @maxLength `1000`
   * @pattern `(?s).*`
   */
  Arn: string;
  /**
   * @minLength `0`
   * @maxLength `1000`
   */
  DefaultDomain: string;
};
/**
 * Type definition for `AWS::Amplify::App.AutoBranchCreationConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-autobranchcreationconfig.html}
 */
export type AutoBranchCreationConfig = {
  AutoBranchCreationPatterns?: string[];
  BasicAuthConfig?: BasicAuthConfig;
  /**
   * @minLength `1`
   * @maxLength `25000`
   */
  BuildSpec?: string;
  EnableAutoBranchCreation?: boolean;
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
};
/**
 * Type definition for `AWS::Amplify::App.BasicAuthConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-basicauthconfig.html}
 */
export type BasicAuthConfig = {
  EnableBasicAuth?: boolean;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  Password?: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  Username?: string;
};
/**
 * Type definition for `AWS::Amplify::App.CustomRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-customrule.html}
 */
export type CustomRule = {
  /**
   * @minLength `0`
   * @maxLength `2048`
   * @pattern `(?s).*`
   */
  Condition?: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `(?s).+`
   */
  Source: string;
  /**
   * @minLength `3`
   * @maxLength `7`
   * @pattern `.{3,7}`
   */
  Status?: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `(?s).+`
   */
  Target: string;
};
/**
 * Type definition for `AWS::Amplify::App.EnvironmentVariable`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-environmentvariable.html}
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
 * Type definition for `AWS::Amplify::App.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-tag.html}
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
   */
  Value: string;
};
/**
 * The AWS::Amplify::App resource creates Apps in the Amplify Console. An App is a collection of branches.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html}
 */
export class AmplifyApp extends $Resource<
  "AWS::Amplify::App",
  AmplifyAppProperties,
  AmplifyAppAttributes
> {
  public static readonly Type = "AWS::Amplify::App";
  constructor(
    logicalId: string,
    properties: AmplifyAppProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AmplifyApp.Type, properties, options);
  }
}
