import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::AppMesh::Route
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-route.html}
 */
export type AppMeshRouteProperties = {
  MeshName: string;
  MeshOwner?: string;
  RouteName?: string;
  Spec: RouteSpec;
  Tags?: Tag[];
  VirtualRouterName: string;
};
/**
 * Attribute type definition for `AWS::AppMesh::Route`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-route.html#aws-resource-appmesh-route-return-values}
 */
export type AppMeshRouteAttributes = {
  Arn: string;
  Id: string;
  ResourceOwner: string;
  Uid: string;
};
/**
 * Type definition for `AWS::AppMesh::Route.Duration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-duration.html}
 */
export type Duration = {
  Unit: string;
  Value: number;
};
/**
 * Type definition for `AWS::AppMesh::Route.GrpcRetryPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcretrypolicy.html}
 */
export type GrpcRetryPolicy = {
  GrpcRetryEvents?: string[];
  HttpRetryEvents?: string[];
  MaxRetries: number;
  PerRetryTimeout: Duration;
  TcpRetryEvents?: string[];
};
/**
 * Type definition for `AWS::AppMesh::Route.GrpcRoute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcroute.html}
 */
export type GrpcRoute = {
  Action: GrpcRouteAction;
  Match: GrpcRouteMatch;
  RetryPolicy?: GrpcRetryPolicy;
  Timeout?: GrpcTimeout;
};
/**
 * Type definition for `AWS::AppMesh::Route.GrpcRouteAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcrouteaction.html}
 */
export type GrpcRouteAction = {
  WeightedTargets: WeightedTarget[];
};
/**
 * Type definition for `AWS::AppMesh::Route.GrpcRouteMatch`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcroutematch.html}
 */
export type GrpcRouteMatch = {
  Metadata?: GrpcRouteMetadata[];
  MethodName?: string;
  Port?: number;
  ServiceName?: string;
};
/**
 * Type definition for `AWS::AppMesh::Route.GrpcRouteMetadata`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcroutemetadata.html}
 */
export type GrpcRouteMetadata = {
  Invert?: boolean;
  Match?: GrpcRouteMetadataMatchMethod;
  Name: string;
};
/**
 * Type definition for `AWS::AppMesh::Route.GrpcRouteMetadataMatchMethod`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcroutemetadatamatchmethod.html}
 */
export type GrpcRouteMetadataMatchMethod = {
  Exact?: string;
  Prefix?: string;
  Range?: MatchRange;
  Regex?: string;
  Suffix?: string;
};
/**
 * Type definition for `AWS::AppMesh::Route.GrpcTimeout`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpctimeout.html}
 */
export type GrpcTimeout = {
  Idle?: Duration;
  PerRequest?: Duration;
};
/**
 * Type definition for `AWS::AppMesh::Route.HeaderMatchMethod`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-headermatchmethod.html}
 */
export type HeaderMatchMethod = {
  Exact?: string;
  Prefix?: string;
  Range?: MatchRange;
  Regex?: string;
  Suffix?: string;
};
/**
 * Type definition for `AWS::AppMesh::Route.HttpPathMatch`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httppathmatch.html}
 */
export type HttpPathMatch = {
  Exact?: string;
  Regex?: string;
};
/**
 * Type definition for `AWS::AppMesh::Route.HttpQueryParameterMatch`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httpqueryparametermatch.html}
 */
export type HttpQueryParameterMatch = {
  Exact?: string;
};
/**
 * Type definition for `AWS::AppMesh::Route.HttpRetryPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httpretrypolicy.html}
 */
export type HttpRetryPolicy = {
  HttpRetryEvents?: string[];
  MaxRetries: number;
  PerRetryTimeout: Duration;
  TcpRetryEvents?: string[];
};
/**
 * Type definition for `AWS::AppMesh::Route.HttpRoute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httproute.html}
 */
export type HttpRoute = {
  Action: HttpRouteAction;
  Match: HttpRouteMatch;
  RetryPolicy?: HttpRetryPolicy;
  Timeout?: HttpTimeout;
};
/**
 * Type definition for `AWS::AppMesh::Route.HttpRouteAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httprouteaction.html}
 */
export type HttpRouteAction = {
  WeightedTargets: WeightedTarget[];
};
/**
 * Type definition for `AWS::AppMesh::Route.HttpRouteHeader`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httprouteheader.html}
 */
export type HttpRouteHeader = {
  Invert?: boolean;
  Match?: HeaderMatchMethod;
  Name: string;
};
/**
 * Type definition for `AWS::AppMesh::Route.HttpRouteMatch`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httproutematch.html}
 */
export type HttpRouteMatch = {
  Headers?: HttpRouteHeader[];
  Method?: string;
  Path?: HttpPathMatch;
  Port?: number;
  Prefix?: string;
  QueryParameters?: QueryParameter[];
  Scheme?: string;
};
/**
 * Type definition for `AWS::AppMesh::Route.HttpTimeout`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httptimeout.html}
 */
export type HttpTimeout = {
  Idle?: Duration;
  PerRequest?: Duration;
};
/**
 * Type definition for `AWS::AppMesh::Route.MatchRange`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-matchrange.html}
 */
export type MatchRange = {
  End: number;
  Start: number;
};
/**
 * Type definition for `AWS::AppMesh::Route.QueryParameter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-queryparameter.html}
 */
export type QueryParameter = {
  Match?: HttpQueryParameterMatch;
  Name: string;
};
/**
 * Type definition for `AWS::AppMesh::Route.RouteSpec`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-routespec.html}
 */
export type RouteSpec = {
  GrpcRoute?: GrpcRoute;
  Http2Route?: HttpRoute;
  HttpRoute?: HttpRoute;
  Priority?: number;
  TcpRoute?: TcpRoute;
};
/**
 * Type definition for `AWS::AppMesh::Route.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::AppMesh::Route.TcpRoute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-tcproute.html}
 */
export type TcpRoute = {
  Action: TcpRouteAction;
  Match?: TcpRouteMatch;
  Timeout?: TcpTimeout;
};
/**
 * Type definition for `AWS::AppMesh::Route.TcpRouteAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-tcprouteaction.html}
 */
export type TcpRouteAction = {
  WeightedTargets: WeightedTarget[];
};
/**
 * Type definition for `AWS::AppMesh::Route.TcpRouteMatch`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-tcproutematch.html}
 */
export type TcpRouteMatch = {
  Port?: number;
};
/**
 * Type definition for `AWS::AppMesh::Route.TcpTimeout`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-tcptimeout.html}
 */
export type TcpTimeout = {
  Idle?: Duration;
};
/**
 * Type definition for `AWS::AppMesh::Route.WeightedTarget`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-weightedtarget.html}
 */
export type WeightedTarget = {
  Port?: number;
  VirtualNode: string;
  Weight: number;
};
/**
 * Resource Type definition for AWS::AppMesh::Route
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-route.html}
 */
export class AppMeshRoute extends $Resource<
  "AWS::AppMesh::Route",
  AppMeshRouteProperties,
  AppMeshRouteAttributes
> {
  public static readonly Type = "AWS::AppMesh::Route";
  public static readonly AttributeNames = [
    "Arn" as const,
    "Id" as const,
    "ResourceOwner" as const,
    "Uid" as const,
  ];
  constructor(
    logicalId: string,
    properties: AppMeshRouteProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      AppMeshRoute.Type,
      properties,
      AppMeshRoute.AttributeNames,
      options,
    );
  }
}
