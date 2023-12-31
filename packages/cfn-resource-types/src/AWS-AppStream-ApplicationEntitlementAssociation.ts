import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::AppStream::ApplicationEntitlementAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-applicationentitlementassociation.html}
 */
export type AppStreamApplicationEntitlementAssociationProperties = {
  ApplicationIdentifier: string;
  EntitlementName: string;
  StackName: string;
};
/**
 * Resource Type definition for AWS::AppStream::ApplicationEntitlementAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-applicationentitlementassociation.html}
 */
export class AppStreamApplicationEntitlementAssociation extends $Resource<
  "AWS::AppStream::ApplicationEntitlementAssociation",
  AppStreamApplicationEntitlementAssociationProperties,
  Record<string, never>
> {
  public static readonly Type =
    "AWS::AppStream::ApplicationEntitlementAssociation";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: AppStreamApplicationEntitlementAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      AppStreamApplicationEntitlementAssociation.Type,
      properties,
      AppStreamApplicationEntitlementAssociation.AttributeNames,
      options,
    );
  }
}
