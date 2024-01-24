import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Route53RecoveryReadiness::ResourceSet`.
 * Schema for the AWS Route53 Recovery Readiness ResourceSet Resource and API.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-resourceset.html}
 */
export type Route53RecoveryReadinessResourceSetProperties = {
  /**
   * The name of the resource set to create.
   */
  ResourceSetName?: string;
  /**
     * The resource type of the resources in the resource set. Enter one of the following values for resource type:
    
    AWS: :AutoScaling: :AutoScalingGroup, AWS: :CloudWatch: :Alarm, AWS: :EC2: :CustomerGateway, AWS: :DynamoDB: :Table, AWS: :EC2: :Volume, AWS: :ElasticLoadBalancing: :LoadBalancer, AWS: :ElasticLoadBalancingV2: :LoadBalancer, AWS: :MSK: :Cluster, AWS: :RDS: :DBCluster, AWS: :Route53: :HealthCheck, AWS: :SQS: :Queue, AWS: :SNS: :Topic, AWS: :SNS: :Subscription, AWS: :EC2: :VPC, AWS: :EC2: :VPNConnection, AWS: :EC2: :VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource
     */
  ResourceSetType: string;
  /**
   * A list of resource objects in the resource set.
   * @minLength `1`
   * @maxLength `6`
   */
  Resources: Resource[];
  /**
   * A tag to associate with the parameters for a resource set.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Route53RecoveryReadiness::ResourceSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-resourceset.html#aws-resource-route53recoveryreadiness-resourceset-return-values}
 */
export type Route53RecoveryReadinessResourceSetAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the resource set.
   * @minLength `1`
   * @maxLength `256`
   */
  ResourceSetArn: string;
};
/**
 * Type definition for `AWS::Route53RecoveryReadiness::ResourceSet.DNSTargetResource`.
 * A component for DNS/routing control readiness checks.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoveryreadiness-resourceset-dnstargetresource.html}
 */
export type DNSTargetResource = {
  /**
   * The domain name that acts as an ingress point to a portion of the customer application.
   */
  DomainName?: string;
  /**
   * The hosted zone Amazon Resource Name (ARN) that contains the DNS record with the provided name of the target resource.
   */
  HostedZoneArn?: string;
  /**
   * The Route 53 record set ID that will uniquely identify a DNS record, given a name and a type.
   */
  RecordSetId?: string;
  /**
   * The type of DNS record of the target resource.
   */
  RecordType?: string;
  /**
   * The target resource that the Route 53 record points to.
   */
  TargetResource?: TargetResource;
};
/**
 * Type definition for `AWS::Route53RecoveryReadiness::ResourceSet.NLBResource`.
 * The Network Load Balancer resource that a DNS target resource points to.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoveryreadiness-resourceset-nlbresource.html}
 */
export type NLBResource = {
  /**
   * A Network Load Balancer resource Amazon Resource Name (ARN).
   */
  Arn?: string;
};
/**
 * Type definition for `AWS::Route53RecoveryReadiness::ResourceSet.R53ResourceRecord`.
 * The Route 53 resource that a DNS target resource record points to.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoveryreadiness-resourceset-r53resourcerecord.html}
 */
export type R53ResourceRecord = {
  /**
   * The DNS target domain name.
   */
  DomainName?: string;
  /**
   * The Resource Record set id.
   */
  RecordSetId?: string;
};
/**
 * Type definition for `AWS::Route53RecoveryReadiness::ResourceSet.Resource`.
 * The resource element of a ResourceSet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoveryreadiness-resourceset-resource.html}
 */
export type Resource = {
  /**
   * The component identifier of the resource, generated when DNS target resource is used.
   */
  ComponentId?: string;
  /**
   * A component for DNS/routing control readiness checks.
   */
  DnsTargetResource?: DNSTargetResource;
  /**
   * A list of recovery group Amazon Resource Names (ARNs) and cell ARNs that this resource is contained within.
   */
  ReadinessScopes?: string[];
  /**
   * The Amazon Resource Name (ARN) of the AWS resource.
   */
  ResourceArn?: string;
};
/**
 * Type definition for `AWS::Route53RecoveryReadiness::ResourceSet.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoveryreadiness-resourceset-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::Route53RecoveryReadiness::ResourceSet.TargetResource`.
 * The target resource that the Route 53 record points to.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoveryreadiness-resourceset-targetresource.html}
 */
export type TargetResource = {
  /**
   * The Network Load Balancer resource that a DNS target resource points to.
   */
  NLBResource?: NLBResource;
  /**
   * The Route 53 resource that a DNS target resource record points to.
   */
  R53Resource?: R53ResourceRecord;
};
/**
 * Resource type definition for `AWS::Route53RecoveryReadiness::ResourceSet`.
 * Schema for the AWS Route53 Recovery Readiness ResourceSet Resource and API.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-resourceset.html}
 */
export class Route53RecoveryReadinessResourceSet extends $Resource<
  "AWS::Route53RecoveryReadiness::ResourceSet",
  Route53RecoveryReadinessResourceSetProperties,
  Route53RecoveryReadinessResourceSetAttributes
> {
  public static readonly Type = "AWS::Route53RecoveryReadiness::ResourceSet";
  constructor(
    logicalId: string,
    properties: Route53RecoveryReadinessResourceSetProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      Route53RecoveryReadinessResourceSet.Type,
      properties,
      options,
    );
  }
}
