import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AppStream::ApplicationFleetAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-applicationfleetassociation.html}
 */
export type AppStreamApplicationFleetAssociationProperties = {
  ApplicationArn: string;
  FleetName: string;
};
/**
 * Resource Type definition for AWS::AppStream::ApplicationFleetAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-applicationfleetassociation.html}
 */
export class AppStreamApplicationFleetAssociation extends $Resource<
  "AWS::AppStream::ApplicationFleetAssociation",
  AppStreamApplicationFleetAssociationProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::AppStream::ApplicationFleetAssociation";
  constructor(
    logicalId: string,
    properties: AppStreamApplicationFleetAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      AppStreamApplicationFleetAssociation.Type,
      properties,
      options,
    );
  }
}
