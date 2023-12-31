import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::AppMesh::VirtualRouter
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualrouter.html}
 */
export type AppMeshVirtualRouterProperties = {
  MeshName: string;
  MeshOwner?: string;
  Spec: VirtualRouterSpec;
  Tags?: Tag[];
  VirtualRouterName?: string;
};
/**
 * Attribute type definition for `AWS::AppMesh::VirtualRouter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualrouter.html#aws-resource-appmesh-virtualrouter-return-values}
 */
export type AppMeshVirtualRouterAttributes = {
  Arn: string;
  Id: string;
  ResourceOwner: string;
  Uid: string;
};
/**
 * Type definition for `AWS::AppMesh::VirtualRouter.PortMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualrouter-portmapping.html}
 */
export type PortMapping = {
  Port: number;
  Protocol: string;
};
/**
 * Type definition for `AWS::AppMesh::VirtualRouter.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualrouter-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::AppMesh::VirtualRouter.VirtualRouterListener`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualrouter-virtualrouterlistener.html}
 */
export type VirtualRouterListener = {
  PortMapping: PortMapping;
};
/**
 * Type definition for `AWS::AppMesh::VirtualRouter.VirtualRouterSpec`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualrouter-virtualrouterspec.html}
 */
export type VirtualRouterSpec = {
  Listeners: VirtualRouterListener[];
};
/**
 * Resource Type definition for AWS::AppMesh::VirtualRouter
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualrouter.html}
 */
export class AppMeshVirtualRouter extends $Resource<
  "AWS::AppMesh::VirtualRouter",
  AppMeshVirtualRouterProperties,
  AppMeshVirtualRouterAttributes
> {
  public static readonly Type = "AWS::AppMesh::VirtualRouter";
  public static readonly AttributeNames = [
    "Arn" as const,
    "Id" as const,
    "ResourceOwner" as const,
    "Uid" as const,
  ];
  constructor(
    logicalId: string,
    properties: AppMeshVirtualRouterProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      AppMeshVirtualRouter.Type,
      properties,
      AppMeshVirtualRouter.AttributeNames,
      options,
    );
  }
}
