import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ApplicationSignals::Discovery
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationsignals-discovery.html}
 */
export type ApplicationSignalsDiscoveryProperties = Record<string, never>;
/**
 * Attribute type definition for `AWS::ApplicationSignals::Discovery`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationsignals-discovery.html#aws-resource-applicationsignals-discovery-return-values}
 */
export type ApplicationSignalsDiscoveryAttributes = {
  /**
   * The identifier for the specified AWS account.
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^[0-9]{12}$`
   */
  AccountId: string;
};
/**
 * Resource Type definition for AWS::ApplicationSignals::Discovery
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationsignals-discovery.html}
 */
export class ApplicationSignalsDiscovery extends $Resource<
  "AWS::ApplicationSignals::Discovery",
  ApplicationSignalsDiscoveryProperties,
  ApplicationSignalsDiscoveryAttributes
> {
  public static readonly Type = "AWS::ApplicationSignals::Discovery";
  constructor(
    logicalId: string,
    properties: ApplicationSignalsDiscoveryProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ApplicationSignalsDiscovery.Type, properties, options);
  }
}
