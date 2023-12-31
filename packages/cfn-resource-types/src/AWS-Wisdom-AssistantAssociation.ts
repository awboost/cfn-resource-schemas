import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Definition of AWS::Wisdom::AssistantAssociation Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-assistantassociation.html}
 */
export type WisdomAssistantAssociationProperties = {
  /**
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
   */
  AssistantId: string;
  Association: AssociationData;
  AssociationType: AssociationType;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Wisdom::AssistantAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-assistantassociation.html#aws-resource-wisdom-assistantassociation-return-values}
 */
export type WisdomAssistantAssociationAttributes = {
  /**
   * @pattern `^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})?$`
   */
  AssistantArn: string;
  /**
   * @pattern `^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})?$`
   */
  AssistantAssociationArn: string;
  /**
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
   */
  AssistantAssociationId: string;
};
/**
 * Type definition for `AWS::Wisdom::AssistantAssociation.AssociationData`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-assistantassociation-associationdata.html}
 */
export type AssociationData = {
  /**
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
   */
  KnowledgeBaseId: string;
};
/**
 * Type definition for `AWS::Wisdom::AssistantAssociation.AssociationType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-assistantassociation-associationtype.html}
 */
export type AssociationType = "KNOWLEDGE_BASE";
/**
 * Type definition for `AWS::Wisdom::AssistantAssociation.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-assistantassociation-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Definition of AWS::Wisdom::AssistantAssociation Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-assistantassociation.html}
 */
export class WisdomAssistantAssociation extends $Resource<
  "AWS::Wisdom::AssistantAssociation",
  WisdomAssistantAssociationProperties,
  WisdomAssistantAssociationAttributes
> {
  public static readonly Type = "AWS::Wisdom::AssistantAssociation";
  public static readonly AttributeNames = [
    "AssistantArn" as const,
    "AssistantAssociationArn" as const,
    "AssistantAssociationId" as const,
  ];
  constructor(
    logicalId: string,
    properties: WisdomAssistantAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      WisdomAssistantAssociation.Type,
      properties,
      WisdomAssistantAssociation.AttributeNames,
      options,
    );
  }
}
