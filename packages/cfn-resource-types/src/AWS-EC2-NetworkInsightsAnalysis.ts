import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource schema for AWS::EC2::NetworkInsightsAnalysis
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsanalysis.html}
 */
export type EC2NetworkInsightsAnalysisProperties = {
  AdditionalAccounts?: string[];
  FilterInArns?: string[];
  NetworkInsightsPathId: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::EC2::NetworkInsightsAnalysis`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsanalysis.html#aws-resource-ec2-networkinsightsanalysis-return-values}
 */
export type EC2NetworkInsightsAnalysisAttributes = {
  AlternatePathHints: AlternatePathHint[];
  Explanations: Explanation[];
  ForwardPathComponents: PathComponent[];
  NetworkInsightsAnalysisArn: string;
  NetworkInsightsAnalysisId: string;
  NetworkPathFound: boolean;
  ReturnPathComponents: PathComponent[];
  StartDate: string;
  Status: "running" | "failed" | "succeeded";
  StatusMessage: string;
  SuggestedAccounts: string[];
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsAnalysis.AdditionalDetail`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-additionaldetail.html}
 */
export type AdditionalDetail = {
  AdditionalDetailType?: string;
  Component?: AnalysisComponent;
  LoadBalancers?: AnalysisComponent[];
  ServiceName?: string;
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsAnalysis.AlternatePathHint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-alternatepathhint.html}
 */
export type AlternatePathHint = {
  ComponentArn?: string;
  ComponentId?: string;
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsAnalysis.AnalysisAclRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-analysisaclrule.html}
 */
export type AnalysisAclRule = {
  Cidr?: string;
  Egress?: boolean;
  PortRange?: PortRange;
  Protocol?: string;
  RuleAction?: string;
  RuleNumber?: number;
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsAnalysis.AnalysisComponent`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-analysiscomponent.html}
 */
export type AnalysisComponent = {
  Arn?: string;
  Id?: string;
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsAnalysis.AnalysisLoadBalancerListener`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-analysisloadbalancerlistener.html}
 */
export type AnalysisLoadBalancerListener = {
  InstancePort?: number;
  LoadBalancerPort?: number;
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsAnalysis.AnalysisLoadBalancerTarget`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-analysisloadbalancertarget.html}
 */
export type AnalysisLoadBalancerTarget = {
  Address?: string;
  AvailabilityZone?: string;
  Instance?: AnalysisComponent;
  Port?: number;
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsAnalysis.AnalysisPacketHeader`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-analysispacketheader.html}
 */
export type AnalysisPacketHeader = {
  DestinationAddresses?: string[];
  DestinationPortRanges?: PortRange[];
  Protocol?: string;
  SourceAddresses?: string[];
  SourcePortRanges?: PortRange[];
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsAnalysis.AnalysisRouteTableRoute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-analysisroutetableroute.html}
 */
export type AnalysisRouteTableRoute = {
  NatGatewayId?: string;
  NetworkInterfaceId?: string;
  Origin?: string;
  State?: string;
  TransitGatewayId?: string;
  VpcPeeringConnectionId?: string;
  destinationCidr?: string;
  destinationPrefixListId?: string;
  egressOnlyInternetGatewayId?: string;
  gatewayId?: string;
  instanceId?: string;
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsAnalysis.AnalysisSecurityGroupRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-analysissecuritygrouprule.html}
 */
export type AnalysisSecurityGroupRule = {
  Cidr?: string;
  Direction?: string;
  PortRange?: PortRange;
  PrefixListId?: string;
  Protocol?: string;
  SecurityGroupId?: string;
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsAnalysis.Explanation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-explanation.html}
 */
export type Explanation = {
  Acl?: AnalysisComponent;
  AclRule?: AnalysisAclRule;
  Address?: string;
  Addresses?: string[];
  AttachedTo?: AnalysisComponent;
  AvailabilityZones?: string[];
  Cidrs?: string[];
  ClassicLoadBalancerListener?: AnalysisLoadBalancerListener;
  Component?: AnalysisComponent;
  ComponentAccount?: string;
  ComponentRegion?: string;
  CustomerGateway?: AnalysisComponent;
  Destination?: AnalysisComponent;
  DestinationVpc?: AnalysisComponent;
  Direction?: string;
  ElasticLoadBalancerListener?: AnalysisComponent;
  ExplanationCode?: string;
  IngressRouteTable?: AnalysisComponent;
  InternetGateway?: AnalysisComponent;
  LoadBalancerArn?: string;
  LoadBalancerListenerPort?: number;
  LoadBalancerTarget?: AnalysisLoadBalancerTarget;
  LoadBalancerTargetGroup?: AnalysisComponent;
  LoadBalancerTargetGroups?: AnalysisComponent[];
  LoadBalancerTargetPort?: number;
  MissingComponent?: string;
  NatGateway?: AnalysisComponent;
  NetworkInterface?: AnalysisComponent;
  PacketField?: string;
  Port?: number;
  PortRanges?: PortRange[];
  PrefixList?: AnalysisComponent;
  Protocols?: string[];
  RouteTable?: AnalysisComponent;
  RouteTableRoute?: AnalysisRouteTableRoute;
  SecurityGroup?: AnalysisComponent;
  SecurityGroupRule?: AnalysisSecurityGroupRule;
  SecurityGroups?: AnalysisComponent[];
  SourceVpc?: AnalysisComponent;
  State?: string;
  Subnet?: AnalysisComponent;
  SubnetRouteTable?: AnalysisComponent;
  TransitGateway?: AnalysisComponent;
  TransitGatewayAttachment?: AnalysisComponent;
  TransitGatewayRouteTable?: AnalysisComponent;
  TransitGatewayRouteTableRoute?: TransitGatewayRouteTableRoute;
  Vpc?: AnalysisComponent;
  VpcPeeringConnection?: AnalysisComponent;
  VpnConnection?: AnalysisComponent;
  VpnGateway?: AnalysisComponent;
  vpcEndpoint?: AnalysisComponent;
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsAnalysis.PathComponent`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-pathcomponent.html}
 */
export type PathComponent = {
  AclRule?: AnalysisAclRule;
  AdditionalDetails?: AdditionalDetail[];
  Component?: AnalysisComponent;
  DestinationVpc?: AnalysisComponent;
  ElasticLoadBalancerListener?: AnalysisComponent;
  Explanations?: Explanation[];
  InboundHeader?: AnalysisPacketHeader;
  OutboundHeader?: AnalysisPacketHeader;
  RouteTableRoute?: AnalysisRouteTableRoute;
  SecurityGroupRule?: AnalysisSecurityGroupRule;
  SequenceNumber?: number;
  ServiceName?: string;
  SourceVpc?: AnalysisComponent;
  Subnet?: AnalysisComponent;
  TransitGateway?: AnalysisComponent;
  TransitGatewayRouteTableRoute?: TransitGatewayRouteTableRoute;
  Vpc?: AnalysisComponent;
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsAnalysis.PortRange`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-portrange.html}
 */
export type PortRange = {
  From?: number;
  To?: number;
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsAnalysis.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-tag.html}
 */
export type Tag = {
  Key: string;
  Value?: string;
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsAnalysis.TransitGatewayRouteTableRoute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-transitgatewayroutetableroute.html}
 */
export type TransitGatewayRouteTableRoute = {
  AttachmentId?: string;
  DestinationCidr?: string;
  PrefixListId?: string;
  ResourceId?: string;
  ResourceType?: string;
  RouteOrigin?: string;
  State?: string;
};
/**
 * Resource schema for AWS::EC2::NetworkInsightsAnalysis
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsanalysis.html}
 */
export class EC2NetworkInsightsAnalysis extends $Resource<
  "AWS::EC2::NetworkInsightsAnalysis",
  EC2NetworkInsightsAnalysisProperties,
  EC2NetworkInsightsAnalysisAttributes
> {
  public static readonly Type = "AWS::EC2::NetworkInsightsAnalysis";
  public static readonly AttributeNames = [
    "AlternatePathHints" as const,
    "Explanations" as const,
    "ForwardPathComponents" as const,
    "NetworkInsightsAnalysisArn" as const,
    "NetworkInsightsAnalysisId" as const,
    "NetworkPathFound" as const,
    "ReturnPathComponents" as const,
    "StartDate" as const,
    "Status" as const,
    "StatusMessage" as const,
    "SuggestedAccounts" as const,
  ];
  constructor(
    logicalId: string,
    properties: EC2NetworkInsightsAnalysisProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2NetworkInsightsAnalysis.Type,
      properties,
      EC2NetworkInsightsAnalysis.AttributeNames,
      options,
    );
  }
}
