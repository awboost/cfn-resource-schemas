import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::DirectoryService::SimpleAD
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-simplead.html}
 */
export type DirectoryServiceSimpleADProperties = {
  /**
   * The name of the configuration set.
   */
  CreateAlias?: boolean;
  /**
   * Description for the directory.
   */
  Description?: string;
  /**
   * Whether to enable single sign-on for a Simple Active Directory in AWS.
   */
  EnableSso?: boolean;
  /**
   * The fully qualified domain name for the AWS Managed Simple AD directory.
   */
  Name: string;
  /**
   * The password for the default administrative user named Admin.
   */
  Password?: string;
  /**
   * The NetBIOS name for your domain.
   */
  ShortName?: string;
  /**
   * The size of the directory.
   */
  Size: string;
  /**
   * VPC settings of the Simple AD directory server in AWS.
   */
  VpcSettings: VpcSettings;
};
/**
 * Attribute type definition for `AWS::DirectoryService::SimpleAD`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-simplead.html}
 */
export type DirectoryServiceSimpleADAttributes = {
  /**
   * The alias for a directory.
   */
  Alias: string;
  /**
   * The unique identifier for a directory.
   */
  DirectoryId: string;
  /**
   * The IP addresses of the DNS servers for the directory, such as [ "172.31.3.154", "172.31.63.203" ].
   */
  DnsIpAddresses: string[];
};
/**
 * Type definition for `AWS::DirectoryService::SimpleAD.VpcSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-directoryservice-simplead-vpcsettings.html}
 */
export type VpcSettings = {
  /**
   * The identifiers of the subnets for the directory servers. The two subnets must be in different Availability Zones. AWS Directory Service specifies a directory server and a DNS server in each of these subnets.
   */
  SubnetIds: string[];
  /**
   * The identifier of the VPC in which to create the directory.
   */
  VpcId: string;
};
/**
 * Resource Type definition for AWS::DirectoryService::SimpleAD
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-simplead.html}
 */
export class DirectoryServiceSimpleAD extends $Resource<
  "AWS::DirectoryService::SimpleAD",
  DirectoryServiceSimpleADProperties,
  DirectoryServiceSimpleADAttributes
> {
  public static readonly Type = "AWS::DirectoryService::SimpleAD";
  constructor(
    logicalId: string,
    properties: DirectoryServiceSimpleADProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DirectoryServiceSimpleAD.Type, properties, options);
  }
}
