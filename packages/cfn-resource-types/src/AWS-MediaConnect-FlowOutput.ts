import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::MediaConnect::FlowOutput
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowoutput.html}
 */
export type MediaConnectFlowOutputProperties = {
  /**
   * The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   */
  CidrAllowList?: string[];
  /**
   * A description of the output.
   */
  Description?: string;
  /**
   * The address where you want to send the output.
   */
  Destination?: string;
  /**
   * The type of key used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
   */
  Encryption?: Encryption;
  /**
   * The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow.
   */
  FlowArn: string;
  /**
   * The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.
   */
  MaxLatency?: number;
  /**
   * The minimum latency in milliseconds.
   */
  MinLatency?: number;
  /**
   * The name of the output. This value must be unique within the current flow.
   */
  Name?: string;
  /**
   * The port to use when content is distributed to this output.
   */
  Port?: number;
  /**
   * The protocol that is used by the source or output.
   */
  Protocol:
    | "zixi-push"
    | "rtp-fec"
    | "rtp"
    | "zixi-pull"
    | "rist"
    | "fujitsu-qos"
    | "srt-listener"
    | "srt-caller";
  /**
   * The remote ID for the Zixi-pull stream.
   */
  RemoteId?: string;
  /**
   * The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.
   */
  SmoothingLatency?: number;
  /**
   * The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
   */
  StreamId?: string;
  /**
   * The name of the VPC interface attachment to use for this output.
   */
  VpcInterfaceAttachment?: VpcInterfaceAttachment;
};
/**
 * Attribute type definition for `AWS::MediaConnect::FlowOutput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowoutput.html#aws-resource-mediaconnect-flowoutput-return-values}
 */
export type MediaConnectFlowOutputAttributes = {
  /**
   * The ARN of the output.
   */
  OutputArn: string;
};
/**
 * Type definition for `AWS::MediaConnect::FlowOutput.Encryption`.
 * Information about the encryption of the flow.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-encryption.html}
 */
export type Encryption = {
  /**
   * The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).
   */
  Algorithm?: "aes128" | "aes192" | "aes256";
  /**
   * The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
   */
  KeyType?: "static-key" | "srt-password";
  /**
   * The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).
   */
  RoleArn: string;
  /**
   *  The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.
   */
  SecretArn: string;
};
/**
 * Type definition for `AWS::MediaConnect::FlowOutput.VpcInterfaceAttachment`.
 * The settings for attaching a VPC interface to an output.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-vpcinterfaceattachment.html}
 */
export type VpcInterfaceAttachment = {
  /**
   * The name of the VPC interface to use for this output.
   */
  VpcInterfaceName?: string;
};
/**
 * Resource schema for AWS::MediaConnect::FlowOutput
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowoutput.html}
 */
export class MediaConnectFlowOutput extends $Resource<
  "AWS::MediaConnect::FlowOutput",
  MediaConnectFlowOutputProperties,
  MediaConnectFlowOutputAttributes
> {
  public static readonly Type = "AWS::MediaConnect::FlowOutput";
  constructor(
    logicalId: string,
    properties: MediaConnectFlowOutputProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MediaConnectFlowOutput.Type, properties, options);
  }
}
