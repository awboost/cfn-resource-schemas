import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::ResilienceHubV2::ServiceFunction`.
 * Creates a service function within a Resilience Hub service.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehubv2-servicefunction.html}
 */
export type ResilienceHubV2ServiceFunctionProperties = {
  /**
   * The criticality of the service function.
   */
  Criticality: "PRIMARY" | "SUPPLEMENTAL";
  /**
   * The description of the service function.
   * @maxLength `500`
   */
  Description?: string;
  /**
   * The name of the service function.
   * @pattern `^[A-Za-z0-9][A-Za-z0-9_\-]{1,59}$`
   */
  Name: string;
  /**
   * The ARN of the parent service.
   * @pattern `^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$`
   */
  ServiceArn: string;
};
/**
 * Attribute type definition for `AWS::ResilienceHubV2::ServiceFunction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehubv2-servicefunction.html#aws-resource-resiliencehubv2-servicefunction-return-values}
 */
export type ResilienceHubV2ServiceFunctionAttributes = {
  /**
   * The timestamp when the service function was created.
   */
  CreatedAt: string;
  /**
   * The number of resources associated with this function.
   */
  ResourceCount: number;
  /**
   * The server-generated service function ID.
   */
  ServiceFunctionId: string;
  /**
   * The source of the service function.
   */
  Source: "AI_GENERATED" | "USER";
  /**
   * The timestamp when the service function was last updated.
   */
  UpdatedAt: string;
};
/**
 * Resource type definition for `AWS::ResilienceHubV2::ServiceFunction`.
 * Creates a service function within a Resilience Hub service.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehubv2-servicefunction.html}
 */
export class ResilienceHubV2ServiceFunction extends $Resource<
  "AWS::ResilienceHubV2::ServiceFunction",
  ResilienceHubV2ServiceFunctionProperties,
  ResilienceHubV2ServiceFunctionAttributes
> {
  public static readonly Type = "AWS::ResilienceHubV2::ServiceFunction";
  constructor(
    logicalId: string,
    properties: ResilienceHubV2ServiceFunctionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ResilienceHubV2ServiceFunction.Type, properties, options);
  }
}
