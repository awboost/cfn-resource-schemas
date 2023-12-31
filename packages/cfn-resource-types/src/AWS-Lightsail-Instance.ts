import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Lightsail::Instance
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html}
 */
export type LightsailInstanceProperties = {
  /**
   * An array of objects representing the add-ons to enable for the new instance.
   */
  AddOns?: AddOn[];
  /**
   * The Availability Zone in which to create your instance. Use the following format: us-east-2a (case sensitive). Be sure to add the include Availability Zones parameter to your request.
   * @minLength `1`
   * @maxLength `255`
   */
  AvailabilityZone?: string;
  /**
   * The ID for a virtual private server image (e.g., app_wordpress_4_4 or app_lamp_7_0 ). Use the get blueprints operation to return a list of available images (or blueprints ).
   * @minLength `1`
   * @maxLength `255`
   */
  BlueprintId: string;
  /**
   * The bundle of specification information for your virtual private server (or instance ), including the pricing plan (e.g., micro_1_0 ).
   * @minLength `1`
   * @maxLength `255`
   */
  BundleId: string;
  /**
   * Hardware of the Instance.
   */
  Hardware?: Hardware;
  /**
   * The names to use for your new Lightsail instance.
   * @minLength `1`
   * @maxLength `254`
   * @pattern `^[a-zA-Z0-9][\w\-.]*[a-zA-Z0-9]$`
   */
  InstanceName: string;
  /**
   * The name of your key pair.
   */
  KeyPairName?: string;
  /**
   * Networking of the Instance.
   */
  Networking?: Networking;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  /**
   * A launch script you can create that configures a server with additional user data. For example, you might want to run apt-get -y update.
   */
  UserData?: string;
};
/**
 * Attribute type definition for `AWS::Lightsail::Instance`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#aws-resource-lightsail-instance-return-values}
 */
export type LightsailInstanceAttributes = {
  InstanceArn: string;
  /**
   * Is the IP Address of the Instance is the static IP
   */
  IsStaticIp: boolean;
  /**
   * Location of a resource.
   */
  Location: {
    /**
     * The Availability Zone in which to create your instance. Use the following format: us-east-2a (case sensitive). Be sure to add the include Availability Zones parameter to your request.
     */
    AvailabilityZone: string;
    /**
     * The Region Name in which to create your instance.
     */
    RegionName: string;
  };
  /**
   * Private IP Address of the Instance
   */
  PrivateIpAddress: string;
  /**
   * Public IP Address of the Instance
   */
  PublicIpAddress: string;
  /**
   * Resource type of Lightsail instance.
   */
  ResourceType: string;
  /**
   * SSH Key Name of the  Lightsail instance.
   */
  SshKeyName: string;
  /**
   * Current State of the Instance.
   */
  State: {
    /**
     * Status code of the Instance.
     */
    Code: number;
    /**
     * Status code of the Instance.
     */
    Name: string;
  };
  /**
   * Support code to help identify any issues
   */
  SupportCode: string;
  /**
   * Username of the  Lightsail instance.
   */
  UserName: string;
};
/**
 * Type definition for `AWS::Lightsail::Instance.AddOn`.
 * A addon associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-addon.html}
 */
export type AddOn = {
  /**
   * The add-on type
   * @minLength `1`
   * @maxLength `128`
   */
  AddOnType: string;
  /**
   * An object that represents additional parameters when enabling or modifying the automatic snapshot add-on
   */
  AutoSnapshotAddOnRequest?: AutoSnapshotAddOn;
  /**
   * Status of the Addon
   */
  Status?:
    | "Enabling"
    | "Disabling"
    | "Enabled"
    | "Terminating"
    | "Terminated"
    | "Disabled"
    | "Failed";
};
/**
 * Type definition for `AWS::Lightsail::Instance.AutoSnapshotAddOn`.
 * An object that represents additional parameters when enabling or modifying the automatic snapshot add-on
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-autosnapshotaddon.html}
 */
export type AutoSnapshotAddOn = {
  /**
   * The daily time when an automatic snapshot will be created.
   * @pattern `^[0-9]{2}:00$`
   */
  SnapshotTimeOfDay?: string;
};
/**
 * Type definition for `AWS::Lightsail::Instance.Disk`.
 * Disk associated with the Instance.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-disk.html}
 */
export type Disk = {
  /**
   * Instance attached to the disk.
   */
  AttachedTo?: string;
  /**
   * Attachment state of the disk.
   */
  AttachmentState?: string;
  /**
   * The names to use for your new Lightsail disk.
   * @minLength `1`
   * @maxLength `254`
   * @pattern `^[a-zA-Z0-9][\w\-.]*[a-zA-Z0-9]$`
   */
  DiskName: string;
  /**
   * IOPS of disk.
   */
  IOPS?: number;
  /**
   * Is the Attached disk is the system disk of the Instance.
   */
  IsSystemDisk?: boolean;
  /**
   * Path of the disk attached to the instance.
   */
  Path: string;
  /**
   * Size of the disk attached to the Instance.
   */
  SizeInGb?: string;
};
/**
 * Type definition for `AWS::Lightsail::Instance.Hardware`.
 * Hardware of the Instance.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-hardware.html}
 */
export type Hardware = {
  /**
   * Disks attached to the Instance.
   */
  Disks?: Disk[];
};
/**
 * Type definition for `AWS::Lightsail::Instance.Networking`.
 * Networking of the Instance.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-networking.html}
 */
export type Networking = {
  /**
   * Ports to the Instance.
   */
  Ports: Port[];
};
/**
 * Type definition for `AWS::Lightsail::Instance.Port`.
 * Port of the Instance.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-port.html}
 */
export type Port = {
  /**
   * Access Direction for Protocol of the Instance(inbound/outbound).
   */
  AccessDirection?: string;
  /**
   * Access From Protocol of the Instance.
   */
  AccessFrom?: string;
  /**
   * Access Type Protocol of the Instance.
   */
  AccessType?: string;
  /**
   * cidr List Aliases
   */
  CidrListAliases?: string[];
  /**
   * cidrs
   */
  Cidrs?: string[];
  /**
   * CommonName for Protocol of the Instance.
   */
  CommonName?: string;
  /**
   * From Port of the Instance.
   */
  FromPort?: number;
  /**
   * IPv6 Cidrs
   */
  Ipv6Cidrs?: string[];
  /**
   * Port Protocol of the Instance.
   */
  Protocol?: string;
  /**
   * To Port of the Instance.
   */
  ToPort?: number;
};
/**
 * Type definition for `AWS::Lightsail::Instance.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Resource Type definition for AWS::Lightsail::Instance
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html}
 */
export class LightsailInstance extends $Resource<
  "AWS::Lightsail::Instance",
  LightsailInstanceProperties,
  LightsailInstanceAttributes
> {
  public static readonly Type = "AWS::Lightsail::Instance";
  constructor(
    logicalId: string,
    properties: LightsailInstanceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LightsailInstance.Type, properties, options);
  }
}
