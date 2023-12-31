import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AppMesh::VirtualNode
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html}
 */
export type AppMeshVirtualNodeProperties = {
  MeshName: string;
  MeshOwner?: string;
  Spec: VirtualNodeSpec;
  Tags?: Tag[];
  VirtualNodeName?: string;
};
/**
 * Attribute type definition for `AWS::AppMesh::VirtualNode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#aws-resource-appmesh-virtualnode-return-values}
 */
export type AppMeshVirtualNodeAttributes = {
  Arn: string;
  Id: string;
  ResourceOwner: string;
  Uid: string;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.AccessLog`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-accesslog.html}
 */
export type AccessLog = {
  File?: FileAccessLog;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.AwsCloudMapInstanceAttribute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-awscloudmapinstanceattribute.html}
 */
export type AwsCloudMapInstanceAttribute = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.AwsCloudMapServiceDiscovery`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-awscloudmapservicediscovery.html}
 */
export type AwsCloudMapServiceDiscovery = {
  Attributes?: AwsCloudMapInstanceAttribute[];
  IpPreference?: string;
  NamespaceName: string;
  ServiceName: string;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.Backend`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-backend.html}
 */
export type Backend = {
  VirtualService?: VirtualServiceBackend;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.BackendDefaults`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-backenddefaults.html}
 */
export type BackendDefaults = {
  ClientPolicy?: ClientPolicy;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.ClientPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-clientpolicy.html}
 */
export type ClientPolicy = {
  TLS?: ClientPolicyTls;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.ClientPolicyTls`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-clientpolicytls.html}
 */
export type ClientPolicyTls = {
  Certificate?: ClientTlsCertificate;
  Enforce?: boolean;
  Ports?: number[];
  Validation: TlsValidationContext;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.ClientTlsCertificate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-clienttlscertificate.html}
 */
export type ClientTlsCertificate = {
  File?: ListenerTlsFileCertificate;
  SDS?: ListenerTlsSdsCertificate;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.DnsServiceDiscovery`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-dnsservicediscovery.html}
 */
export type DnsServiceDiscovery = {
  Hostname: string;
  IpPreference?: string;
  ResponseType?: string;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.Duration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-duration.html}
 */
export type Duration = {
  Unit: string;
  Value: number;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.FileAccessLog`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-fileaccesslog.html}
 */
export type FileAccessLog = {
  Format?: LoggingFormat;
  Path: string;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.GrpcTimeout`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-grpctimeout.html}
 */
export type GrpcTimeout = {
  Idle?: Duration;
  PerRequest?: Duration;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.HealthCheck`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-healthcheck.html}
 */
export type HealthCheck = {
  HealthyThreshold: number;
  IntervalMillis: number;
  Path?: string;
  Port?: number;
  Protocol: string;
  TimeoutMillis: number;
  UnhealthyThreshold: number;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.HttpTimeout`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-httptimeout.html}
 */
export type HttpTimeout = {
  Idle?: Duration;
  PerRequest?: Duration;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.JsonFormatRef`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-jsonformatref.html}
 */
export type JsonFormatRef = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.Listener`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listener.html}
 */
export type Listener = {
  ConnectionPool?: VirtualNodeConnectionPool;
  HealthCheck?: HealthCheck;
  OutlierDetection?: OutlierDetection;
  PortMapping: PortMapping;
  TLS?: ListenerTls;
  Timeout?: ListenerTimeout;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.ListenerTimeout`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertimeout.html}
 */
export type ListenerTimeout = {
  GRPC?: GrpcTimeout;
  HTTP?: HttpTimeout;
  HTTP2?: HttpTimeout;
  TCP?: TcpTimeout;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.ListenerTls`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertls.html}
 */
export type ListenerTls = {
  Certificate: ListenerTlsCertificate;
  Mode: string;
  Validation?: ListenerTlsValidationContext;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.ListenerTlsAcmCertificate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertlsacmcertificate.html}
 */
export type ListenerTlsAcmCertificate = {
  CertificateArn: string;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.ListenerTlsCertificate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertlscertificate.html}
 */
export type ListenerTlsCertificate = {
  ACM?: ListenerTlsAcmCertificate;
  File?: ListenerTlsFileCertificate;
  SDS?: ListenerTlsSdsCertificate;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.ListenerTlsFileCertificate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertlsfilecertificate.html}
 */
export type ListenerTlsFileCertificate = {
  CertificateChain: string;
  PrivateKey: string;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.ListenerTlsSdsCertificate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertlssdscertificate.html}
 */
export type ListenerTlsSdsCertificate = {
  SecretName: string;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.ListenerTlsValidationContext`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertlsvalidationcontext.html}
 */
export type ListenerTlsValidationContext = {
  SubjectAlternativeNames?: SubjectAlternativeNames;
  Trust: ListenerTlsValidationContextTrust;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.ListenerTlsValidationContextTrust`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertlsvalidationcontexttrust.html}
 */
export type ListenerTlsValidationContextTrust = {
  File?: TlsValidationContextFileTrust;
  SDS?: TlsValidationContextSdsTrust;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.Logging`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-logging.html}
 */
export type Logging = {
  AccessLog?: AccessLog;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.LoggingFormat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-loggingformat.html}
 */
export type LoggingFormat = {
  Json?: JsonFormatRef[];
  Text?: string;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.OutlierDetection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-outlierdetection.html}
 */
export type OutlierDetection = {
  BaseEjectionDuration: Duration;
  Interval: Duration;
  MaxEjectionPercent: number;
  MaxServerErrors: number;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.PortMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-portmapping.html}
 */
export type PortMapping = {
  Port: number;
  Protocol: string;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.ServiceDiscovery`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-servicediscovery.html}
 */
export type ServiceDiscovery = {
  AWSCloudMap?: AwsCloudMapServiceDiscovery;
  DNS?: DnsServiceDiscovery;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.SubjectAlternativeNameMatchers`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-subjectalternativenamematchers.html}
 */
export type SubjectAlternativeNameMatchers = {
  Exact?: string[];
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.SubjectAlternativeNames`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-subjectalternativenames.html}
 */
export type SubjectAlternativeNames = {
  Match: SubjectAlternativeNameMatchers;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.TcpTimeout`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-tcptimeout.html}
 */
export type TcpTimeout = {
  Idle?: Duration;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.TlsValidationContext`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-tlsvalidationcontext.html}
 */
export type TlsValidationContext = {
  SubjectAlternativeNames?: SubjectAlternativeNames;
  Trust: TlsValidationContextTrust;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.TlsValidationContextAcmTrust`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-tlsvalidationcontextacmtrust.html}
 */
export type TlsValidationContextAcmTrust = {
  CertificateAuthorityArns: string[];
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.TlsValidationContextFileTrust`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-tlsvalidationcontextfiletrust.html}
 */
export type TlsValidationContextFileTrust = {
  CertificateChain: string;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.TlsValidationContextSdsTrust`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-tlsvalidationcontextsdstrust.html}
 */
export type TlsValidationContextSdsTrust = {
  SecretName: string;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.TlsValidationContextTrust`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-tlsvalidationcontexttrust.html}
 */
export type TlsValidationContextTrust = {
  ACM?: TlsValidationContextAcmTrust;
  File?: TlsValidationContextFileTrust;
  SDS?: TlsValidationContextSdsTrust;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.VirtualNodeConnectionPool`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodeconnectionpool.html}
 */
export type VirtualNodeConnectionPool = {
  GRPC?: VirtualNodeGrpcConnectionPool;
  HTTP?: VirtualNodeHttpConnectionPool;
  HTTP2?: VirtualNodeHttp2ConnectionPool;
  TCP?: VirtualNodeTcpConnectionPool;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.VirtualNodeGrpcConnectionPool`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodegrpcconnectionpool.html}
 */
export type VirtualNodeGrpcConnectionPool = {
  MaxRequests: number;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.VirtualNodeHttp2ConnectionPool`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodehttp2connectionpool.html}
 */
export type VirtualNodeHttp2ConnectionPool = {
  MaxRequests: number;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.VirtualNodeHttpConnectionPool`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodehttpconnectionpool.html}
 */
export type VirtualNodeHttpConnectionPool = {
  MaxConnections: number;
  MaxPendingRequests?: number;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.VirtualNodeSpec`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodespec.html}
 */
export type VirtualNodeSpec = {
  BackendDefaults?: BackendDefaults;
  Backends?: Backend[];
  Listeners?: Listener[];
  Logging?: Logging;
  ServiceDiscovery?: ServiceDiscovery;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.VirtualNodeTcpConnectionPool`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodetcpconnectionpool.html}
 */
export type VirtualNodeTcpConnectionPool = {
  MaxConnections: number;
};
/**
 * Type definition for `AWS::AppMesh::VirtualNode.VirtualServiceBackend`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualservicebackend.html}
 */
export type VirtualServiceBackend = {
  ClientPolicy?: ClientPolicy;
  VirtualServiceName: string;
};
/**
 * Resource Type definition for AWS::AppMesh::VirtualNode
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html}
 */
export class AppMeshVirtualNode extends $Resource<
  "AWS::AppMesh::VirtualNode",
  AppMeshVirtualNodeProperties,
  AppMeshVirtualNodeAttributes
> {
  public static readonly Type = "AWS::AppMesh::VirtualNode";
  constructor(
    logicalId: string,
    properties: AppMeshVirtualNodeProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppMeshVirtualNode.Type, properties, options);
  }
}
