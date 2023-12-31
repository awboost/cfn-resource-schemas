import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::IoTThingsGraph::FlowTemplate
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotthingsgraph-flowtemplate.html}
 */
export type IoTThingsGraphFlowTemplateProperties = {
  CompatibleNamespaceVersion?: number;
  Definition: DefinitionDocument;
};
/**
 * Attribute type definition for `AWS::IoTThingsGraph::FlowTemplate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotthingsgraph-flowtemplate.html#aws-resource-iotthingsgraph-flowtemplate-return-values}
 */
export type IoTThingsGraphFlowTemplateAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::IoTThingsGraph::FlowTemplate.DefinitionDocument`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotthingsgraph-flowtemplate-definitiondocument.html}
 */
export type DefinitionDocument = {
  Language: string;
  Text: string;
};
/**
 * Resource Type definition for AWS::IoTThingsGraph::FlowTemplate
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotthingsgraph-flowtemplate.html}
 */
export class IoTThingsGraphFlowTemplate extends $Resource<
  "AWS::IoTThingsGraph::FlowTemplate",
  IoTThingsGraphFlowTemplateProperties,
  IoTThingsGraphFlowTemplateAttributes
> {
  public static readonly Type = "AWS::IoTThingsGraph::FlowTemplate";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: IoTThingsGraphFlowTemplateProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IoTThingsGraphFlowTemplate.Type,
      properties,
      IoTThingsGraphFlowTemplate.AttributeNames,
      options,
    );
  }
}
