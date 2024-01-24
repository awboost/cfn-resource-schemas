import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::EC2::VerifiedAccessEndpoint resource creates an AWS EC2 Verified Access Endpoint.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html}
 */
export type EC2VerifiedAccessEndpointProperties = {
  /**
   * The DNS name for users to reach your application.
   */
  ApplicationDomain: string;
  /**
   * The type of attachment used to provide connectivity between the AWS Verified Access endpoint and the application.
   */
  AttachmentType: string;
  /**
   * A description for the AWS Verified Access endpoint.
   */
  Description?: string;
  /**
   * The ARN of a public TLS/SSL certificate imported into or created with ACM.
   */
  DomainCertificateArn: string;
  /**
   * A custom identifier that gets prepended to a DNS name that is generated for the endpoint.
   */
  EndpointDomainPrefix: string;
  /**
   * The type of AWS Verified Access endpoint. Incoming application requests will be sent to an IP address, load balancer or a network interface depending on the endpoint type specified.The type of AWS Verified Access endpoint. Incoming application requests will be sent to an IP address, load balancer or a network interface depending on the endpoint type specified.
   */
  EndpointType: string;
  /**
   * The load balancer details if creating the AWS Verified Access endpoint as load-balancer type.
   */
  LoadBalancerOptions?: LoadBalancerOptions;
  /**
   * The options for network-interface type endpoint.
   */
  NetworkInterfaceOptions?: NetworkInterfaceOptions;
  /**
   * The AWS Verified Access policy document.
   */
  PolicyDocument?: string;
  /**
   * The status of the Verified Access policy.
   */
  PolicyEnabled?: boolean;
  /**
   * The IDs of the security groups for the endpoint.
   */
  SecurityGroupIds?: string[];
  /**
   * The configuration options for customer provided KMS encryption.
   */
  SseSpecification?: SseSpecification;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  /**
   * The ID of the AWS Verified Access group.
   */
  VerifiedAccessGroupId: string;
};
/**
 * Attribute type definition for `AWS::EC2::VerifiedAccessEndpoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#aws-resource-ec2-verifiedaccessendpoint-return-values}
 */
export type EC2VerifiedAccessEndpointAttributes = {
  /**
   * The creation time.
   */
  CreationTime: string;
  /**
   * Returned if endpoint has a device trust provider attached.
   */
  DeviceValidationDomain: string;
  /**
   * A DNS name that is generated for the endpoint.
   */
  EndpointDomain: string;
  /**
   * The last updated time.
   */
  LastUpdatedTime: string;
  /**
   * The endpoint status.
   */
  Status: string;
  /**
   * The ID of the AWS Verified Access endpoint.
   */
  VerifiedAccessEndpointId: string;
  /**
   * The ID of the AWS Verified Access instance.
   */
  VerifiedAccessInstanceId: string;
};
/**
 * Type definition for `AWS::EC2::VerifiedAccessEndpoint.LoadBalancerOptions`.
 * The load balancer details if creating the AWS Verified Access endpoint as load-balancertype.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-verifiedaccessendpoint-loadbalanceroptions.html}
 */
export type LoadBalancerOptions = {
  /**
   * The ARN of the load balancer.
   */
  LoadBalancerArn?: string;
  /**
   * The IP port number.
   * @min `1`
   * @max `65535`
   */
  Port?: number;
  /**
   * The IP protocol.
   */
  Protocol?: string;
  /**
   * The IDs of the subnets.
   */
  SubnetIds?: string[];
};
/**
 * Type definition for `AWS::EC2::VerifiedAccessEndpoint.NetworkInterfaceOptions`.
 * The options for network-interface type endpoint.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-verifiedaccessendpoint-networkinterfaceoptions.html}
 */
export type NetworkInterfaceOptions = {
  /**
   * The ID of the network interface.
   */
  NetworkInterfaceId?: string;
  /**
   * The IP port number.
   * @min `1`
   * @max `65535`
   */
  Port?: number;
  /**
   * The IP protocol.
   */
  Protocol?: string;
};
/**
 * Type definition for `AWS::EC2::VerifiedAccessEndpoint.SseSpecification`.
 * The configuration options for customer provided KMS encryption.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-verifiedaccessendpoint-ssespecification.html}
 */
export type SseSpecification = {
  /**
   * Whether to encrypt the policy with the provided key or disable encryption
   */
  CustomerManagedKeyEnabled?: boolean;
  /**
   * KMS Key Arn used to encrypt the group policy
   */
  KmsKeyArn?: string;
};
/**
 * Type definition for `AWS::EC2::VerifiedAccessEndpoint.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-verifiedaccessendpoint-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * The AWS::EC2::VerifiedAccessEndpoint resource creates an AWS EC2 Verified Access Endpoint.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html}
 */
export class EC2VerifiedAccessEndpoint extends $Resource<
  "AWS::EC2::VerifiedAccessEndpoint",
  EC2VerifiedAccessEndpointProperties,
  EC2VerifiedAccessEndpointAttributes
> {
  public static readonly Type = "AWS::EC2::VerifiedAccessEndpoint";
  constructor(
    logicalId: string,
    properties: EC2VerifiedAccessEndpointProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2VerifiedAccessEndpoint.Type, properties, options);
  }
}
