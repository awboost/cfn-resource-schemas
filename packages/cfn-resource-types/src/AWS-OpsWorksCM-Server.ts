import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::OpsWorksCM::Server
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworkscm-server.html}
 */
export type OpsWorksCMServerProperties = {
  AssociatePublicIpAddress?: boolean;
  BackupId?: string;
  BackupRetentionCount?: number;
  CustomCertificate?: string;
  CustomDomain?: string;
  CustomPrivateKey?: string;
  DisableAutomatedBackup?: boolean;
  Engine?: string;
  EngineAttributes?: EngineAttribute[];
  EngineModel?: string;
  EngineVersion?: string;
  InstanceProfileArn: string;
  InstanceType: string;
  KeyPair?: string;
  PreferredBackupWindow?: string;
  PreferredMaintenanceWindow?: string;
  SecurityGroupIds?: string[];
  ServiceRoleArn: string;
  SubnetIds?: string[];
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::OpsWorksCM::Server`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworkscm-server.html#aws-resource-opsworkscm-server-return-values}
 */
export type OpsWorksCMServerAttributes = {
  Arn: string;
  Endpoint: string;
  Id: string;
  ServerName: string;
};
/**
 * Type definition for `AWS::OpsWorksCM::Server.EngineAttribute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworkscm-server-engineattribute.html}
 */
export type EngineAttribute = {
  Name?: string;
  Value?: string;
};
/**
 * Type definition for `AWS::OpsWorksCM::Server.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworkscm-server-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::OpsWorksCM::Server
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworkscm-server.html}
 */
export class OpsWorksCMServer extends $Resource<
  "AWS::OpsWorksCM::Server",
  OpsWorksCMServerProperties,
  OpsWorksCMServerAttributes
> {
  public static readonly Type = "AWS::OpsWorksCM::Server";
  constructor(
    logicalId: string,
    properties: OpsWorksCMServerProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, OpsWorksCMServer.Type, properties, options);
  }
}
