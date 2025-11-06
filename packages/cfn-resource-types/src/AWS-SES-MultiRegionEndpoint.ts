import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SES::MultiRegionEndpoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-multiregionendpoint.html}
 */
export type SESMultiRegionEndpointProperties = {
  /**
   * Contains details of a multi-region endpoint (global-endpoint) being created.
   */
  Details: Details;
  /**
   * The name of the multi-region endpoint (global-endpoint).
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[\w\-_]+$`
   */
  EndpointName: string;
  /**
   * An Array of objects that define the tags (keys and values) to associate with the multi-region endpoint (global-endpoint).
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::SES::MultiRegionEndpoint.Details`.
 * Contains details of a multi-region endpoint (global-endpoint) being created.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-multiregionendpoint-details.html}
 */
export type Details = {
  /**
   * A list of route configuration details. Must contain exactly one route configuration
   * @minLength `1`
   * @maxLength `1`
   */
  RouteDetails: {
    /**
     * The name of an AWS-Region to be a secondary region for the multi-region endpoint (global-endpoint)
     */
    Region: string;
  }[];
};
/**
 * Type definition for `AWS::SES::MultiRegionEndpoint.Tag`.
 * An object that defines the tags that are associated with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-multiregionendpoint-tag.html}
 */
export type Tag = {
  /**
   * One part of a key-value pair that defines a tag.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The optional part of a key-value pair that defines a tag.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::SES::MultiRegionEndpoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-multiregionendpoint.html}
 */
export class SESMultiRegionEndpoint extends $Resource<
  "AWS::SES::MultiRegionEndpoint",
  SESMultiRegionEndpointProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::SES::MultiRegionEndpoint";
  constructor(
    logicalId: string,
    properties: SESMultiRegionEndpointProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SESMultiRegionEndpoint.Type, properties, options);
  }
}
