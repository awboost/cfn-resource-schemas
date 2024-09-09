import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::PCAConnectorSCEP::Challenge`.
 * Represents a SCEP Challenge that is used for certificate enrollment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorscep-challenge.html}
 */
export type PCAConnectorSCEPChallengeProperties = {
  /**
   * @minLength `5`
   * @maxLength `200`
   * @pattern `^arn:aws(-[a-z]+)*:pca-connector-scep:[a-z]+(-[a-z]+)+-[1-9]\d*:\d{12}:connector\/[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$`
   */
  ConnectorArn: string;
  Tags?: Tags;
};
/**
 * Attribute type definition for `AWS::PCAConnectorSCEP::Challenge`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorscep-challenge.html#aws-resource-pcaconnectorscep-challenge-return-values}
 */
export type PCAConnectorSCEPChallengeAttributes = {
  /**
   * @minLength `5`
   * @maxLength `200`
   * @pattern `^arn:aws(-[a-z]+)*:pca-connector-scep:[a-z]+(-[a-z]+)+-[1-9]\d*:\d{12}:connector\/[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}\/challenge\/[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$`
   */
  ChallengeArn: string;
};
/**
 * Type definition for `AWS::PCAConnectorSCEP::Challenge.Tags`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorscep-challenge-tags.html}
 */
export type Tags = Record<string, string>;
/**
 * Resource type definition for `AWS::PCAConnectorSCEP::Challenge`.
 * Represents a SCEP Challenge that is used for certificate enrollment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorscep-challenge.html}
 */
export class PCAConnectorSCEPChallenge extends $Resource<
  "AWS::PCAConnectorSCEP::Challenge",
  PCAConnectorSCEPChallengeProperties,
  PCAConnectorSCEPChallengeAttributes
> {
  public static readonly Type = "AWS::PCAConnectorSCEP::Challenge";
  constructor(
    logicalId: string,
    properties: PCAConnectorSCEPChallengeProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, PCAConnectorSCEPChallenge.Type, properties, options);
  }
}
