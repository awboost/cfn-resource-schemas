import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AppMesh::GatewayRoute
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html}
 */
export type AppMeshGatewayRouteProperties = {
  GatewayRouteName?: string;
  MeshName: string;
  MeshOwner?: string;
  Spec: GatewayRouteSpec;
  Tags?: Tag[];
  VirtualGatewayName: string;
};
/**
 * Attribute type definition for `AWS::AppMesh::GatewayRoute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#aws-resource-appmesh-gatewayroute-return-values}
 */
export type AppMeshGatewayRouteAttributes = {
  Arn: string;
  Id: string;
  ResourceOwner: string;
  Uid: string;
};
/**
 * Type definition for `AWS::AppMesh::GatewayRoute.GatewayRouteHostnameMatch`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutehostnamematch.html}
 */
export type GatewayRouteHostnameMatch = {
  Exact?: string;
  Suffix?: string;
};
/**
 * Type definition for `AWS::AppMesh::GatewayRoute.GatewayRouteHostnameRewrite`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutehostnamerewrite.html}
 */
export type GatewayRouteHostnameRewrite = {
  DefaultTargetHostname?: string;
};
/**
 * Type definition for `AWS::AppMesh::GatewayRoute.GatewayRouteMetadataMatch`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutemetadatamatch.html}
 */
export type GatewayRouteMetadataMatch = {
  Exact?: string;
  Prefix?: string;
  Range?: GatewayRouteRangeMatch;
  Regex?: string;
  Suffix?: string;
};
/**
 * Type definition for `AWS::AppMesh::GatewayRoute.GatewayRouteRangeMatch`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayrouterangematch.html}
 */
export type GatewayRouteRangeMatch = {
  End: number;
  Start: number;
};
/**
 * Type definition for `AWS::AppMesh::GatewayRoute.GatewayRouteSpec`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutespec.html}
 */
export type GatewayRouteSpec = {
  GrpcRoute?: GrpcGatewayRoute;
  Http2Route?: HttpGatewayRoute;
  HttpRoute?: HttpGatewayRoute;
  Priority?: number;
};
/**
 * Type definition for `AWS::AppMesh::GatewayRoute.GatewayRouteTarget`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutetarget.html}
 */
export type GatewayRouteTarget = {
  Port?: number;
  VirtualService: GatewayRouteVirtualService;
};
/**
 * Type definition for `AWS::AppMesh::GatewayRoute.GatewayRouteVirtualService`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutevirtualservice.html}
 */
export type GatewayRouteVirtualService = {
  VirtualServiceName: string;
};
/**
 * Type definition for `AWS::AppMesh::GatewayRoute.GrpcGatewayRoute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-grpcgatewayroute.html}
 */
export type GrpcGatewayRoute = {
  Action: GrpcGatewayRouteAction;
  Match: GrpcGatewayRouteMatch;
};
/**
 * Type definition for `AWS::AppMesh::GatewayRoute.GrpcGatewayRouteAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-grpcgatewayrouteaction.html}
 */
export type GrpcGatewayRouteAction = {
  Rewrite?: GrpcGatewayRouteRewrite;
  Target: GatewayRouteTarget;
};
/**
 * Type definition for `AWS::AppMesh::GatewayRoute.GrpcGatewayRouteMatch`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-grpcgatewayroutematch.html}
 */
export type GrpcGatewayRouteMatch = {
  Hostname?: GatewayRouteHostnameMatch;
  Metadata?: GrpcGatewayRouteMetadata[];
  Port?: number;
  ServiceName?: string;
};
/**
 * Type definition for `AWS::AppMesh::GatewayRoute.GrpcGatewayRouteMetadata`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-grpcgatewayroutemetadata.html}
 */
export type GrpcGatewayRouteMetadata = {
  Invert?: boolean;
  Match?: GatewayRouteMetadataMatch;
  Name: string;
};
/**
 * Type definition for `AWS::AppMesh::GatewayRoute.GrpcGatewayRouteRewrite`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-grpcgatewayrouterewrite.html}
 */
export type GrpcGatewayRouteRewrite = {
  Hostname?: GatewayRouteHostnameRewrite;
};
/**
 * Type definition for `AWS::AppMesh::GatewayRoute.HttpGatewayRoute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayroute.html}
 */
export type HttpGatewayRoute = {
  Action: HttpGatewayRouteAction;
  Match: HttpGatewayRouteMatch;
};
/**
 * Type definition for `AWS::AppMesh::GatewayRoute.HttpGatewayRouteAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayrouteaction.html}
 */
export type HttpGatewayRouteAction = {
  Rewrite?: HttpGatewayRouteRewrite;
  Target: GatewayRouteTarget;
};
/**
 * Type definition for `AWS::AppMesh::GatewayRoute.HttpGatewayRouteHeader`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayrouteheader.html}
 */
export type HttpGatewayRouteHeader = {
  Invert?: boolean;
  Match?: HttpGatewayRouteHeaderMatch;
  Name: string;
};
/**
 * Type definition for `AWS::AppMesh::GatewayRoute.HttpGatewayRouteHeaderMatch`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayrouteheadermatch.html}
 */
export type HttpGatewayRouteHeaderMatch = {
  Exact?: string;
  Prefix?: string;
  Range?: GatewayRouteRangeMatch;
  Regex?: string;
  Suffix?: string;
};
/**
 * Type definition for `AWS::AppMesh::GatewayRoute.HttpGatewayRouteMatch`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayroutematch.html}
 */
export type HttpGatewayRouteMatch = {
  Headers?: HttpGatewayRouteHeader[];
  Hostname?: GatewayRouteHostnameMatch;
  Method?: string;
  Path?: HttpPathMatch;
  Port?: number;
  Prefix?: string;
  QueryParameters?: QueryParameter[];
};
/**
 * Type definition for `AWS::AppMesh::GatewayRoute.HttpGatewayRoutePathRewrite`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayroutepathrewrite.html}
 */
export type HttpGatewayRoutePathRewrite = {
  Exact?: string;
};
/**
 * Type definition for `AWS::AppMesh::GatewayRoute.HttpGatewayRoutePrefixRewrite`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayrouteprefixrewrite.html}
 */
export type HttpGatewayRoutePrefixRewrite = {
  DefaultPrefix?: string;
  Value?: string;
};
/**
 * Type definition for `AWS::AppMesh::GatewayRoute.HttpGatewayRouteRewrite`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayrouterewrite.html}
 */
export type HttpGatewayRouteRewrite = {
  Hostname?: GatewayRouteHostnameRewrite;
  Path?: HttpGatewayRoutePathRewrite;
  Prefix?: HttpGatewayRoutePrefixRewrite;
};
/**
 * Type definition for `AWS::AppMesh::GatewayRoute.HttpPathMatch`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httppathmatch.html}
 */
export type HttpPathMatch = {
  Exact?: string;
  Regex?: string;
};
/**
 * Type definition for `AWS::AppMesh::GatewayRoute.HttpQueryParameterMatch`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpqueryparametermatch.html}
 */
export type HttpQueryParameterMatch = {
  Exact?: string;
};
/**
 * Type definition for `AWS::AppMesh::GatewayRoute.QueryParameter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-queryparameter.html}
 */
export type QueryParameter = {
  Match?: HttpQueryParameterMatch;
  Name: string;
};
/**
 * Type definition for `AWS::AppMesh::GatewayRoute.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::AppMesh::GatewayRoute
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html}
 */
export class AppMeshGatewayRoute extends $Resource<
  "AWS::AppMesh::GatewayRoute",
  AppMeshGatewayRouteProperties,
  AppMeshGatewayRouteAttributes
> {
  public static readonly Type = "AWS::AppMesh::GatewayRoute";
  constructor(
    logicalId: string,
    properties: AppMeshGatewayRouteProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppMeshGatewayRoute.Type, properties, options);
  }
}
