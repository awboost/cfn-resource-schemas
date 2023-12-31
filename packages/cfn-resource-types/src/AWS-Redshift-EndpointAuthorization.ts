import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Redshift::EndpointAuthorization`.
 * Describes an endpoint authorization for authorizing Redshift-managed VPC endpoint access to a cluster across AWS accounts.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointauthorization.html}
 */
export type RedshiftEndpointAuthorizationProperties = {
  /**
   * The target AWS account ID to grant or revoke access for.
   * @pattern `^\d{12}$`
   */
  Account: string;
  /**
   * The cluster identifier.
   * @pattern `^(?=^[a-z][a-z0-9]*(-[a-z0-9]+)*$).{1,63}$`
   */
  ClusterIdentifier: string;
  /**
   *  Indicates whether to force the revoke action. If true, the Redshift-managed VPC endpoints associated with the endpoint authorization are also deleted.
   */
  Force?: boolean;
  /**
   * The virtual private cloud (VPC) identifiers to grant or revoke access to.
   */
  VpcIds?: string[];
};
/**
 * Attribute type definition for `AWS::Redshift::EndpointAuthorization`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointauthorization.html#aws-resource-redshift-endpointauthorization-return-values}
 */
export type RedshiftEndpointAuthorizationAttributes = {
  /**
   * Indicates whether all VPCs in the grantee account are allowed access to the cluster.
   */
  AllowedAllVPCs: boolean;
  /**
   * The VPCs allowed access to the cluster.
   */
  AllowedVPCs: string[];
  /**
   * The time (UTC) when the authorization was created.
   */
  AuthorizeTime: string;
  /**
   * The status of the cluster.
   */
  ClusterStatus: string;
  /**
   * The number of Redshift-managed VPC endpoints created for the authorization.
   */
  EndpointCount: number;
  /**
   * The AWS account ID of the grantee of the cluster.
   * @pattern `^\d{12}$`
   */
  Grantee: string;
  /**
   * The AWS account ID of the cluster owner.
   * @pattern `^\d{12}$`
   */
  Grantor: string;
  /**
   * The status of the authorization action.
   */
  Status: string;
};
/**
 * Resource type definition for `AWS::Redshift::EndpointAuthorization`.
 * Describes an endpoint authorization for authorizing Redshift-managed VPC endpoint access to a cluster across AWS accounts.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointauthorization.html}
 */
export class RedshiftEndpointAuthorization extends $Resource<
  "AWS::Redshift::EndpointAuthorization",
  RedshiftEndpointAuthorizationProperties,
  RedshiftEndpointAuthorizationAttributes
> {
  public static readonly Type = "AWS::Redshift::EndpointAuthorization";
  constructor(
    logicalId: string,
    properties: RedshiftEndpointAuthorizationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RedshiftEndpointAuthorization.Type, properties, options);
  }
}
