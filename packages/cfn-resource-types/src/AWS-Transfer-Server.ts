import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Transfer::Server Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-server.html}
 */
export type TransferServerProperties = {
  /**
   * @minLength `0`
   * @maxLength `1600`
   */
  Certificate?: string;
  Domain?: Domain;
  EndpointDetails?: EndpointDetails;
  EndpointType?: EndpointType;
  IdentityProviderDetails?: IdentityProviderDetails;
  IdentityProviderType?: IdentityProviderType;
  /**
   * @minLength `0`
   * @maxLength `2048`
   * @pattern `^(|arn:.*role/\S+)$`
   */
  LoggingRole?: string;
  /**
   * @minLength `0`
   * @maxLength `4096`
   * @pattern `^[\x09-\x0D\x20-\x7E]*$`
   */
  PostAuthenticationLoginBanner?: string;
  /**
   * @minLength `0`
   * @maxLength `4096`
   * @pattern `^[\x09-\x0D\x20-\x7E]*$`
   */
  PreAuthenticationLoginBanner?: string;
  ProtocolDetails?: ProtocolDetails;
  /**
   * @minLength `1`
   * @maxLength `4`
   */
  Protocols?: Protocol[];
  S3StorageOptions?: S3StorageOptions;
  /**
   * @minLength `0`
   * @maxLength `100`
   * @pattern `^TransferSecurityPolicy-.+$`
   */
  SecurityPolicyName?: string;
  /**
   * @minLength `0`
   * @maxLength `1`
   */
  StructuredLogDestinations?: string[];
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  Tags?: Tag[];
  WorkflowDetails?: WorkflowDetails;
};
/**
 * Attribute type definition for `AWS::Transfer::Server`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-server.html#aws-resource-transfer-server-return-values}
 */
export type TransferServerAttributes = {
  /**
   * @minLength `20`
   * @maxLength `1600`
   * @pattern `^arn:\S+$`
   */
  Arn: string;
  /**
   * The list of egress IP addresses of this server. These IP addresses are only relevant for servers that use the AS2 protocol. They are used for sending asynchronous MDNs. These IP addresses are assigned automatically when you create an AS2 server. Additionally, if you update an existing server and add the AS2 protocol, static IP addresses are assigned as well.
   */
  As2ServiceManagedEgressIpAddresses: string[];
  /**
   * @minLength `19`
   * @maxLength `19`
   * @pattern `^s-([0-9a-f]{17})$`
   */
  ServerId: string;
  State: State;
};
/**
 * Type definition for `AWS::Transfer::Server.As2Transport`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-as2transport.html}
 */
export type As2Transport = "HTTP";
/**
 * Type definition for `AWS::Transfer::Server.DirectoryListingOptimization`.
 * Indicates whether optimization to directory listing on S3 servers is used. Disabled by default for compatibility.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-directorylistingoptimization.html}
 */
export type DirectoryListingOptimization = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::Transfer::Server.Domain`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-domain.html}
 */
export type Domain = "S3" | "EFS";
/**
 * Type definition for `AWS::Transfer::Server.EndpointDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-endpointdetails.html}
 */
export type EndpointDetails = {
  AddressAllocationIds?: string[];
  SecurityGroupIds?: string[];
  SubnetIds?: string[];
  /**
   * @minLength `22`
   * @maxLength `22`
   * @pattern `^vpce-[0-9a-f]{17}$`
   */
  VpcEndpointId?: string;
  VpcId?: string;
};
/**
 * Type definition for `AWS::Transfer::Server.EndpointType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-endpointtype.html}
 */
export type EndpointType = "PUBLIC" | "VPC" | "VPC_ENDPOINT";
/**
 * Type definition for `AWS::Transfer::Server.IdentityProviderDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-identityproviderdetails.html}
 */
export type IdentityProviderDetails = {
  /**
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^d-[0-9a-f]{10}$`
   */
  DirectoryId?: string;
  /**
   * @minLength `1`
   * @maxLength `170`
   * @pattern `^arn:[a-z-]+:lambda:.*$`
   */
  Function?: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:.*role/\S+$`
   */
  InvocationRole?: string;
  SftpAuthenticationMethods?: SftpAuthenticationMethods;
  /**
   * @minLength `0`
   * @maxLength `255`
   */
  Url?: string;
};
/**
 * Type definition for `AWS::Transfer::Server.IdentityProviderType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-identityprovidertype.html}
 */
export type IdentityProviderType =
  | "SERVICE_MANAGED"
  | "API_GATEWAY"
  | "AWS_DIRECTORY_SERVICE"
  | "AWS_LAMBDA";
/**
 * Type definition for `AWS::Transfer::Server.Protocol`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-protocol.html}
 */
export type Protocol = "SFTP" | "FTP" | "FTPS" | "AS2";
/**
 * Type definition for `AWS::Transfer::Server.ProtocolDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-protocoldetails.html}
 */
export type ProtocolDetails = {
  /**
   * @minLength `1`
   * @maxLength `1`
   */
  As2Transports?: As2Transport[];
  /**
   * @minLength `0`
   * @maxLength `15`
   */
  PassiveIp?: string;
  SetStatOption?: SetStatOption;
  TlsSessionResumptionMode?: TlsSessionResumptionMode;
};
/**
 * Type definition for `AWS::Transfer::Server.S3StorageOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-s3storageoptions.html}
 */
export type S3StorageOptions = {
  /**
   * Indicates whether optimization to directory listing on S3 servers is used. Disabled by default for compatibility.
   */
  DirectoryListingOptimization?: DirectoryListingOptimization;
};
/**
 * Type definition for `AWS::Transfer::Server.SetStatOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-setstatoption.html}
 */
export type SetStatOption = "DEFAULT" | "ENABLE_NO_OP";
/**
 * Type definition for `AWS::Transfer::Server.SftpAuthenticationMethods`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-sftpauthenticationmethods.html}
 */
export type SftpAuthenticationMethods =
  | "PASSWORD"
  | "PUBLIC_KEY"
  | "PUBLIC_KEY_OR_PASSWORD"
  | "PUBLIC_KEY_AND_PASSWORD";
/**
 * Type definition for `AWS::Transfer::Server.State`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-state.html}
 */
export type State =
  | "OFFLINE"
  | "ONLINE"
  | "STARTING"
  | "STOPPING"
  | "START_FAILED"
  | "STOP_FAILED";
/**
 * Type definition for `AWS::Transfer::Server.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-tag.html}
 */
export type Tag = {
  /**
   * @minLength `0`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Transfer::Server.TlsSessionResumptionMode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-tlssessionresumptionmode.html}
 */
export type TlsSessionResumptionMode = "DISABLED" | "ENABLED" | "ENFORCED";
/**
 * Type definition for `AWS::Transfer::Server.WorkflowDetail`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-workflowdetail.html}
 */
export type WorkflowDetail = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:.*role/\S+$`
   */
  ExecutionRole: string;
  /**
   * @minLength `19`
   * @maxLength `19`
   * @pattern `^w-([a-z0-9]{17})$`
   */
  WorkflowId: string;
};
/**
 * Type definition for `AWS::Transfer::Server.WorkflowDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-workflowdetails.html}
 */
export type WorkflowDetails = {
  /**
   * @minLength `0`
   * @maxLength `1`
   */
  OnPartialUpload?: WorkflowDetail[];
  /**
   * @minLength `0`
   * @maxLength `1`
   */
  OnUpload?: WorkflowDetail[];
};
/**
 * Definition of AWS::Transfer::Server Resource Type
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
