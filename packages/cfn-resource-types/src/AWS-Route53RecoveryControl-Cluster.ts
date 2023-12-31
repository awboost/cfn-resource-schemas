import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Route53RecoveryControl::Cluster`.
 * AWS Route53 Recovery Control Cluster resource schema
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-cluster.html}
 */
export type Route53RecoveryControlClusterProperties = {
  /**
   * Name of a Cluster. You can use any non-white space character in the name
   * @minLength `1`
   * @maxLength `64`
   */
  Name: string;
  /**
   * A collection of tags associated with a resource
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Route53RecoveryControl::Cluster`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-cluster.html#aws-resource-route53recoverycontrol-cluster-return-values}
 */
export type Route53RecoveryControlClusterAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the cluster.
   * @minLength `1`
   * @maxLength `2048`
   */
  ClusterArn: string;
  /**
   * Endpoints for the cluster.
   */
  ClusterEndpoints: {
    /**
     * @minLength `1`
     * @maxLength `128`
     */
    Endpoint: string;
    /**
     * @minLength `1`
     * @maxLength `32`
     */
    Region: string;
  }[];
  /**
   * Deployment status of a resource. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION.
   */
  Status: "PENDING" | "DEPLOYED" | "PENDING_DELETION";
};
/**
 * Type definition for `AWS::Route53RecoveryControl::Cluster.ClusterEndpoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoverycontrol-cluster-clusterendpoint.html}
 */
export type ClusterEndpoint = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Endpoint?: string;
  /**
   * @minLength `1`
   * @maxLength `32`
   */
  Region?: string;
};
/**
 * Type definition for `AWS::Route53RecoveryControl::Cluster.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoverycontrol-cluster-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::Route53RecoveryControl::Cluster`.
 * AWS Route53 Recovery Control Cluster resource schema
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-cluster.html}
 */
export class Route53RecoveryControlCluster extends $Resource<
  "AWS::Route53RecoveryControl::Cluster",
  Route53RecoveryControlClusterProperties,
  Route53RecoveryControlClusterAttributes
> {
  public static readonly Type = "AWS::Route53RecoveryControl::Cluster";
  constructor(
    logicalId: string,
    properties: Route53RecoveryControlClusterProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, Route53RecoveryControlCluster.Type, properties, options);
  }
}
