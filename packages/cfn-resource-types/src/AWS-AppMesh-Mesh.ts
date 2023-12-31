import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AppMesh::Mesh
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-mesh.html}
 */
export type AppMeshMeshProperties = {
  MeshName?: string;
  Spec?: MeshSpec;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::AppMesh::Mesh`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-mesh.html#aws-resource-appmesh-mesh-return-values}
 */
export type AppMeshMeshAttributes = {
  Arn: string;
  Id: string;
  MeshOwner: string;
  ResourceOwner: string;
  Uid: string;
};
/**
 * Type definition for `AWS::AppMesh::Mesh.EgressFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-mesh-egressfilter.html}
 */
export type EgressFilter = {
  Type: string;
};
/**
 * Type definition for `AWS::AppMesh::Mesh.MeshServiceDiscovery`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-mesh-meshservicediscovery.html}
 */
export type MeshServiceDiscovery = {
  IpPreference?: string;
};
/**
 * Type definition for `AWS::AppMesh::Mesh.MeshSpec`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-mesh-meshspec.html}
 */
export type MeshSpec = {
  EgressFilter?: EgressFilter;
  ServiceDiscovery?: MeshServiceDiscovery;
};
/**
 * Type definition for `AWS::AppMesh::Mesh.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-mesh-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::AppMesh::Mesh
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-mesh.html}
 */
export class AppMeshMesh extends $Resource<
  "AWS::AppMesh::Mesh",
  AppMeshMeshProperties,
  AppMeshMeshAttributes
> {
  public static readonly Type = "AWS::AppMesh::Mesh";
  constructor(
    logicalId: string,
    properties: AppMeshMeshProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppMeshMesh.Type, properties, options);
  }
}
