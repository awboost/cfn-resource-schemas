import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AmazonMQ::Broker
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html}
 */
export type AmazonMQBrokerProperties = {
  AuthenticationStrategy?: string;
  AutoMinorVersionUpgrade: boolean;
  BrokerName: string;
  Configuration?: ConfigurationId;
  DataReplicationMode?: string;
  DataReplicationPrimaryBrokerArn?: string;
  DeploymentMode: string;
  EncryptionOptions?: EncryptionOptions;
  EngineType: string;
  EngineVersion: string;
  HostInstanceType: string;
  LdapServerMetadata?: LdapServerMetadata;
  Logs?: LogList;
  MaintenanceWindowStartTime?: MaintenanceWindow;
  PubliclyAccessible: boolean;
  SecurityGroups?: string[];
  StorageType?: string;
  SubnetIds?: string[];
  Tags?: TagsEntry[];
  Users: User[];
};
/**
 * Attribute type definition for `AWS::AmazonMQ::Broker`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html#aws-resource-amazonmq-broker-return-values}
 */
export type AmazonMQBrokerAttributes = {
  AmqpEndpoints: string[];
  Arn: string;
  ConfigurationId: string;
  ConfigurationRevision: number;
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
  ServiceAccountPassword: string;
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
  DayOfWeek: string;
  TimeOfDay: string;
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
  Groups?: string[];
  Password: string;
  Username: string;
};
/**
 * Resource Type definition for AWS::AmazonMQ::Broker
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
