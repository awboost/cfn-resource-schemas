import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AppStream::StackFleetAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackfleetassociation.html}
 */
export type AppStreamStackFleetAssociationProperties = {
  FleetName: string;
  StackName: string;
};
/**
 * Attribute type definition for `AWS::AppStream::StackFleetAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackfleetassociation.html#aws-resource-appstream-stackfleetassociation-return-values}
 */
export type AppStreamStackFleetAssociationAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::AppStream::StackFleetAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackfleetassociation.html}
 */
export class AppStreamStackFleetAssociation extends $Resource<
  "AWS::AppStream::StackFleetAssociation",
  AppStreamStackFleetAssociationProperties,
  AppStreamStackFleetAssociationAttributes
> {
  public static readonly Type = "AWS::AppStream::StackFleetAssociation";
  constructor(
    logicalId: string,
    properties: AppStreamStackFleetAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppStreamStackFleetAssociation.Type, properties, options);
  }
}
