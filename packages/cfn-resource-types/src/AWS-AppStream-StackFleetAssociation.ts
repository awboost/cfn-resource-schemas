import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AppStream::StackFleetAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackfleetassociation.html}
 */
export type AppStreamStackFleetAssociationProperties = {
  /**
   * The name of the fleet. To associate a fleet with a stack, you must specify a dependency on the fleet resource.
   */
  FleetName: string;
  /**
   * The name of the stack. To associate a fleet with a stack, you must specify a dependency on the stack resource.
   */
  StackName: string;
};
/**
 * Resource Type definition for AWS::AppStream::StackFleetAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackfleetassociation.html}
 */
export class AppStreamStackFleetAssociation extends $Resource<
  "AWS::AppStream::StackFleetAssociation",
  AppStreamStackFleetAssociationProperties,
  Record<string, never>
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
