import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::ClientVpnEndpoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnendpoint.html}
 */
export type EC2ClientVpnEndpointProperties = {
  AuthenticationOptions: ClientAuthenticationRequest[];
  ClientCidrBlock?: string;
  ClientConnectOptions?: ClientConnectOptions;
  ClientLoginBannerOptions?: ClientLoginBannerOptions;
  ClientRouteEnforcementOptions?: ClientRouteEnforcementOptions;
  ConnectionLogOptions: ConnectionLogOptions;
  Description?: string;
  DisconnectOnSessionTimeout?: boolean;
  DnsServers?: string[];
  SecurityGroupIds?: string[];
  SelfServicePortal?: string;
  ServerCertificateArn: string;
  SessionTimeoutHours?: number;
  SplitTunnel?: boolean;
  TagSpecifications?: TagSpecification[];
  TransportProtocol?: string;
  VpcId?: string;
  VpnPort?: number;
};
/**
 * Attribute type definition for `AWS::EC2::ClientVpnEndpoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnendpoint.html#aws-resource-ec2-clientvpnendpoint-return-values}
 */
export type EC2ClientVpnEndpointAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::EC2::ClientVpnEndpoint.CertificateAuthenticationRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-clientvpnendpoint-certificateauthenticationrequest.html}
 */
export type CertificateAuthenticationRequest = {
  ClientRootCertificateChainArn: string;
};
/**
 * Type definition for `AWS::EC2::ClientVpnEndpoint.ClientAuthenticationRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-clientvpnendpoint-clientauthenticationrequest.html}
 */
export type ClientAuthenticationRequest = {
  ActiveDirectory?: DirectoryServiceAuthenticationRequest;
  FederatedAuthentication?: FederatedAuthenticationRequest;
  MutualAuthentication?: CertificateAuthenticationRequest;
  Type: string;
};
/**
 * Type definition for `AWS::EC2::ClientVpnEndpoint.ClientConnectOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-clientvpnendpoint-clientconnectoptions.html}
 */
export type ClientConnectOptions = {
  Enabled: boolean;
  LambdaFunctionArn?: string;
};
/**
 * Type definition for `AWS::EC2::ClientVpnEndpoint.ClientLoginBannerOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-clientvpnendpoint-clientloginbanneroptions.html}
 */
export type ClientLoginBannerOptions = {
  BannerText?: string;
  Enabled: boolean;
};
/**
 * Type definition for `AWS::EC2::ClientVpnEndpoint.ClientRouteEnforcementOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-clientvpnendpoint-clientrouteenforcementoptions.html}
 */
export type ClientRouteEnforcementOptions = {
  Enforced?: boolean;
};
/**
 * Type definition for `AWS::EC2::ClientVpnEndpoint.ConnectionLogOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-clientvpnendpoint-connectionlogoptions.html}
 */
export type ConnectionLogOptions = {
  CloudwatchLogGroup?: string;
  CloudwatchLogStream?: string;
  Enabled: boolean;
};
/**
 * Type definition for `AWS::EC2::ClientVpnEndpoint.DirectoryServiceAuthenticationRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-clientvpnendpoint-directoryserviceauthenticationrequest.html}
 */
export type DirectoryServiceAuthenticationRequest = {
  DirectoryId: string;
};
/**
 * Type definition for `AWS::EC2::ClientVpnEndpoint.FederatedAuthenticationRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-clientvpnendpoint-federatedauthenticationrequest.html}
 */
export type FederatedAuthenticationRequest = {
  SAMLProviderArn: string;
  SelfServiceSAMLProviderArn?: string;
};
/**
 * Type definition for `AWS::EC2::ClientVpnEndpoint.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-clientvpnendpoint-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::EC2::ClientVpnEndpoint.TagSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-clientvpnendpoint-tagspecification.html}
 */
export type TagSpecification = {
  ResourceType: string;
  Tags: Tag[];
};
/**
 * Resource Type definition for AWS::EC2::ClientVpnEndpoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnendpoint.html}
 */
export class EC2ClientVpnEndpoint extends $Resource<
  "AWS::EC2::ClientVpnEndpoint",
  EC2ClientVpnEndpointProperties,
  EC2ClientVpnEndpointAttributes
> {
  public static readonly Type = "AWS::EC2::ClientVpnEndpoint";
  constructor(
    logicalId: string,
    properties: EC2ClientVpnEndpointProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2ClientVpnEndpoint.Type, properties, options);
  }
}
