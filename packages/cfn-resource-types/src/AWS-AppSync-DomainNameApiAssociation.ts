import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AppSync::DomainNameApiAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-domainnameapiassociation.html}
 */
export type AppSyncDomainNameApiAssociationProperties = {
  ApiId: string;
  /**
   * @minLength `1`
   * @maxLength `253`
   * @pattern `^(\*[a-z\d-]*\.)?([a-z\d-]+\.)+[a-z\d-]+$`
   */
  DomainName: string;
};
/**
 * Attribute type definition for `AWS::AppSync::DomainNameApiAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-domainnameapiassociation.html#aws-resource-appsync-domainnameapiassociation-return-values}
 */
export type AppSyncDomainNameApiAssociationAttributes = {
  ApiAssociationIdentifier: string;
};
/**
 * Resource Type definition for AWS::AppSync::DomainNameApiAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-domainnameapiassociation.html}
 */
export class AppSyncDomainNameApiAssociation extends $Resource<
  "AWS::AppSync::DomainNameApiAssociation",
  AppSyncDomainNameApiAssociationProperties,
  AppSyncDomainNameApiAssociationAttributes
> {
  public static readonly Type = "AWS::AppSync::DomainNameApiAssociation";
  constructor(
    logicalId: string,
    properties: AppSyncDomainNameApiAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppSyncDomainNameApiAssociation.Type, properties, options);
  }
}
