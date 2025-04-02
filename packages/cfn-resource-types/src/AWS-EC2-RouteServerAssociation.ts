import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EC2::RouteServerAssociation`.
 * VPC Route Server Association
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routeserverassociation.html}
 */
export type EC2RouteServerAssociationProperties = {
  /**
   * Route Server ID
   */
  RouteServerId: string;
  /**
   * VPC ID
   */
  VpcId: string;
};
/**
 * Resource type definition for `AWS::EC2::RouteServerAssociation`.
 * VPC Route Server Association
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routeserverassociation.html}
 */
export class EC2RouteServerAssociation extends $Resource<
  "AWS::EC2::RouteServerAssociation",
  EC2RouteServerAssociationProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::EC2::RouteServerAssociation";
  constructor(
    logicalId: string,
    properties: EC2RouteServerAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2RouteServerAssociation.Type, properties, options);
  }
}
