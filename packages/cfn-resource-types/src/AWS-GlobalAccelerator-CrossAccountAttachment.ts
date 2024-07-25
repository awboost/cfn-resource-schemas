import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::GlobalAccelerator::CrossAccountAttachment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-crossaccountattachment.html}
 */
export type GlobalAcceleratorCrossAccountAttachmentProperties = {
  /**
   * The Friendly identifier of the attachment.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9_-]{0,64}$`
   */
  Name: string;
  /**
   * Principals to share the resources with.
   */
  Principals?: string[];
  /**
   * Resources shared using the attachment.
   */
  Resources?: Resource[];
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::GlobalAccelerator::CrossAccountAttachment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-crossaccountattachment.html#aws-resource-globalaccelerator-crossaccountattachment-return-values}
 */
export type GlobalAcceleratorCrossAccountAttachmentAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the attachment.
   */
  AttachmentArn: string;
};
/**
 * Type definition for `AWS::GlobalAccelerator::CrossAccountAttachment.Resource`.
 * ARN of resource to share.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-globalaccelerator-crossaccountattachment-resource.html}
 */
export type Resource = {
  Cidr?: string;
  EndpointId?: string;
  Region?: string;
};
/**
 * Type definition for `AWS::GlobalAccelerator::CrossAccountAttachment.Tag`.
 * Tag is a key-value pair associated with Cross Account Attachment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-globalaccelerator-crossaccountattachment-tag.html}
 */
export type Tag = {
  /**
   * Key of the tag. Value can be 1 to 127 characters.
   * @minLength `1`
   * @maxLength `127`
   */
  Key: string;
  /**
   * Value for the tag. Value can be 1 to 255 characters.
   * @minLength `1`
   * @maxLength `255`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::GlobalAccelerator::CrossAccountAttachment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-crossaccountattachment.html}
 */
export class GlobalAcceleratorCrossAccountAttachment extends $Resource<
  "AWS::GlobalAccelerator::CrossAccountAttachment",
  GlobalAcceleratorCrossAccountAttachmentProperties,
  GlobalAcceleratorCrossAccountAttachmentAttributes
> {
  public static readonly Type =
    "AWS::GlobalAccelerator::CrossAccountAttachment";
  constructor(
    logicalId: string,
    properties: GlobalAcceleratorCrossAccountAttachmentProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      GlobalAcceleratorCrossAccountAttachment.Type,
      properties,
      options,
    );
  }
}
