import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: AppStreamEntitlementProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppStreamEntitlement.Type, properties, options);
  }
}
