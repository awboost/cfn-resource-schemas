import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Lambda::Alias
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-alias.html}
 */
export type LambdaAliasProperties = {
  Description?: string;
  FunctionName: string;
  FunctionVersion: string;
  Name: string;
  ProvisionedConcurrencyConfig?: ProvisionedConcurrencyConfiguration;
  RoutingConfig?: AliasRoutingConfiguration;
};
/**
 * Attribute type definition for `AWS::Lambda::Alias`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-alias.html#aws-resource-lambda-alias-return-values}
 */
export type LambdaAliasAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Lambda::Alias.AliasRoutingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-alias-aliasroutingconfiguration.html}
 */
export type AliasRoutingConfiguration = {
  AdditionalVersionWeights: VersionWeight[];
};
/**
 * Type definition for `AWS::Lambda::Alias.ProvisionedConcurrencyConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-alias-provisionedconcurrencyconfiguration.html}
 */
export type ProvisionedConcurrencyConfiguration = {
  ProvisionedConcurrentExecutions: number;
};
/**
 * Type definition for `AWS::Lambda::Alias.VersionWeight`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-alias-versionweight.html}
 */
export type VersionWeight = {
  FunctionVersion: string;
  FunctionWeight: number;
};
/**
 * Resource Type definition for AWS::Lambda::Alias
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-alias.html}
 */
export class LambdaAlias extends $Resource<
  "AWS::Lambda::Alias",
  LambdaAliasProperties,
  LambdaAliasAttributes
> {
  public static readonly Type = "AWS::Lambda::Alias";
  constructor(
    logicalId: string,
    properties: LambdaAliasProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LambdaAlias.Type, properties, options);
  }
}
