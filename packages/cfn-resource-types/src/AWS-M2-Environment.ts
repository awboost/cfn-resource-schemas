import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::M2::Environment`.
 * Represents a runtime environment that can run migrated mainframe applications.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html}
 */
export type M2EnvironmentProperties = {
  /**
   * The description of the environment.
   * @minLength `0`
   * @maxLength `500`
   */
  Description?: string;
  /**
   * The target platform for the environment.
   */
  EngineType: EngineType;
  /**
   * The version of the runtime engine for the environment.
   * @pattern `^\S{1,10}$`
   */
  EngineVersion?: string;
  /**
   * Defines the details of a high availability configuration.
   */
  HighAvailabilityConfig?: HighAvailabilityConfig;
  /**
   * The type of instance underlying the environment.
   * @pattern `^\S{1,20}$`
   */
  InstanceType: string;
  /**
   * The ID or the Amazon Resource Name (ARN) of the customer managed KMS Key used for encrypting environment-related resources.
   * @maxLength `2048`
   */
  KmsKeyId?: string;
  /**
   * The name of the environment.
   * @pattern `^[A-Za-z0-9][A-Za-z0-9_\-]{1,59}$`
   */
  Name: string;
  /**
   * Configures a desired maintenance window for the environment. If you do not provide a value, a random system-generated value will be assigned.
   * @pattern `^\S{1,50}$`
   */
  PreferredMaintenanceWindow?: string;
  /**
   * Specifies whether the environment is publicly accessible.
   */
  PubliclyAccessible?: boolean;
  /**
   * The list of security groups for the VPC associated with this environment.
   */
  SecurityGroupIds?: string[];
  /**
   * The storage configurations defined for the runtime environment.
   */
  StorageConfigurations?: StorageConfiguration[];
  /**
   * The unique identifiers of the subnets assigned to this runtime environment.
   */
  SubnetIds?: string[];
  /**
   * Tags associated to this environment.
   */
  Tags?: TagMap;
};
/**
 * Attribute type definition for `AWS::M2::Environment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html#aws-resource-m2-environment-return-values}
 */
export type M2EnvironmentAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the runtime environment.
   * @pattern `^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+=,@.-]{0,1023}$`
   */
  EnvironmentArn: string;
  /**
   * The unique identifier of the environment.
   * @pattern `^\S{1,80}$`
   */
  EnvironmentId: string;
};
/**
 * Type definition for `AWS::M2::Environment.EfsStorageConfiguration`.
 * Defines the storage configuration for an Amazon EFS file system.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-m2-environment-efsstorageconfiguration.html}
 */
export type EfsStorageConfiguration = {
  /**
   * The file system identifier.
   * @pattern `^\S{1,200}$`
   */
  FileSystemId: string;
  /**
   * The mount point for the file system.
   * @pattern `^\S{1,200}$`
   */
  MountPoint: string;
};
/**
 * Type definition for `AWS::M2::Environment.EngineType`.
 * The target platform for the environment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-m2-environment-enginetype.html}
 */
export type EngineType = "microfocus" | "bluage";
/**
 * Type definition for `AWS::M2::Environment.FsxStorageConfiguration`.
 * Defines the storage configuration for an Amazon FSx file system.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-m2-environment-fsxstorageconfiguration.html}
 */
export type FsxStorageConfiguration = {
  /**
   * The file system identifier.
   * @pattern `^\S{1,200}$`
   */
  FileSystemId: string;
  /**
   * The mount point for the file system.
   * @pattern `^\S{1,200}$`
   */
  MountPoint: string;
};
/**
 * Type definition for `AWS::M2::Environment.HighAvailabilityConfig`.
 * Defines the details of a high availability configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-m2-environment-highavailabilityconfig.html}
 */
export type HighAvailabilityConfig = {
  /**
   * @min `1`
   * @max `100`
   */
  DesiredCapacity: number;
};
/**
 * Type definition for `AWS::M2::Environment.StorageConfiguration`.
 * Defines the storage configuration for an environment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-m2-environment-storageconfiguration.html}
 */
export type StorageConfiguration =
  | {
      /**
       * Defines the storage configuration for an Amazon EFS file system.
       */
      Efs: EfsStorageConfiguration;
    }
  | {
      /**
       * Defines the storage configuration for an Amazon FSx file system.
       */
      Fsx: FsxStorageConfiguration;
    };
/**
 * Type definition for `AWS::M2::Environment.TagMap`.
 * Defines tags associated to an environment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-m2-environment-tagmap.html}
 */
export type TagMap = Record<string, string>;
/**
 * Resource type definition for `AWS::M2::Environment`.
 * Represents a runtime environment that can run migrated mainframe applications.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html}
 */
export class M2Environment extends $Resource<
  "AWS::M2::Environment",
  M2EnvironmentProperties,
  M2EnvironmentAttributes
> {
  public static readonly Type = "AWS::M2::Environment";
  constructor(
    logicalId: string,
    properties: M2EnvironmentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, M2Environment.Type, properties, options);
  }
}
