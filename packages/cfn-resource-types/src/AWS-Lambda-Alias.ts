import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: LambdaAliasProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      LambdaAlias.Type,
      properties,
      LambdaAlias.AttributeNames,
      options,
    );
  }
}
