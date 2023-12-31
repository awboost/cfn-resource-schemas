import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Lightsail::Disk
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html}
 */
export type LightsailDiskProperties = {
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
   * The names to use for your new Lightsail disk.
   * @minLength `1`
   * @maxLength `254`
   * @pattern `^[a-zA-Z0-9][\w\-.]*[a-zA-Z0-9]$`
   */
  DiskName: string;
  /**
   * Location of a resource.
   */
  Location?: Location;
  /**
   * Size of the Lightsail disk
   */
  SizeInGb: number;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Lightsail::Disk`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html#aws-resource-lightsail-disk-return-values}
 */
export type LightsailDiskAttributes = {
  /**
   * Name of the attached Lightsail Instance
   */
  AttachedTo: string;
  /**
   * Attachment State of the Lightsail disk
   */
  AttachmentState: string;
  DiskArn: string;
  /**
   * Iops of the Lightsail disk
   */
  Iops: number;
  /**
   * Check is Disk is attached state
   */
  IsAttached: boolean;
  /**
   * Path of the  attached Disk
   */
  Path: string;
  /**
   * Resource type of Lightsail instance.
   */
  ResourceType: string;
  /**
   * State of the Lightsail disk
   */
  State: string;
  /**
   * Support code to help identify any issues
   */
  SupportCode: string;
};
/**
 * Type definition for `AWS::Lightsail::Disk.AddOn`.
 * A addon associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-disk-addon.html}
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
 * Type definition for `AWS::Lightsail::Disk.AutoSnapshotAddOn`.
 * An object that represents additional parameters when enabling or modifying the automatic snapshot add-on
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-disk-autosnapshotaddon.html}
 */
export type AutoSnapshotAddOn = {
  /**
   * The daily time when an automatic snapshot will be created.
   * @pattern `^[0-9]{2}:00$`
   */
  SnapshotTimeOfDay?: string;
};
/**
 * Type definition for `AWS::Lightsail::Disk.Location`.
 * Location of a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-disk-location.html}
 */
export type Location = {
  /**
   * The Availability Zone in which to create your disk. Use the following format: us-east-2a (case sensitive). Be sure to add the include Availability Zones parameter to your request.
   */
  AvailabilityZone?: string;
  /**
   * The Region Name in which to create your disk.
   */
  RegionName?: string;
};
/**
 * Type definition for `AWS::Lightsail::Disk.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-disk-tag.html}
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
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Resource Type definition for AWS::Lightsail::Disk
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html}
 */
export class LightsailDisk extends $Resource<
  "AWS::Lightsail::Disk",
  LightsailDiskProperties,
  LightsailDiskAttributes
> {
  public static readonly Type = "AWS::Lightsail::Disk";
  public static readonly AttributeNames = [
    "AttachedTo" as const,
    "AttachmentState" as const,
    "DiskArn" as const,
    "Iops" as const,
    "IsAttached" as const,
    "Path" as const,
    "ResourceType" as const,
    "State" as const,
    "SupportCode" as const,
  ];
  constructor(
    logicalId: string,
    properties: LightsailDiskProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      LightsailDisk.Type,
      properties,
      LightsailDisk.AttributeNames,
      options,
    );
  }
}
