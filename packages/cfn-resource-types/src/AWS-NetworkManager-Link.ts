import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::NetworkManager::Link type describes a link.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-link.html}
 */
export type NetworkManagerLinkProperties = {
  /**
   * The Bandwidth for the link.
   */
  Bandwidth: Bandwidth;
  /**
   * The description of the link.
   */
  Description?: string;
  /**
   * The ID of the global network.
   */
  GlobalNetworkId: string;
  /**
   * The provider of the link.
   */
  Provider?: string;
  /**
   * The ID of the site
   */
  SiteId: string;
  /**
   * The tags for the link.
   */
  Tags?: Tag[];
  /**
   * The type of the link.
   */
  Type?: string;
};
/**
 * Attribute type definition for `AWS::NetworkManager::Link`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-link.html#aws-resource-networkmanager-link-return-values}
 */
export type NetworkManagerLinkAttributes = {
  /**
   * The date and time that the device was created.
   */
  CreatedAt: string;
  /**
   * The Amazon Resource Name (ARN) of the link.
   */
  LinkArn: string;
  /**
   * The ID of the link.
   */
  LinkId: string;
  /**
   * The state of the link.
   */
  State: string;
};
/**
 * Type definition for `AWS::NetworkManager::Link.Bandwidth`.
 * The bandwidth for the link.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-link-bandwidth.html}
 */
export type Bandwidth = {
  /**
   * Download speed in Mbps.
   */
  DownloadSpeed?: number;
  /**
   * Upload speed in Mbps.
   */
  UploadSpeed?: number;
};
/**
 * Type definition for `AWS::NetworkManager::Link.Tag`.
 * A key-value pair to associate with a link resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-link-tag.html}
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
 * The AWS::NetworkManager::Link type describes a link.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-link.html}
 */
export class NetworkManagerLink extends $Resource<
  "AWS::NetworkManager::Link",
  NetworkManagerLinkProperties,
  NetworkManagerLinkAttributes
> {
  public static readonly Type = "AWS::NetworkManager::Link";
  constructor(
    logicalId: string,
    properties: NetworkManagerLinkProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, NetworkManagerLink.Type, properties, options);
  }
}
