import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Glue::DevEndpoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-devendpoint.html}
 */
export type GlueDevEndpointProperties = {
  Arguments?: Record<string, any>;
  EndpointName?: string;
  ExtraJarsS3Path?: string;
  ExtraPythonLibsS3Path?: string;
  GlueVersion?: string;
  NumberOfNodes?: number;
  NumberOfWorkers?: number;
  PublicKey?: string;
  PublicKeys?: string[];
  RoleArn: string;
  SecurityConfiguration?: string;
  SecurityGroupIds?: string[];
  SubnetId?: string;
  Tags?: Record<string, any>;
  WorkerType?: string;
};
/**
 * Attribute type definition for `AWS::Glue::DevEndpoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-devendpoint.html#aws-resource-glue-devendpoint-return-values}
 */
export type GlueDevEndpointAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::Glue::DevEndpoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-devendpoint.html}
 */
export class GlueDevEndpoint extends $Resource<
  "AWS::Glue::DevEndpoint",
  GlueDevEndpointProperties,
  GlueDevEndpointAttributes
> {
  public static readonly Type = "AWS::Glue::DevEndpoint";
  constructor(
    logicalId: string,
    properties: GlueDevEndpointProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GlueDevEndpoint.Type, properties, options);
  }
}
