import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Transfer::Server
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-server.html}
 */
export type TransferServerProperties = {
  Certificate?: string;
  Domain?: string;
  EndpointDetails?: EndpointDetails;
  EndpointType?: string;
  IdentityProviderDetails?: IdentityProviderDetails;
  IdentityProviderType?: string;
  LoggingRole?: string;
  PostAuthenticationLoginBanner?: string;
  PreAuthenticationLoginBanner?: string;
  ProtocolDetails?: ProtocolDetails;
  Protocols?: Protocol[];
  SecurityPolicyName?: string;
  StructuredLogDestinations?: StructuredLogDestination[];
  Tags?: Tag[];
  WorkflowDetails?: WorkflowDetails;
};
/**
 * Attribute type definition for `AWS::Transfer::Server`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-server.html#aws-resource-transfer-server-return-values}
 */
export type TransferServerAttributes = {
  Arn: string;
  ServerId: string;
};
/**
 * Type definition for `AWS::Transfer::Server.As2Transport`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-as2transport.html}
 */
export type As2Transport = Record<string, any>;
/**
 * Type definition for `AWS::Transfer::Server.EndpointDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-endpointdetails.html}
 */
export type EndpointDetails = {
  AddressAllocationIds?: string[];
  SecurityGroupIds?: string[];
  SubnetIds?: string[];
  VpcEndpointId?: string;
  VpcId?: string;
};
/**
 * Type definition for `AWS::Transfer::Server.IdentityProviderDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-identityproviderdetails.html}
 */
export type IdentityProviderDetails = {
  DirectoryId?: string;
  Function?: string;
  InvocationRole?: string;
  SftpAuthenticationMethods?: string;
  Url?: string;
};
/**
 * Type definition for `AWS::Transfer::Server.Protocol`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-protocol.html}
 */
export type Protocol = Record<string, any>;
/**
 * Type definition for `AWS::Transfer::Server.ProtocolDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-protocoldetails.html}
 */
export type ProtocolDetails = {
  As2Transports?: As2Transport[];
  PassiveIp?: string;
  SetStatOption?: string;
  TlsSessionResumptionMode?: string;
};
/**
 * Type definition for `AWS::Transfer::Server.StructuredLogDestination`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-structuredlogdestination.html}
 */
export type StructuredLogDestination = Record<string, any>;
/**
 * Type definition for `AWS::Transfer::Server.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::Transfer::Server.WorkflowDetail`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-workflowdetail.html}
 */
export type WorkflowDetail = {
  ExecutionRole: string;
  WorkflowId: string;
};
/**
 * Type definition for `AWS::Transfer::Server.WorkflowDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-workflowdetails.html}
 */
export type WorkflowDetails = {
  OnPartialUpload?: WorkflowDetail[];
  OnUpload?: WorkflowDetail[];
};
/**
 * Resource Type definition for AWS::Transfer::Server
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-server.html}
 */
export class TransferServer extends $Resource<
  "AWS::Transfer::Server",
  TransferServerProperties,
  TransferServerAttributes
> {
  public static readonly Type = "AWS::Transfer::Server";
  constructor(
    logicalId: string,
    properties: TransferServerProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, TransferServer.Type, properties, options);
  }
}
