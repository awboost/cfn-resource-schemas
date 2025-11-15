import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::MediaConnect::RouterNetworkInterface`.
 * Represents a router network interface in AWS Elemental MediaConnect that is used to define a network boundary for router resources
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-routernetworkinterface.html}
 */
export type MediaConnectRouterNetworkInterfaceProperties = {
  /**
   * The configuration settings for a router network interface.
   */
  Configuration: RouterNetworkInterfaceConfiguration;
  /**
   * The name of the router network interface.
   * @minLength `1`
   * @maxLength `128`
   */
  Name: string;
  /**
   * The AWS Region for the router network interface. Defaults to the current region if not specified.
   */
  RegionName?: string;
  /**
   * Key-value pairs that can be used to tag and organize this router network interface.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::MediaConnect::RouterNetworkInterface`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-routernetworkinterface.html#aws-resource-mediaconnect-routernetworkinterface-return-values}
 */
export type MediaConnectRouterNetworkInterfaceAttributes = {
  /**
   * @pattern `^arn:(aws[a-zA-Z-]*):mediaconnect:[a-z0-9-]+:[0-9]{12}:routerNetworkInterface:[a-z0-9]{12}$`
   */
  Arn: string;
  /**
   * The number of router inputs associated with the network interface.
   */
  AssociatedInputCount: number;
  /**
   * The number of router outputs associated with the network interface.
   */
  AssociatedOutputCount: number;
  /**
   * The timestamp when the router network interface was created.
   */
  CreatedAt: string;
  /**
   * The unique identifier of the router network interface.
   */
  Id: string;
  NetworkInterfaceType: RouterNetworkInterfaceType;
  State: RouterNetworkInterfaceState;
  /**
   * The timestamp when the router network interface was last updated.
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::MediaConnect::RouterNetworkInterface.PublicRouterNetworkInterfaceConfiguration`.
 * The configuration settings for a public router network interface, including the list of allowed CIDR blocks.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routernetworkinterface-publicrouternetworkinterfaceconfiguration.html}
 */
export type PublicRouterNetworkInterfaceConfiguration = {
  /**
   * The list of allowed CIDR blocks for the public router network interface.
   * @minLength `0`
   * @maxLength `10`
   */
  AllowRules: PublicRouterNetworkInterfaceRule[];
};
/**
 * Type definition for `AWS::MediaConnect::RouterNetworkInterface.PublicRouterNetworkInterfaceRule`.
 * A rule that allows a specific CIDR block to access the public router network interface.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routernetworkinterface-publicrouternetworkinterfacerule.html}
 */
export type PublicRouterNetworkInterfaceRule = {
  /**
   * The CIDR block that is allowed to access the public router network interface.
   */
  Cidr: string;
};
/**
 * Type definition for `AWS::MediaConnect::RouterNetworkInterface.RouterNetworkInterfaceConfiguration`.
 * The configuration settings for a router network interface.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routernetworkinterface-routernetworkinterfaceconfiguration.html}
 */
export type RouterNetworkInterfaceConfiguration =
  | {
      /**
       * The configuration settings for a public router network interface, including the list of allowed CIDR blocks.
       */
      Public: PublicRouterNetworkInterfaceConfiguration;
    }
  | {
      /**
       * The configuration settings for a router network interface within a VPC, including the security group IDs and subnet ID.
       */
      Vpc: VpcRouterNetworkInterfaceConfiguration;
    };
/**
 * Type definition for `AWS::MediaConnect::RouterNetworkInterface.RouterNetworkInterfaceState`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routernetworkinterface-routernetworkinterfacestate.html}
 */
export type RouterNetworkInterfaceState =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "DELETING"
  | "ERROR"
  | "RECOVERING";
/**
 * Type definition for `AWS::MediaConnect::RouterNetworkInterface.RouterNetworkInterfaceType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routernetworkinterface-routernetworkinterfacetype.html}
 */
export type RouterNetworkInterfaceType = "PUBLIC" | "VPC";
/**
 * Type definition for `AWS::MediaConnect::RouterNetworkInterface.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routernetworkinterface-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::MediaConnect::RouterNetworkInterface.VpcRouterNetworkInterfaceConfiguration`.
 * The configuration settings for a router network interface within a VPC, including the security group IDs and subnet ID.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routernetworkinterface-vpcrouternetworkinterfaceconfiguration.html}
 */
export type VpcRouterNetworkInterfaceConfiguration = {
  /**
   * The IDs of the security groups to associate with the router network interface within the VPC.
   * @minLength `1`
   * @maxLength `5`
   */
  SecurityGroupIds: string[];
  /**
   * The ID of the subnet within the VPC to associate the router network interface with.
   */
  SubnetId: string;
};
/**
 * Resource type definition for `AWS::MediaConnect::RouterNetworkInterface`.
 * Represents a router network interface in AWS Elemental MediaConnect that is used to define a network boundary for router resources
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-routernetworkinterface.html}
 */
export class MediaConnectRouterNetworkInterface extends $Resource<
  "AWS::MediaConnect::RouterNetworkInterface",
  MediaConnectRouterNetworkInterfaceProperties,
  MediaConnectRouterNetworkInterfaceAttributes
> {
  public static readonly Type = "AWS::MediaConnect::RouterNetworkInterface";
  constructor(
    logicalId: string,
    properties: MediaConnectRouterNetworkInterfaceProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      MediaConnectRouterNetworkInterface.Type,
      properties,
      options,
    );
  }
}
