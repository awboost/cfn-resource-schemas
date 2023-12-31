import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: AppStreamApplicationFleetAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      AppStreamApplicationFleetAssociation.Type,
      properties,
      AppStreamApplicationFleetAssociation.AttributeNames,
      options,
    );
  }
}
