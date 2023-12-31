import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * The AWS::NetworkManager::GlobalNetwork type specifies a global network of the user's account
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-globalnetwork.html}
 */
export type NetworkManagerGlobalNetworkProperties = {
  /**
   * The date and time that the global network was created.
   */
  CreatedAt?: string;
  /**
   * The description of the global network.
   */
  Description?: string;
  /**
   * The state of the global network.
   */
  State?: string;
  /**
   * The tags for the global network.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::NetworkManager::GlobalNetwork`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-globalnetwork.html#aws-resource-networkmanager-globalnetwork-return-values}
 */
export type NetworkManagerGlobalNetworkAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the global network.
   */
  Arn: string;
  /**
   * The ID of the global network.
   */
  Id: string;
};
/**
 * Type definition for `AWS::NetworkManager::GlobalNetwork.Tag`.
 * A key-value pair to associate with a global network resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-globalnetwork-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Value: string;
};
/**
 * The AWS::NetworkManager::GlobalNetwork type specifies a global network of the user's account
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-globalnetwork.html}
 */
export class NetworkManagerGlobalNetwork extends $Resource<
  "AWS::NetworkManager::GlobalNetwork",
  NetworkManagerGlobalNetworkProperties,
  NetworkManagerGlobalNetworkAttributes
> {
  public static readonly Type = "AWS::NetworkManager::GlobalNetwork";
  public static readonly AttributeNames = ["Arn" as const, "Id" as const];
  constructor(
    logicalId: string,
    properties: NetworkManagerGlobalNetworkProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      NetworkManagerGlobalNetwork.Type,
      properties,
      NetworkManagerGlobalNetwork.AttributeNames,
      options,
    );
  }
}
