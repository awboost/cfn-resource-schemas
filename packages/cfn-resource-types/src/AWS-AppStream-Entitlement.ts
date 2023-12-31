import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::AppStream::Entitlement
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-entitlement.html}
 */
export type AppStreamEntitlementProperties = {
  AppVisibility: string;
  Attributes: Attribute[];
  Description?: string;
  Name: string;
  StackName: string;
};
/**
 * Attribute type definition for `AWS::AppStream::Entitlement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-entitlement.html#aws-resource-appstream-entitlement-return-values}
 */
export type AppStreamEntitlementAttributes = {
  CreatedTime: string;
  LastModifiedTime: string;
};
/**
 * Type definition for `AWS::AppStream::Entitlement.Attribute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-entitlement-attribute.html}
 */
export type Attribute = {
  Name: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::AppStream::Entitlement
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-entitlement.html}
 */
export class AppStreamEntitlement extends $Resource<
  "AWS::AppStream::Entitlement",
  AppStreamEntitlementProperties,
  AppStreamEntitlementAttributes
> {
  public static readonly Type = "AWS::AppStream::Entitlement";
  public static readonly AttributeNames = [
    "CreatedTime" as const,
    "LastModifiedTime" as const,
  ];
  constructor(
    logicalId: string,
    properties: AppStreamEntitlementProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      AppStreamEntitlement.Type,
      properties,
      AppStreamEntitlement.AttributeNames,
      options,
    );
  }
}
