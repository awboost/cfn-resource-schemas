import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: AppStreamApplicationEntitlementAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      AppStreamApplicationEntitlementAssociation.Type,
      properties,
      options,
    );
  }
}
