import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::NetworkManager::Site type describes a site.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-site.html}
 */
export type NetworkManagerSiteProperties = {
  /**
   * The description of the site.
   */
  Description?: string;
  /**
   * The ID of the global network.
   */
  GlobalNetworkId: string;
  /**
   * The location of the site.
   */
  Location?: Location;
  /**
   * The tags for the site.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::NetworkManager::Site`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-site.html#aws-resource-networkmanager-site-return-values}
 */
export type NetworkManagerSiteAttributes = {
  /**
   * The date and time that the device was created.
   */
  CreatedAt: string;
  /**
   * The Amazon Resource Name (ARN) of the site.
   */
  SiteArn: string;
  /**
   * The ID of the site.
   */
  SiteId: string;
  /**
   * The state of the site.
   */
  State: string;
};
/**
 * Type definition for `AWS::NetworkManager::Site.Location`.
 * The location of the site
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-site-location.html}
 */
export type Location = {
  /**
   * The physical address.
   */
  Address?: string;
  /**
   * The latitude.
   */
  Latitude?: string;
  /**
   * The longitude.
   */
  Longitude?: string;
};
/**
 * Type definition for `AWS::NetworkManager::Site.Tag`.
 * A key-value pair to associate with a site resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-site-tag.html}
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
 * The AWS::NetworkManager::Site type describes a site.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-site.html}
 */
export class NetworkManagerSite extends $Resource<
  "AWS::NetworkManager::Site",
  NetworkManagerSiteProperties,
  NetworkManagerSiteAttributes
> {
  public static readonly Type = "AWS::NetworkManager::Site";
  constructor(
    logicalId: string,
    properties: NetworkManagerSiteProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, NetworkManagerSite.Type, properties, options);
  }
}
