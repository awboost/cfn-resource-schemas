import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Schema of AWS::EMRContainers::VirtualCluster Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrcontainers-virtualcluster.html}
 */
export type EMRContainersVirtualClusterProperties = {
  /**
   * Container provider of the virtual cluster.
   */
  ContainerProvider: ContainerProvider;
  /**
   * Name of the virtual cluster.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `[\.\-_/#A-Za-z0-9]+`
   */
  Name: string;
  /**
   * An array of key-value pairs to apply to this virtual cluster.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::EMRContainers::VirtualCluster`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrcontainers-virtualcluster.html#aws-resource-emrcontainers-virtualcluster-return-values}
 */
export type EMRContainersVirtualClusterAttributes = {
  Arn: string;
  /**
   * Id of the virtual cluster.
   * @minLength `1`
   * @maxLength `64`
   */
  Id: string;
};
/**
 * Type definition for `AWS::EMRContainers::VirtualCluster.ContainerInfo`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrcontainers-virtualcluster-containerinfo.html}
 */
export type ContainerInfo = {
  EksInfo: EksInfo;
};
/**
 * Type definition for `AWS::EMRContainers::VirtualCluster.ContainerProvider`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrcontainers-virtualcluster-containerprovider.html}
 */
export type ContainerProvider = {
  /**
   * The ID of the container cluster
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[0-9A-Za-z][A-Za-z0-9\-_]*`
   */
  Id: string;
  Info: ContainerInfo;
  /**
   * The type of the container provider
   */
  Type: string;
};
/**
 * Type definition for `AWS::EMRContainers::VirtualCluster.EksInfo`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrcontainers-virtualcluster-eksinfo.html}
 */
export type EksInfo = {
  /**
   * @minLength `1`
   * @maxLength `63`
   * @pattern `[a-z0-9]([-a-z0-9]*[a-z0-9])?`
   */
  Namespace: string;
};
/**
 * Type definition for `AWS::EMRContainers::VirtualCluster.Tag`.
 * An arbitrary set of tags (key-value pairs) for this virtual cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrcontainers-virtualcluster-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Value: string;
};
/**
 * Resource Schema of AWS::EMRContainers::VirtualCluster Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrcontainers-virtualcluster.html}
 */
export class EMRContainersVirtualCluster extends $Resource<
  "AWS::EMRContainers::VirtualCluster",
  EMRContainersVirtualClusterProperties,
  EMRContainersVirtualClusterAttributes
> {
  public static readonly Type = "AWS::EMRContainers::VirtualCluster";
  constructor(
    logicalId: string,
    properties: EMRContainersVirtualClusterProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EMRContainersVirtualCluster.Type, properties, options);
  }
}
