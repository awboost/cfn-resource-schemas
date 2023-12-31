import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AppMesh::VirtualGateway
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html}
 */
export type AppMeshVirtualGatewayProperties = {
  MeshName: string;
  MeshOwner?: string;
  Spec: VirtualGatewaySpec;
  Tags?: Tag[];
  VirtualGatewayName?: string;
};
/**
 * Attribute type definition for `AWS::AppMesh::VirtualGateway`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#aws-resource-appmesh-virtualgateway-return-values}
 */
export type AppMeshVirtualGatewayAttributes = {
  Arn: string;
  Id: string;
  ResourceOwner: string;
  Uid: string;
};
/**
 * Type definition for `AWS::AppMesh::VirtualGateway.JsonFormatRef`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-jsonformatref.html}
 */
export type JsonFormatRef = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::AppMesh::VirtualGateway.LoggingFormat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-loggingformat.html}
 */
export type LoggingFormat = {
  Json?: JsonFormatRef[];
  Text?: string;
};
/**
 * Type definition for `AWS::AppMesh::VirtualGateway.SubjectAlternativeNameMatchers`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-subjectalternativenamematchers.html}
 */
export type SubjectAlternativeNameMatchers = {
  Exact?: string[];
};
/**
 * Type definition for `AWS::AppMesh::VirtualGateway.SubjectAlternativeNames`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-subjectalternativenames.html}
 */
export type SubjectAlternativeNames = {
  Match: SubjectAlternativeNameMatchers;
};
/**
 * Type definition for `AWS::AppMesh::VirtualGateway.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::AppMesh::VirtualGateway.VirtualGatewayAccessLog`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayaccesslog.html}
 */
export type VirtualGatewayAccessLog = {
  File?: VirtualGatewayFileAccessLog;
};
/**
 * Type definition for `AWS::AppMesh::VirtualGateway.VirtualGatewayBackendDefaults`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaybackenddefaults.html}
 */
export type VirtualGatewayBackendDefaults = {
  ClientPolicy?: VirtualGatewayClientPolicy;
};
/**
 * Type definition for `AWS::AppMesh::VirtualGateway.VirtualGatewayClientPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayclientpolicy.html}
 */
export type VirtualGatewayClientPolicy = {
  TLS?: VirtualGatewayClientPolicyTls;
};
/**
 * Type definition for `AWS::AppMesh::VirtualGateway.VirtualGatewayClientPolicyTls`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayclientpolicytls.html}
 */
export type VirtualGatewayClientPolicyTls = {
  Certificate?: VirtualGatewayClientTlsCertificate;
  Enforce?: boolean;
  Ports?: number[];
  Validation: VirtualGatewayTlsValidationContext;
};
/**
 * Type definition for `AWS::AppMesh::VirtualGateway.VirtualGatewayClientTlsCertificate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayclienttlscertificate.html}
 */
export type VirtualGatewayClientTlsCertificate = {
  File?: VirtualGatewayListenerTlsFileCertificate;
  SDS?: VirtualGatewayListenerTlsSdsCertificate;
};
/**
 * Type definition for `AWS::AppMesh::VirtualGateway.VirtualGatewayConnectionPool`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayconnectionpool.html}
 */
export type VirtualGatewayConnectionPool = {
  GRPC?: VirtualGatewayGrpcConnectionPool;
  HTTP?: VirtualGatewayHttpConnectionPool;
  HTTP2?: VirtualGatewayHttp2ConnectionPool;
};
/**
 * Type definition for `AWS::AppMesh::VirtualGateway.VirtualGatewayFileAccessLog`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayfileaccesslog.html}
 */
export type VirtualGatewayFileAccessLog = {
  Format?: LoggingFormat;
  Path: string;
};
/**
 * Type definition for `AWS::AppMesh::VirtualGateway.VirtualGatewayGrpcConnectionPool`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaygrpcconnectionpool.html}
 */
export type VirtualGatewayGrpcConnectionPool = {
  MaxRequests: number;
};
/**
 * Type definition for `AWS::AppMesh::VirtualGateway.VirtualGatewayHealthCheckPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayhealthcheckpolicy.html}
 */
export type VirtualGatewayHealthCheckPolicy = {
  HealthyThreshold: number;
  IntervalMillis: number;
  Path?: string;
  Port?: number;
  Protocol: string;
  TimeoutMillis: number;
  UnhealthyThreshold: number;
};
/**
 * Type definition for `AWS::AppMesh::VirtualGateway.VirtualGatewayHttp2ConnectionPool`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayhttp2connectionpool.html}
 */
export type VirtualGatewayHttp2ConnectionPool = {
  MaxRequests: number;
};
/**
 * Type definition for `AWS::AppMesh::VirtualGateway.VirtualGatewayHttpConnectionPool`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayhttpconnectionpool.html}
 */
export type VirtualGatewayHttpConnectionPool = {
  MaxConnections: number;
  MaxPendingRequests?: number;
};
/**
 * Type definition for `AWS::AppMesh::VirtualGateway.VirtualGatewayListener`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistener.html}
 */
export type VirtualGatewayListener = {
  ConnectionPool?: VirtualGatewayConnectionPool;
  HealthCheck?: VirtualGatewayHealthCheckPolicy;
  PortMapping: VirtualGatewayPortMapping;
  TLS?: VirtualGatewayListenerTls;
};
/**
 * Type definition for `AWS::AppMesh::VirtualGateway.VirtualGatewayListenerTls`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertls.html}
 */
export type VirtualGatewayListenerTls = {
  Certificate: VirtualGatewayListenerTlsCertificate;
  Mode: string;
  Validation?: VirtualGatewayListenerTlsValidationContext;
};
/**
 * Type definition for `AWS::AppMesh::VirtualGateway.VirtualGatewayListenerTlsAcmCertificate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlsacmcertificate.html}
 */
export type VirtualGatewayListenerTlsAcmCertificate = {
  CertificateArn: string;
};
/**
 * Type definition for `AWS::AppMesh::VirtualGateway.VirtualGatewayListenerTlsCertificate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlscertificate.html}
 */
export type VirtualGatewayListenerTlsCertificate = {
  ACM?: VirtualGatewayListenerTlsAcmCertificate;
  File?: VirtualGatewayListenerTlsFileCertificate;
  SDS?: VirtualGatewayListenerTlsSdsCertificate;
};
/**
 * Type definition for `AWS::AppMesh::VirtualGateway.VirtualGatewayListenerTlsFileCertificate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlsfilecertificate.html}
 */
export type VirtualGatewayListenerTlsFileCertificate = {
  CertificateChain: string;
  PrivateKey: string;
};
/**
 * Type definition for `AWS::AppMesh::VirtualGateway.VirtualGatewayListenerTlsSdsCertificate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlssdscertificate.html}
 */
export type VirtualGatewayListenerTlsSdsCertificate = {
  SecretName: string;
};
/**
 * Type definition for `AWS::AppMesh::VirtualGateway.VirtualGatewayListenerTlsValidationContext`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlsvalidationcontext.html}
 */
export type VirtualGatewayListenerTlsValidationContext = {
  SubjectAlternativeNames?: SubjectAlternativeNames;
  Trust: VirtualGatewayListenerTlsValidationContextTrust;
};
/**
 * Type definition for `AWS::AppMesh::VirtualGateway.VirtualGatewayListenerTlsValidationContextTrust`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlsvalidationcontexttrust.html}
 */
export type VirtualGatewayListenerTlsValidationContextTrust = {
  File?: VirtualGatewayTlsValidationContextFileTrust;
  SDS?: VirtualGatewayTlsValidationContextSdsTrust;
};
/**
 * Type definition for `AWS::AppMesh::VirtualGateway.VirtualGatewayLogging`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylogging.html}
 */
export type VirtualGatewayLogging = {
  AccessLog?: VirtualGatewayAccessLog;
};
/**
 * Type definition for `AWS::AppMesh::VirtualGateway.VirtualGatewayPortMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayportmapping.html}
 */
export type VirtualGatewayPortMapping = {
  Port: number;
  Protocol: string;
};
/**
 * Type definition for `AWS::AppMesh::VirtualGateway.VirtualGatewaySpec`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayspec.html}
 */
export type VirtualGatewaySpec = {
  BackendDefaults?: VirtualGatewayBackendDefaults;
  Listeners: VirtualGatewayListener[];
  Logging?: VirtualGatewayLogging;
};
/**
 * Type definition for `AWS::AppMesh::VirtualGateway.VirtualGatewayTlsValidationContext`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontext.html}
 */
export type VirtualGatewayTlsValidationContext = {
  SubjectAlternativeNames?: SubjectAlternativeNames;
  Trust: VirtualGatewayTlsValidationContextTrust;
};
/**
 * Type definition for `AWS::AppMesh::VirtualGateway.VirtualGatewayTlsValidationContextAcmTrust`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontextacmtrust.html}
 */
export type VirtualGatewayTlsValidationContextAcmTrust = {
  CertificateAuthorityArns: string[];
};
/**
 * Type definition for `AWS::AppMesh::VirtualGateway.VirtualGatewayTlsValidationContextFileTrust`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontextfiletrust.html}
 */
export type VirtualGatewayTlsValidationContextFileTrust = {
  CertificateChain: string;
};
/**
 * Type definition for `AWS::AppMesh::VirtualGateway.VirtualGatewayTlsValidationContextSdsTrust`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontextsdstrust.html}
 */
export type VirtualGatewayTlsValidationContextSdsTrust = {
  SecretName: string;
};
/**
 * Type definition for `AWS::AppMesh::VirtualGateway.VirtualGatewayTlsValidationContextTrust`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontexttrust.html}
 */
export type VirtualGatewayTlsValidationContextTrust = {
  ACM?: VirtualGatewayTlsValidationContextAcmTrust;
  File?: VirtualGatewayTlsValidationContextFileTrust;
  SDS?: VirtualGatewayTlsValidationContextSdsTrust;
};
/**
 * Resource Type definition for AWS::AppMesh::VirtualGateway
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html}
 */
export class AppMeshVirtualGateway extends $Resource<
  "AWS::AppMesh::VirtualGateway",
  AppMeshVirtualGatewayProperties,
  AppMeshVirtualGatewayAttributes
> {
  public static readonly Type = "AWS::AppMesh::VirtualGateway";
  constructor(
    logicalId: string,
    properties: AppMeshVirtualGatewayProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppMeshVirtualGateway.Type, properties, options);
  }
}
