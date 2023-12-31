import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Shield::Protection`.
 * Enables AWS Shield Advanced for a specific AWS resource. The resource can be an Amazon CloudFront distribution, Amazon Route 53 hosted zone, AWS Global Accelerator standard accelerator, Elastic IP Address, Application Load Balancer, or a Classic Load Balancer. You can protect Amazon EC2 instances and Network Load Balancers by association with protected Amazon EC2 Elastic IP addresses.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-protection.html}
 */
export type ShieldProtectionProperties = {
  /**
   * The automatic application layer DDoS mitigation settings for a Protection. This configuration determines whether Shield Advanced automatically manages rules in the web ACL in order to respond to application layer events that Shield Advanced determines to be DDoS attacks.
   */
  ApplicationLayerAutomaticResponseConfiguration?: ApplicationLayerAutomaticResponseConfiguration;
  /**
   * The Amazon Resource Names (ARNs) of the health check to associate with the protection.
   * @maxLength `1`
   */
  HealthCheckArns?: string[];
  /**
   * Friendly name for the Protection.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[ a-zA-Z0-9_\.\-]*`
   */
  Name: string;
  /**
   * The ARN (Amazon Resource Name) of the resource to be protected.
   * @minLength `1`
   * @maxLength `2048`
   */
  ResourceArn: string;
  /**
   * One or more tag key-value pairs for the Protection object.
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Shield::Protection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-protection.html#aws-resource-shield-protection-return-values}
 */
export type ShieldProtectionAttributes = {
  /**
   * The ARN (Amazon Resource Name) of the protection.
   */
  ProtectionArn: string;
  /**
   * The unique identifier (ID) of the protection.
   */
  ProtectionId: string;
};
/**
 * Type definition for `AWS::Shield::Protection.ApplicationLayerAutomaticResponseConfiguration`.
 * The automatic application layer DDoS mitigation settings for a Protection. This configuration determines whether Shield Advanced automatically manages rules in the web ACL in order to respond to application layer events that Shield Advanced determines to be DDoS attacks.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-shield-protection-applicationlayerautomaticresponseconfiguration.html}
 */
export type ApplicationLayerAutomaticResponseConfiguration = {
  /**
   * Specifies the action setting that Shield Advanced should use in the AWS WAF rules that it creates on behalf of the protected resource in response to DDoS attacks. You specify this as part of the configuration for the automatic application layer DDoS mitigation feature, when you enable or update automatic mitigation. Shield Advanced creates the AWS WAF rules in a Shield Advanced-managed rule group, inside the web ACL that you have associated with the resource.
   */
  Action:
    | {
        /**
         * Specifies that Shield Advanced should configure its AWS WAF rules with the AWS WAF `Count` action.
        You must specify exactly one action, either `Block` or `Count`.
         */
        Count?: Record<string, any>;
      }
    | {
        /**
         * Specifies that Shield Advanced should configure its AWS WAF rules with the AWS WAF `Block` action.
        You must specify exactly one action, either `Block` or `Count`.
         */
        Block?: Record<string, any>;
      };
  /**
   * Indicates whether automatic application layer DDoS mitigation is enabled for the protection.
   */
  Status: "ENABLED" | "DISABLED";
};
/**
 * Type definition for `AWS::Shield::Protection.Tag`.
 * A tag associated with an AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing or other management. Typically, the tag key represents a category, such as "environment", and the tag value represents a specific value within that category, such as "test," "development," or "production". Or you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-shield-protection-tag.html}
 */
export type Tag = {
  /**
   * Part of the key:value pair that defines a tag. You can use a tag key to describe a category of information, such as "customer." Tag keys are case-sensitive.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * Part of the key:value pair that defines a tag. You can use a tag value to describe a specific value within a category, such as "companyA" or "companyB." Tag values are case-sensitive.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::Shield::Protection`.
 * Enables AWS Shield Advanced for a specific AWS resource. The resource can be an Amazon CloudFront distribution, Amazon Route 53 hosted zone, AWS Global Accelerator standard accelerator, Elastic IP Address, Application Load Balancer, or a Classic Load Balancer. You can protect Amazon EC2 instances and Network Load Balancers by association with protected Amazon EC2 Elastic IP addresses.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-protection.html}
 */
export class ShieldProtection extends $Resource<
  "AWS::Shield::Protection",
  ShieldProtectionProperties,
  ShieldProtectionAttributes
> {
  public static readonly Type = "AWS::Shield::Protection";
  constructor(
    logicalId: string,
    properties: ShieldProtectionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ShieldProtection.Type, properties, options);
  }
}
