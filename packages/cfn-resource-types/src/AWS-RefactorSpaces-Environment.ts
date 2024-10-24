import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::RefactorSpaces::Environment Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-environment.html}
 */
export type RefactorSpacesEnvironmentProperties = {
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9-_\s\.\!\*\#\@\']+$`
   */
  Description?: string;
  /**
   * @minLength `3`
   * @maxLength `63`
   * @pattern `^(?!env-)[a-zA-Z0-9]+[a-zA-Z0-9-_ ]+$`
   */
  Name?: string;
  NetworkFabricType?: NetworkFabricType;
  /**
   * Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::RefactorSpaces::Environment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-environment.html#aws-resource-refactorspaces-environment-return-values}
 */
export type RefactorSpacesEnvironmentAttributes = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:(aws[a-zA-Z-]*)?:refactor-spaces:[a-zA-Z0-9\-]+:\w{12}:[a-zA-Z_0-9+=,.@\-_/]+$`
   */
  Arn: string;
  /**
   * @minLength `14`
   * @maxLength `14`
   * @pattern `^env-([0-9A-Za-z]{10}$)`
   */
  EnvironmentIdentifier: string;
  /**
   * @minLength `21`
   * @maxLength `21`
   * @pattern `^tgw-[-a-f0-9]{17}$`
   */
  TransitGatewayId: string;
};
/**
 * Type definition for `AWS::RefactorSpaces::Environment.NetworkFabricType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-environment-networkfabrictype.html}
 */
export type NetworkFabricType = "TRANSIT_GATEWAY" | "NONE";
/**
 * Type definition for `AWS::RefactorSpaces::Environment.Tag`.
 * A label for tagging Environment resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-environment-tag.html}
 */
export type Tag = {
  /**
   * A string used to identify this tag
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:).+`
   */
  Key: string;
  /**
   * A string containing the value for the tag
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Definition of AWS::RefactorSpaces::Environment Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-environment.html}
 */
export class RefactorSpacesEnvironment extends $Resource<
  "AWS::RefactorSpaces::Environment",
  RefactorSpacesEnvironmentProperties,
  RefactorSpacesEnvironmentAttributes
> {
  public static readonly Type = "AWS::RefactorSpaces::Environment";
  constructor(
    logicalId: string,
    properties: RefactorSpacesEnvironmentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RefactorSpacesEnvironment.Type, properties, options);
  }
}
