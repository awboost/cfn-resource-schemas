import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::OpsWorks::App
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-app.html}
 */
export type OpsWorksAppProperties = {
  AppSource?: Source;
  Attributes?: Record<string, string>;
  DataSources?: DataSource[];
  Description?: string;
  Domains?: string[];
  EnableSsl?: boolean;
  Environment?: EnvironmentVariable[];
  Name: string;
  Shortname?: string;
  SslConfiguration?: SslConfiguration;
  StackId: string;
  Type: string;
};
/**
 * Attribute type definition for `AWS::OpsWorks::App`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-app.html#aws-resource-opsworks-app-return-values}
 */
export type OpsWorksAppAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::OpsWorks::App.DataSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-app-datasource.html}
 */
export type DataSource = {
  Arn?: string;
  DatabaseName?: string;
  Type?: string;
};
/**
 * Type definition for `AWS::OpsWorks::App.EnvironmentVariable`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-app-environmentvariable.html}
 */
export type EnvironmentVariable = {
  Key: string;
  Secure?: boolean;
  Value: string;
};
/**
 * Type definition for `AWS::OpsWorks::App.Source`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-app-source.html}
 */
export type Source = {
  Password?: string;
  Revision?: string;
  SshKey?: string;
  Type?: string;
  Url?: string;
  Username?: string;
};
/**
 * Type definition for `AWS::OpsWorks::App.SslConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-app-sslconfiguration.html}
 */
export type SslConfiguration = {
  Certificate?: string;
  Chain?: string;
  PrivateKey?: string;
};
/**
 * Resource Type definition for AWS::OpsWorks::App
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-app.html}
 */
export class OpsWorksApp extends $Resource<
  "AWS::OpsWorks::App",
  OpsWorksAppProperties,
  OpsWorksAppAttributes
> {
  public static readonly Type = "AWS::OpsWorks::App";
  constructor(
    logicalId: string,
    properties: OpsWorksAppProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, OpsWorksApp.Type, properties, options);
  }
}
