import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AppMesh::VirtualService
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualservice.html}
 */
export type AppMeshVirtualServiceProperties = {
  MeshName: string;
  MeshOwner?: string;
  Spec: VirtualServiceSpec;
  Tags?: Tag[];
  VirtualServiceName: string;
};
/**
 * Attribute type definition for `AWS::AppMesh::VirtualService`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualservice.html#aws-resource-appmesh-virtualservice-return-values}
 */
export type AppMeshVirtualServiceAttributes = {
  Arn: string;
  Id: string;
  ResourceOwner: string;
  Uid: string;
};
/**
 * Type definition for `AWS::AppMesh::VirtualService.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualservice-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::AppMesh::VirtualService.VirtualNodeServiceProvider`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualservice-virtualnodeserviceprovider.html}
 */
export type VirtualNodeServiceProvider = {
  VirtualNodeName: string;
};
/**
 * Type definition for `AWS::AppMesh::VirtualService.VirtualRouterServiceProvider`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualservice-virtualrouterserviceprovider.html}
 */
export type VirtualRouterServiceProvider = {
  VirtualRouterName: string;
};
/**
 * Type definition for `AWS::AppMesh::VirtualService.VirtualServiceProvider`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualservice-virtualserviceprovider.html}
 */
export type VirtualServiceProvider = {
  VirtualNode?: VirtualNodeServiceProvider;
  VirtualRouter?: VirtualRouterServiceProvider;
};
/**
 * Type definition for `AWS::AppMesh::VirtualService.VirtualServiceSpec`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualservice-virtualservicespec.html}
 */
export type VirtualServiceSpec = {
  Provider?: VirtualServiceProvider;
};
/**
 * Resource Type definition for AWS::AppMesh::VirtualService
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualservice.html}
 */
export class AppMeshVirtualService extends $Resource<
  "AWS::AppMesh::VirtualService",
  AppMeshVirtualServiceProperties,
  AppMeshVirtualServiceAttributes
> {
  public static readonly Type = "AWS::AppMesh::VirtualService";
  constructor(
    logicalId: string,
    properties: AppMeshVirtualServiceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppMeshVirtualService.Type, properties, options);
  }
}
