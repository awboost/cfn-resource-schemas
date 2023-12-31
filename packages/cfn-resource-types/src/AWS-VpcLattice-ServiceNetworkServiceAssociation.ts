import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::VpcLattice::ServiceNetworkServiceAssociation`.
 * Associates a service with a service network.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-servicenetworkserviceassociation.html}
 */
export type VpcLatticeServiceNetworkServiceAssociationProperties = {
  DnsEntry?: DnsEntry;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^((svc-[0-9a-z]{17})|(arn:[a-z0-9\-]+:vpc-lattice:[a-zA-Z0-9\-]+:\d{12}:service/svc-[0-9a-z]{17}))$`
   */
  ServiceIdentifier?: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^((sn-[0-9a-z]{17})|(arn:[a-z0-9\-]+:vpc-lattice:[a-zA-Z0-9\-]+:\d{12}:servicenetwork/sn-[0-9a-z]{17}))$`
   */
  ServiceNetworkIdentifier?: string;
  /**
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::VpcLattice::ServiceNetworkServiceAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-servicenetworkserviceassociation.html#aws-resource-vpclattice-servicenetworkserviceassociation-return-values}
 */
export type VpcLatticeServiceNetworkServiceAssociationAttributes = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[a-z0-9\-]+:vpc-lattice:[a-zA-Z0-9\-]+:\d{12}:servicenetworkserviceassociation/snsa-[0-9a-z]{17}$`
   */
  Arn: string;
  CreatedAt: string;
  /**
   * @minLength `17`
   * @maxLength `2048`
   * @pattern `^snsa-[0-9a-z]{17}$`
   */
  Id: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[a-z0-9\-]+:vpc-lattice:[a-zA-Z0-9\-]+:\d{12}:service/svc-[0-9a-z]{17}$`
   */
  ServiceArn: string;
  /**
   * @minLength `21`
   * @maxLength `21`
   * @pattern `^svc-[0-9a-z]{17}$`
   */
  ServiceId: string;
  /**
   * @minLength `3`
   * @maxLength `40`
   * @pattern `^(?!svc-)(?![-])(?!.*[-]$)(?!.*[-]{2})[a-z0-9-]+$`
   */
  ServiceName: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[a-z0-9\-]+:vpc-lattice:[a-zA-Z0-9\-]+:\d{12}:servicenetwork/sn-[0-9a-z]{17}$`
   */
  ServiceNetworkArn: string;
  /**
   * @minLength `20`
   * @maxLength `20`
   * @pattern `^sn-[0-9a-z]{17}$`
   */
  ServiceNetworkId: string;
  /**
   * @minLength `3`
   * @maxLength `63`
   * @pattern `^(?!servicenetwork-)(?![-])(?!.*[-]$)(?!.*[-]{2})[a-z0-9-]+$`
   */
  ServiceNetworkName: string;
  Status:
    | "CREATE_IN_PROGRESS"
    | "ACTIVE"
    | "DELETE_IN_PROGRESS"
    | "CREATE_FAILED"
    | "DELETE_FAILED";
};
/**
 * Type definition for `AWS::VpcLattice::ServiceNetworkServiceAssociation.DnsEntry`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-servicenetworkserviceassociation-dnsentry.html}
 */
export type DnsEntry = {
  DomainName?: string;
  HostedZoneId?: string;
};
/**
 * Type definition for `AWS::VpcLattice::ServiceNetworkServiceAssociation.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-servicenetworkserviceassociation-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::VpcLattice::ServiceNetworkServiceAssociation`.
 * Associates a service with a service network.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-servicenetworkserviceassociation.html}
 */
export class VpcLatticeServiceNetworkServiceAssociation extends $Resource<
  "AWS::VpcLattice::ServiceNetworkServiceAssociation",
  VpcLatticeServiceNetworkServiceAssociationProperties,
  VpcLatticeServiceNetworkServiceAssociationAttributes
> {
  public static readonly Type =
    "AWS::VpcLattice::ServiceNetworkServiceAssociation";
  public static readonly AttributeNames = [
    "Arn" as const,
    "CreatedAt" as const,
    "Id" as const,
    "ServiceArn" as const,
    "ServiceId" as const,
    "ServiceName" as const,
    "ServiceNetworkArn" as const,
    "ServiceNetworkId" as const,
    "ServiceNetworkName" as const,
    "Status" as const,
  ];
  constructor(
    logicalId: string,
    properties: VpcLatticeServiceNetworkServiceAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      VpcLatticeServiceNetworkServiceAssociation.Type,
      properties,
      VpcLatticeServiceNetworkServiceAssociation.AttributeNames,
      options,
    );
  }
}
