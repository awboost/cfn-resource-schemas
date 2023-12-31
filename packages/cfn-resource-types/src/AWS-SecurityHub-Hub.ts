import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SecurityHub::Hub
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-hub.html}
 */
export type SecurityHubHubProperties = {
  AutoEnableControls?: boolean;
  ControlFindingGenerator?: string;
  EnableDefaultStandards?: boolean;
  Tags?: Record<string, any>;
};
/**
 * Attribute type definition for `AWS::SecurityHub::Hub`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-hub.html#aws-resource-securityhub-hub-return-values}
 */
export type SecurityHubHubAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::SecurityHub::Hub
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-hub.html}
 */
export class SecurityHubHub extends $Resource<
  "AWS::SecurityHub::Hub",
  SecurityHubHubProperties,
  SecurityHubHubAttributes
> {
  public static readonly Type = "AWS::SecurityHub::Hub";
  constructor(
    logicalId: string,
    properties: SecurityHubHubProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SecurityHubHub.Type, properties, options);
  }
}
