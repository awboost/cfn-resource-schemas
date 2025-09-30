import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for AWS::AmazonMQ::Broker
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html}
 */
export type AmazonMQBrokerProperties = {
  AuthenticationStrategy?: string;
  AutoMinorVersionUpgrade?: boolean;
  /**
   * @pattern `^[0-9A-Za-z_-]{1,50}$`
   */
  BrokerName: string;
  /**
     * The intended configuration (ID and revision) to be set when creating or updating.
    This property is write-only so that applications of a ConfigurationAssociation do not cause drift.
    
     */
  Configuration?: ConfigurationId;
  DataReplicationMode?: string;
  /**
     * The ARN of the primary broker that is used to replicate data from in a data replication pair when creating a replica.
    This field is only used at creation-time. Changes to it subsequently are ignored by CloudFormation.
    Information on the current primary is available on the DataReplicationMetadata object returned by the API.
    
     * @pattern `^arn:.*`
     */
  DataReplicationPrimaryBrokerArn?: string;
  DeploymentMode: string;
  EncryptionOptions?: EncryptionOptions;
  EngineType: string;
  /**
   * The version specified to use. See also EngineVersionCurrent.
   */
  EngineVersion?: string;
  HostInstanceType: string;
  LdapServerMetadata?: LdapServerMetadata;
  Logs?: LogList;
  MaintenanceWindowStartTime?: MaintenanceWindow;
  PubliclyAccessible: boolean;
  /**
   * @minLength `1`
   * @maxLength `5`
   */
  SecurityGroups?: string[];
  StorageType?: string;
  SubnetIds?: string[];
  Tags?: TagsEntry[];
  /**
     * Users to configure on the broker.
    For RabbitMQ, this should be one user, created when the broker is created, and changes thereafter are ignored.
    For ActiveMQ, changes to anything but Password are detected and will trigger an update,
    but changes to Password cannot be detected so updates to Password may not take effect unless there is some other change.
    
     */
  Users?: User[];
};
/**
 * Attribute type definition for `AWS::AmazonMQ::Broker`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html#aws-resource-amazonmq-broker-return-values}
 */
export type AmazonMQBrokerAttributes = {
  AmqpEndpoints: string[];
  /**
   * @pattern `^arn:.*`
   */
  Arn: string;
  /**
   * The ID of the current actual configuration.
   */
  ConfigurationId: string;
  /**
   * The revision of the current actual configuration.
   */
  ConfigurationRevision: string;
  ConsoleURLs: string[];
  /**
   * The version in use. This may have more precision than the specified EngineVersion.
   */
  EngineVersionCurrent: string;
  Id: string;
  IpAddresses: string[];
  MqttEndpoints: string[];
  OpenWireEndpoints: string[];
  StompEndpoints: string[];
  WssEndpoints: string[];
};
/**
 * Type definition for `AWS::AmazonMQ::Broker.ConfigurationId`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-configurationid.html}
 */
export type ConfigurationId = {
  Id: string;
  Revision: number;
};
/**
 * Type definition for `AWS::AmazonMQ::Broker.EncryptionOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-encryptionoptions.html}
 */
export type EncryptionOptions = {
  /**
     * The customer master key (CMK) to use for the A KMS (KMS).
    This key is used to encrypt your data at rest. If not provided, Amazon MQ will use a default CMK to encrypt your data.
    The Key ARN is recommended so that drift can be detected,
    but a key ID or key alias will also be accepted for API compatibility reasons.
    
     */
  KmsKeyId?: string;
  UseAwsOwnedKey: boolean;
};
/**
 * Type definition for `AWS::AmazonMQ::Broker.LdapServerMetadata`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-ldapservermetadata.html}
 */
export type LdapServerMetadata = {
  Hosts: string[];
  RoleBase: string;
  RoleName?: string;
  RoleSearchMatching: string;
  RoleSearchSubtree?: boolean;
  ServiceAccountPassword?: string;
  ServiceAccountUsername: string;
  UserBase: string;
  UserRoleName?: string;
  UserSearchMatching: string;
  UserSearchSubtree?: boolean;
};
/**
 * Type definition for `AWS::AmazonMQ::Broker.LogList`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-loglist.html}
 */
export type LogList = {
  Audit?: boolean;
  General?: boolean;
};
/**
 * Type definition for `AWS::AmazonMQ::Broker.MaintenanceWindow`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-maintenancewindow.html}
 */
export type MaintenanceWindow = {
  /**
     * _Allowed Values_: <code>MONDAY</code> | <code>TUESDAY</code> | <code>WEDNESDAY</code> | <code>THURSDAY</code> | <code>FRIDAY</code> | <code>SATURDAY</code> | <code>SUNDAY</code>
    
     */
  DayOfWeek: string;
  /**
     * The time, in 24-hour format, and use only numbers separated by a colon, HH:MM or HH:MM:SS. Example: 13:05.
    When writing YAML this may need to be quoted to prevent a timestamp being read and converted to a number of minutes or seconds.
    
     * @pattern `^[0-9]{1,2}:[0-9]{2}(:[0-9]{2})?$`
     */
  TimeOfDay: string;
  /**
   * The time zone, UTC by default, in either the Country/City format, or the UTC offset format.
   */
  TimeZone: string;
};
/**
 * Type definition for `AWS::AmazonMQ::Broker.TagsEntry`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-tagsentry.html}
 */
export type TagsEntry = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::AmazonMQ::Broker.User`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-user.html}
 */
export type User = {
  ConsoleAccess?: boolean;
  /**
   * @maxLength `20`
   */
  Groups?: string[];
  /**
   * @minLength `12`
   * @pattern `^[^,:=]+$`
   */
  Password: string;
  ReplicationUser?: boolean;
  /**
   * @pattern `^[A-Za-z0-9_.~-]{2,100}$`
   */
  Username: string;
};
/**
 * Resource type definition for AWS::AmazonMQ::Broker
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html}
 */
export class AmazonMQBroker extends $Resource<
  "AWS::AmazonMQ::Broker",
  AmazonMQBrokerProperties,
  AmazonMQBrokerAttributes
> {
  public static readonly Type = "AWS::AmazonMQ::Broker";
  constructor(
    logicalId: string,
    properties: AmazonMQBrokerProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AmazonMQBroker.Type, properties, options);
  }
}
